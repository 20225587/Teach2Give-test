/*Write a program that takes an integer as input and returns an integer with reversed digit
ordering.
Examples:
For input 500, the program should return 5.
For input -56, the program should return -65.
For input -90, the program should return -9.
For input 91, the program should return 19*/

function reverseDigits(num) {
    let reversed = 0;
   let numAbs = Math.abs(num);
  
    while (numAbs > 0) {
      reversed = reversed * 10 + (numAbs % 10);
      numAbs = Math.floor(numAbs / 10);
    }
  
    if (num < 0) {
      reversed = -reversed;
    }
  
    return reversed;
  }
  
  console.log(reverseDigits(500)); // 5
  console.log(reverseDigits(-56)); // -65
  console.log(reverseDigits(-90)); // -9
  console.log(reverseDigits(91)); // 19