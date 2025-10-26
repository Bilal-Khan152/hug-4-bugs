 // Problem Statement:
// Write a function that prints the Fibonacci series up to a given number of terms.
// The Fibonacci series is a sequence where each number is the sum of the previous two numbers.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, ...

function printFibonacciSeries(n) {
  let firstNumber = 0;
  let secondNumber = 1;

  console.log(firstNumber);
  console.log(secondNumber);

  for (let i = 2; i <= n; i++) {
    const result = firstNumber + secondNumber;
    console.log(result);

    firstNumber = secondNumber;
    secondNumber = result;
  }
}

printFibonacciSeries(10);

//  Explanation:

//  Start with two numbers: 0 and 1 (the first two Fibonacci numbers).
//  Print both numbers.
//  Then run a loop from 2 to n (because we already have two numbers).
//  Inside the loop:
//   Add the last two numbers to get the next Fibonacci number.
//   Print that new number.
//   Move the last two numbers one step forward.
//  This keeps generating new numbers in the Fibonacci series until we reach n terms.
