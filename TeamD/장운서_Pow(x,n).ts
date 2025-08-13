function myPow(x: number, n: number): number {
	// 음수 지수 처리: x^{-n} = (1/x)^n
	let base = x
	let exp = n

	if (exp < 0) {
		base = 1 / base
		// Math.abs로 양수화 (−2^31도 안전하게 처리됨)
		exp = Math.abs(exp)
	}

	let result = 1

	// 이진 거듭제곱
	while (exp > 0) {
		if (exp % 2 === 1) result *= base // 홀수 비트가 1이면 곱하기
		base *= base // 밑을 제곱
		exp = Math.floor(exp / 2) // 지수 반으로
	}

	return result
}

// 예시: 2^10 = 1024
console.log(myPow(2, 10)) // 1024
