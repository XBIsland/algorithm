/**
 * 最长回文字符串
 * 相关题目：
 *    leetcode 5. 最长回文字符串 https://leetcode.cn/problems/longest-palindromic-substring/
 */

/**
 * @param {string} s
 * @return {string}
 */
// * 暴力动归
var longestPalindrome = function (s) {
  const len = s.length
  if (len < 2) return s
  // * dp数组表示所有组合 dp[a][b]值表示a到b是否是回文串
  const dp = new Array(len).fill(false).map(() => new Array(len).fill(false))
  let res = s[0] // * 存储最长回文

  // * 单字符标记为回文
  for (let i = 0; i < len; i++) {
    dp[i][i] = true
  }

  for (let r = 1; r < len; r++) {
    for (let l = 0; l < r; l++) {
      // * 两字符相等时，判断dp[l + 1][r - 1]是否为回文
      // * l****r 还需要判断 **** 部分是否回文 || r - l <= 2 即 aa aba
      if (s[l] === s[r] && (dp[l + 1][r - 1] || r - l <= 2)) {
        dp[l][r] = true
        if (res.length < r - l + 1) {
          res = s.slice(l, r + 1)
        }
      }
    }
  }

  return res
}
// * 优雅中心扩散
// var longestPalindrome = function (s) {
//   const len = s.length
//   if (len < 2) return s
//   // * 截取起始位置
//   let start = -1
//   // * 回文最长长度
//   let maxlen = 0

//   for (let i = 0; i < len; i++) {
//     // * 奇数
//     const oddlen = expandAroundCenter(i, i)
//     // * 偶数
//     const evenlen = expandAroundCenter(i, i + 1)
//     const curMaxlen = Math.max(oddlen, evenlen)
//     if (curMaxlen > maxlen) {
//       maxlen = curMaxlen
//       start = i - Math.floor((maxlen - 1) / 2)
//     }
//   }

//   function expandAroundCenter(l, r) {
//     // * 从中心往两边扩散比较
//     while (l >= 0 && r <= len - 1) {
//       if (s[l] === s[r]) {
//         l--
//         r++
//       } else {
//         break
//       }
//     }
//     // * r - l + 1 得到总长度， -2 即减去 l r 两个数，最终得到中间回文的长度
//     return r - l + 1 - 2
//   }

//   return s.substring(start, start + maxlen)
// }
