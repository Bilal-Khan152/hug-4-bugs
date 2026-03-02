// Problem:
// Given an array of numbers, remove all duplicate values and return a new array that contains only unique numbers.

const removeDuplicateValues = (arr) => {
  const obj = {};
  const arrOfNumber = [];

  for (let i = 0; i <= arr.length - 1; i++) {
    obj[arr[i]] = true;
  };

  for (values in obj) {
    arrOfNumber.push(values);
  };

  const finalArr = arrOfNumber?.map(Number);

  return finalArr;
};

const arr = [1, 2, 3, 3, 4, 5, 6, 6, 7, 100, 200, 100];
console.log(removeDuplicateValues(arr));

// Explanation:

// You create an empty object.

// You loop through the array and store each number as a key in the object.

// Objects can’t have duplicate keys, so duplicates are automatically removed.

// You loop through the object keys and push them into a new array.

// Since object keys are strings, you convert them back to numbers.

// Return the final array.
