const removeFromArray = function(array, ...removeArrayItems) {

  for (let removeArrayItem of removeArrayItems) {
    if (array.includes(removeArrayItem)) {
      array.splice(array.indexOf(removeArrayItem), 1);
    }
  }
  
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
