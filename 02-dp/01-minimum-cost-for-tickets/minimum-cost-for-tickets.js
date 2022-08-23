/**
 * 最低票价
 * 相关题目：
 *    leetcode 983. 排序数组 https://leetcode.cn/problems/minimum-cost-for-tickets/
 */

/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
 var mincostTickets = function (days, costs) {
  // * 初始化dp数组，补充第零天，默认为0元
  // * dp[i] 表示从第0天到i天最低的消费
  const dp = new Array(days[days.length - 1] + 1).fill(0)
  let daysIndex = 0

  for (let i = 1; i < dp.length; i++) {
      if (i === days[daysIndex]) {
          dp[i] = Math.min(
              costs[0] + dp[Math.max(0, i - 1)],
              costs[1] + dp[Math.max(0, i - 7)],
              costs[2] + dp[Math.max(0, i - 30)],
          )
          daysIndex++
      } else {
          dp[i] = dp[i - 1]
      }
  }

  return dp[dp.length - 1]
};