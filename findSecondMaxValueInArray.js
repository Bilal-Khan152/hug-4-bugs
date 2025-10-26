/*
Problem Statement:
Find the second largest number in a given array.

Example:
Input: [12, 34, 90, -34, 4, 105]
Output: 90
*/

const findSecondLargestValue = (arr) => {
  //  Start by assuming the first element is both first and second largest number
  let firstLargestVal = arr[0];
  let secondLargestVal = arr[0];

  //  Go through each number in the array 
  for (let i = 0; i < arr.length; i++) {

    if (arr[i] > firstLargestVal) {
      secondLargestVal = firstLargestVal;
      firstLargestVal = arr[i];
    }

    if (arr[i] > secondLargestVal && arr[i] < firstLargestVal) {
      secondLargestVal = arr[i];
    }

  }

  //  Return the second largest value 
  return secondLargestVal;
};

const array = [12, 34, 90, -34, 4, 105];
console.log(findSecondLargestValue(array)); // Output: 90

/*
Explanation:
- firstLargestVal keeps track of the biggest number found so far.
- secondLargestVal keeps track of the next biggest number.
- The first 'if' updates both when a new largest number is found.
- The second 'if' updates only the second largest when needed.
- At the end, we return secondLargestVal.
*/
