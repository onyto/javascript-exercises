const sumAll = function(a, b) {
  
  // if a or b are not numbers or negative numbers, return ERROR
  if ((a < 0 || b < 0) || (typeof(a) !== 'number' || typeof(b) !== 'number' )) return "ERROR";

  // for loop start and end variable
  let i;
  let j;
  
  // set a and b to i or j depending on which is bigger
  if (a > b) {
    i = b;
    j = a;
  } else {
    i = a;
    j = b;
  }

  let sum = 0;
  for (i; i <= j; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
