const sumAll = function(num1, num2) {
    if (num1 > 0 && num1 > 0 && Number.isInteger(num1) && Number.isInteger(num2)) {
        smallerNum = 0;
        biggerNum = 0;
    
        if (num1 < num2) {
            smallerNum = num1;
            biggerNum = num2;
        }
        else {
            smallerNum = num2;
            biggerNum = num1;
        }

        let sum = 0;

        for (let i = smallerNum; i < biggerNum + 1; i++) {
            sum = sum + i;
        }

        return sum;
    }
    
    else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;
