function firstNonRepeatedChar(str) {
  
//  * create a frequency map; where we find all the frequency for each character
const charFreq = {}; // charFreq["Name of Field"] 
for(let char of str) {
    charFreq[char] = (charFreq[char] || 0) + 1; // Language Specific || JS 
}
 
//  * Iterate over the string again and check if any character has frequency as 1. 
//  *              If Yes; immediately return that particular character bcoz; it's was the first one
for (let char of str) {
    if(charFreq[char] === 1) {
        return char
    }
}
return null;
}