function groupAnagrams(strs: string[]): string[][] {
  const result = new Map<string, string[]>();

  for (let str of strs) {
    const sortStr = [...str].sort().join("");
    const hasKey = result.get(sortStr);
    if (!hasKey) {
      result.set(sortStr, [str]);
    } else {
      hasKey.push(str);
    }
  }
  return Array.from(result.values());
}
