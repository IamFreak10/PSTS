//! RUN: node ./src/array/code.ts

// LeetCode Two Sum
function twoSum(nums: number[], target: number): number[] {
  let map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i]!;
    if (map.has(complement)) {
      return [map.get(complement)!, i];
    }
    map.set(nums[i]!, i);
  }
  return [];
}
let nums = [2, 7, 11, 15],
  target = 9;
// console.log(twoSum(nums, target));
// Longest common prefix
function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return '';
  strs.sort();
  let prefix = '';
  const first= strs[0];
  const last = strs[strs.length - 1];
  const n = Math.min(first!.length, last!.length);

  for (let i = 0; i < n; i++) {
    
    if (first[i] === last[i]) {
      prefix += first[i];
    } else {
      break;
    }
  }
  return prefix;
}


