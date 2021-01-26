let Array = require('./Array.js');

function main(){

  Array.SIZE_RATIO = 3;
  
  // Create an instance of the Array class
  let arr = new Array(3,5,15,19,45,10);

  // Remove items from the array
  console.log(arr);
  arr.pop();
  arr.pop();
  arr.pop();
  console.log(arr);

}

main();