/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    // 처음부터 반복하는 방법 X, 가운데(?)서 확인하는 방법
    // 투 포인터 방식(left, right)
    // 홀수, 짝수 팰린드롬 구분

    let longestStart = 0; // 시작 인덱스
    let longestLen = 0; // 길이

    // 팰린드롬 확인하는 함수
    const getPalindromic = (left, right) => {  
        // 
        while( (left >= 0 && right < s.length) && (s[left] === s[right]) ) {
            left -= 1;
            right += 1;
        }
        return [left + 1, right - (left + 1)];
    }
    
    
    for (let i = 0; i < s.length; i++) {
        // 홀수 길이 팰린드롬
        const [oddStart, oddLen] = getPalindromic(i, i);
        if (oddLen > longestLen) {
            longestStart = oddStart;
            longestLen = oddLen;
        }

        // 짝수 길이 팰린드롬
        const [evenStart, evenLen] = getPalindromic(i, i + 1);
        if (evenLen > longestLen) {
            longestStart = evenStart;
            longestLen = evenLen;
        }
    }

    return s.slice(longestStart, longestStart + longestLen);
};