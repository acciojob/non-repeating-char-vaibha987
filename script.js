function firstNonRepeatedChar(str) {
//Approach 1
for(let i=0;i<str.length;i++){
if(str.indexOf(str[i])==str.lastIndexOf(str[i])){
    return str[i]
}
}
return null
}	
/* Approach 2
const charFreq = {}; 
for(let char of str) {
    charFreq[char] = (charFreq[char] || 0) + 1;
}
for (let char of str) {
    if(charFreq[char] === 1) {
        return char
    }
}
return null;
*/	