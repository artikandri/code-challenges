const categorizeSimilarTransactions = require("./solution");

describe("categorizeSimilarTransactions()", () => {
  // These are example tests. Please add your own tests if needed
  it("returns empty array if transactions is empty", () => {
    expect(categorizeSimilarTransactions([])).toEqual([]);
  });

  it("enhances categorization when there are similar transactions", () => {
    expect(
      categorizeSimilarTransactions([
        {
          id: "a001bb66-6f4c-48bf-8ae0-f73453aa8dd5",
          sourceAccount: "my_account",
          targetAccount: "coffee_shop",
          amount: -620,
          time: "2021-04-10T10:30:00Z",
        },
        {
          id: "bfd6a11a-2099-4b69-a7bb-572d8436cf73",
          sourceAccount: "my_account",
          targetAccount: "coffee_shop",
          amount: -350,
          category: "eating_out",
          time: "2021-03-12T12:34:00Z",
        },
        {
          id: "a8170ced-1c5f-432c-bb7d-867589a9d4b8",
          sourceAccount: "my_account",
          targetAccount: "coffee_shop",
          amount: -1690,
          time: "2021-04-12T08:20:00Z",
        },
      ])
    ).toEqual([
      {
        id: "a001bb66-6f4c-48bf-8ae0-f73453aa8dd5",
        sourceAccount: "my_account",
        targetAccount: "coffee_shop",
        amount: -620,
        category: "eating_out",
        time: "2021-04-10T10:30:00Z",
      },
      {
        id: "bfd6a11a-2099-4b69-a7bb-572d8436cf73",
        sourceAccount: "my_account",
        targetAccount: "coffee_shop",
        amount: -350,
        category: "eating_out",
        time: "2021-03-12T12:34:00Z",
      },
      {
        id: "a8170ced-1c5f-432c-bb7d-867589a9d4b8",
        sourceAccount: "my_account",
        targetAccount: "coffee_shop",
        amount: -1690,
        time: "2021-04-12T08:20:00Z",
      },
    ]);
  });

  // add your tests here
});
