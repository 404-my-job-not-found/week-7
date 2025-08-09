const lengthOfLongestSubstring = (s) => {
  const charIndex = new Map();
  const length = s.length;
  let leftIndex = 0;
  let maxLength = 1;

  if (length === 0) return 0;

  charIndex.set(s[leftIndex], 0);

  for (let rightIndex = 1; rightIndex < length; rightIndex++) {
    const newChar = s[rightIndex];

    if (charIndex.has(newChar) && charIndex.get(newChar) >= leftIndex) {
      leftIndex = charIndex.get(newChar) + 1;
    } else {
      maxLength = Math.max(maxLength, rightIndex - leftIndex + 1);
    }
    charIndex.set(newChar, rightIndex);
  }

  return maxLength;
};
