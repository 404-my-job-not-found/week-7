/**
 * @param {string} s
 * @return {string}
 */
const searchPalind = (s, left, right) => {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }

  return s.slice(left + 1, right);
};

var longestPalindrome = function (s) {
  // 두번쨰 시도
  if (s.length <= 1) return s;

  let longest = "";

  for (let i = 0; i < s.length; i++) {
    const oddPalindrome = searchPalind(s, i, i);
    const evenPalindrome = searchPalind(s, i, i + 1);

    const currentLongest =
      oddPalindrome.length > evenPalindrome.length
        ? oddPalindrome
        : evenPalindrome;

    if (currentLongest.length > longest.length) longest = currentLongest;
  }

  return longest;

  // 첫번째 시도
  // let result = "";
  // let set = new Set();
  // let start = 0,
  //   end = 0;
  // if (s.length === 1) return s;
  // while (end < s.length) {
  //   const str = s.slice(start, end + 1);
  //   if (str === str.split("").reverse().join("") && str.length > 1) {
  //     return s.slice(start, end + 1);
  //   }
  //   if (set.has(s[end])) {
  //     set.delete(s[start]);
  //     start++;
  //   } else {
  //     set.add(s[end]);
  //     end++;
  //   }
  // }
};

console.log(longestPalindrome("babad")); // "bab"
console.log(longestPalindrome("cbbd")); // "bb"
console.log(longestPalindrome("a")); // "a"
console.log(longestPalindrome("ac")); // "a"
