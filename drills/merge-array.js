// Imagine you have 2 arrays which have already been sorted. Write an algorithm to 
// merge the 2 arrays into a single array, which should also be sorted.

// Input: [1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]

// Output: [1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]

// O(n) time & O(n) space
const mergeArrays = (arr1, arr2) => {
  
  let mergedArr = [];
  let index1 = 0;
  let index2 = 0;
  let current = 0;

  // While our current value is lower than all indexes of both arrays
  while (current < (arr1.length + arr2.length)) {

    // Check if we are out of items for array 1
    let isArr1Depleted = index1 >= arr1.length;
    // Check if we are out of items for array 2
    let isArr2Depleted = index2 >= arr2.length;

    // If array 1 isn't depleted and 
    // array 2 IS depleted or array 2's value is larger
    if (!isArr1Depleted &&
      (isArr2Depleted || (arr1[index1] < arr2[index2])) ) {
        // Push our array 1 value to our merged array
        mergedArr[current] = arr1[index1];
        // Increase our array 1's index
        index1++;
    } else {
      // Push our array 2 value to our merged array
      mergedArr[current] = arr2[index2];
      // Increase our array 1's index
      index2++;
    }
    // Increase our counter, as a value was added
    current++;
  };

  console.log(mergedArr);
  return mergedArr;
}

mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]);