function groupAnagrams(strs: string[]): string[][] {
	const map = new Map<string, string[]>()
	for (const word of strs) {
		const key = word.split("").sort().join("") // 정렬 후 key 생성
		if (!map.has(key)) {
			map.set(key, [])
		}
		map.get(key)!.push(word)
	}
	console.log(map)
	return Array.from(map.values())
}

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
groupAnagrams(strs)
