/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // 어라..?
    // n, n+1 을 비교
    // targetArr, targetLengthArr;
    // targetArr에 해당 문자가 없으면 push
    // 있으면, targetArr.length push, targetArr 초기화, push i 
    // 나중에 math.max

    // let targetArr = [];
    // const lengthArr = [];
    // for(let i=0; i<s.length; i++) {
    //     if(targetArr.includes(s[i])) {
    //         lengthArr.push(targetArr.length);
    //         targetArr = [];
    //         targetArr.push(s[i]);
    //     }
    //     else {
    //         targetArr.push(s[i]);
    //     }
    // }


    // // 마지막 남은 길이 반영
    // if (targetArr.length > 0) {
    //     lengthArr.push(targetArr.length);
    // }

    // return Math.max(...lengthArr, 0);

    let maxLength = 0;
    let left = 0;

    const seen = new Set();

    for(let right = 0; right < s.length; right++) {
        // 현재 문자
        const currentChar = s[right];

        // 현재 문자가 이미 있으면, 왼쪽 포인터를 오른쪽으로 한 칸 이동
        while(seen.has(currentChar)) {
            seen.delete(s[left]);
            left++;
        }

        // 현재 문자를 추가
        seen.add(currentChar);

        // 최대 길이 갱신
        maxLength = Math.max(maxLength, right - left + 1); // 현재 문자열의 길이와 비교해서 갱신
    }   

    return maxLength;
};