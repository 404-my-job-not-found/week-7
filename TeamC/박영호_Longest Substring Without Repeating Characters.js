var lengthOfLongestSubstring = function (s) {
  let maxLength = 0;
  let start = 0;
  const charMap = new Map();

  for (let end = 0; end < s.length; end++) {
    if (charMap.has(s[end]) && charMap.get(s[end]) >= start) {
      start = charMap.get(s[end]) + 1;
    }

    charMap.set(s[end], end);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
};
