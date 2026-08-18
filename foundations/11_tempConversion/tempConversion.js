const convertToCelsius = function(fahrenheit) {
  let fahToCel = Math.round(((fahrenheit - 32) * 5/9) * 10) / 10;
  return fahToCel;
};

const convertToFahrenheit = function(celsius) {
  let celToFah = Math.round(((celsius * 9/5) + 32) * 10) / 10;
  return celToFah;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
