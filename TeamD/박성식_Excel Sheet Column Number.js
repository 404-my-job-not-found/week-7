/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let result = 0;

  for (let i = 0; i < columnTitle.length; i++) {
    if (i === columnTitle.length - 1) {
      result += columnTitle[i].charCodeAt() - 64;
    } else {
      result +=
        ((columnTitle[i].charCodeAt() - 64) % 27) *
        Math.pow(26, columnTitle.length - i - 1);
    }
  }

  return result;
};

console.log(titleToNumber("A")); // 1
console.log(titleToNumber("AB")); // 28
console.log(titleToNumber("ZY")); // 701 -> 26 * 26 + 25
