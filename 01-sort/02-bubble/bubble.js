/**
 * 冒泡排序
 * 相关题目：
 *    leetcode 912. 排序数组 https://leetcode.cn/problems/sort-an-array/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  let len = nums.length
  // * 元素个数小于2时无需排序
  if (len < 2) return nums

  // * 外层循环为逐躺扫描最大次数
  for (let i = 0; i < len - 1; i++) {
    // * 优化：是否发生交换？
    let isswap = 0
    // * len - 1 - i 每一趟扫描个数
    for (let j = 0; j < len - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        swap(nums, j, j + 1)
        isswap = true
      }
    }
    // * 未发生交换说明剩下的元素已正确分布，无需继续
    if (!isswap) break
  }

  return nums
}

function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
