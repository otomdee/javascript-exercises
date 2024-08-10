const palindromes = function (str) {
    const strFiltered = str.toUpperCase()
    .split("")
    .filter((item) => item !== " " && item !== "," && item !== "!" && item !== ".");
    const strReversed = strFiltered.slice().reverse();

    if (strFiltered.join("") == strReversed.join("")) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
