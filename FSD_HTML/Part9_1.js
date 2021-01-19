// function timesFive(numInput) {
//   var result = numInput * 5
//   return result
// }
//
// sleepIn(false,false) -> true
// sleepIn(true,false) -> false
// sleepIn(false,true)->true

function sleepIn(weekday, vacation) {
  return(!weekday||vacation)
}


// monkeyTrouble(true,true)->true
// monkeyTrouble(false,false)->true
// monkeyTrouble(true,false)->false

function monkeyTrouble(aSmile,bSmile){
  return (aSmile && bSmile) || (!aSmile && !bSmile)
}


// stringTimes("Hi",2) -> "HiHi"
// stringTimes("Hi",3) -> "HiHiHi"
// stringTimes("Hi",1) -> "HiHi"

function stringTimes(str,n) {
  var returnStr = "";
  // var i = 0;

  for(i=0; i<n; i++){
    returnStr+=str
  }
  return returnStr
}

// luckySum(1,2,13) = 3
// luckySum(1,13,3) = 1

function luckySum(a, b, c) {
  if(a == 13){
    return 0
  }

  if(b == 13){
    return a
  }

  if(c == 13){
    return a+b
  }

  return a+b+c
}
