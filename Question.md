Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

---

# Q2: Median of Two Sorted Arrays

Given two sorted arrays `nums1` and `nums2` of size `m` and `n` respectively, return the **median** of the two sorted arrays.

The overall run time complexity should be `O(log (m+n))`.

---

## Example 1:

**Input:**  
`nums1 = [1,3]`  
`nums2 = [2]`

**Output:**  
`2.00000`

**Explanation:**  
Merged array = `[1,2,3]` and median is `2`.

---

## Example 2:

**Input:**  
`nums1 = [1,2]`  
`nums2 = [3,4]`

**Output:**  
`2.50000`

**Explanation:**  
Merged array = `[1,2,3,4]` and median is `(2 + 3) / 2 = 2.5`.

---

## Constraints:

- `nums1.length == m`
- `nums2.length == n`
- `0 <= m <= 1000`
- `0 <= n <= 1000`
- `1 <= m + n <= 2000`
- `-10^6 <= nums1[i], nums2[i] <= 10^6`

---

# Q3: Palindrome Number

**Easy** · Topics · Companies · Hint

Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.

---

## Example 1:

**Input:** `x = 121`  
**Output:** `true`  
**Explanation:** 121 reads as 121 from left to right and from right to left.

---

## Example 2:

**Input:** `x = -121`  
**Output:** `false`  
**Explanation:** From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

---

## Example 3:

**Input:** `x = 10`  
**Output:** `false`  
**Explanation:** Reads 01 from right to left. Therefore it is not a palindrome.

---

## Constraints:

- `-2^31 <= x <= 2^31 - 1`

---

# Q4: Longest Common Prefix

**Difficulty:** Easy  
**Topics:** Array, String, Trie  
**Companies:** (Various)

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

---

## Example 1:

**Input:**
strs = ["flower", "flow", "flight"]

**Output:**
"fl"

---

## Example 2:

**Input:**
strs = ["dog", "racecar", "car"]

**Output:**
""

**Explanation:**
There is no common prefix among the input strings.

---

## Constraints:

- 1 <= strs.length <= 200
- 0 <= strs[i].length <= 200
- strs[i] consists of only lowercase English letters if it is non-empty.
