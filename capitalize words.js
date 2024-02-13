/*Write a program that accepts a string as input, capitalizes the first letter of each word in the
string, and then returns the result string.
Examples:
"hi"=> returns "Hi"
"i love programming"=> returns "I Love Programming"*/
function capitalizeFirstLetterOfEachWord(str) {
    let words = str.split(' ');
  
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
  
    return words.join(' ');
  }
  
  console.log(capitalizeFirstLetterOfEachWord("hi")); // "Hi"
  console.log(capitalizeFirstLetterOfEachWord("i love programming")); // "I Love Programming"