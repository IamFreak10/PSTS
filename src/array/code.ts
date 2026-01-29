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
  const first = strs[0];
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
/* Input: nums = [1,1,2]
Output: 2, nums = [1,2,_] */
function removeDuplicates(nums: number[]): number {
  if (nums.length === 0) return 0;
  let cnt = 0;
  for (let j = 1; j < nums.length; j++) {
    let now: number = nums[j];
    if (nums[cnt] !== now) {
      cnt++;
      nums[cnt] = now;
    }
  }
  return cnt+1;
}
// console.log(removeDuplicates([1, 1, 2]));


// intersection in array
function intersection(nums1: number[], nums2: number[]): number[] {
  let inter:Set<number>=new Set([...nums1].filter(x=>nums2.includes(x)))
  return[...inter]

  };  

  // Find the First and the last positon of a sorted array
// [5,7,7,8,8,10]
function searchRange(nums: number[], target: number): number[] {
  let low:number=0;
  let high:number=nums.length;

    
  while(low<=high){
    let mid=Math.floor((low+high)/2);
    if(nums[mid]===target){

      return[mid-1,mid+1];
    }else if(nums[mid]<target){
      low=mid+1;
    }else{
      high=mid-1;
    }
  }
  return[-1,-1];

};