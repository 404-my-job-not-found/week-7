/**
 * @param {string} s
 * @return {number}
 */
// 슬라이딩 윈도우 + 중복 제거는 Set 씀
// 중복 발견 시 left를 한 칸씩 이동하며 Set에서 제거
var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  let left = 0,
    ans = 0;

  for (let right = 0; right < s.length; right++) {
    const ch = s[right];

    // 중복이 없어질 때까지 left를 전진하며 Set에서 제거
    while (set.has(ch)) {
      set.delete(s[left]);
      left++;
    }
    set.add(ch);
    ans = Math.max(ans, right - left + 1);
  }

  return ans;
};
