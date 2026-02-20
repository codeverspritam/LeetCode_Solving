# Q 1 : [237. Delete Node in a Linked List](https://leetcode.com/problems/delete-node-in-a-linked-list)

**Difficulty:** Medium  
**Companies:** Microsoft, Apple, Google, Amazon, Adobe

Ye **Linked List** ke "out-of-the-box" thinking aur pointer manipulation ko test karne ke liye ek classic interview question hai:

- **Microsoft & Apple**: Unke interviews mein aksar basic data structures ko "twist" karke pucha jata hai, jahan traditional head-traversal kaam nahi karta.
- **Google & Amazon**: Entry-level software engineer roles mein aapki problem-solving approach aur constraints ke andar kaam karne ki ability check karne ke liye.
- **Adobe & Samsung**: Linked list ki memory allocation aur node deletion logic ki basics verify karne ke liye.

---

### Why This Question?

Iska main maqsad aapki **Creative Problem Solving** aur constraints handle karne ki samajh check karna hai:

1.  **Thinking Outside the Box**: Isme `head` nahi diya gaya hai, toh aap traditional way mein pichle (previous) node tak nahi pahunch sakte.
2.  **Value Swapping vs. Deletion**: Kya aap ye samajh sakte hain ki node ko physically delete karne ke bajaye, next node ka data copy karke us node ko "skip" karna hi solution hai?
3.  **Pointer Manipulation**: `node.next = node.next.next` ka concept aur memory pointers ki handle karne ki clarity.

---

### Pro-Tip for Interviews

> **Note:** Interviewer ye follow-up questions daag sakta hai:
>
> - "Kya ye approach kaam karegi agar delete hone wala node **Last Node (Tail)** ho?" (Answer: No, is problem mein specifically mention hota hai ki node tail nahi hai.)
> - "Is solution ki **Time aur Space Complexity** kya hai?" (Answer: O(1) Time and O(1) Space.)
> - "Agar humein actually memory free karni ho (in C++), toh kya precautions lene honge?"

##

<!-- description:start -->

<p>There is a singly-linked list <code>head</code> and we want to delete a node <code>node</code> in it.</p>

<p>You are given the node to be deleted <code>node</code>. You will <strong>not be given access</strong> to the first node of <code>head</code>.</p>

<p>All the values of the linked list are <strong>unique</strong>, and it is guaranteed that the given node <code>node</code> is not the last node in the linked list.</p>

<p>Delete the given node. Note that by deleting the node, we do not mean removing it from memory. We mean:</p>

<ul>
	<li>The value of the given node should not exist in the linked list.</li>
	<li>The number of nodes in the linked list should decrease by one.</li>
	<li>All the values before <code>node</code> should be in the same order.</li>
	<li>All the values after <code>node</code> should be in the same order.</li>
</ul>

<p><strong>Custom testing:</strong></p>

<ul>
	<li>For the input, you should provide the entire linked list <code>head</code> and the node to be given <code>node</code>. <code>node</code> should not be the last node of the list and should be an actual node in the list.</li>
	<li>We will build the linked list and pass the node to your function.</li>
	<li>The output will be the entire list after calling your function.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0200-0299/0237.Delete%20Node%20in%20a%20Linked%20List/images/node1.jpg" style="width: 400px; height: 286px;" />
<pre>
<strong>Input:</strong> head = [4,5,1,9], node = 5
<strong>Output:</strong> [4,1,9]
<strong>Explanation: </strong>You are given the second node with value 5, the linked list should become 4 -&gt; 1 -&gt; 9 after calling your function.
</pre>

<p><strong class="example">Example 2:</strong></p>
<img alt="" src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/0200-0299/0237.Delete%20Node%20in%20a%20Linked%20List/images/node2.jpg" style="width: 400px; height: 315px;" />
<pre>
<strong>Input:</strong> head = [4,5,1,9], node = 1
<strong>Output:</strong> [4,5,9]
<strong>Explanation: </strong>You are given the third node with value 1, the linked list should become 4 -&gt; 5 -&gt; 9 after calling your function.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li>The number of the nodes in the given list is in the range <code>[2, 1000]</code>.</li>
	<li><code>-1000 &lt;= Node.val &lt;= 1000</code></li>
	<li>The value of each node in the list is <strong>unique</strong>.</li>
	<li>The <code>node</code> to be deleted is <strong>in the list</strong> and is <strong>not a tail</strong> node.</li>
</ul>

---

# Q2: [15. 3Sum](https://leetcode.com/problems/3sum)

**Difficulty:** Medium  
**Companies:** Meta, Amazon, Microsoft, Google, Apple

Ye **Array** aur **Two-Pointer** pattern ka sabse iconic question hai, jo top-tier companies ka absolute favorite hai:

- **Meta (Facebook)**: Ye unke interview bank mein top-rated sawal hai. Wo check karte hain ki aap $O(N^2)$ solution se better optimize kar sakte hain ya nahi.
- **Amazon & Microsoft**: Array manipulation aur "Duplicate Handling" ki skills test karne ke liye ye question bar-baar pucha jata hai.
- **Google**: Coding rounds mein efficiency aur sorted vs unsorted arrays ke tradeoffs discuss karne ke liye iska use hota hai.

---

### Why This Question?

Iska main maqsad aapki **Optimization aur Edge Case** handling check karna hai:

1.  **Avoiding Duplicates**: Sabse bada challenge results mein duplicate triplets ko avoid karna hai—isliye `Sorting` aur `skip logic` yahan crucial hai.
2.  **Two-Pointer Strategy**: $O(N^3)$ (Brute Force) se $O(N^2)$ (Two-Pointer) par jump karna aapki complexity analysis ki samajh dikhata hai.
3.  **Space-Time Tradeoff**: Kya aap extra `Hashset` use karke space kharch karenge, ya `Sorting` use karke space optimize karenge?

---

### Pro-Tip for Interviews

> **Note:** Interviewer ye follow-up questions daag sakta hai:
>
> - "Agar array sorted na ho aur hum sort nahi kar sakte, toh kya **Hashing** se solve karoge?"
> - "Kya aap **'3Sum Closest'** ya **'4Sum'** ke liye isi logic ko expand kar sakte hain?"
> - "Duplicates handle karte waqt `while` loops ka use pointers ko move karne ke liye kyun zaroori hai?"

##

<!-- description:start -->

<p>Given an integer array nums, return all the triplets <code>[nums[i], nums[j], nums[k]]</code> such that <code>i != j</code>, <code>i != k</code>, and <code>j != k</code>, and <code>nums[i] + nums[j] + nums[k] == 0</code>.</p>

<p>Notice that the solution set must not contain duplicate triplets.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong> nums = [-1,0,1,2,-1,-4]
<strong>Output:</strong> [[-1,-1,2],[-1,0,1]]
<strong>Explanation:</strong> 
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].
Notice that the order of the output and the order of the triplets does not matter.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> nums = [0,1,1]
<strong>Output:</strong> []
<strong>Explanation:</strong> The only possible triplet does not sum up to 0.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:</strong> nums = [0,0,0]
<strong>Output:</strong> [[0,0,0]]
<strong>Explanation:</strong> The only possible triplet sums up to 0.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>3 &lt;= nums.length &lt;= 3000</code></li>
	<li><code>-10<sup>5</sup> &lt;= nums[i] &lt;= 10<sup>5</sup></code></li>
</ul>

---

# Q3: [2623. Memoize](https://leetcode.com/problems/memoize)

**Difficulty:** Medium  
**Companies:** Amazon, Google, Meta, Uber

Ye JavaScript/TypeScript interviews mein **Performance Optimization** aur **Caching** ke concepts test karne ke liye pucha jata hai:

- **Google & Meta**: High-performance applications ke liye "Expensive Computations" ko kaise optimize kiya jaye, ye check karne ke liye.
- **Amazon**: Front-end rounds mein heavy calculations ya API responses ko cache karne ki logic verify karne ke liye.
- **Uber**: Jahan real-time data processing aur redundant function calls se bachna critical hota hai.

---

### Why This Question?

Iska main maqsad aapki **Functional Programming** aur **Memory Management** ki samajh check karna hai:

1.  **Closures**: Kya aap ek `Map` ya `Object` ko function ke scope mein maintain kar sakte hain jo calls ke results ko "yaad" (store) rakhe?
2.  **Key Serialization**: `...args` ko string mein convert karke (jaise `JSON.stringify`) unique keys banana taaki cache lookup sahi ho.
3.  **Higher-Order Functions**: Ek naya function return karna jo original function ki functionality ko "enhance" kare bina usey modify kiye.

---

### Pro-Tip for Interviews

> **Note:** Interviewer ye follow-up questions daag sakta hai:
>
> - "Agar function ko `objects` as arguments mil rahe hain, toh kya `JSON.stringify` ka use safe hai?"
> - "Memory leak se bachne ke liye kya hum **`WeakMap`** ka use kar sakte hain?"
> - "Agar humein cache ki size limit karni ho (LRU Cache), toh aap logic mein kya change karenge?"

##

<!-- description:start -->

<p>Given a function <code>fn</code>, return a&nbsp;<strong>memoized</strong>&nbsp;version of that function.</p>

<p>A&nbsp;<strong>memoized&nbsp;</strong>function is a function that will never be called twice with&nbsp;the same inputs. Instead it will return&nbsp;a cached value.</p>

<p>You can assume there are&nbsp;<strong>3&nbsp;</strong>possible input functions:&nbsp;<code>sum</code><strong>, </strong><code>fib</code><strong>,&nbsp;</strong>and&nbsp;<code>factorial</code><strong>.</strong></p>

<ul>
	<li><code>sum</code><strong>&nbsp;</strong>accepts two integers&nbsp;<code>a</code> and <code>b</code> and returns <code>a + b</code>.&nbsp;Assume that if a value has already been cached for the arguments <code>(b, a)</code> where <code>a != b</code>, it cannot be used for the arguments <code>(a, b)</code>. For example, if the arguments are <code>(3, 2)</code> and <code>(2, 3)</code>, two separate calls should be made.</li>
	<li><code>fib</code><strong>&nbsp;</strong>accepts a&nbsp;single integer&nbsp;<code>n</code> and&nbsp;returns&nbsp;<code>1</code> if <font face="monospace"><code>n &lt;= 1</code> </font>or<font face="monospace">&nbsp;<code>fib(n - 1) + fib(n - 2)</code>&nbsp;</font>otherwise.</li>
	<li><code>factorial</code>&nbsp;accepts a single integer&nbsp;<code>n</code> and returns <code>1</code>&nbsp;if&nbsp;<code>n &lt;= 1</code>&nbsp;or&nbsp;<code>factorial(n - 1) * n</code>&nbsp;otherwise.</li>
</ul>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre>
<strong>Input:</strong>
fnName = &quot;sum&quot;
actions = [&quot;call&quot;,&quot;call&quot;,&quot;getCallCount&quot;,&quot;call&quot;,&quot;getCallCount&quot;]
values = [[2,2],[2,2],[],[1,2],[]]
<strong>Output:</strong> [4,4,1,3,2]
<strong>Explanation:</strong>
const sum = (a, b) =&gt; a + b;
const memoizedSum = memoize(sum);
memoizedSum(2, 2); // &quot;call&quot; - returns 4. sum() was called as (2, 2) was not seen before.
memoizedSum(2, 2); // &quot;call&quot; - returns 4. However sum() was not called because the same inputs were seen before.
// &quot;getCallCount&quot; - total call count: 1
memoizedSum(1, 2); // &quot;call&quot; - returns 3. sum() was called as (1, 2) was not seen before.
// &quot;getCallCount&quot; - total call count: 2
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:
</strong>fnName = &quot;factorial&quot;
actions = [&quot;call&quot;,&quot;call&quot;,&quot;call&quot;,&quot;getCallCount&quot;,&quot;call&quot;,&quot;getCallCount&quot;]
values = [[2],[3],[2],[],[3],[]]
<strong>Output:</strong> [2,6,2,2,6,2]
<strong>Explanation:</strong>
const factorial = (n) =&gt; (n &lt;= 1) ? 1 : (n * factorial(n - 1));
const memoFactorial = memoize(factorial);
memoFactorial(2); // &quot;call&quot; - returns 2.
memoFactorial(3); // &quot;call&quot; - returns 6.
memoFactorial(2); // &quot;call&quot; - returns 2. However factorial was not called because 2 was seen before.
// &quot;getCallCount&quot; - total call count: 2
memoFactorial(3); // &quot;call&quot; - returns 6. However factorial was not called because 3 was seen before.
// &quot;getCallCount&quot; - total call count: 2
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre>
<strong>Input:
</strong>fnName = &quot;fib&quot;
actions = [&quot;call&quot;,&quot;getCallCount&quot;]
values = [[5],[]]
<strong>Output:</strong> [8,1]
<strong>Explanation:
</strong>fib(5) = 8 // &quot;call&quot;
// &quot;getCallCount&quot; - total call count: 1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= a, b &lt;= 10<sup>5</sup></code></li>
	<li><code>1 &lt;= n &lt;= 10</code></li>
	<li><code>1 &lt;= actions.length &lt;= 10<sup>5</sup></code></li>
	<li><code>actions.length === values.length</code></li>
	<li><code>actions[i]</code> is one of &quot;call&quot; and &quot;getCallCount&quot;</li>
	<li><code>fnName</code> is one of &quot;sum&quot;, &quot;factorial&quot; and&nbsp;&quot;fib&quot;</li>
</ul>

## Notes

- memoize() ek higher-order function hai (jo ek function ko input leta hai).

- Yeh ek cache object banata hai jismein pehle se calculated results store hote hain.

- Agar same input dobara aaye to yeh dobara function call nahi karta because balki direct memory se result deta hai.

- Yeh technique performance boost ke liye hoti hai or especially jab function heavy calculation kare.
