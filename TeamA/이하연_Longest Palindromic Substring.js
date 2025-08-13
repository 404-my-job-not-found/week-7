/**
 * @param {string} s
 * @return {string}
 */
// 못 풂 ㅠㅠ
var longestPalindrome = function (s) {
  // 예외 처리: 빈 문자열 혹은 한 글자
  if (s.length < 2) return s;

  let start = 0; // 최장 팰린드롬의 시작 인덱스
  let maxLen = 1; // 최장 길이(최소 1)

  // 주어진 left, right에서 양쪽으로 확장하며 최장길이를 반환
  const expand = (l, r) => {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--;
      r++;
    }
    // 종료 시점에서 l, r은 유효 범위를 1칸 벗어나 있음
    // 실제 팰린드롬 구간은 (l+1 .. r-1)
    return r - l - 1; // 길이
  };

  for (let i = 0; i < s.length; i++) {
    // 1) 홀수 길이 중심 (i,i)
    const len1 = expand(i, i);
    // 2) 짝수 길이 중심 (i,i+1)
    const len2 = expand(i, i + 1);

    const len = Math.max(len1, len2);
    if (len > maxLen) {
      maxLen = len;
      // 현재 중심 i에서 길이 len의 팰린드롬 시작점 계산
      // 홀수/짝수에 상관없이 다음 식으로 통일 가능
      start = i - Math.floor((len - 1) / 2);
    }
  }

  return s.substring(start, start + maxLen);
};
