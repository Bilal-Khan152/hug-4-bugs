// Problem Statement

// You are given an array of objects.
// Each object contains an id, category, and value.

// Your task is to sum the values of each category and store the result in a single object.

// Expected Output : { A: 30, B: 5 }



const data = [
  { id: 1, category: "A", value: 10 },
  { id: 2, category: "A", value: 20 },
  { id: 3, category: "B", value: 5 },
];

let valueOfA = 0;
let valueOfB = 0;
const finalObject = {};

for (let i = 0; i <= data.length - 1; i++) {
  if (data[i].category === "A") {
    valueOfA += data[i].value;
  }

  if (data[i].category === "B") {
    valueOfB += data[i].value;
  }
}

finalObject.A = valueOfA;
finalObject.B = valueOfB;

console.log("result ", finalObject);


//  Explanation

// Two variables (valueOfA, valueOfB) are used to accumulate values.

// Conditional checks (if) inside the loop determine which category’s value should be added.

// Finally, the summed values are assigned to finalObject.