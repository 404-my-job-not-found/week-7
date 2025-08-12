function groupAnagrams(strs: string[]): string[][] {
  const anagrams: { [key: string]: string[] } = {};

  for (const str of strs) {
    // str을 정렬하여 키로 사용
    // 정렬된 문자열을 키로 사용하여 anagrams 객체에 그룹화
    const sortedStr = str.split("").sort().join("");
    if (!anagrams[sortedStr]) {
      anagrams[sortedStr] = [];
    }
    anagrams[sortedStr].push(str);
  }

  return Object.values(anagrams);
}
