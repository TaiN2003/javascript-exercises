const reverseString = function(string) {
    let arr = string.split('');
    
    let leftPointer = 0;
    let rightPointer = string.length - 1;

    let char = ''

    while (leftPointer < rightPointer) {
        char = arr[leftPointer];
        arr[leftPointer] = arr[rightPointer];
        arr[rightPointer] = char;
        
        leftPointer++;
        rightPointer--;
    }

    const result = arr.join('');

    return result;
};

// Do not edit below this line
module.exports = reverseString;
