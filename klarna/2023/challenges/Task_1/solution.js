const { groupBy, flatMap } = require("lodash");

const isDateValid = function (date) {
  return date instanceof Date && !isNaN(date);
};

const hasValidStructure = function (transaction) {
  const keys = ["time", "amount", "category"];
  return keys.every((key) => Object.keys(transaction).includes(key));
};

const getBalanceByCategoryInPeriod = (transactions, categories, start, end) => {
  const isStartDateValid = isDateValid(new Date(start));
  const isEndDateValid = isDateValid(new Date(end));
  const isCategoryValid = Array.isArray(categories);
  const isTransactionsValid =
    Array.isArray(transactions) &&
    transactions.every((transaction) => hasValidStructure(transaction));
  let result = {};
  categories.forEach((category) => {
    result[category] = 0;
  });

  if (!isCategoryValid) {
    console.error("Category is not valid.");
    return result;
  } else if (!isTransactionsValid) {
    console.error("Transaction is not valid.");
    return result;
  } else if (!isStartDateValid || !isEndDateValid) {
    const message = `${isStartDateValid ? `Start date: ${start}` : ""}, ${
      isEndDateValid ? `End date: ${end}` : ""
    } is invalid.`;
    console.error(message);
    return result;
  } else {
    const filteredTransactions = transactions.filter(
      (transaction) =>
        categories.includes(transaction.category) &&
        new Date(transaction.time) >= start &&
        new Date(transaction.time) < end
    );
    const groupedTransactions = groupBy(filteredTransactions, "category");
    Object.keys(groupedTransactions).forEach((category) => {
      result[category] = flatMap(
        groupedTransactions[category],
        "amount"
      ).reduce((partialSum, numb) => partialSum + numb, 0);
    });
  }
  return result;
};

module.exports = getBalanceByCategoryInPeriod;
