function titleToNumber(columnTitle: string): number {
  let result = 0;
  let power = 0;
  for (let i = columnTitle.length - 1; i >= 0; i--) {
    const charCode = columnTitle.charCodeAt(i) - "A".charCodeAt(0) + 1;
    result += charCode * Math.pow(26, power);
    power++;
  }
  return result;
}
