/**
 * 快速排序
 * 相关题目：
 *    leetcode 912. 排序数组 https://leetcode.cn/problems/sort-an-array/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var sortArray = function (nums) {
  if (nums.length < 2) return nums
  quickSort(nums, 0, nums.length - 1)
  return nums
}

function quickSort(nums, low, high) {
  if (low < high) {
    // * 划分区间 获取中间位置
    const mid = partition(nums, low, high)
    // * 递归左区间
    quickSort(nums, low, mid - 1)
    // * 递归右区间
    quickSort(nums, mid + 1, high)
  }
}

function partition(nums, low, high) {
  // * 取最后元素为基数
  const pivot = nums[high]
  // * 指针初始化指向第一个元素
  let i = low
  for (let j = i; j < high; j++) {
    // * 将小于基数的元素移动到前值位置
    if (nums[j] < pivot) {
      swap(nums, i, j)
      i += 1
    }
  }
  // * 此时 i 必定大于等于基数，i - 1 必定小于基数，将基础插入正确位置
  swap(nums, high, i)
  return i
}

function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
