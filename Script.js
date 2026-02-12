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

/* Q3: Palindrome Number */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  var reverse = 0;
  var copy = x;

  //The loop break when the copy of original number becomes zero
  //Also negative number cannot be a palindrome
  while (copy > 0) {
    const digit = copy % 10;
    reverse = reverse * 10 + digit;
    copy = ~~(copy / 10);
  }

  return reverse == x;
};

/* Q4: Longest Common Prefix */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";

  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== char) {
        return strs[0].slice(0, i);
      }
    }
  }

  return strs[0];
};
/*Q5: Plus One */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i] += 1;
    if (digits[i] < 10) {
      return digits; // no carry needed
    }
    digits[i] = 0; // carry case
  }
  digits.unshift(1); // agar sab 9 the toh
  return digits;
};

/* Q6: Merge Sorted Array */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = m - 1,
    j = n - 1,
    k = m + n - 1;
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k--] = nums1[i--];
    } else {
      nums1[k--] = nums2[j--];
    }
  }
  while (j >= 0) {
    nums1[k--] = nums2[j--];
  }
};

/* Q7: Number of 1 Bits */
const table = new Array(256).fill(0).map((_, i) => {
  let c = 0,
    x = i;
  while (x !== 0) {
    x &= x - 1;
    c++;
  }
  return c;
});

function hammingWeight(n) {
  return (
    table[n & 0xff] +
    table[(n >>> 8) & 0xff] +
    table[(n >>> 16) & 0xff] +
    table[(n >>> 24) & 0xff]
  );
}
