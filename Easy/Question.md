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

---

# Q12: [2621. Sleep](https://leetcode.com/problems/sleep)

**Difficulty:** Easy  
**Companies:** Companies That Ask This Question

Ye problem mostly **Front-End** aur **Full-Stack** roles ke screening rounds mein puchi jati hai:

- **Adobe**: Unke JavaScript-focused interview loops ka ye kaafi popular sawal hai.
- **Amazon**: Junior dev roles ke liye async concepts check karne ke liye isse use karte hain.
- **ServiceNow**: JS utility functions aur technical assessments mein aksar dekha gaya hai.
- **HashedIn & Deloitte**: Coding rounds mein basic JavaScript competency test karne ke liye ye standard question hai.

---

### Why This Question?

Interviewers aapka **Asynchronous JavaScript** ka base check karte hain:

1.  **Promises**: Kya aap `setTimeout` (jo callback-based hai) ko `Promise` mein wrap kar sakte hain?
2.  **Async/Await**: Aapko pata hai ki `await` keyword kaise ek promise ke resolve hone ka wait karta hai bina thread block kiye.
3.  **Event Loop Knowledge**: Ye check karne ke liye ki aapko JavaScript ke non-blocking nature ki samajh hai ya nahi.

---

### Pro-Tip for Interviews

> **Note:** Interviewer aapko fasaane ke liye ye follow-up questions puch sakta hai:
>
> - "Agar humein sleep function ko bich mein hi **cancel** karna ho, toh kaise karenge?" (Hint: `AbortController` use hota hai).
> - "Busy-wait loop (while loop) aur `setTimeout` mein kya difference hai aur busy-wait kyun nahi use karna chahiye?"
> - "Kya `setTimeout` humesha exact time par hi execute hota hai?" (Hint: Event loop queue ki wajah se delay ho sakta hai).

---

<p>Given&nbsp;a positive integer <code>millis</code>, write an asynchronous function that sleeps for <code>millis</code>&nbsp;milliseconds. It can resolve any value.</p>

<p><strong>Note</strong> that <em>minor</em> deviation from <code>millis</code> in the actual sleep duration is acceptable.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> millis = 100
<strong>Output:</strong> 100
<strong>Explanation:</strong> It should return a promise that resolves after 100ms.
let t = Date.now();
sleep(100).then(() =&gt; {
  console.log(Date.now() - t); // 100
});
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> millis = 200
<strong>Output:</strong> 200
<strong>Explanation:</strong> It should return a promise that resolves after 200ms.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= millis &lt;= 1000</code></li>
</ul>

---

Notes

- setTimeout() ke through ek Promise banaya jaata hai.

- await use karke JavaScript function ko pause karta hai jab tak setTimeout complete nahi ho jaata.

- Promise resolve hone ke baad code aage chalta hai.

---

# Q13: [2626. Array Reduce Transformation](https://leetcode.com/problems/array-reduce-transformation)

**Difficulty:** Easy  
**Companies:** Companies That Ask This Question

Ye question un companies mein zyada pucha jata hai jo **Functional Programming** aur **Front-end Fundamentals** par focus karti hain:

- **Adobe**: JS core concepts aur array manipulation check karne ke liye unka favourite hai.
- **Amazon**: JavaScript-based assessments mein basic logic building ke liye pucha jata hai.
- **Uber & Flipkart**: In companies ke UI/Front-end rounds mein `reduce` aur `map` jaise functions ki internal working aksar puchi jati hai.
- **Startups (like Razorpay, Swiggy)**: Jahan modern JS framework (React/Vue) use hote hain, wahan core array methods ki depth check karne ke liye ye standard hai.

---

### Why This Question?

Interviewers ye dekhna chahte hain ki aapko built-in functions ke peeche ka **logic** pata hai ya nahi:

1.  **Manual Implementation**: Kya aap bina `.reduce()` method use kiye, manually loop chala kar value accumulate kar sakte hain?
2.  **Callback Logic**: Isme check hota hai ki aap callback functions aur `accumulator` ka concept samajhte hain ya nahi.
3.  **Edge Case Handling**: Jaise agar array khali (`empty`) ho, toh kya aap `initialValue` sahi se return kar rahe hain?

---

### Pro-Tip for Interviews

> **Note:** Interview mein ye follow-ups expect karein:
>
> - "Kya aap `reduce` function ko use karke ek **Array Map** ya **Filter** function bana sakte hain?"
> - "Agar hum `initialValue` provide na karein, toh standard JS `reduce` kaise behave karega?"
> - "Is implementation ki Time aur Space complexity kya hai?" (Hint: O(n) time, O(1) extra space).

---

<!-- description:start -->

<p>Given an integer array <code>nums</code>, a reducer function <code>fn</code>, and an initial value <code>init</code>, return the final result obtained by executing the <code>fn</code> function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.</p>

<p>This result is achieved through the following operations: <code>val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ...</code> until every element in the array has been processed. The ultimate value of <code>val</code> is then returned.</p>

<p>If the length of the array is 0, the function should return <code>init</code>.</p>

<p>Please solve it without using the built-in <code>Array.reduce</code> method.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr; }
init = 0
<strong>Output:</strong> 10
<strong>Explanation:</strong>
initially, the value is init=0.
(0) + nums[0] = 1
(1) + nums[1] = 3
(3) + nums[2] = 6
(6) + nums[3] = 10
The final answer is 10.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> 
nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr * curr; }
init = 100
<strong>Output:</strong> 130
<strong>Explanation:</strong>
initially, the value is init=100.
(100) + nums[0] * nums[0] = 101
(101) + nums[1] * nums[1] = 105
(105) + nums[2] * nums[2] = 114
(114) + nums[3] * nums[3] = 130
The final answer is 130.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> 
nums = []
fn = function sum(accum, curr) { return 0; }
init = 25
<strong>Output:</strong> 25
<strong>Explanation:</strong> For empty arrays, the answer is always init.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= nums.length &lt;= 1000</code></li>
	<li><code>0 &lt;= nums[i] &lt;= 1000</code></li>
	<li><code>0 &lt;= init &lt;= 1000</code></li>
</ul>

---

# Notes

- Is function ka naam reduce hai. Ye ek array nums, ek function fn, aur ek starting value init leta hai.

- Soch le tu ek container mein init daal ke baitha hai, ab tu nums ke har element ko use function fn ke through us container ke saath combine karta jaa raha hai. Aise karte karte tu ek final single value tak pahuchta hai.

- Jaise agar tu sare number ka sum chahta hai, to fn hoga (a, b) => a + b aur init hoga 0. Ye sab numbers ko jod ke ek final result dega.

---

# Q14: [2629. Function Composition](https://leetcode.com/problems/function-composition)

**Difficulty:** Easy  
**Companies:** **Difficulty:** Easy  
**Companies:** Companies That Ask This Question

Ye problem un roles ke liye puchi jati hai jahan high-level **JavaScript architecture** ki samajh zaroori ho:

- **Adobe**: Front-end engineering ke core rounds mein ye aksar pucha jata hai.
- **Amazon**: JavaScript fundamentals aur higher-order functions check karne ke liye unka go-to sawal hai.
- **Intuit**: Unke UI/Frontend developer assessments mein logic building ke liye ye standard question hai.
- **Zomato & Uber**: Jahan complex state management aur data transformations hote hain, wahan aise patterns test kiye jate hain.

---

### Why This Question?

Interviewers isse aapki **Functional Thinking** check karte hain:

1.  **Higher-Order Functions**: Kya aap ek function return kar sakte hain jo dusre functions ko call kare?
2.  **Right-to-Left Execution**: Composition hamesha right se left chalti hai ($f(g(x))$). Kya aapne array ko reverse direction mein process kiya?
3.  **Efficiency**: Kya aap `reduceRight` use kar rahe hain ya manual loop? Interviewer aapki code clean-ness dekhta hai.

---

### Pro-Tip for Interviews

> **Note:** Interviewer ye twists de sakta hai:
>
> - "Kya aap isse `Array.reduceRight()` use karke ek line mein likh sakte hain?"
> - "Agar functions array **empty** ho, toh output kya hona chahiye?" (Hint: It should return the identity function, i.e., return $x$ as is).
> - "Async functions ke liye composition kaise implement karenge?" (Hint: `await` ka use karna padega loop ke andar).

---

<!-- description:start -->

<p>Given an array of functions&nbsp;<code>[f<span style="font-size: 10.8333px;">1</span>, f<sub>2</sub>, f<sub>3</sub>,&nbsp;..., f<sub>n</sub>]</code>, return&nbsp;a new function&nbsp;<code>fn</code>&nbsp;that is the <strong>function&nbsp;composition</strong> of the array of functions.</p>

<p>The&nbsp;<strong>function&nbsp;composition</strong>&nbsp;of&nbsp;<code>[f(x), g(x), h(x)]</code>&nbsp;is&nbsp;<code>fn(x) = f(g(h(x)))</code>.</p>

<p>The&nbsp;<strong>function&nbsp;composition</strong>&nbsp;of an empty list of functions is the&nbsp;<strong>identity function</strong>&nbsp;<code>f(x) = x</code>.</p>

<p>You may assume each&nbsp;function&nbsp;in the array accepts one integer as input&nbsp;and returns one integer as output.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> functions = [x =&gt; x + 1, x =&gt; x * x, x =&gt; 2 * x], x = 4
<strong>Output:</strong> 65
<strong>Explanation:</strong>
Evaluating from right to left ...
Starting with x = 4.
2 * (4) = 8
(8) * (8) = 64
(64) + 1 = 65
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> functions = [x =&gt; 10 * x, x =&gt; 10 * x, x =&gt; 10 * x], x = 1
<strong>Output:</strong> 1000
<strong>Explanation:</strong>
Evaluating from right to left ...
10 * (1) = 10
10 * (10) = 100
10 * (100) = 1000
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> functions = [], x = 42
<strong>Output:</strong> 42
<strong>Explanation:</strong>
The composition of zero functions is the identity function</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code><font face="monospace">-1000 &lt;= x &lt;= 1000</font></code></li>
	<li><code><font face="monospace">0 &lt;= functions.length &lt;= 1000</font></code></li>
	<li>all functions accept and return a single integer</li>
</ul>

---

# Notes

- Is function ka naam compose hai. Ye ek array leta hai functions ka – matlab bohot saare chhote-chhote functions diye gaye hain.

- Phir ye ek naya function return karta hai, jo jab call hota hai kisi input x ke saath, to saare functions ko right to left (last se pehle) order mein uss input pe apply karta hai.

- Soch le jaise tere paas ye functions hai:

---

# Q15: [2703. Return Length of Arguments Passed](https://leetcode.com/problems/return-length-of-arguments-passed)

**Difficulty:** Easy  
**Companies:** Companies That Ask This Question

Ye question aksar **Online Assessments (OA)** aur **Screening Rounds** mein pucha jata hai:

- **Adobe**: JavaScript internals aur language-specific features check karne ke liye.
- **Amazon**: Unke initial coding rounds mein "Easy" level constraints ke liye ye favourite hai.
- **Paytm & PhonePe**: Front-end roles ke liye jahan language ke basic syntax par pakad dekhi jati hai.

---

### Why This Question?

Iska logic ek line ka hai, lekin interviewer ye dekhta hai ki aapko JavaScript ke **variadic functions** ki knowledge hai ya nahi:

1.  **Rest Parameters (`...args`)**: Modern JS (ES6) ka use karke aap kitne bhi arguments ko ek array mein kaise convert karte ho.
2.  **Arguments Object**: Purane style ka `arguments` object aur modern `rest parameters` ke beech ka farq aapko pata hai ya nahi.
3.  **Efficiency**: Kya aap faltu ka loop chala rahe ho ya seedha `.length` property use kar rahe ho?

---

### Pro-Tip for Interviews

> **Note:** Isme interviewer aapko confuse karne ke liye ye bol sakta hai:
>
> - "Agar main `null` ya `undefined` pass karun, toh kya length badhni chahiye?" (Answer: Haan, har passed argument count hota hai).
> - "Kya aap ise bina `...args` use kiye implement kar sakte hain?" (Hint: `arguments.length` use karke).
> - "Arrow functions aur regular functions mein `arguments` object kaise behave karta hai?" (Hint: Arrow functions mein `arguments` object nahi hota!).

---

<!-- description:start -->

Write a function&nbsp;<code>argumentsLength</code> that returns the count of arguments passed to it.

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> args = [5]
<strong>Output:</strong> 1
<strong>Explanation:</strong>
argumentsLength(5); // 1

One value was passed to the function so it should return 1.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> args = [{}, null, &quot;3&quot;]
<strong>Output:</strong> 3
<strong>Explanation:</strong> 
argumentsLength({}, null, &quot;3&quot;); // 3

Three values were passed to the function so it should return 3.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>args</code>&nbsp;is a valid JSON array</li>
	<li><code>0 &lt;= args.length &lt;= 100</code></li>
</ul>

---

# Notes

- Ye function argumentsLength ek rest parameter ...args use karta hai, jo jitne bhi arguments function me pass hote hain unko ek array ke form me pakad leta hai.

- Phir wo simply args.length return karta hai, yani us array ke elements kitne hai... matlab kitne arguments pass hue the, wo batata hai.

---

# Q16: [2666. Allow One Function Call](https://leetcode.com/problems/allow-one-function-call)

**Difficulty:** Easy  
**Companies:** Companies That Ask This Question

Ye "Closure" ka concept test karne ke liye top-tier companies ka favorite hai:

- **Adobe**: JS Closures aur Design Patterns par unka focus kaafi zyada rehta hai.
- **Amazon**: Front-end/Full-stack interviews mein efficiency aur state preservation check karne ke liye.
- **Intuit & ServiceNow**: Jahan UI components ki reliability aur "one-time execution" zaroori hoti hai.
- **Startups (Curefit, Slice)**: Fast-paced coding rounds mein logic check karne ke liye.

---

### Why This Question?

Iska main maqsad aapki **State Management** ki samajh check karna hai:

1.  **Closures**: Kya aap function ke scope ke bahar ek variable (`hasBeenCalled`) maintain kar sakte hain jo execution track kare?
2.  **Higher-Order Functions**: Ye ek function return karta hai jo original function ko wrap karta hai—ye decorator pattern ki base hai.
3.  **Arguments Handling**: Kya aap `...args` ko correctly pass kar rahe hain original function mein?

---

### Pro-Tip for Interviews

> **Note:** Interviewer ye follow-up questions daag sakta hai:
>
> - "Agar function `undefined` return kare, toh aapka logic kaise handle karega?"
> - "Kya aap isse ek generic **`N-times call`** function mein convert kar sakte hain?"
> - "Memory leak se bachne ke liye, kya execution ke baad hum original function ka reference `null` kar sakte hain?"

---

<!-- description:start -->

<p>Given a function <code>fn</code>, return a new function that is identical to the original function except that it ensures&nbsp;<code>fn</code>&nbsp;is&nbsp;called at most once.</p>

<ul>
	<li>The first time the returned function is called, it should return the same result as&nbsp;<code>fn</code>.</li>
	<li>Every subsequent time it is called, it should return&nbsp;<code>undefined</code>.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> fn = (a,b,c) =&gt; (a + b + c), calls = [[1,2,3],[2,3,6]]
<strong>Output:</strong> [{&quot;calls&quot;:1,&quot;value&quot;:6}]
<strong>Explanation:</strong>
const onceFn = once(fn);
onceFn(1, 2, 3); // 6
onceFn(2, 3, 6); // undefined, fn was not called
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> fn = (a,b,c) =&gt; (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]
<strong>Output:</strong> [{&quot;calls&quot;:1,&quot;value&quot;:140}]
<strong>Explanation:</strong>
const onceFn = once(fn);
onceFn(5, 7, 4); // 140
onceFn(2, 3, 6); // undefined, fn was not called
onceFn(4, 6, 8); // undefined, fn was not called
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>calls</code> is a valid JSON array</li>
	<li><code>1 &lt;= calls.length &lt;= 10</code></li>
	<li><code>1 &lt;= calls[i].length &lt;= 100</code></li>
	<li><code>2 &lt;= JSON.stringify(calls).length &lt;= 1000</code></li>
</ul>

---

# Notes

- Yeh once(fn) ek wrapper return karta hai — jo fn() ko bas pehli baar hi call karega.

- Ek baar function chal gaya, to flag true ho jaata hai.

- Uske baad koi bhi arguments do ya call karo, kuch bhi return nahi karega.

- Useful hota hai jaise: login function, payment trigger — jahan accidental baar-baar call nahi honi chahiye.

---

# Q17: [1768. Merge Strings Alternately](https://leetcode.com/problems/merge-strings-alternately)

**Difficulty:** Easy  
**Companies:** Amazon, Microsoft, Uber, Adobe, Google

Ye **String Manipulation** aur **Two-Pointer** logic ka base check karne ke liye recruitment rounds mein kaafi popular hai:

- **Amazon**: Unke Online Assessments (OA) mein ye ek standard entry-level question hai.
- **Microsoft**: Basic coding proficiency aur edge-case handling (unequal string lengths) check karne ke liye.
- **Uber & Adobe**: String concatenation ki efficiency aur clean loop structures test karne ke liye aksar pucha jata hai.
- **Google**: Mostly warm-up rounds mein ya junior developer roles ke screening mein dikhta hai.

---

### Why This Question?

Iska main maqsad aapki **Iteration aur Efficiency** ki samajh check karna hai:

1.  **Two-Pointer Technique**: Kya aap do alag indices ko ek saath maintain kar ke strings traverse kar sakte hain?
2.  **Handling Unequal Lengths**: Jab ek string khatam ho jaye aur doosri bachi ho, toh aap bache hue characters ko kaise efficiently "append" karte hain?
3.  **String Immutability**: Interviewer ye dekhta hai ki kya aap string concatenation (`+`) use kar rahe hain (jo O(N²) memory le sakta hai) ya `StringBuilder`/`Array join` (jo memory efficient O(N) hai).

---

### Pro-Tip for Interviews

> **Note:** Interviewer ye follow-up questions daag sakta hai:
>
> - "Agar humein 2 ki jagah **N-strings** alternately merge karni ho, toh aapka approach kaise generalize hoga?"
> - "Space complexity O(1) kaise rakhoge agar hum output string ko memory mein count na karein?"
> - "Kya aap Python ka `zip_longest` ya Java ka `Math.max()` use kar ke code ko minimalist aur readable bana sakte hain?"

##

<!-- description:start -->

<p>You are given two strings <code>word1</code> and <code>word2</code>. Merge the strings by adding letters in alternating order, starting with <code>word1</code>. If a string is longer than the other, append the additional letters onto the end of the merged string.</p>

<p>Return <em>the merged string.</em></p>

<p>&nbsp;</p>

<p><strong class="example">Example 1:</strong></p>

<pre>

<strong>Input:</strong> word1 = &quot;abc&quot;, word2 = &quot;pqr&quot;

<strong>Output:</strong> &quot;apbqcr&quot;

<strong>Explanation:</strong>&nbsp;The merged string will be merged as so:

word1:  a   b   c

word2:    p   q   r

merged: a p b q c r

</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>

<strong>Input:</strong> word1 = &quot;ab&quot;, word2 = &quot;pqrs&quot;

<strong>Output:</strong> &quot;apbqrs&quot;

<strong>Explanation:</strong>&nbsp;Notice that as word2 is longer, &quot;rs&quot; is appended to the end.

word1:  a   b 

word2:    p   q   r   s

merged: a p b q   r   s

</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>

<strong>Input:</strong> word1 = &quot;abcd&quot;, word2 = &quot;pq&quot;

<strong>Output:</strong> &quot;apbqcd&quot;

<strong>Explanation:</strong>&nbsp;Notice that as word1 is longer, &quot;cd&quot; is appended to the end.

word1:  a   b   c   d

word2:    p   q 

merged: a p b q c   d

</pre>

<p>&nbsp;</p>

<p><strong>Constraints:</strong></p>

<ul>

    <li><code>1 &lt;= word1.length, word2.length &lt;= 100</code></li>

    <li><code>word1</code> and <code>word2</code> consist of lowercase English letters.</li>

</ul>

---

# Notes

- Steps:
  Ek empty string merged banao result store karne ke liye.
  Do pointers (i, j) rakho word1 aur word2 ke liye.

- Jab tak koi bhi string khatam na ho (i.e. i < word1.length ya j < word2.length):

- Agar word1[i] hai, to use merged me daalo.

- Agar word2[j] hai, to use bhi merged me daalo.

- Jab loop khatam hoga, to merged string me alternating characters + bacha hua part aa chuka hoga. Us merged string ko return karo.

---

# Q18: [2723. Add Two Promises](https://leetcode.com/problems/add-two-promises)

**Difficulty:** Easy  
**Companies:** Amazon, Google, Meta, Adobe

Ye JavaScript/TypeScript interviews mein **Asynchronous Programming** ke basics check karne ke liye pucha jata hai:

- **Amazon & Google**: Front-end aur Full-stack roles mein `Promises` aur `Async/Await` ki deep knowledge test karne ke liye.
- **Adobe**: Unke rounds mein JS engine kaise kaam karta hai aur multiple async calls ko handle karne ka tareeka aksar pucha jata hai.
- **Startups (Razorpay, Swiggy)**: Real-world scenarios (jaise do alag APIs se data fetch karke sum karna) simulate karne ke liye.

---

### Why This Question?

Iska main maqsad aapki **Promise Handling** ki efficiency check karna hai:

1.  **Concurrent Execution**: Kya aap `Promise.all()` use kar rahe hain taaki dono promises parallel mein resolve hon, ya `await` use karke unhe slow (sequential) bana rahe hain?
2.  **State Management**: Jab dono values mil jayein, toh unhe safely sum karke ek naya Promise return karna.
3.  **Async/Await Syntax**: Modern JS coding standards aur clean code likhne ki ability.

---

### Pro-Tip for Interviews

> **Note:** Interviewer ye follow-up questions daag sakta hai:
>
> - "Agar ek Promise reject ho jaye, toh aapka code kaise behave karega?"
> - "Promise.all() aur manual await mein performance ka kya farak hai?"
> - "Kya aap isse `Promise.then()` syntax se bina `async/await` use kiye likh sakte hain?"

##

<!-- description:start -->

Given two promises <code>promise1</code> and <code>promise2</code>, return a new promise. <code>promise1</code> and <code>promise2</code>&nbsp;will both resolve with a number. The returned promise should resolve with the sum of the two numbers.

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> 
promise1 = new Promise(resolve =&gt; setTimeout(() =&gt; resolve(2), 20)), 
promise2 = new Promise(resolve =&gt; setTimeout(() =&gt; resolve(5), 60))
<strong>Output:</strong> 7
<strong>Explanation:</strong> The two input promises resolve with the values of 2 and 5 respectively. The returned promise should resolve with a value of 2 + 5 = 7. The time the returned promise resolves is not judged for this problem.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> 
promise1 = new Promise(resolve =&gt; setTimeout(() =&gt; resolve(10), 50)), 
promise2 = new Promise(resolve =&gt; setTimeout(() =&gt; resolve(-12), 30))
<strong>Output:</strong> -2
<strong>Explanation:</strong> The two input promises resolve with the values of 10 and -12 respectively. The returned promise should resolve with a value of 10 + -12 = -2.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>promise1</code> and <code>promise2</code> are&nbsp;promises that resolve&nbsp;with a number</li>
</ul>

## Notes

- isme do promice diya gaya hai
- then ye return kr rahi hai new promice ko promise 1 , promise2 and ye dono promice resolve ho rahi hai number ke saath
- hmae in promice ko resolve karna hi with sum of two numbers.

- 2 promises hain: promise1 aur promise2
- Dono promise number return karte hain, jab resolve hote hain

## 🧠 Tumhe kya karna hai?

Ek naya promise return karna hai:

- Jo resolve karega in dono numbers ke sum ke saath
- i.e., promise1 + promise2 ka sum, jab dono resolve ho chuke hon

## 📘 Concepts involved:

- async/await ya .then() ka use karke tum dono promises ka value nikal sakte ho
- Fir unka sum karke return kar sakte ho inside another promise

## 💡 Example:

```js
let p1 = Promise.resolve(5);
let p2 = Promise.resolve(10);

// Tumhara function(p1, p2) return kare: Promise.resolve(15)
```

## 🚀 Guide to Solve:

1. Tum async function bana sakte ho — so you can await both promises.
2. Use `let val1 = await promise1`, `let val2 = await promise2`
3. `return val1 + val2` — this will auto-wrap in a promise.

---

# Q19: [2621. Sleep](https://leetcode.com/problems/sleep)

**Difficulty:** Easy  
**Companies:** Google, Meta (Facebook), Netflix, Amazon

Ye JavaScript interviews mein **Event Loop** aur **Asynchronous Programming** ki core understanding check karne ke liye ek fundamental question hai:

- **Google & Meta**: In companies mein front-end/full-stack interviews ke dauraan JS runtime environment aur `setTimeout` ki internal workings par kaafi zor diya jaata hai.
- **Netflix & Amazon**: Jahaan performance aur non-blocking operations critical hote hain, wahaan `Promise`-based sleep function banana ek common requirement hai.
- **ServiceNow & Adobe**: UI latency management aur debouncing/throttling patterns ke context mein yeh logic pucha jaata hai.

---

### Why This Question?

Iska main maqsad aapki **Asynchronous Flow Control** ki samajh check karna hai:

1.  **Event Loop Mastery**: Kya aap jaante hain ki `setTimeout` code execution ko "block" nahi karta, balki task queue mein daal deta hai?
2.  **Promise Construction**: Kya aap `new Promise` constructor ko sahi se use kar ke `resolve` function ko time out ke baad call kar sakte hain?
3.  **Syntactic Sugar (Async/Await)**: Ye check karna ki aap is custom `sleep` utility ko doosre `async` functions mein effectively `await` kar sakte hain ya nahi.

---

### Pro-Tip for Interviews

> **Note:** Interviewer ye follow-up questions daag sakta hai:
>
> - "Agar hum `setTimeout` ki jagah ek busy-loop (jaise `while` loop) use karein, toh kya hoga?" (Correct answer: It will block the main thread and freeze the UI/server.)
> - "Kya aap is `sleep` function ko Node.js environment mein use karne ke liye optimize kar sakte hain?"
> - "Browser ke performance tools mein ye `sleep` operation network ya CPU usage graphs mein kahan dikhega?"

---

**Proactive Follow-up**: Kya aap iska **Optimal JavaScript Code** dekhna chahenge, ya kisi aur **LeetCode number** ka breakdown chahiye?

##

<!-- description:start -->

<p>Given&nbsp;a positive integer <code>millis</code>, write an asynchronous function that sleeps for <code>millis</code>&nbsp;milliseconds. It can resolve any value.</p>

<p><strong>Note</strong> that <em>minor</em> deviation from <code>millis</code> in the actual sleep duration is acceptable.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> millis = 100
<strong>Output:</strong> 100
<strong>Explanation:</strong> It should return a promise that resolves after 100ms.
let t = Date.now();
sleep(100).then(() =&gt; {
  console.log(Date.now() - t); // 100
});
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> millis = 200
<strong>Output:</strong> 200
<strong>Explanation:</strong> It should return a promise that resolves after 200ms.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= millis &lt;= 1000</code></li>
</ul>

## Notes

- (millis) ye hame ak positive integer diya gaya hai
- hame ak asyncronus function likhna hai jo ak value resolve kare or soo jaiga (millis second ke liye )
- so hame ak yesa function likhna hai jo milli second ke baad invok ho
- Yeh lo sleep() function ke short & strong notes in Hinglish, jo tum life-time yaad rakh sakte ho:

# 📌 sleep() Function – JavaScript (Async Delay)

**Definition:** sleep(millis) ek async function hai jo code execution ko kuch milliseconds ke liye rokta hai.

---

## 🔧 Kaise kaam karta hai?

- setTimeout() ke through ek Promise banaya jaata hai.
- await use karke JavaScript function ko pause karta hai jab tak setTimeout complete nahi ho jaata.
- Promise resolve hone ke baad code aage chalta hai.

---

## 🧠 Syntax:

```js
async function sleep(millis) {
  await new Promise((res) => setTimeout(res, millis));
}
```

---

## 🎯 Use Cases:

**Situation** | **Example**  
Artificial delay | API call ke baad loading dikhana  
Retry mechanism | Network request fail ho toh dubara try karna  
Animation wait | Slideshow ya spinner delay

---

## ✅ Example:

```js
async function demo() {
  console.log("Start");
  await sleep(3000); // 3 second delay
  console.log("End after 3 seconds");
}
```

---

## 📚 Important Points:

- sleep() sirf async function ke andar hi kaam karega.
- JavaScript thread ko block nahi karta, background mein delay hota hai.
- Mostly await ke saath use hota hai.

Agar tumhe aur bhi utility functions ya async-await tricks chahiye, batao – main ready hoon!

---

# Q20: [2715. Timeout Cancellation](https://leetcode.com/problems/timeout-cancellation)

**Difficulty:** Easy  
**Companies:** Google, Uber, Amazon, Flipkart

Ye JavaScript interviews mein **Timers** aur **Execution Control** ki deep understanding check karne ke liye pucha jata hai:

- **Google & Uber**: Front-end roles mein jahan users ke actions (jaise search autocomplete) ko cancel karna padta hai, wahan ye concept bohot kaam aata hai.
- **Amazon & Flipkart**: Performance optimization aur unnecessary API calls ko rokne (debouncing logic) ke context mein ye pucha jata hai.
- **Fintech Startups (PhonePe, Groww)**: Jahan transaction ya critical state changes ko ek specific window mein cancel karne ki flexibility chahiye hoti hai.

---

### Why This Question?

Iska main maqsad aapki **Manual Control over Async Tasks** ki samajh check karna hai:

1.  **Closures & Scoping**: Kya aap ek aisi function return kar sakte hain jo `timerId` ka access rakhti ho aur usey later point par `clearTimeout` kar sake?
2.  **Delayed Execution**: `setTimeout` ke behaviour ko handle karna aur ye ensure karna ki function exact `t` milliseconds baad hi execute ho.
3.  **Higher-Order Functions**: Ek function ko as an argument lena aur ek "cancel" function return karna—ye pattern sophisticated UI libraries mein kaafi use hota hai.

---

### Pro-Tip for Interviews

> **Note:** Interviewer ye follow-up questions daag sakta hai:
>
> - "Agar function already execute ho chuka ho, toh cancel function call karne par kya hona chahiye?"
> - "Kya aap isse `AbortController` API ka use karke implement kar sakte hain?"
> - "Memory management ke point of view se, `clearTimeout` call karna kyu zaroori hai?"

---

**Proactive Follow-up**: Kya aap iska **`clearTimeout` implementation** wala code dekhna chahenge, ya kisi aur **LeetCode number** ka breakdown chahiye?

##

<!-- description:start -->

<p>Given a function <code>fn</code>, an array of&nbsp;arguments&nbsp;<code>args</code>, and a timeout&nbsp;<code>t</code>&nbsp;in milliseconds, return a cancel function <code>cancelFn</code>.</p>

<p>After a delay of <code>cancelTimeMs</code>, the returned cancel function <code>cancelFn</code> will be invoked.</p>

<pre>
setTimeout(cancelFn, cancelTimeMs)
</pre>

<p>Initially, the execution of the function <code>fn</code> should be delayed by <code>t</code> milliseconds.</p>

<p>If, before the delay of <code>t</code> milliseconds, the function <code>cancelFn</code> is invoked, it should cancel the delayed execution of <code>fn</code>. Otherwise, if <code>cancelFn</code> is not invoked within the specified delay <code>t</code>, <code>fn</code> should be executed with the provided <code>args</code> as arguments.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> fn = (x) =&gt; x * 5, args = [2], t = 20
<strong>Output:</strong> [{&quot;time&quot;: 20, &quot;returned&quot;: 10}]
<strong>Explanation:</strong> 
const cancelTimeMs = 50;
const cancelFn = cancellable((x) =&gt; x * 5, [2], 20);
setTimeout(cancelFn, cancelTimeMs);

The cancellation was scheduled to occur after a delay of cancelTimeMs (50ms), which happened after the execution of fn(2) at 20ms.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> fn = (x) =&gt; x**2, args = [2], t = 100
<strong>Output:</strong> []
<strong>Explanation:</strong> 
const cancelTimeMs = 50;
const cancelFn = cancellable((x) =&gt; x**2, [2], 100);
setTimeout(cancelFn, cancelTimeMs);

The cancellation was scheduled to occur after a delay of cancelTimeMs (50ms), which happened before the execution of fn(2) at 100ms, resulting in fn(2) never being called.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> fn = (x1, x2) =&gt; x1 * x2, args = [2,4], t = 30
<strong>Output:</strong> [{&quot;time&quot;: 30, &quot;returned&quot;: 8}]
<strong>Explanation: 
</strong>const cancelTimeMs = 100;
const cancelFn = cancellable((x1, x2) =&gt; x1 * x2, [2,4], 30);
setTimeout(cancelFn, cancelTimeMs);

The cancellation was scheduled to occur after a delay of cancelTimeMs (100ms), which happened after the execution of fn(2,4) at 30ms.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>fn</code> is a function</li>
	<li><code>args</code> is a valid JSON array</li>
	<li><code>1 &lt;= args.length &lt;= 10</code></li>
	<li><code><font face="monospace">20 &lt;= t &lt;= 1000</font></code></li>
	<li><code><font face="monospace">10 &lt;= cancelTimeMs &lt;= 1000</font></code></li>
</ul>

## Notes# Timeout Cancellation

- hame ak founction provide kiya gaya hai
- hame arguments provide kiye gai hai args ke and ak timeout t millsecond ke name se.
- so hame cancelFn return karna hai.

- fn : ek function jo run hona hai
- args : us function ke liye arguments
- t : kitne milliseconds ke baad fn run hona chahiye

---

## Task:

Tumhe ek cancel function cancelFn return karna hai. Agar cancelFn ko t milliseconds ke andar call kiya gaya — to fn run nahi hona chahiye.

Otherwise → fn(args) run hona chahiye, jaise normal setTimeout mein hota hai.

---

## 🔧 Real-Life Analogy:

Socho tum kisi ko reminder set karte ho 5 second baad ka.

Agar tum 5 second ke andar "cancel" bol do, → reminder bajta hi nahi.

Nahi bola, → to reminder baj jaata hai 5 second ke baad.

---

## 🧠 Kaise Sochna Hai (Approach):

1. setTimeout use karo fn ko delay se run karne ke liye.
2. Us setTimeout ka ID store karo (timerId).
3. cancelFn ke andar clearTimeout(timerId) likh do — jisse fn cancel ho jaye agar cancelFn time se pehle call hua.

---

## 📌 Important Concepts:

- setTimeout(fn, t) → fn ko t ms ke baad run karta hai.
- clearTimeout(timeoutId) → us fn ko cancel kar deta hai agar abhi run nahi hua ho.

---

## ⚠️ Edge Case:

- cancelFn agar delay ke baad call ho — to fn already run ho chuka hoga, aur cancel karne ka koi effect nahi hoga.

---

# Q21: [2725. Interval Cancellation](https://leetcode.com/problems/interval-cancellation)

**Difficulty:** Easy  
**Companies:** Google, Uber, Razorpay, Zepto

Ye JavaScript interviews mein **Asynchronous Scheduling** aur **Interval Management** check karne ke liye pucha jata hai:

- **Google & Uber**: Real-time dashboards ya live data tracking (like cab location) jahan periodic updates ki zaroorat hoti hai.
- **Razorpay & Zepto**: High-concurrency systems mein jahan polling logic ko efficiently start aur stop karna padta hai.
- **ServiceNow & Adobe**: Periodic background tasks aur memory cleanup mechanisms (garbage collection context) test karne ke liye.

---

### Why This Question?

Iska main maqsad aapki **Continuous Execution Control** ki samajh check karna hai:

1.  **Immediate Execution**: Kya aap function ko `T=0` par call kar rahe hain, ya pehla execution delay ke baad ho raha hai? (Standard `setInterval` pehli call delay ke baad karta hai).
2.  **Stateful Cancellation**: `setInterval` se mila hua `timerId` ko closure mein capture karna taaki usey baad mein `clearInterval` kiya ja sake.
3.  **Higher-Order Functions**: Ek "Cancel Function" return karna jo user ko manual control de sake execution rokne ke liye.

---

### Pro-Tip for Interviews

> **Note:** Interviewer ye follow-up questions daag sakta hai:
>
> - "Standard `setInterval` aur is custom logic mein 'Immediate Call' ka kya difference hai?"
> - "Agar `cancelFn` ko `t` milliseconds ke exact multiple par call karein, toh kya last execution hoga?"
> - "Kya hum `recursive setTimeout` use kar sakte hain `setInterval` ki jagah? Iske kya fayde honge?" (Correct answer: Drift prevention aur better control).

##

<!-- description:start -->

<p>Given a function <code>fn</code>, an array of arguments&nbsp;<code>args</code>, and&nbsp;an interval time <code>t</code>, return a cancel function <code>cancelFn</code>.</p>

<p>After a delay of&nbsp;<code>cancelTimeMs</code>, the returned cancel function&nbsp;<code>cancelFn</code>&nbsp;will be invoked.</p>

<pre>
setTimeout(cancelFn, cancelTimeMs)
</pre>

<p>The function <code>fn</code> should be called with <code>args</code> immediately and then called again every&nbsp;<code>t</code> milliseconds&nbsp;until&nbsp;<code>cancelFn</code>&nbsp;is called at <code>cancelTimeMs</code> ms.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> fn = (x) =&gt; x * 2, args = [4], t = 35
<strong>Output:</strong> 
[
   {&quot;time&quot;: 0, &quot;returned&quot;: 8},
   {&quot;time&quot;: 35, &quot;returned&quot;: 8},
   {&quot;time&quot;: 70, &quot;returned&quot;: 8},
   {&quot;time&quot;: 105, &quot;returned&quot;: 8},
   {&quot;time&quot;: 140, &quot;returned&quot;: 8},
   {&quot;time&quot;: 175, &quot;returned&quot;: 8}
]
<strong>Explanation:</strong> 
const cancelTimeMs = 190;
const cancelFn = cancellable((x) =&gt; x * 2, [4], 35);
setTimeout(cancelFn, cancelTimeMs);

Every 35ms, fn(4) is called. Until t=190ms, then it is cancelled.
1st fn call is at 0ms. fn(4) returns 8.
2nd fn call is at 35ms. fn(4) returns 8.
3rd fn call is at 70ms. fn(4) returns 8.
4th fn call is at&nbsp;105ms. fn(4) returns 8.
5th fn call is at 140ms. fn(4) returns 8.
6th fn call is at 175ms. fn(4) returns 8.
Cancelled at 190ms
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> fn = (x1, x2) =&gt; (x1 * x2), args = [2, 5], t = 30
<strong>Output:</strong> 
[
   {&quot;time&quot;: 0, &quot;returned&quot;: 10},
   {&quot;time&quot;: 30, &quot;returned&quot;: 10},
   {&quot;time&quot;: 60, &quot;returned&quot;: 10},
   {&quot;time&quot;: 90, &quot;returned&quot;: 10},
   {&quot;time&quot;: 120, &quot;returned&quot;: 10},
   {&quot;time&quot;: 150, &quot;returned&quot;: 10}
]
<strong>Explanation:</strong> 
const cancelTimeMs = 165; 
const cancelFn = cancellable((x1, x2) =&gt; (x1 * x2), [2, 5], 30) 
setTimeout(cancelFn, cancelTimeMs)

Every 30ms, fn(2, 5) is called. Until t=165ms, then it is cancelled.
1st fn call is at 0ms&nbsp;
2nd fn call is at 30ms&nbsp;
3rd fn call is at 60ms&nbsp;
4th fn call is at&nbsp;90ms&nbsp;
5th fn call is at 120ms&nbsp;
6th fn call is at 150ms
Cancelled at 165ms
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> fn = (x1, x2, x3) =&gt; (x1 + x2 + x3), args = [5, 1, 3], t = 50
<strong>Output:</strong> 
[
   {&quot;time&quot;: 0, &quot;returned&quot;: 9},
   {&quot;time&quot;: 50, &quot;returned&quot;: 9},
   {&quot;time&quot;: 100, &quot;returned&quot;: 9},
   {&quot;time&quot;: 150, &quot;returned&quot;: 9}
]
<strong>Explanation:</strong> 
const cancelTimeMs = 180;
const cancelFn = cancellable((x1, x2, x3) =&gt; (x1 + x2 + x3), [5, 1, 3], 50)
setTimeout(cancelFn, cancelTimeMs)

Every 50ms, fn(5, 1, 3) is called. Until t=180ms, then it is cancelled. 
1st fn call is at 0ms
2nd fn call is at 50ms
3rd fn call is at 100ms
4th fn call is at&nbsp;150ms
Cancelled at 180ms
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>fn</code> is a function</li>
	<li><code>args</code> is a valid JSON array</li>
	<li><code>1 &lt;= args.length &lt;= 10</code></li>
	<li><code><font face="monospace">30 &lt;= t &lt;= 100</font></code></li>
	<li><code><font face="monospace">10 &lt;= </font>cancelTimeMs<font face="monospace"> &lt;= 500</font></code></li>
</ul>

## Notes

- **fn**: ek function hai jise call karna hai
- **args**: us function ke arguments
- **t**: interval time hai (kitne ms baad baar-baar chalna chahiye)
- Tumhe ek cancel function **cancelFn** banana hai.

### 🧬 Behavior:

1. **fn(args)** turant (immediately) call hona chahiye.
2. Uske baad **fn(args)** ko har **t milliseconds** ke baad baar-baar call karte raho.
3. Jab tak **cancelFn()** call nahi hota, ye chalna chahiye.
4. **cancelFn()** ek specific time (**cancelTimeMs**) par call hoga (like: `setTimeout(cancelFn, cancelTimeMs)`).

### 🛠️ Kaise implement karenge (approach):

- `setInterval()` ka use karenge fn ko baar-baar call karne ke liye.
- `setTimeout(cancelFn, cancelTimeMs)` se cancellation time decide hoga.
- **cancelFn()** ke andar `clearInterval(intervalId)` likhenge taaki fn ruk jaye.

### 💡 Socho Real Life Jaise:

Socho ek **reminder alarm** turant bajta hai, fir har 5 minute baad bajta raha hai. Agar tumne 15 minute baad cancel kar diya, to uske baad alarm nahi bajega.

### ✅ Final Summary:

- **fn(args)** turant chalu karo
- Har **t milliseconds** baad **fn(args)** chalayenge
- Jab **cancelFn()** call ho, tab **clearInterval** se repeat rok dena

---

# Q22: [205. Isomorphic Strings](https://leetcode.com/problems/isomorphic-strings)

**Difficulty:** Easy  
**Companies:** Amazon, Google, LinkedIn, Bloomberg

Ye problem **Hashing** aur **Mapping** ke patterns ko check karne ke liye top companies ka evergreen favorite hai:

- **Amazon & Google**: Logic-based screening rounds mein frequently pucha jata hai ye check karne ke liye ki aap "One-to-One" mapping handle kar sakte hain ya nahi.
- **LinkedIn**: Strings aur character frequency se related logic puzzles unke initial rounds mein common hote hain.
- **Bloomberg**: Jahan data integrity aur encoding-decoding algorithms par focus hota hai, wahan ye concept basic test ki tarah aata hai.

---

### Why This Question?

Iska main maqsad aapki **Data Structure Selection** ki samajh check karna hai:

1.  **Bi-directional Mapping**: Kya aapko pata hai ki `s -> t` aur `t -> s` dono side ki mapping check karna zaroori hai? (Example: `paper` aur `title`).
2.  **Space-Time Tradeoff**: Kya aap `HashMap` use kar rahe hain (O(N) space) ya `Integer Array` (O(1) space for ASCII) use karke memory optimize kar sakte hain?
3.  **Pattern Recognition**: Bina characters ko store kiye, kya aap unke **First Occurrence Index** ko compare karke isomorphic property verify kar sakte hain?

---

### Pro-Tip for Interviews

> **Note:** Interviewer ye follow-up questions daag sakta hai:
>
> - "Agar characters ASCII ki jagah Unicode (UTF-8) mein hon, toh aapka array-based approach fail hoga?"
> - "Kya hum bina extra space (O(1)) ke ise solve kar sakte hain agar humein strings modify karne ki permission ho?"
> - "Iska logic **Word Pattern** (LeetCode 290) se kaise milta-julta hai?"

---

##

<!-- description:start -->

<p>Given two strings <code>s</code> and <code>t</code>, <em>determine if they are isomorphic</em>.</p>

<p>Two strings <code>s</code> and <code>t</code> are isomorphic if the characters in <code>s</code> can be replaced to get <code>t</code>.</p>

<p>All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;egg&quot;, t = &quot;add&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">true</span></p>

<p><strong>Explanation:</strong></p>

<p>The strings <code>s</code> and <code>t</code> can be made identical by:</p>

<ul>
	<li>Mapping <code>&#39;e&#39;</code> to <code>&#39;a&#39;</code>.</li>
	<li>Mapping <code>&#39;g&#39;</code> to <code>&#39;d&#39;</code>.</li>
</ul>
</div>

<p><strong class="example">Example 2:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;foo&quot;, t = &quot;bar&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">false</span></p>

<p><strong>Explanation:</strong></p>

<p>The strings <code>s</code> and <code>t</code> can not be made identical as <code>&#39;o&#39;</code> needs to be mapped to both <code>&#39;a&#39;</code> and <code>&#39;r&#39;</code>.</p>
</div>

<p><strong class="example">Example 3:</strong></p>

<div class="example-block">
<p><strong>Input:</strong> <span class="example-io">s = &quot;paper&quot;, t = &quot;title&quot;</span></p>

<p><strong>Output:</strong> <span class="example-io">true</span></p>
</div>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 5 * 10<sup>4</sup></code></li>
	<li><code>t.length == s.length</code></li>
	<li><code>s</code> and <code>t</code> consist of any valid ascii character.</li>
</ul>

## NOtes

## Tumhare paas:

- 2 strings: s aur t

## Task:

✅ Check karo ki kya s aur t isomorphic hain.

---

## Isomorphic ka Matlab:

Agar s ke characters ko replace karte hain is condition ke saath:

1. **Har character ka fixed mapping hona chahiye** (e.g. ‘a’ → ‘x’ toh ‘a’ hammesha ‘x’ banega)
2. **Do alag characters same character pe map nahi ho sakte** (e.g. ‘a’ → ‘x’ and ‘b’ → ‘x’ not allowed)
3. **Ek character ke bhi map ho sakte hain** (e.g. ‘a’ → ‘a’ allowed)

---

## Real-Life Analogy:

Sochto tum secret message bhej rahe ho — Har character ko ek unique character se replace karke.

- Agar ‘a’ ko ‘x’ banaya toh message mein jitne bhi ‘a’ hain, sabhi ‘x’ banenge.
- Agar tum ‘b’ ko bhi ‘x’ banana chahoge toh confusion ho jayega, kyunki ab ‘x’ ka asli matlab samajh nahi aayega.

---

## Examples Se Samjho:

### Example 1:

```
s = "egg"
t = "add"
```

- ‘e’ → ‘a’
- ‘g’ → ‘d’

Dono characters consistently map ho rahe hain — **isomorphic** ✅

### Example 2:

```
s = "foo"
t = "bar"
```

- ‘f’ → ‘b’
- ‘o’ → ‘a’ (first ‘o’)
- second ‘o’ → ‘r’ Same character ‘o’ do alag values pe map ho raha hai → **not allowed**

---

## Approach (Kaise Sochna Hai):

1. 2 hashmaps ya JS objects banao:
   - sToT → s ka character kis t wale character pe map ho raha hai.
   - tToS → reverse mapping bhi check karo.
2. Loop chalao s.length tak:
   - Agar koi mapping pehli baar nahi hai — map karo.
   - Agar pehli baar mapping nahi milti toh **false**.
   - Agar bhi mismatch mila → **false**.
3. End tak sab sahi rahe — **true**.

---

## Important Concepts:

- **Map**, **Object**, **for loop**
- 1:1 character mapping check
- Order preserve karna

---

## Edge Case:

- Same length zaroori hai (given in question)
- Repeated characters ka mapping consistent hona chahiye

---

## ⚠️ Yaad Rakhne Ka Tarika (Mnemonic):

"**Ek-to-Ek mapping dono taraf se**" Agar ek character ka mapping change ho gaya — game over!

---

# Q23: [2259. Remove Digit From Number to Maximize Result](https://leetcode.com/problems/remove-digit-from-number-to-maximize-result)

**Difficulty:** Easy  
**Companies:** Goldman Sachs, Deloitte, D.E. Shaw, TCS, Amazon

Ye **Greedy Algorithm** aur **String Manipulation** ka logic check karne ke liye companies ka go-to question hai:

- **Goldman Sachs**: Unke coding rounds mein greedy-based problems aur string processing kaafi common hai.
- **Deloitte & TCS**: Competitive programming rounds (jaise TCS NQT) mein logical efficiency aur edge cases (multiple occurrences) test karne ke liye.
- **Amazon**: Junior SDE roles ke liye jahan wo candidate ki "Best Result" find karne ki approach (Brute Force vs Greedy) ko observe karte hain.

---

### Why This Question?

Iska main maqsad aapki **Optimization aur Edge Case Handling** ki samajh check karna hai:

1.  **Greedy Thinking**: Kya aap har occurrence par string naya banakar compare kar rahe hain (O(N²)), ya aap sirf ek loop mein check kar sakte hain ki kab digit remove karne se number bada hoga (O(N))?
2.  **Lexicographical Comparison**: Strings ko compare karke maximize karna seekhna—ye numerical logic se thoda alag hota hai.
3.  **Specific Condition**: Agar aapko `digit` milta hai aur uska agla character usse bada hai, toh wahi best spot hai remove karne ke liye—ye key intuition check kiya jata hai.

---

### Pro-Tip for Interviews

> **Note:** Interviewer ye follow-up questions daag sakta hai:
>
> - "Agar humein **Smallest** result chahiye hota, toh greedy condition kaise change hoti?"
> - "Kya aap isse bina extra string memory allocate kiye (in-place) solve kar sakte hain?"
> - "Iska harder version **'Remove K Digits'** (LeetCode 402) hai—kya aap usmein Monotonic Stack use kar payenge?"

##

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
