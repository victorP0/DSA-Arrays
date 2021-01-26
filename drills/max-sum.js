// You are given an array containing positive and negative integers. Write an algorithm 
// which will find the largest sum in a continuous sequence.

// Input: [4, 6, -3, 5, -2, 1]

// Output: 12

const maxSum = (arr) => {

  let currentMax = 0;
  let maxSoFar = 0;

  for(var i = 0; i < arr.length; i++){  
    // Set current max to either 0 or the currentMax + this index
    currentMax = Math.max(0, currentMax + arr[i]);
    // Set the absolute max to either the currentMax or itself
    maxSoFar = Math.max(currentMax, maxSoFar);
  }
  // Return our largest accumulative value
  console.log(maxSoFar);
  return maxSoFar;
}

maxSum([4, 6, -3, 5, -2, 1]);