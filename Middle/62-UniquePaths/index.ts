// There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

// Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

// The test cases are generated so that the answer will be less than or equal to 2 * 109.

// Example 1:
// Input: m = 3, n = 7
// Output: 28

// Example 2:
// Input: m = 3, n = 2
// Output: 3
// Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Down -> Down
// 2. Down -> Down -> Right
// 3. Down -> Right -> Down

// Example 3:
// Input: m = 7, n = 3
// Output: 28

// Example 4:
// Input: m = 3, n = 3
// Output: 6

// Constraints:
// 1 <= m, n <= 100
// It's guaranteed that the answer will be less than or equal to 2 * 109.

// Runtime: 72 ms, faster than 99.00% of TypeScript online submissions for Unique Paths.
// Memory Usage: 40.2 MB, less than 100.00% of TypeScript online submissions for Unique Paths.

function uniquePaths(m: number, n: number): number {
    const grid: number[][] = [];
    for (let i = 0; i < m; i++) {
        grid.push([]);
        for (let j = 0; j < n; j++) {
            if (i === 0 || j === 0) {
                grid[i][j] = 1;
            } else {
                grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
            }
        }
    }
    return grid[m - 1][n - 1];
}

// Runtime: 72 ms, faster than 99.00% of TypeScript online submissions for Unique Paths.
// Memory Usage: 40.2 MB, less than 100.00% of TypeScript online submissions for Unique Paths.

