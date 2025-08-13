function longestPalindrome(s: string): string {
  if (s.length < 2) return s;

  let start = 0;
let maxLength = 1;

const expandAroundCenter = (left: number, right: number): [number, number] => {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return [left + 1, right - 1];
};

for (let i = 0; i < s.length - 1; i++) {
  // 홀수 길이 팰린드롬
  const [left1, right1] = expandAroundCenter(i, i);
  if (right1 - left1 + 1 > maxLength) {
    start = left1;
    maxLength = right1 - left1 + 1;
  }

  // 짝수 길이
  const [left2, right2] = expandAroundCenter(i, i + 1);
  if (right2 - left2 + 1 > maxLength) {
    start = left2;
    maxLength = right2 - left2 + 1;
  }
}

return s.substring(start, start + maxLength);
};