/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    if (obstacleGrid[0][0] === 1) {
        return 0;
    }
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    if (obstacleGrid[m - 1][n - 1] === 1) {
        return 0
    }
    if (m === 1 && n === 1) {
        return 1
    }
    let dp = Array.from({ length: m }, () => Array(n).fill(0));

    let i = 0
    while (i < n) {
        if (obstacleGrid[0][i] === 1) {
            break
        }
        dp[0][i] = 1;
        i++

    }
    let j = 0
    while (j < m) {
        console.log(obstacleGrid[j][0])
        if (obstacleGrid[j][0] === 1) {

            break
        }
        dp[j][0] = 1;
        j++
    }

    for (let row = 1; row < m; row++) {
        for (let col = 1; col < n; col++) {
            if (obstacleGrid[row][col] === 1) {
                dp[row][col] = 0;
            } else {
                dp[row][col] = dp[row - 1][col] + dp[row][col - 1];
            }
        }
    }
    return dp[m - 1][n - 1];
};
