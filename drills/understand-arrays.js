let Array = require('./Array.js');

// - Print the 1st item in the array arr.
// - Empty the array and add just 1 item: arr.push("tauhida");
// - Print this 1 item that you just added. What is the result? Can you explain your result?
// - What is the purpose of the _resize() function in your Array class?


function main(){

  Array.SIZE_RATIO = 3;
  
  // Create an instance of the Array class
  let arr = new Array(3,5,19);
  arr.push(3);
  arr.push(5);
  arr.push(19);

  // Print the 1st item in the array arr
  console.log(arr.get(0));

  // Empty the array and add just 1 item
  for ( let i = arr.length - 1; i >= 0; i-- ) {
    arr.remove(i);
  }

  arr.push("tauhida");

  // Print this 1 item that you just added. What is the result? Can you explain your result?
  console.log(arr.get(0));
  // Results in NaN: The get function returns the spot in memory where "tauhida" exists
  // When we push a string into Float64Array(1024) memory it is not a float so it is stored
  // as NaN (since that is a number type).

  // What is the purpose of the resize function in your Array class?
  // 
  // When the new size of the array is larger than the current capacity,
  // we copy the array to a new memory address and expand the size of
  // the array by the const SIZE_RATIO + 1 to create a buffer and reduce
  // resize events.
}

main();