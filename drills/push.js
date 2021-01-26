let Array = require('./Array.js');

function main(){

  Array.SIZE_RATIO = 3;
  
  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
  console.log(arr);
  arr.push(3);
  console.log(arr);

  // Push a bunch of items to the array
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  console.log(arr);

}

main();