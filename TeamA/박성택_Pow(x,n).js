/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    // return Math.pow(x,n);
    // javascript로 구현한다면..

    // 핵심 아이디어
    // 단순히 x를 n번 곱하면 O(n) 시간이 걸립니다.
    // **분할 정복** 을 사용하면 O(log n) 시간에 해결할 수 있습니다.
    // n이 음수이면 xⁿ = 1 / x⁻ⁿ을 이용합니다.
    // n이 짝수면: xⁿ = (x²)ⁿ/²
    // n이 홀수면: xⁿ = x * (x²)ⁿ/²

    // 음수
    if(n < 0) {
        return 1 / myPow(x, -n)
    }
    // 종료
    if (n === 0) {
        return 1;
    }
    // 절반 계산
    const half = myPow(x, Math.floor(n / 2));

    // 짝수면 half * half, 홀수면 half * half * x
    if (n % 2 === 0) {
        return half * half;
    } else {
        return half * half * x;
    };

};