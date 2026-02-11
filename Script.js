// Define the function
function twoSum(nums, target) {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (map.hasOwnProperty(complement)) {
      return [map[complement], i];
    }

    map[nums[i]] = i;
  }

  return [];
}

// Input array and target
const nums = [2, 7, 11, 15];
const target = 9;

// Call the function and log the result
console.log(twoSum(nums, target)); // Output: [0, 1]

/*Q2: Median of Two Sorted Arrays */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }

  let a = nums1.length;
  let b = nums2.length;
  let low = 0;
  let high = a;

  while (low <= high) {
    let partitionA = Math.floor((low + high) / 2);
    let partitionB = Math.floor((a + b + 1) / 2) - partitionA;

    let maxLeftA = partitionA === 0 ? -Infinity : nums1[partitionA - 1];
    let minRightA = partitionA === a ? Infinity : nums1[partitionA];

    let maxLeftB = partitionB === 0 ? -Infinity : nums2[partitionB - 1];
    let minRightB = partitionB === b ? Infinity : nums2[partitionB];

    if (maxLeftA <= minRightB && maxLeftB <= minRightA) {
      if ((a + b) % 2 === 0) {
        return (
          (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2
        );
      } else {
        return Math.max(maxLeftA, maxLeftB);
      }
    } else if (maxLeftA > minRightB) {
      high = partitionA - 1;
    } else {
      low = partitionA + 1;
    }
  }
};
