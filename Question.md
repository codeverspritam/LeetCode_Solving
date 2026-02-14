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

---

# Q5: Plus One

**Difficulty:** Easy  
**Topics:** Array, Math  
**Companies:** (Various)

You are given a large integer represented as an integer array `digits`, where each `digits[i]` is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

---

## Example 1:

**Input:**
digits = [1,2,3]

**Output:**
[1,2,4]

**Explanation:**
The array represents the integer 123.  
Incrementing by one gives 123 + 1 = 124.  
Thus, the result should be [1,2,4].

---

## Example 2:

**Input:**
digits = [4,3,2,1]

**Output:**
[4,3,2,2]

**Explanation:**
The array represents the integer 4321.  
Incrementing by one gives 4321 + 1 = 4322.  
Thus, the result should be [4,3,2,2].

---

## Example 3:

**Input:**
digits = [9]

**Output:**
[1,0]

**Explanation:**
The array represents the integer 9.  
Incrementing by one gives 9 + 1 = 10.  
Thus, the result should be [1,0].

---

## Constraints:

- 1 <= digits.length <= 100
- 0 <= digits[i] <= 9
- digits does not contain any leading 0's.

---

# Q6: Merge Sorted Array

**Difficulty:** Easy  
**Topics:** Array, Two Pointers, Sorting  
**Companies:** (Various)

You are given two integer arrays `nums1` and `nums2`, sorted in non-decreasing order, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively.

Merge `nums1` and `nums2` into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array `nums1`. To accommodate this, `nums1` has a length of `m + n`, where the first `m` elements denote the elements that should be merged, and the last `n` elements are set to `0` and should be ignored. `nums2` has a length of `n`.

---

## Example 1:

**Input:**
nums1 = [1,2,3,0,0,0], m = 3  
nums2 = [2,5,6], n = 3

**Output:**
[1,2,2,3,5,6]

**Explanation:**
The arrays we are merging are [1,2,3] and [2,5,6].  
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

---

## Example 2:

**Input:**
nums1 = [1], m = 1  
nums2 = [], n = 0

**Output:**
[1]

**Explanation:**
The arrays we are merging are [1] and [].  
The result of the merge is [1].

---

## Example 3:

**Input:**
nums1 = [0], m = 0  
nums2 = [1], n = 1

**Output:**
[1]

**Explanation:**
The arrays we are merging are [] and [1].  
The result of the merge is [1].  
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

---

## Constraints:

- nums1.length == m + n
- nums2.length == n
- 0 <= m, n <= 200
- 1 <= m + n <= 200
- -10^9 <= nums1[i], nums2[j] <= 10^9

---

# Q7: Number of 1 Bits

**Difficulty:** Easy  
**Topics:** Divide and Conquer, Bit Manipulation  
**Companies:** (Various)

Given a positive integer `n`, write a function that returns the number of set bits in its binary representation (also known as the Hamming weight).

### Example 1:

**Input:** `n = 11`  
**Output:** `3`  
**Explanation:**  
The input binary string `1011` has a total of three set bits.

### Example 2:

**Input:** `n = 128`  
**Output:** `1`  
**Explanation:**  
The input binary string `10000000` has a total of one set bit.

### Example 3:

**Input:** `n = 2147483645`  
**Output:** `30`  
**Explanation:**  
The input binary string `111111111111111111111110111` has a total of thirty set bits.

### Constraints:

- `1 <= n <= 2^31 - 1`

---

# Q8: Isomorphic Strings

**Difficulty:** Easy  
**Topics:** Hash Table, String,  
**Companies:** (FAANG)

Given two strings `s` and `t`, determine if they are isomorphic.

Two strings `s` and `t` are isomorphic if the characters in `s` can be replaced to get `t`.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

---

## Example 1:

**Input:**  
`s = "egg", t = "add"`

**Output:**  
`true`

**Explanation:**  
The strings `s` and `t` can be made identical by:

- Mapping `'e'` to `'a'`
- Mapping `'g'` to `'d'`

---

## Example 2:

**Input:**  
`s = "f11", t = "b23"`

**Output:**  
`false`

**Explanation:**  
The strings `s` and `t` can not be made identical as `'1'` needs to be mapped to both `'2'` and `'3'`.

---

## Example 3:

**Input:**  
`s = "paper", t = "title"`

**Output:**  
`true`

---

## Constraints:

- `1 <= s.length <= 5 * 10^4`
- `t.length == s.length`
- `s` and `t` consist of any valid ASCII character.

---

# Q9: Merge Strings Alternately

**Difficulty:** Easy  
**Topics:** Mid Level, Two Pointers, String, Weekly Contest 229  
**Companies:** (FAANG)

---

## Problem Description

You are given two strings `word1` and `word2`.  
Merge the strings by adding letters in alternating order, starting with `word1`.

If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

---

## Example 1

**Input:**  
`word1 = "abc", word2 = "pqr"`

**Output:**  
`"apbqcr"`

**Explanation:**

```
word1:  a   b   c
word2:  p   q   r
merged: a p b q c r
```

---

## Example 2

**Input:**  
`word1 = "ab", word2 = "pqrs"`

**Output:**  
`"apbqrs"`

**Explanation:**

```
word1:  a   b
word2:  p   q   r   s
merged: a p b q r s
```

---

## Example 3

**Input:**  
`word1 = "abcd", word2 = "pq"`

**Output:**  
`"apbqcd"`

**Explanation:**

```
word1:  a   b   c   d
word2:  p   q
merged: a p b q c d
```

---

## Constraints

- `1 <= word1.length, word2.length <= 100`
- `word1` and `word2` consist of lowercase English letters.

---

## Notes

Steps:

- Ek empty string merged banao result store karne ke liye.

- Do pointers (i, j) rakho word1 aur word2 ke liye.

- Jab tak koi bhi string khatam na ho (i.e. i < word1.length ya j < word2.length):

- Agar word1[i] hai, to use merged me daalo.

- Agar word2[j] hai, to use bhi merged me daalo.

- Jab loop khatam hoga, to merged string me alternating characters + bacha hua part aa chuka hoga. Us merged string ko return karo.

---

# Q10: [2259. Remove Digit From Number to Maximize Result](https://leetcode.com/problems/remove-digit-from-number-to-maximize-result)

**Difficulty:** Easy  
**Topics:** Mid Level, Two Pointers, String, Weekly Contest 229  
**Companies:** Amazon (High frequency), Goldman Sachs, Accenture, Citadel, Google, Microsoft,

---

<!-- description:start -->

<p>You are given a string <code>number</code> representing a <strong>positive integer</strong> and a character <code>digit</code>.</p>

<p>Return <em>the resulting string after removing <strong>exactly one occurrence</strong> of </em><code>digit</code><em> from </em><code>number</code><em> such that the value of the resulting string in <strong>decimal</strong> form is <strong>maximized</strong></em>. The test cases are generated such that <code>digit</code> occurs at least once in <code>number</code>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> number = &quot;123&quot;, digit = &quot;3&quot;
<strong>Output:</strong> &quot;12&quot;
<strong>Explanation:</strong> There is only one &#39;3&#39; in &quot;123&quot;. After removing &#39;3&#39;, the result is &quot;12&quot;.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> number = &quot;1231&quot;, digit = &quot;1&quot;
<strong>Output:</strong> &quot;231&quot;
<strong>Explanation:</strong> We can remove the first &#39;1&#39; to get &quot;231&quot; or remove the second &#39;1&#39; to get &quot;123&quot;.
Since 231 &gt; 123, we return &quot;231&quot;.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> number = &quot;551&quot;, digit = &quot;5&quot;
<strong>Output:</strong> &quot;51&quot;
<strong>Explanation:</strong> We can remove either the first or second &#39;5&#39; from &quot;551&quot;.
Both result in the string &quot;51&quot;.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>2 &lt;= number.length &lt;= 100</code></li>
	<li><code>number</code> consists of digits from <code>&#39;1&#39;</code> to <code>&#39;9&#39;</code>.</li>
	<li><code>digit</code> is a digit from <code>&#39;1&#39;</code> to <code>&#39;9&#39;</code>.</li>
	<li><code>digit</code> occurs at least once in <code>number</code>.</li>
</ul>

---

# Q11: [2620. Counter](https://leetcode.com/problems/counter)

**Difficulty:** Easy  
**Companies:** Companies That Ask This Question

This problem is a staple for initial technical screens and online assessments at:

- **Adobe**: Frequently tagged as a top question for Adobe's front-end engineering tracks.
- **Amazon**: Often used in the early stages of their assessment process for junior developer roles to verify basic JS proficiency.
- **ServiceNow**: Known for asking JavaScript-heavy trivia and utility functions during their front-end loops.
- **Apple**: Uses similar utility-function implementation tasks to test recursive and asynchronous JavaScript.

---

### Why This Question?

Interviewers use this to see if you understand:

1.  **Closures**: How an inner function retains access to variables from its parent scope even after the parent has executed.
2.  **State Persistence**: How to maintain a "private" state without using global variables.
3.  **Increment Logic**: Distinguishing between post-increment (`n++`) and pre-increment (`++n`) to return the correct value at the right time.

---

### Pro-Tip for Interviews

> **Note:** If you get this in an interview, be prepared for a follow-up like:
>
> - "How would you modify this to create multiple independent counters?"
> - "Can you implement this using an ES6 Class instead of a closure?"

<!-- description:start -->

<p>Given an integer&nbsp;<code>n</code>,&nbsp;return a <code>counter</code> function. This <code>counter</code> function initially returns&nbsp;<code>n</code>&nbsp;and then returns 1 more than the previous value every subsequent time it is called (<code>n</code>, <code>n + 1</code>, <code>n + 2</code>, etc).</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
n = 10 
[&quot;call&quot;,&quot;call&quot;,&quot;call&quot;]
<strong>Output:</strong> [10,11,12]
<strong>Explanation: 
</strong>counter() = 10 // The first time counter() is called, it returns n.
counter() = 11 // Returns 1 more than the previous time.
counter() = 12 // Returns 1 more than the previous time.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> 
n = -2
[&quot;call&quot;,&quot;call&quot;,&quot;call&quot;,&quot;call&quot;,&quot;call&quot;]
<strong>Output:</strong> [-2,-1,0,1,2]
<strong>Explanation:</strong> counter() initially returns -2. Then increases after each sebsequent call.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>-1000<sup>&nbsp;</sup>&lt;= n &lt;= 1000</code></li>
	<li><code>0 &lt;= calls.length &lt;= 1000</code></li>
	<li><code>calls[i] === &quot;call&quot;</code></li>
</ul>
