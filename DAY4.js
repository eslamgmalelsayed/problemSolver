// sort a string
const strSort = (str) => str.split("").sort().join("");

// Anagram Check
const anagramCheck = (str1, str2) => {
  if (strSort(str1) === strSort(str2)) return true;
  return false;
};

// console.log(anagramCheck("listen", "silent"));

//  Group Anagrams
const anagramGroup = (arr) => {
  let result = {};
  for (word of arr) {
    if (result[strSort(word)]) {
      result[strSort(word)].push(word);
    } else {
      result[strSort(word)] = [word];
    }
  }
  return Object.values(result);
};

// console.log(anagramGroup(["eat", "tea", "tan", "ate", "nat", "bat"]));

//  Find Missing Number
const findMissingNumber = (arr) => {
  let result = null;
  let sortedArr = arr.sort();
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] !== i + 1) {
      result = i + 1;
    }
  }
  return result;
};

// console.log(findMissingNumber([3, 0, 1]));
