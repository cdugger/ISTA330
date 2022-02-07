/*
Given an array of integers, input, 
a d-integer is an integer which has 
a frequency in the array equal to its value.

Return a d-integer. If there are multiple 
d-integers return the largest of them.
If there is no d-integer return -1.

Example:
input: [3,5,3,3,5,1]
output: 3
*/

var d_integer = function(input) {
    input.sort((a,b) => b-a); // descending order
    for(let elem of input) {
        let count = input.filter(n => n === elem).length;
        if(count === elem) {
            return elem;
        }
    }
    return -1;
};