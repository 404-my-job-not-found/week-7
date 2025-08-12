function longestPalindrome(s: string): string {
  if (s.length < 2) return s;

  let longest = "";

  // s의 모든 부분 문자열을 검사
  for (let i = 0; i < s.length; i++) {
    // 홀수 길이의 팰린드롬 검사
    for (let j = i; j < s.length; j++) {
      // j - i + 1이 현재 longest보다 작거나 같으면 스킵
      if (j - i + 1 <= longest.length) continue;

      // 팰린드롬인지 확인
      if (isPalindrome(s, i, j)) {
        longest = s.substring(i, j + 1);
      }
    }
  }

  return longest;
}

function isPalindrome(s: string, left: number, right: number): boolean {
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
}
