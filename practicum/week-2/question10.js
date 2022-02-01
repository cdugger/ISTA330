/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
    nStr = n.toString();
    min = Number.MAX_VALUE;
    max = Number.MIN_VALUE;
    for(let elem of nStr) {
        digit = Number.parseInt(elem);
        if(digit > max) {
            max = digit;
        }
        if(digit < min) {
            min = digit;
        }
    }

    return max - min;
};