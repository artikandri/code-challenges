// I/P: {​​
//       "book1" : {​​
//         "title" : "A Beautiful Mind",
//         "isbnNo" : "12345"
//         "author" : {​​
//           "firstName": "dareen",
//           "lastname": "brown"
//         }​​
//       }​​
//     }

let [firstKey, key1, key2] = ["", "", ""];
let results = [];
const recursiveKey = (obj) => {
  const hasContent = Boolean(Object.keys(obj).length);
  if (!hasContent) {
    return results;
  } else {
    const toAccess = obj;
    if (toAccess && typeof toAccess === "object") {
      Object.keys(toAccess).forEach((key) => {
        if (!firstKey) {
          firstKey = key;
        }
        if (typeof toAccess[key] === "object") {
          key1 = key1 === "" ? key : key1 + "." + key;
          recursiveKey(toAccess[key]);
        } else {
          key1 = key1 === "" ? key : key1 + "." + key;
          key2 = firstKey + "." + toAccess[key];
          results = [...results, [key1, key2]];
        }
      });
    } else {
      key2 = firstKey + "." + toAccess[key];
      results = [...results, [key1, key2]];
    }
  }
  return results;
};

const book = {
  book1: {
    title: "A Beautiful Mind",
    isbnNo: "12345",
    author: {
      firstName: "dareen",
      lastname: "brown",
    },
  },
};

//     O/P : [
//             ["book1.title","book1.A Beautiful Mind"],
//             ["book1.isbnNo","book1.12345"],
//             ["book1.author.firstName","book1.author.dareen"],
//             ["book1.author.lastname","book1.author.brown"],
//             ]
//         ​​

const res = recursiveKey(book);
console.log(res);
