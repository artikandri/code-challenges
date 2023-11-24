const { groupBy, flatMap, sortBy, uniq } = require("lodash");

const getCategories = (transactions) => {
  const filteredTransactions = transactions.filter((tr) => tr.category);
  const groupedTransactions = groupBy(filteredTransactions, "category");
  const categories = [];
  Object.keys(groupedTransactions).forEach((category) => {
    const groupedByTargetSources = groupBy(
      groupedTransactions[category],
      "targetSource"
    );
    Object.keys(groupedByTargetSources).forEach((key) => {
      const amounts = flatMap(groupedByTargetSources[key], "rounded");
      const targetSources = flatMap(
        groupedByTargetSources[key],
        "targetSource"
      );

      categories.push({
        category,
        amounts: uniq(amounts),
        targetSources: uniq(targetSources),
        min: Math.min(...amounts),
        max: Math.max(...amounts),
      });
    });
  });
  return categories;
};

const getClosestCategoryKey = (categories, transaction) => {
  let minDiff = 0;
  let minCategory = "";
  let maxDiff = 0;
  let maxCategory = "";

  categories.forEach((cat) => {
    if (minDiff === 0) {
      const diff = transaction.rounded - cat.min;
      minDiff = diff < 1000 ? diff : 0;
      minCategory = diff < 1000 ? cat.category : "";
    } else {
      const diff = transaction.rounded - cat.min;
      minDiff = diff < minDiff && diff < 1000 ? diff : minDiff;
      minCategory = diff < minDiff ? cat.category : minCategory;
    }

    if (maxDiff === 0) {
      const diff = cat.max - transaction.rounded;
      maxDiff = diff < 1000 ? diff : 0;
      maxCategory = diff < 1000 ? cat.category : "";
    } else {
      const diff = cat.max - transaction.rounded;
      maxDiff = diff < maxDiff && diff < 1000 ? diff : maxDiff;
      maxCategory = diff < maxDiff ? cat.category : maxCategory;
    }
  });

  const selectedCategory =
    minDiff > 0 ? minCategory : maxDiff > 0 ? maxCategory : "";
  return selectedCategory;
};

const categorizeSimilarTransactions = (transactions) => {
  transactions = transactions.map((transaction) => {
    transaction.rounded = Math.abs(transaction.amount);
    transaction.targetSource = `${transaction.targetAccount}_${transaction.sourceAccount}`;
    return transaction;
  });
  const categories = getCategories(transactions);
  const results = transactions
    .map((transaction) => {
      const closestCategories = sortBy(
        categories.filter((cat) =>
          cat.targetSources.includes(transaction.targetSource)
        ),
        "min"
      );
      let closestCategory = null;
      if (closestCategories.length > 1) {
        const closestCategoryKey = getClosestCategoryKey(
          closestCategories,
          transaction
        );
        closestCategory = closestCategories.find(
          (cat) => cat.category === closestCategoryKey
        );
      } else if (closestCategories.length === 1) {
        const someSuited = closestCategories.find((cat) => {
          return cat.amounts.some(
            (amt) => Math.abs(transaction.rounded - amt) <= 1000
          );
        });
        const targetSources = `${transaction.targetAccount}_${transaction.sourceAccount}`;
        closestCategory =
          someSuited &&
          closestCategories[0].targetSources.includes(targetSources)
            ? closestCategories[0]
            : null;
      }

      if (!transaction.category && closestCategory) {
        transaction.category = closestCategory.category;
      }
      return transaction;
    })
    .map(({ rounded, targetSource, ...transaction }) => transaction);

  return results;
};

module.exports = categorizeSimilarTransactions;
