/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const rotateCount = Math.floor(matrix.length / 2);
  for (let i = 0; i < rotateCount; i++) {
      for (let j = i; j < (matrix.length - 1); j++) {
          let nextI = i;
          let nextj = j;
          let temp = 0;

          let prevNextI = nextI;
          let prevNextJ = nextj;
          prevNextI = nextI;
          prevNextJ = nextj;
          nextI = nextj;
          nextj = matrix.length - prevNextI - 1;
          temp1 = matrix[prevNextI][prevNextJ]
          temp2 = matrix[nextI][nextj]
          for (let c = 0; c < 4; c++) {
              matrix[nextI][nextj] = temp1;
              temp1 = temp2
              prevNextI = nextI;
              prevNextJ = nextj;
              nextI = nextj;
              nextj = matrix.length - prevNextI - 1;
              temp2 = matrix[nextI][nextj]



          }
      }
  }
};
