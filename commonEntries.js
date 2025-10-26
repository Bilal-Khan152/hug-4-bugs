/*
Problem Statement
Let say we have 2 array with the name john and bob, and each array contains the marks of different subjects, so your task 
to return a new resultant array containing those marks which are not repeated (in both arrays) as a sorted arry.
 
Use Case :1 
john = [39, 54, 78 , 54, 87]
bob = [54, 18 , 19 , 87]

expected output: [ 18, 19, 39, 78 ]
 */

const UniqueMarks = (totalMarksList) => {
  const UniqueMarksElement = [];
  let isPresentMoreThanOne = 0;

  const sortedArray = totalMarksList.sort((a, b) => a - b);
  for (let i = 0; i < sortedArray.length; i++) {
    for (j = 0; j < sortedArray.length; j++) {
      if (sortedArray[i] == sortedArray[j]) {
        isPresentMoreThanOne += 1;
      }
    }
    if (isPresentMoreThanOne == 1) {
      UniqueMarksElement.push(sortedArray[i]);
    }
    isPresentMoreThanOne = 0;
  }

  return UniqueMarksElement;
};
let john = [39, 54, 78, 54, 87];
let bob = [54, 18, 19, 87];
let combine = john.concat(bob);
let result = UniqueMarks(combine);
