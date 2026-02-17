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
