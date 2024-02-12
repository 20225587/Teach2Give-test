/*Write a program to generate the Fibonacci sequence up to 100.*/
let num1 = 0, num2 = 1, num3;

while (num1 <= 100) {
  console.log(num1);
  num3 = num1 + num2;
  num1 = num2;
  num2 = num3;
}