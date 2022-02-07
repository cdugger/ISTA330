/*
Given an array of size n, 
find the m-element. 
The m-element is 
the element that appears more than ⌊ n/2 ⌋ times.

If the m-element does not exist return -1.

Example: 
input: [1, 2, 2, 3, 2, 7, 2]
output: 2 
*/

var m_element = function(input) {
    let mVal = Math.floor(input.length / 2);
    input.sort((a,b) => a-b);
    for(let i = 0; i < input.length; i++) {
        let count = 1;
        let currElem = input[i];
        for(let j = i; j < input.length; j++) {
            if(input[j] != input[i]) {
                i = j-1;
                break;
            }
            count++;
        }
        if(count > mVal) {
            return currElem;
        }
    }
    return -1;
};