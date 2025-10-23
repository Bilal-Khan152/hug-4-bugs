

// Problem Statement : Write a function that takes a string and returns it reversed without using built-in methods


function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

// Explanation:

// We create an empty string reversed to store the reversed result.

// The for loop starts from the last index of the string (str.length - 1) and moves backward.

// On each loop, it adds the current character (str[i]) to reversed.

// Finally, we return the reversed string.

// This way, we reverse the string manually, using only loops and basic logic — no built-in shortcuts!