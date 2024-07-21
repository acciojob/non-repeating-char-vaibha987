function firstNonRepeatedChar(str) {
    let charCount = {};
    for(let i = 0; i < str.length; i++){
        if(charCount.hasOwnProperty(str[i])){
            charCount[str[i]]++;
        } else {
            charCount[str[i]] = 1;
        }
    }

    for(let i = 0; i < str.length; i++){
        if(charCount[str[i]] == 1){
            return str[i];
        }
    }

    return null;
}
//const input = prompt("Enter a string");
//alert(firstNonRepeatedChar(input)); 
