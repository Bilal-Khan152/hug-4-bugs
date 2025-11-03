 //  Problem:
// Find which character appears the most times in a given string
// and show both the character and how many times it appears.

const findMaxRepeatableElemInStr = (str) => {
  const arr = str.split("");
  const obj = {};

  // Count how many times each character appears
  for (let i = 0; i <= arr.length - 1; i++) {
    if (!obj.hasOwnProperty(arr[i])) {
      const elem = arr[i];
      obj[elem] = 1;
    } else {
      const elem = arr[i];
      obj[elem]++;
    }
  }

  // Find the character with the highest count
  let maxCount = 0;
  let maxChar = "";

  for (const key in obj) {
    if (obj[key] > maxCount) {
      maxCount = obj[key];
      maxChar = key;
    }
  }

  return `The most frequent character is '${maxChar}' with a count of ${maxCount}.`;
};

const str = "Muhammad Bilal";
console.log(findMaxRepeatableElemInStr(str));

/*
Explanation:
1. We first split the string into an array of characters.
2. We use an object (obj) to count how many times each character appears.
3. In the next loop, we find which character has the biggest count.
4. Finally, we return the character and how many times it appears.
So, this program tells us which letter repeats the most in the given word or sentence.
*/
