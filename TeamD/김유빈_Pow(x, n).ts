function myPow(x: number, n: number): number {
  if (n === 0) return 1; // x^0 = 1
  if (n < 0) return 1 / myPow(x, -n); // 음수 지수 처리

  if (n % 2 === 0) {
    const half = myPow(x, n / 2); // 절반 제곱 계산
    return half * half;
  } else {
    return x * myPow(x, n - 1); // 홀수일 때 x 한 번 곱하고 나머지 처리
  }
}
