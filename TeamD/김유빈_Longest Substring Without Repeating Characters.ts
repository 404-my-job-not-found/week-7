function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) return 0;

  let maxLength = 0;

  for (let i = 0; i < s.length; i++) {
    const seenChars: Set<string> = new Set();
    let currentLength = 0;

    // 현재 인덱스부터 시작하여 중복된 문자가 나올 때까지 길이를 계산
    for (let j = i; j < s.length; j++) {
      if (seenChars.has(s[j])) {
        break; // 중복된 문자가 발견되면 루프 종료
      }
      seenChars.add(s[j]);
      currentLength++;
    }

    maxLength = Math.max(maxLength, currentLength);
  }

  return maxLength;
}
