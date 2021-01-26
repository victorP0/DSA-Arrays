// Given 2 strings, str1 and str2, write a program that checks if 
// str2 is a rotation of str1.

// Input: `amazon, azonma`

// Output: `False`

// Input: `amazon, azonam`

// Output: `true`

const stringRotation = (str1, str2) => {
  // If they aren't the same length, they aren't a rotation
  if ( str1.length !== str2.length ) return false;

  // Double the first string to provide all possible rotation values
  let doubleString = str1 + str1;

  // Check if our doubled first string includes our second string
  let result = doubleString.includes(str2);
  
  console.log(result);
  return result;
}

stringRotation('amazon', 'azonma');
stringRotation('amazon', 'azonam');