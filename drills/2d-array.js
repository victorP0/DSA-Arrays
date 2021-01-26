// 2D array
// Write an algorithm which searches through a 2D array, and whenever it finds 
// a 0 should set the entire row and column to 0.

// Input:

// [[1,0,1,1,0],
// [0,1,1,1,0],
// [1,1,1,1,1],
// [1,0,1,1,1],
// [1,1,1,1,1]];
// Output:

// [[0,0,0,0,0],
// [0,0,0,0,0],
// [0,0,1,1,0],
// [0,0,0,0,0],
// [0,0,1,1,0]];

const twoDimArr = (arr) => {

  // Easier readability for loops
  let rowHeight = arr.length;
  let colLength = arr[0].length;

  // Setup a baseline for null rows or cols - Set all to false
  let nullRows = new Array(rowHeight).fill(0);
  let nullCols = new Array(colLength).fill(0);

  // First loop over the arrays
  // We are only identifying if the row / column contain any 0
  // And saving that off into an extra array for rows and columns
  arr.map((row, r) => {
    let nullRow = false;
    row.map((cell, c) => {
      if ( arr[c][r] === 0 ) {
        nullRow = true; // Mark nullRow flag as true
        nullCols[c] = 1; // Mark nullCol index as true
      }
    })
    // If row was found containing 0, mark nullRow index as true
    nullRow ? nullRows[r] = 1 : nullRows[r] = 0;
  });

  // Setup a temporary array as to not destroy our original data
  let tempArr = arr;

  // Loop over the original data
  arr.map((row, r) => {
    row.map((cell, c) => {
      // For every cell, check our extra datasets if the 
      // row or column is supposed to be null
      if ( nullRows[r] || nullCols[c] ) {
        tempArr[r][c] = 0;
      } else {
        tempArr[r][c] = 1;
      }
    });
  });

  console.log(tempArr);
  return tempArr;
}

let input = [
  [1,0,1,1,0],
  [0,1,1,1,0],
  [1,1,1,1,1],
  [1,0,1,1,1],
  [1,1,1,1,1]
];

twoDimArr(input);