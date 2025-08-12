function titleToNumber(columnTitle: string): number {
  let result = 0;

  for (let i = 0; i < columnTitle.length; i++) {
    // columnTitle의 각 문자를 A=1, B=2, ..., Z=26으로 변환
    // A의 ASCII 코드 값은 65이므로, A를 1로 만들
    const charCode = columnTitle.charCodeAt(i) - "A".charCodeAt(0) + 1;
    result = result * 26 + charCode;
  }

  return result;
}
