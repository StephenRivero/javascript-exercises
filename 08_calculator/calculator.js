const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	return array.reduce((total, currentValue) =>
    total + currentValue , 0 );
};

const multiply = function(array) {
  return array.reduce((product, nextValue) =>
  product * nextValue );
};

const power = function(num1, num2) {
	let result = 1;

  for (i = 0; i < num2; i++){
    result *= num1;
  }

  return result;

};

const factorial = function(num) {
	if (num === 0){
    return 1;
  }

  let result = 1;

  for (i = num; i > 0; i--){
    result *= i;
  }

  return result;
  
  // 5! = 5 x 4 x 3 x 2 x 1 = 120
  // n x (n-1)!, where n >= 1
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
