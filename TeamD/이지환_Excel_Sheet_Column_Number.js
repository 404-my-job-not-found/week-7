/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
    let result = 0;

    // 각 문자를 순회하면서 계산
    for (let i = 0; i < columnTitle.length; i++) {
        // 현재 자릿수의 값 계산
        result *= 26;
        // 현재 문자의 값을 더함 (A=1, B=2, ...)
        result += columnTitle.charCodeAt(i) - "A".charCodeAt(0) + 1;
    }

    return result;
};
const columnTitle = "AB";
titleToNumber(columnTitle);
