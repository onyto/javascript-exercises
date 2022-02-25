const leapYears = function(year) {
  let tmp = false;
  if (year % 4 === 0) tmp = true;
  if (year % 100 === 0) tmp = false;
  if ((year % 100 === 0) && (year % 400 === 0)) tmp = true;
  return tmp;
}

// Do not edit below this line
module.exports = leapYears;
