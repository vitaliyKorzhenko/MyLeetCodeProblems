// The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

// Given an integer array nums, return the sum of Hamming distances between all the pairs of the integers in nums

// Example 1:

// Input: nums = [4,14,2]
// Output: 6

// Explanation: In binary representation, the 4 is 0100, 14 is 1110, and 2 is 0010 (just showing the four bits relevant in this case).
// The answer will be:
// HammingDistance(4, 14) + HammingDistance(4, 2) + HammingDistance(14, 2) = 2 + 2 + 2 = 6.

// Example 2:

// Input: nums = [4,14,4]
// Output: 4

// Constraints:

// 1 <= nums.length <= 105
// 0 <= nums[i] <= 109

// Runtime: 104 ms, faster than 100.00% of TypeScript online submissions for Total Hamming Distance.
// Memory Usage: 47.1 MB, less than 100.00% of TypeScript online submissions for Total Hamming Distance.

function totalHammingDistance(nums: number[]): number {
    let result = 0;
    for (let i = 0; i < 32; i++) {
        let ones = 0;
        for (const num of nums) {
            ones += (num >> i) & 1;
        }
        result += ones * (nums.length - ones);
    }
    return result;
}

// Runtime: 104 ms, faster than 100.00% of TypeScript online submissions for Total Hamming Distance.
// Memory Usage: 47.1 MB, less than 100.00% of TypeScript online submissions for Total Hamming Distance.


