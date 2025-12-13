

function findMixingNumberFromArr (arr) {

  const properNumberOfArr = [] ;
  const mixingNumber  = [] ;
  
  for(let i = arr[0] ; i <= arr.at(-1) ; i++ ) {
     properNumberOfArr.push(i)
  }
 
  for(let i = 0 ; i <= arr.length - 1; i++){
    if(arr[i] !== properNumberOfArr[i]){
        mixingNumber.push(properNumberOfArr[i])
    }
  }

  return mixingNumber;

}

const arr = [1,2,4,5,6,7,8,9,10] ;
console.log(findMixingNumberFromArr(arr))