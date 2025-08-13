function longestPalindrome(s: string): string {
	const n = s.length
	if (n < 2) return s

	let start = 0,
		end = 0

	// [L, R]에서 좌우로 가능한 만큼 확장하여 최종 팰린드롬 구간을 반환
	const expand = (L: number, R: number) => {
		while (L >= 0 && R < n && s[L] === s[R]) {
			L--
			R++
		}
		// 탈출 시점에 L, R은 한 칸 넘어간 상태 → 실제 구간은 [L+1, R-1]
		return [L + 1, R - 1] as const
	}

	for (let i = 0; i < n; i++) {
		// 홀수 길이 중심
		const [l1, r1] = expand(i, i)
		// 짝수 길이 중심
		const [l2, r2] = expand(i, i + 1)

		// 더 긴 구간으로 갱신
		if (r1 - l1 > end - start) {
			start = l1
			end = r1
		}
		if (r2 - l2 > end - start) {
			start = l2
			end = r2
		}
	}

	return s.slice(start, end + 1)
}
