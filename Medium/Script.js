/* Q 1 : Delete Node in a Linked List*/
// ✅ Step 1: Define ListNode
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

// ✅ Step 2: Define deleteNode function
function deleteNode(node) {
  node.val = node.next.val;
  node.next = node.next.next;
}

// ✅ Step 3: Utility to print the list
function printList(head) {
  const result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  console.log(result);
}

// ✅ Step 4: Create Linked List [4,5,1,9]
let node4 = new ListNode(9);
let node3 = new ListNode(1, node4);
let node2 = new ListNode(5, node3); // \U0001f448 this is the node we will delete
let node1 = new ListNode(4, node2); // head of the list

// ✅ Step 5: Delete node with value 5
deleteNode(node2);

// ✅ Step 6: Print final list
printList(node1); // Output: [4, 1, 9]

/*Q2 3Sum*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let result = [];
  nums.sort((a, b) => a - b); // Step 1: Sort the array

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip duplicate elements for i
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let total = nums[i] + nums[left] + nums[right];

      if (total === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;

        // Skip duplicates for left and right
        while (left < right && nums[left] === nums[left - 1]) left++;
        while (left < right && nums[right] === nums[right + 1]) right--;
      } else if (total < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
};

/*Q3: Memoize*/
/**
 * @param {Function} fn
 * @return {Function}
 */
// \U0001f501 Ek memoize function banaya ja raha hai jo kisi bhi function ko optimize karega
function memoize(fn) {
  // \U0001f9e0 Ek object banaya jismein sab purane result cache (yaad) karenge
  let cachedVal = {};

  // \U0001f4e6 Ab ek naya function return kar rahe jo original fn ko wrap karega
  return function (...args) {
    // \U0001f3af 'args' ke through jo bhi input aaye, usse val mein store kiya
    let val = args;

    // \U0001f50d Check kar rahe ki yeh input pehle se cache mein hai ya nahi
    if (val in cachedVal) {
      // ✅ Agar hai to direct cache se answer return kar do
      return cachedVal[val];
    } else {
      // \U0001f9ee Agar nahi hai to original function call karo aur result nikalo
      let result = fn(...args);

      // \U0001f4be Ab jo result aaya usko cache mein store kar lo
      cachedVal[val] = result;

      // \U0001f4e4 Final result return karo
      return result;
    }
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */

/*Q4: Promise Time Limit*/
/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
  // timeLimit ek function hai jo kisi bhi async function ko le raha hai (fn)
  // aur ek time limit (t milliseconds) set karta hai

  return async function (...args) {
    // Yahan hum ek naye function ko return kar rahe hain jo fn ko call karega

    let onSucess = fn(...args);
    // fn ko uske arguments ke saath call kiya
    // Yeh ek promise return karega

    let result = new Promise((res, rej) => {
      setTimeout(() => {
        rej("Time Limit Exceeded");
        // Agar fn time se complete nahi hua to is promise ko reject kar do
      }, t);
    });

    // Promise.race => jo bhi promise pehle complete (resolve/reject) karega, wahi final result hoga
    return Promise.race([onSucess, result]);
  };
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */

/*Q5: K Divisible Elements Subarrays */
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} p
 * @return {number}
 */
var countDistinct = function (nums, k, p) {
  let set = new Set();
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    let countDiv = 0;
    let subArr = [];

    for (let j = i; j < n; j++) {
      subArr.push(nums[j]);

      if (nums[j] % p === 0) countDiv++;

      if (countDiv > k) break; // invalid

      set.add(subArr.join(",")); // store as string for uniqueness
    }
  }

  return set.size;
};
