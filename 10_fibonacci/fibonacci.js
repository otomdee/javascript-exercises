const fibonacci = function(iterations) {
    let fibArr = [1, 1];
    if (iterations >= 3) {
        for (let i = 3; i <= iterations; i++) {
            fibArr.push(fibArr[i - 2] + fibArr[i - 3]);
        }
        return fibArr[iterations - 1];
    }
    else if (iterations == 1 || iterations == 2) {
        return 1;
    }
    else if (iterations == 0) {
        return 0;
    }
    else {
        return "OOPS";
    }
};

// Do not edit below this line
module.exports = fibonacci;
