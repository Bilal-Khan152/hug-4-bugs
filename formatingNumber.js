function formatNumber(number) {
  let finalResult = "";
  let counter = 0;

  if (number <= 999) {
    return number;
  } else {
    let stringNumber = number.toString().split("");

    for (let i = stringNumber.length - 1; i >= 0; i--) {
      counter += 1;
      finalResult += stringNumber[i];
      
      if (counter == 3) {
        finalResult += ",";
        counter = 0;
      }
    }
    console.log("result ", finalResult);
    let fullString = finalResult.split("").slice(0, stringNumber.length +1 ).join('');
    finalResult = fullString.split("").reverse().toString();

    // return finalResult;
  }
}

let num = 100000;
let ans = formatNumber(num);
console.log(ans);
