let Array = require('./array');

function main(){

  Array.SIZE_RATIO = 3;
  
  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
  console.log(arr);
  arr.push(3);
  console.log(arr);
  arr.push(5);
  console.log(arr);
  arr.push(15);
  console.log(arr);
  arr.push(19);
  console.log(arr);
  arr.push(45);
  console.log(arr);
  arr.push(10);
  console.log(arr);
}

main();
