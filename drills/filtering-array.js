// Imagine you have an array of numbers. Write an algorithm to remove all numbers 
// less than 5 from the array. DO NOT use Array's built-in .filter() method here; 
// write the algorithm from scratch.

const filterArr = (arr, base) => {

  let newArr = [];
  arr.forEach(i => {
    if ( i > base ) newArr.push(i);
  });
  console.log(newArr);
  return newArr;

};

filterArr([3,-5,12,6,-2,1,18], 5);