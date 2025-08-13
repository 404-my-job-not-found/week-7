function lengthOfLongestSubstring(s: string): number {
  if (s === "") return 0;

  let str = s[0];
  let num = str.length;

  for (let i = 1; i < s.length; i++) {
    const repeatIndex = str.indexOf(s[i]);
    if (repeatIndex === -1) {
      str += s[i];
    } else {
      str = str.slice(repeatIndex + 1) + s[i];
    }
    if (str.length > num) num = str.length;
  }

  return num;
}
