/**
 * @param {string} columnTitle
 * @return {number}
 */
// A~Z를 1~26으로 매핑
// 왼쪽부터 res = res * 26 + value 로 누적
// AB = 1*26 + 2 = 28
var titleToNumber = function (columnTitle) {
  let res = 0;

  for (let i = 0; i < columnTitle.length; i++) {
    // 'A'.charCodeAt(0) === 65
    // A -> 1, B -> 2, ..., Z -> 26
    const val = columnTitle.charCodeAt(i) - 64;
    res = res * 26 + val;
  }

  return res;
};
