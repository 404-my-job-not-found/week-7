// 처음 풀이
var longestPalindrome = function (s) {
  const length = s.length;
  const halfLength = Math.floor(length / 2);
  let finalLeftIndex = 0,
    finalRightIndex = 0;

  if (length === 2) {
    if (s[0] === s[1]) {
      return s;
    } else {
      return s[0];
    }
  }

  const check = (leftIndex, rightIndex) => {
    if (leftIndex < 0 || rightIndex >= length) {
      return;
    }

    if (s[leftIndex] === s[rightIndex]) {
      if (finalRightIndex - finalLeftIndex < rightIndex - leftIndex) {
        finalLeftIndex = leftIndex;
        finalRightIndex = rightIndex;
      }
      check(leftIndex - 1, rightIndex + 1);
    } else {
      check(leftIndex - 1, leftIndex);
      check(rightIndex, rightIndex + 1);
    }
  };

  const leftIndex = s % 2 === 0 ? halfLength - 1 : halfLength;
  const rightIndex = halfLength;

  check(leftIndex, rightIndex);

  return s.slice(finalLeftIndex, finalRightIndex + 1);
};

// 정답 풀이
var longestPalindrome = function (s) {
  const n = s.length;
  if (n < 2) return s;

  let bestL = 0,
    bestR = 0;

  const check = (l, r) => {
    while (l >= 0 && r < n && s[l] === s[r]) {
      if (r - l > bestR - bestL) {
        bestL = l;
        bestR = r;
      }
      l--;
      r++;
    }
  };

  for (let i = 0; i < n; i++) {
    check(i, i); // 홀수 길이 중심
    check(i, i + 1); // 짝수 길이 중심
  }

  return s.slice(bestL, bestR + 1);
};
