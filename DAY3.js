// Fibonacci Sequence
const fibonacci = (num) => {
  let result = [];
  // TODO: explain
  console.log(result);
};

console.log(fibonacci(5));

// Sum of Array Elements
const arrSum = (arr) => {
  console.log(arr.reduce((acc, curr) => acc + curr));
};

// arrSum([1, 2, 3, 4, 5]);

//  Find Duplicates
const findDuplicates = (arr) => {
  let result = [];
  for (i in arr) {
    if (arr[i] === arr[i - 1]) {
      result.push(arr[i]);
    }
  }
  console.log(result);
};

// findDuplicates([1, 2, 3, 4, 4, 5, 5]);
