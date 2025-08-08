/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let set = new Set();
    let maxLength = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        // 중복된 문자를 발견하면, 중복이 없어질 때까지 left 이동
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        // 새로운 문자 추가
        set.add(s[right]);

        // 현재 윈도우 크기와 최대 길이 비교
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};

// const s = "pwwkew";
const s = "abcbsda";
lengthOfLongestSubstring(s);
