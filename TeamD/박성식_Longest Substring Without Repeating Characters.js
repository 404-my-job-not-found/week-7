/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxLen = 0;
  let set = new Set();
  let start = 0,
    end = 0;

  while (end < s.length) {
    if (set.has(s[end])) {
      set.delete(s[start]);
      start++;
    } else {
      set.add(s[end]);
      end++;
      maxLen = Math.max(maxLen, end - start);
    }
  }

  return maxLen;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
