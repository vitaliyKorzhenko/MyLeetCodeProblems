//You are given an integer array nums of length n, and an integer array queries of length m. Return an array answer of length m where answer[i] is the maximum size of a subsequence that you can take from nums such that the sum of its elements is less than or equal to queries[i]. A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements. 
//For example, [3,5,2] is a subsequence of [1,3,5,2,4].
//Example 1:
//Input: nums = [3,5,2,6], queries = [8,1,4,3]
//Output: [3,1,2,1]
//Explanation: The queries are processed as follows:
//- queries[0] = 8: The subsequence [3,5,2] is the largest valid subsequence with a sum of 10.
//- queries[1] = 1: The subsequence [3] is the largest valid subsequence with a sum of 3.
//- queries[2] = 4: The subsequence [3,5] is the largest valid subsequence with a sum of 8.
//- queries[3] = 3: The subsequence [3,2] is the largest valid subsequence with a sum of 5.
//Example 2:
//Input: nums = [4,3,2,1], queries = [4,3,2,1]
//Output: [2,1,0,0]
//Explanation: The queries are processed as follows:
//- queries[0] = 4: The subsequence [4] is the largest valid subsequence with a sum of 4.
//- queries[1] = 3: The subsequence [3] is the largest valid subsequence with a sum of 3.
//- queries[2] = 2: The subsequence [2] is the largest valid subsequence with a sum of 2.
//- queries[3] = 1: The subsequence [1] is the largest valid subsequence with a sum of 1.
//Constraints:
//n == nums.length
//m == queries.length
//1 <= n, m <= 10^5
//1 <= nums[i], queries[i] <= 10^7

function answerQueries(nums: number[], queries: number[]): number[] {
    //Check is Array nums = 0
    if (nums.length === 0) return new Array(queries.length).fill(0);;
    const answer: number[] = [];
    const sortedNums = nums.sort((a, b) => a - b);
    let queryIndex = 0;
    let numIndex = 0;
    let curentSum = 0;
    let isSummOverflowed = false;
    while (queryIndex < queries.length) {
        while (numIndex <= sortedNums.length - 1 && !isSummOverflowed) {
            curentSum += sortedNums[numIndex];
            if (curentSum <= queries[queryIndex]) {
                numIndex = numIndex + 1;
            } else {
                answer.push(numIndex);
                isSummOverflowed = true;
            }
        }
        if (!isSummOverflowed) {
            answer.push(sortedNums.length);
        }
        numIndex = 0;
        curentSum = 0;
        isSummOverflowed = false;
        queryIndex++;
    }
    return answer;
}   
