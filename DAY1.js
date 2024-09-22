// FizzBuzz
const fizzBuzz = (n) => {
    for (let i = 0; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("FIZZBUZZ");
      } else if (i % 3 === 0) {
        console.log("FIZZ");
      } else if (i % 5 === 0) {
        console.log("BUZZ");
      } else {
        console.log(`${i} is not valid num`);
      }
    }
  };
  
  // fizzBuzz(100);
  
  // reverse string
  const reverseStr = (str) => {
    console.log(str.split("").reverse().join(""));
  };
  
  // reverseStr("hello");
  
  // Count Vowels
  const countVowels = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i].match(/[aeiouAEIOU]/g)) count++;
    }
    console.log(count);
  };
  
  // countVowels("Hello World");
