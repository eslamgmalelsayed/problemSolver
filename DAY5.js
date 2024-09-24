// Maximum Subarray Sum
// TODO need explanation
const maximumSubarraySum = (arr1) => {};

// maximumSubarraySum([-2,1,-3,4,-1,2,1,-5,4]);

// Rotate Array
const rotateArray = (arr, k) => {
  let arrInstance = arr.slice(k + 1);
  let arrInstance1 = arr.slice(0, k + 1);
  console.log([...arrInstance, ...arrInstance1]);
};

// rotateArray([1, 2, 3, 4, 5], 2);

// Two Sum Problem
const twoSumProblem = (arr, target) => {
  arr.reduce((acc, curr, i) => {
    if (acc + curr === target) {
      console.log(arr.indexOf(acc), arr.indexOf(curr));
    }
  });
};

// twoSumProblem([2, 7, 11, 15], 9);
