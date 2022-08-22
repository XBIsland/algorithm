/**
 * 归并排序
 * 相关题目：
 *    leetcode 912. 排序数组 https://leetcode.cn/problems/sort-an-array/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

// * 不会改变原数组
// var sortArray = function (nums) {
//   if (nums.len < 2) return nums.slice(0)
//   return mergeSort(nums.slice(0))
// }

// function mergeSort(nums) {
//   const len = nums.length
//   if (len < 2) return nums
//   const mid = len >> 1
//   const left = mergeSort(nums.slice(0, mid))
//   const right = mergeSort(nums.slice(mid))
//   return merge(left, right)
// }

// function merge(left, right) {
//   const llen = left.length
//   const rlen = right.length
//   let ls = 0
//   let rs = 0
//   const ans = []
//   while (ls < llen && rs < rlen) {
//     if (left[ls] <= right[rs]) {
//       ans.push(left[ls++])
//     } else {
//       ans.push(right[rs++])
//     }
//   }

//   while (ls < llen) {
//     ans.push(left[ls++])
//   }
//   while (rs < rlen) {
//     ans.push(right[rs++])
//   }

//   return ans
// }

// * 改变原数组
var sortArray = function (nums) {
  if (nums.len < 2) return nums
  let temp = []
  mergeSort(nums, 0, nums.length - 1, temp)
  return nums
}

function mergeSort(nums, left, right, temp) {
  if (left < right) {
    const mid = Math.floor((right + left) / 2)
    mergeSort(nums, left, mid, temp)
    mergeSort(nums, mid + 1, right, temp)
    merge(nums, left, mid, right, temp)
  }
}

function merge(nums, left, mid, right, temp) {
  let l_pos = left
  let r_pos = mid + 1
  let pos = left

  while (l_pos <= mid && r_pos <= right) {
    if (nums[l_pos] < nums[r_pos]) {
      temp[pos++] = nums[l_pos++]
    } else {
      temp[pos++] = nums[r_pos++]
    }
  }

  while (l_pos <= mid) {
    temp[pos++] = nums[l_pos++]
  }

  while (r_pos <= right) {
    temp[pos++] = nums[r_pos++]
  }

  while (left <= right) {
    nums[left] = temp[left]
    left++
  }
}
