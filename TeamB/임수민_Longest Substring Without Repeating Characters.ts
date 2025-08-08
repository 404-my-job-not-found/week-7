// 첫 번째 시도

// function lengthOfLongestSubstring(s: string): number {
//   let count: number = 1;
//   let left: number = 0;

//   const result: number[] = [];
//   console.log(s);
//   for (let right: number = 1; right < s.length; right++) {
//     console.log("count: ", count);
//     console.log("left: ", s[left], left);
//     console.log("right: ", s[right], right);
//     console.log("--------------------------------");
//     console.log(result);
//     if (s[left] !== s[right]) {
//       count += 1;
//       left = right;
//     } else {
//       result.push(count);
//       count = 1;
//     }
//   }

//   return Math.max(...result);
// }

// 두 번째 시도
// Set을 사용하여 중복문자를 없애는 방법으로 해봤습니다.
// 처음엔 maxLength 없이 count로 숫자를 ++ 해주는 형식으로 했지만 잘 안되더군요
// 그래서 maxLength를 따로 두고 중복문자 발견시 초기화 해주는 형식으로 했습니다.
// 여기선 "dvdf" 케이스에서 2가나와야하는데 3이나와서 실패했는데, 문제점을 찾는 것이 좀 오래걸렸습니다.
// 중복문자를 발견 시에는 newSet으로 다시 초기화를 해버리고 있었는데, 이럴 경우 이전문자를 다 버리게 되버리네요.
// 예를 들면
// [d,v,d,f]
//  ^ ^
//  L R
// result = [d,v]

// [d,v,d,f]
//  ^   ^
//  L   R
// result = []
// 원래는 여기에 v가 들어가 있어야 되는데 중복문자가 아닌 전체가 초기화 되어 v는 사라지고 d부터 다시 계산하게 되버리네요..

// function lengthOfLongestSubstring(s: string): any {
//   let result: Set<string> = new Set(s[0]);
//   let left: number = 0;
//   let maxLength: number = 1;

//   if (s === "") return 0;

//   for (let right: number = 1; right < s.length; right++) {
//     if (!result.has(s[right])) {
//       result.add(s[right]);
//       left = right;
//     } else {
//       result = new Set([s[right]]);
//     }
//     maxLength = Math.max(maxLength, result.size);
//   }

//   return maxLength;
// }

// 세 번째 시도
// if문 자체를 while문으로 바꿔줬습니다.
// result에 s[right] 즉 중복문자가 있으면 중복문자를 없애고 left를 증가시켜줍니다.
// 예시
// [d,v,d,f]
//  ^ ^
//  L R
// result = [d,v]

// [d,v,d,f]
//  ^   ^
//  L   R
// result = [v]
// 여기서 s[left]만 없애게 되니 두 번째 시도에서의 문제점은 해결이 됩니다.
function lengthOfLongestSubstring(s: string): any {
  let result: Set<string> = new Set(s[0]);
  let left: number = 0;
  let maxLength: number = 1;

  if (s === "") return 0;

  for (let right: number = 1; right < s.length; right++) {
    while (result.has(s[right])) {
      result.delete(s[left]);
      left++;
    }
    result.add(s[right]);
    maxLength = Math.max(maxLength, result.size);
  }

  return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring("au")); // 2
console.log(lengthOfLongestSubstring("aab")); // 2
console.log(lengthOfLongestSubstring("ckilbkd")); // 5
console.log(lengthOfLongestSubstring("dvdf")); // 3
console.log(lengthOfLongestSubstring("qrsvbspk")); // 5
