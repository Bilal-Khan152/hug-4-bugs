//Problem Statement: 

/*
    Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (just like the name of this kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples:
"Hey fellow warriors"  --> "Hey wollef sroirraw" 
"This is a test        --> "This is a test" 
"This is another test" --> "This is rehtona test"
*/

function spinWords(str) {
  const splitWords = str.split(" ");
  const res = splitWords
    .map((words) =>
      words.length >= 5 ? words.split("").reverse().join("") : words
    )
    .join(" ");
  return res;
}

let str = "This is another test ";
console.log(spinWords(str)); 
