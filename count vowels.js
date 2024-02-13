/*Write a program that counts the number of vowels in a sentence.
eg " Hello World " => returns 2*/

function countVowels(sentence) {
    let vowelsCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const sentenceLower = sentence.toLowerCase();
  
    for (let i = 0; i < sentenceLower.length; i++) {
      if (vowels.includes(sentenceLower[i])) {
        vowelsCount += 1;
      }
    }
  
    return vowelsCount;
  }
  
  console.log(countVowels("Hello World")); // Output: 2