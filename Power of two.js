/*Write a program that takes an integer as input and returns true if the input is a power of two.
Examples:
8=> returns true
6=> returns false*/
function isPowerOfTwo(n) {
    if (n <= 0) {
      return false;
    }
  
    while (n !== 1) {
      if (n % 2 !== 0) {
        return false;
      }
      n = n / 2;
    }
  
    return true;
  }
  
  console.log(isPowerOfTwo(8)); // true
  console.log(isPowerOfTwo(6)); // false