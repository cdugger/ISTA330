/*
Given an integer n, 
put each number from 1 to n 
into groups based on the sum of its digits. 

Return how many groups have the largest size.

Example:
input: n = 11
output: 2
The groups are: [1, 10], [2, 11], [3], [4], [5], [6], [7], [8], [9]
so there are two groups with the largest size.
*/

var largestGroupsCount = function (n) {
    // the max possible sum of digits for a javascript int is 72
    // i got this from Number.MAX_SAFE_INTEGER.toString().length * 9
    let a = [];
    let maxSize = 0;

    for(let i = 0; i < 72; i++) {
        a.push(0);
    }

    for(let i = 1; i <= n; i++) {
        let s = i.toString();
        // find sum of digits through string conversion
        let sum = s.split('').reduce((total, n) => { return total + Number.parseInt(n) }, 0); 
        a[sum]++;
        if(a[sum] > maxSize) {
            maxSize = a[sum];
        }
    }

    return a.filter(elem => elem == maxSize).length;
};