function isPalindrome(str) {
  let reversed = str.split('').reverse().join('');
  
  if (str === reversed) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false