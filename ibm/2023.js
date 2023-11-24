/*
  Year: 2023
  Company: IBM
  Position: Front end developer
*/

/*
  Write a function on how to sum two digits
*/

function sum(a, b) {
  return a + b;
}

/*
  Write the same function in one way 
*/

const sum = (a, b) => a + b;

/*
  Write the same function in carrying way 
*/

function sum(a) {
  return (b) => {
    return a + b;
  };
}
sum(2)(3);

/*
  What are the results of this code?
*/

const a = 0;
const b = 1;
const c = true;

/*
  What is the result of this code?
*/

const result = (!(a && !b) || c) ? 'abc' : 'cba';

/*
  Write a function on how to map this array to another array
  // [-1, 0, 1, 2, 3] => [ { id: 3, name: 'a3'} , { id: 2, name: 'a2'} , { id: 1, name: 'a1'} ]
*/


const arr = [-1, 0, 1, 2, 3];
const filteredArr = arr.filter((x) => x > 0).sort((a, b) => b - a);
const results = filteredArr.map((x) => {
  return { id: x, name: "a" + x };
});
console.log(results);

/*
  How to write a component in React? 
*/

const ComponentView = () => {
    const {data, setData } = useState("id")
    const getSomething = () => {
        fetch("data/id").then((response) => {
            setData(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(async () => {
        await getSomething()
    })

    return (
        <>
            <p>
                { data }
            </p>
        </>
    )
}

/*
  How to write a test? 
*/
// import the component

describe("test", () => {
    it("should have the style", () => {
        const Component =
    })
})

/*
  What does this code mean?
*/
const express = require("express");
const app = express();
app.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});

/*
  Have you used socket? What is room in socket? 
*/

/*
  What will this code do? 
*/

const getValue = (offset, result) => {
  console.log('fetching an array from API');
  fetch(`/api/data?offset=${offset}`).then((response) => {
      const data = [...result, response.data];
      if (response.next) {
          return getValue(offset + 100, data);
      }
      return data;
  }).catch((error) => {
      console.log('Failed to fetch the value', error);
  })
};

const value = await getValue(0, []);
console.log(value);

/*
  How to make a button rounder?
*/

// Use border radius

/*
  Modify the code below (the styling only)
  https://jsfiddle.net/ojvwxp7c/
  Tasks: 
  1. Make the bottom part stick to the bottom of the page
  2. Make the black parts (buttons) goes right and overlaps with the line 
  3. Make it so that the page can be scrolled 
*/

/*

Answer: 

.container {
  height: 100vh;
  overflow: hidden;
  position: relative; 
}

.top {
  height: 100px;
  background-color: red;
}

.bottom {
  height: 100px;
  background-color: blue;
  width: 100%; 
  display: block; 
  position: absolute; 
  bottom: 0; 
  left: 0; 
}

.row {
  height: 50px;
  background-color: green;
  border: 1px solid black;
  display: flex;
  justify-content: flex-end;
  position: relative;
}

.rows {
  display: block;
  height: calc(100% - 200px);
  overflow: scroll; 
}

.buttonX {
  height: 20px;
  width: 20px;
  background-color: black;
  color: white;
  border: 1px solid black;
  position: absolute;
  top: -10px;
}
*/




