// Write an algorithm that deletes given characters from a string. 
// For example, given a string of "Battle of the Vowels: Hawaii vs. Grozny" 
// and the characters to be removed are "aeiou", the algorithm should 
// transform the original string to "Bttl f th Vwls: Hw vs. Grzny". Do 
// not use Javascript's filter, split, or join methods.

// Input: `'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'`  

// Output: `'Bttl f th Vwls: Hw vs. Grzny'`

const removeChars = (str, remove) => {
  // Initialize our return string
  let returnStr = '';

  // Validate if character is to be removed
  const isCharNull = (char) => {
    for ( let i = 0; i < remove.length; i++ ) {
      if ( char === remove[i] ) {
        return true;
      }
    }
    return false;
  }

  // Iterate over every character
  for ( let i = 0; i < str.length; i++ ) {
    if ( !isCharNull( str.charAt(i) ) ) {
      returnStr += str.charAt(i);
    }
  }
  console.log(returnStr);
  return returnStr;
}

removeChars('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou');