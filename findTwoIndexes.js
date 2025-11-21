//  Write a function that takes an array of numbers and finds two indexes whose values sum up to a given target value. The function should return a string indicating the indexes if such a pair exists.

// Example :

// const arr = [7, 3, 2, 5, 10, 2];

// const target = 17;

// Output: "These are the indexes we can add and get the target value 4-5"

const myFunction = (arr) => {
    
  const target = 17;
  let result;

  for (let a = 0; a < arr.length; a++) {

    for (let b = a + 1; b < arr.length; b++) {
        
      if (arr[a] + arr[b] === target) {
        result = `These are the indexes we can add and get the target value: ${a}-${b}`;
      }

    }
    
  }

  return result;
  
};

const arr = [7, 3, 2, 5, 10, 2];
console.log(myFunction(arr));

// Explanation
// Loop through each element in the array (a loop).
// For each element, loop through the remaining elements (b loop starting from a+1).
// Check if arr[a] + arr[b] equals the target.
// If yes, store a message with the indexes.
// Return the message if found .
