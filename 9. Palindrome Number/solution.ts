/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  return (
    x >= 0 &&
    [...x.toString()].every((n, idx, arr) => n === arr[arr.length - idx - 1])
  );
}
// @lc code=end
