// https://leetcode.com/problems/search-insert-position/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i]
    if (element === target) return i
    else if (element > target) return i
  }
  return nums.length
}

console.log(searchInsert([1,3,5,6], 5))