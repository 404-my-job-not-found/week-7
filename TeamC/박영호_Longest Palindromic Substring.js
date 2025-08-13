var longestPalindrome = function (s) {
  if (!s || s.length < 2) return s;

  let start = 0;
  let maxLength = 1;

  for (let i = 0; i < s.length; i++) {
    let len1 = expandAroundCenter(s, i, i);
    let len2 = expandAroundCenter(s, i, i + 1);

    let currentMax = Math.max(len1, len2);

    if (currentMax > maxLength) {
      maxLength = currentMax;
      start = i - Math.floor((currentMax - 1) / 2);
    }
  }

  return s.substring(start, start + maxLength);
};

const expandAroundCenter = (s, left, right) => {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return right - left - 1;
};
