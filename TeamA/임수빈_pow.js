/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

//되겠냐?
var myPow1 = function (x, n) {
  return Math.pow(x, n);
};

var myPow2 = function (x, n) {
  let result = 1;

  // n이 음수라면 x를 뒤집고 지수를 양수로 변환
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  while (n > 0) {
    // 현재 n이 홀수라면 result에 x를 곱해줌
    // → n의 현재 비트(LSB)가 1일 때 해당 x를 결과에 포함
    if (n % 2 === 1) {
      result *= x;
    }

    // 밑을 제곱 (다음 비트를 처리하기 위해)
    x *= x;

    // 지수를 절반으로 줄임 (비트를 오른쪽으로 이동시키는 효과)
    n = Math.floor(n / 2);
  }

  return result;
};
