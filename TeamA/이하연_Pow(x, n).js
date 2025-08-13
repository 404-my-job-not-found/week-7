/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  // 음수 지수 처리: x^(-n) = 1 / (x^n)
  if (n < 0) {
    return 1 / myPow(x, -n);
  }

  // 엣지 처리
  if (n === 0) return 1; // x^0 = 1
  if (n === 1) return x; // x^1 = x

  // 절반으로 쪼개서 계산
  const half = myPow(x, Math.floor(n / 2));

  if (n % 2 === 0) {
    // 짝수 지수: x^n = (x^(n/2))^2
    return half * half;
  } else {
    // 홀수 지수: x^n = (x^(n/2))^2 * x
    return half * half * x;
  }
};
