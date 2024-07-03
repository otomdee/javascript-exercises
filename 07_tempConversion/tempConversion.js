const convertToCelsius = function(temp) {
  let newTemp = ((temp - 32) * (5/9)).toFixed(1);
  return Number(newTemp);
};

const convertToFahrenheit = function(temp) {
  let newTemp = ((temp * 9/5) + 32).toFixed(1);
  return Number(newTemp);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
