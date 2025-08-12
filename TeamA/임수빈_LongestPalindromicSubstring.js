/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length <= 1) return s;

  // 중심에서 좌우로 가능한 만큼 확장하고 [start, end] 반환
  function expand(l, r) {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      l--;
      r++;
    }
    // 한 번 더 넘어간 상태이므로 되돌린 구간이 실제 팰린드롬
    return [l + 1, r - 1];
  }

  let bestL = 0,
    bestR = 0;

  for (let i = 0; i < s.length; i++) {
    // 1) 홀수 길이 중심 (i)
    let [l1, r1] = expand(i, i);
    if (r1 - l1 > bestR - bestL) {
      bestL = l1;
      bestR = r1;
    }

    // 2) 짝수 길이 중심 (i, i+1)
    let [l2, r2] = expand(i, i + 1);
    if (r2 - l2 > bestR - bestL) {
      bestL = l2;
      bestR = r2;
    }
  }

  return s.slice(bestL, bestR + 1);
};
