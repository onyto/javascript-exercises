const reverseString = function(string) {
  stringArray = string.split('');
  reversedStringArray = stringArray.reverse();
  reversedString = reversedStringArray.join('');
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
