const removeFromArray = function(arr, num) {
    const filteredArr = arr.filter(arrNum => arrNum !== num);
    
    return filteredArr;
};

// Do not edit below this line
module.exports = removeFromArray;
