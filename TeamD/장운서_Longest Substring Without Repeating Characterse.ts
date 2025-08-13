function lengthOfLongestSubstring(s: string): number {
	const lastIndex = new Map<string, number>()
	let l = 0
	let maxLen = 0

	for (let r = 0; r < s.length; r++) {
		const ch = s[r]
		// console.log(ch)

		if (lastIndex.has(ch) && (lastIndex.get(ch) as number) >= l) {
			l = (lastIndex.get(ch) as number)! + 1
		}

		// 마지막 위치 갱신
		lastIndex.set(ch, r)

		maxLen = Math.max(maxLen, r - l + 1)
	}

	console.log(lastIndex)
	return maxLen
}

lengthOfLongestSubstring("abcabcbb")
