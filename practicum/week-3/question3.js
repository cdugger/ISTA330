/*
Given a non-negative integer n, 
generate the first n rows of Pascal's triangle (https://en.wikipedia.org/wiki/Pascal%27s_triangle).

Example:
input: 4
output: [
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1] 
]
*/

var PascalTriangle = function(n) {
  let result = [];
  for(let i = 0; i < n; i++) {
    let currRow = [1]; // each row starts with 1
    for(let j = 1; j < i; j++) {
      currRow.push(result[i-1][j-1] + result[i-1][j]);
    }
    if(i > 0) {
      currRow.push(1); // every row except for row 0 ends in a 1
    }
    result.push(currRow);
  }
  return result;
};