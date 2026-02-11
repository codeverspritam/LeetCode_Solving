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
