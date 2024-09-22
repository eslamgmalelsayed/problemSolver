// Merge Two Sorted Arrays
const mergeSortedArr = (arr1, arr2) => {
  let newArr = [...arr1, ...arr2].sort();
  console.log(newArr);
};

// mergeSortedArr([1, 3, 5],[2, 4, 6]);

// Palindrome Check
const palindrome = (str) => {
  let handleStr = str.split("").join("").toLowerCase().replace(/\s/g, "");
  let reversedStr = handleStr.split(" ").reverse().join("");
  console.log(handleStr === reversedStr);
};

// palindrome("A man a plan a canal Panama");

// Find the Longest Word
const findLongestWord = (word) => {
    let handleWord = word.split(' ').reduce((acc, curr) => acc.length > curr.length ? acc : curr );
    console.log(handleWord);
  };
  
// findLongestWord("The quick brown fox jumps over the lazy dog");
