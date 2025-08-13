function titleToNumber(columnTitle: string): number {
  let ans = 0;
  for(let i=0; i<columnTitle.length; ++i) {
      if (i > 0) {
          ans *= 26;
      }
      ans += columnTitle.charCodeAt(i) - 64;
  }
  return ans;
};