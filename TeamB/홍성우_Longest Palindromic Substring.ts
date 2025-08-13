function longestPalindrome(s: string): string {
  const n = s.length;
  if (n < 2) return s;

  let start = 0;
  let end = 0;

  const expand = (l: number, r: number): [number, number] => {
    while (l >= 0 && r < n && s[l] === s[r]) {
      l--;
      r++;
    }

    return [l + 1, r - 1];
  };

  for (let i = 0; i < n; i++) {
    let [l1, r1] = expand(i, i);
    if (r1 - l1 > end - start) {
      start = l1;
      end = r1;
    }

    let [l2, r2] = expand(i, i + 1);
    if (r2 - l2 > end - start) {
      start = l2;
      end = r2;
    }
  }

  return s.slice(start, end + 1);
}
