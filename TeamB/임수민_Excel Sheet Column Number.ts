// charCodeAt은 문자열의 각 문자를 유니 코드로 변환해주는데,
// A = 65 ~ Z = 90까지 나오고 A ~ Z까지 1 ~ 26까지 나옵니다.
// A가 1부터 시작되려면 64를 뺴줘야합니다
// 예시
// A => 'A'.charCodeAt(0) = 65 - 64 = 1
// B => 'B'.charCodeAt(0) = 66 - 64 = 2
// ...
// Z => 'Z'.charCodeAt(0) = 90 - 64 = 26
// 그 뒤에 Math.pow(26, columnTitle.length - i - 1)을 곱해주면 됩니다.
// 예시
// ABC = A×26² + B×26¹ + C×26⁰
//     = 1×676 + 2×26 + 3×1
//     = 676 + 52 + 3
//     = 731

// 예시

function titleToNumber(columnTitle: string): number {
  return [...columnTitle].reduce(
    (acc, cur, i) => (cur.charCodeAt(0) - 64) * Math.pow(26, columnTitle.length - i - 1) + acc,
    0
  );
}

console.log(titleToNumber("A")); // 1
console.log(titleToNumber("AB")); // 28
console.log(titleToNumber("ZY")); // 701
console.log(titleToNumber("ABC")); // 731
