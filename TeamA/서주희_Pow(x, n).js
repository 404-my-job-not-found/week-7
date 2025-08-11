var myPow = function (x, n) {
  if (n === 0) return 1;
  // 음수 지수 처리
  let exp = Math.abs(n);
  let base = x;
  let result = 1;

  // 분할정복 (제곱승 빠르게)
  while (exp > 0) {
    if (exp % 2 === 1) result *= base; // 현재 비트가 1이면 결과에 곱함
    base *= base; // 밑은 제곱
    exp = Math.floor(exp / 2); // 지수는 절반
  }

  return n > 0 ? result : 1 / result;
};
