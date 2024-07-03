const repeatString = function(string , num) {
    if (num >= 1) {
        let word = string;
        for (let i = 0; i < (num - 1); i++) {
            word += string;
        }
        return word
    }
    else if (num === 0 ) {
        return ("")
    }
    else {
        return ("ERROR")
    }
};

// Do not edit below this line
module.exports = repeatString;
