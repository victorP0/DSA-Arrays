// Given an array of numbers, write an algorithm to find out the products 
// of every other number except the number at each index.

// Input: `[1, 3, 9, 4]`

// Output: `[108, 36, 12, 27]`

const products = (arr) => {
  // Initialize our return array
  let returnArr = [];
  // Loop once through the array to get all values
  for ( let i = 0; i < arr.length; i++ ) {
    // Set up a baseline for the product sequence
    let tempProduct = 1;
    // Loop once more since we need to multiply each other number to the current index of i
    for ( let j = 0; j < arr.length; j++ ) {
      // Make sure the current number isn't factored in
      if ( i !== j ) {
        // Multiply the other numbers in the array
        tempProduct *= arr[j];
      }
    }
    returnArr.push(tempProduct);
  }
  console.log(returnArr);
  return returnArr;
}

products([1, 3, 9, 4]);