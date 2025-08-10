function longestPalindrome(s: string): string {
    if (s.length < 2) return s;
  
    let start = 0;
    let maxLength = 1;
  
    const expand = (left: number, right: number) => {
      while (left >= 0 && right < s.length && s[left] === s[right]) {
        const length = right - left + 1;
        if (length > maxLength) {
            maxLength = length;
          start = left;
        }
        left--; 
        right++;
      }
    };
  
    for (let i = 0; i < s.length; i++) {
      // 홀수 길이 
      expand(i, i);
      // 짝수 길이 
      expand(i, i + 1);
    }
  
    return s.slice(start, start + maxLength);
  }