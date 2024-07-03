const reverseString = function(string) {
    let splitString = string.split("");
    let reversedStringArray = [];
    for (let i = (string.length - 1); i >= 0; i--) {
        reversedStringArray[(string.length - 1) - i] = splitString[i];
    }
    let reversedString = reversedStringArray.join("");
    return(reversedString)
};

// Do not edit below this line
module.exports = reverseString;
