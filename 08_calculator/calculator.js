const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, current) => total + current , 0);
};

const multiply = function(arr) {
  return arr.reduce((total, current) => total * current);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	let numb = 1;
  if (a > 0) {
    for (let i = a; i >= 1; i--) {
      numb = numb * i;
    }
    return numb;
  }
  else {
    return 1;
  }
  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
