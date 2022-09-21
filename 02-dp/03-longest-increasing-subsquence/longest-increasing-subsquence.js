/**
 * 最长递增子序列
 * 相关题目：
 *    leetcode 5. 最长回文字符串 https://leetcode.cn/problems/longest-palindromic-substring/
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

// * 动态规划
var lengthOfLIS = function (nums) {
  let len = nums.length
  let dp = new Array(len).fill(1)
  let max = 1

  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    max = Math.max(dp[i], max)
  }

  return max
}

// * 贪心 + 二分
// * 待补充