function titleToNumber(columnTitle: string): number {
	let ans = 0
	for (const ch of columnTitle) {
		ans = ans * 26 + (ch.charCodeAt(0) - 64)
	}
	return ans
}

titleToNumber("ZY")
