// 첫번 째 시도
// 그냥 제곱 해봤는데 Infinity가 나오네요
// 큰일 났습니다.
// function myPow(x: number, n: number): number {
//   for (let i = 0; i < n; i++) {
//     x *= x;
//   }
//   return x;
// }

// 두번 째 시도
// 우선 스택 오버플로우를 방지하기 위해 예외처리 먼저 고민했습니다.
// 지수가 0 이면 1을 리턴, 지수가 1이면 계산할 필요없이 바로 x를 리턴
// 지수가 음수면 1/x^이므로 x를 1/x로 바꾸고 지수를 양수로 바꿨습니다.
// 1.00000 2147483647 에서 time limit exceeded 나와서 fail 났습니다.
// function myPow(x: number, n: number): number {
//   if (n === 0) return 1;
//   if (n === 1) return x;
//   if (n < 0) {
//     x = 1 /x;
//     n = -n;
//   }

//   let result = 1;
//   for (let i = 0; i < n; i++) {
//       result *= x;
//   }

//   return result;
// }

// 세번 째 시도
// for문을 돌리는 대신 재귀를 사용해봤습니다.
// 지수가 홀수일 때와 짝수일 때를 나누어서 계산하고
// 지수가 홀수일 때는 지수를 1 줄이고 결과를 곱하고, 지수가 짝수일 때는 지수를 2로 나누고 결과를 제곱했습니다.
// 예시
// 2^10 = 2^5 * 2^5
// 2^5 = 2^2 * 2^2 * 2
// 2^2 = 2^1 * 2^1
// 2^1 = 2^0 * 2^0 * 2
// 2^0 = 1
function myPow(x: number, n: number): number {
  if (n === 0) return 1;
  if (n === 1) return x;
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  if (n % 2 === 0) {
    return myPow(x * x, n / 2);
  } else {
    return x * myPow(x * x, (n - 1) / 2);
  }
}

console.log(myPow(2, 0)); // 1
console.log(myPow(2, 1)); // 2
console.log(myPow(2, 2)); // 4
console.log(myPow(2, 3)); // 8
console.log(myPow(2, -2)); // 0.25

console.log(myPow(2.0, 10)); // 1024.00000
console.log(myPow(2.1, 3)); // 9.26100
console.log(myPow(2.0, -2)); // 0.25000

console.log(Math.pow(2.0, 10)); // 1024.00000
console.log(Math.pow(2, 3)); // 8
console.log(Math.pow(2, -2)); // 0.25
