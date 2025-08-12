// 첫 번째 시도
// 우선 투포인터로 하는 방법밖엔 생각나지 않아서 대충 간만 보겠습니다.
// 생각나는것은 left를 중심으로 두고 right++ 시켜 비교한 뒤, 만약 펠린드롬이라면 배열에 담아두고, 아니라면 그냥 넘어가게 하고,
// right가 끝나면 left를 --시켜서 한번더 right를 굴리고, 이걸 left가 0이 될때까지 반복하는 걸로 생각했습니다.
// 예를 들면
// "babad" 라면
// left = 2 부터 시작하고 right = 3 부터 시작해서 a, d를 left와 비교해서 안나오면 left를 -- 하고 right는 ++해서 다시 비교
// left = 1 부터 시작하고 right = 2 부터 시작해서 b, a, d 를 left 와 비교했을 떄 a가 나오면 result에 a ~ a인 aba를 넣고, 이걸 반복 작업
// 원하는 답은 가장 긴것이기에 긴 것을 찾는 로직까지 포함해서 작성했습니다.
// 그런데 이렇게 작성 했을 때 그저 left와 right만 같으면 전부 저장하기 때문에 길어지면 문제가 생깁니다.

// function longestPalindrome(s: string): any {
//   if (s.length === 1) return s;

//   let left = Math.floor(s.length / 2);
//   let result: string[] = [s[0]];

//   for (left; left >= 0; left--) {
//     for (let right = left + 1; right < s.length; right++) {
//       if (s[left] === s[right]) {
//         result.push(s.substring(left, right + 1));
//       }
//     }
//   }

//   console.log(result);

//   if (result.length === 0) return "";

//   let longest = result[0];
//   for (let i = 1; i < result.length; i++) {
//     if (result[i].length > longest.length) {
//       longest = result[i];
//     }
//   }

//   return longest;
// }

// 두 번째 시도
// 그렇다면 left ~ right를 비교한다고 했을 때 그 범위를 넓혀갈 때 조건들이 추가되면 될 것 같습니다...
// substring과 sorting 한 것을 비교해서 같으면 넣고, 아니면 넘어가는 식을 추가해봤습니다. 얼추 모양이 잡혀나갔는데
// 엄청 긴 케이스에서 걸렸습니다. 디버깅 힘들게
// 문제점은 중간부터 시작해서 였던 것 같습니다. 시간복잡도 떄문에 중간부터 시작해도 된다고 생각했는데, 중간보다 오른쪽일 수도 있으니... 이건 잘못 된게 맞는것 같습니다
// function longestPalindrome(s: string): any {
//   if (s.length === 1) return s;

//   let result: string[] = [s[0]];

//   for (let left = 0; left < s.length; left++) {
//     for (let right = left + 1; right < s.length; right++) {
//       const subString = s.substring(left, right + 1);
//       if (s[left] === s[right] && subString === subString.split("").reverse().join("")) {
//         result.push(s.substring(left, right + 1));
//       }
//     }
//   }

//   console.log(result);

//   if (result.length === 0) return "";

//   let longest = result[0];
//   for (let i = 1; i < result.length; i++) {
//     if (result[i].length > longest.length) {
//       longest = result[i];
//     }
//   }

//   return longest;
// }

// 세 번째 시도
// 그래서 left를 처음부터 했는데 이건 누가봐도 오래걸릴 거같습니다 그래서 timeError만 났습니다
// 아예 다른 방법을 생각해야 겠네요
// function longestPalindrome(s: string): any {
//   if (s.length === 1) return s;

//   let result: string[] = [s[0]];

//   for (let left = 0; left < s.length; left++) {
//     for (let right = left + 1; right < s.length; right++) {
//       const subString = s.substring(left, right + 1);
//       if (s[left] === s[right] && subString === subString.split("").reverse().join("")) {
//         result.push(s.substring(left, right + 1));
//       }
//     }
//   }

//   console.log(result);

//   if (result.length === 0) return "";

//   let longest = result[0];
//   for (let i = 1; i < result.length; i++) {
//     if (result[i].length > longest.length) {
//       longest = result[i];
//     }
//   }

//   return longest;
// }

// 네 번째 시도
// 초반에 작성했던 건 투포인터가 아닌 완전 탐색이였습니다...
// 제대로 된 투포인터는 두개의 포인터가 첫번째 인덱스를 가리키고 인덱스가 늘어나면서 left right를 비교해야하는데
// 인덱스는 안늘어나고 처음 중앙에서만 시작해서 그랬던 것 같습니다...
// 그래서 투포인터로 다시 작성했습니다.
// 근데 또 문제가 생겼습니다... "abba"같은 경우 홀수와 짝수 구분을 안하면 비교를 bb까지만 하고 끝나버립니다.
// 그래서 홀수와 짝수일때는 right에 +1를 해줘야 합니다.
// function longestPalindrome(s: string): any {
//   if (s.length === 1) return s;
//   let long = "";

//   for (let center = 0; center < s.length; center++) {
//     let left = center;
//     let right = center;
//     while (left >= 0 && right < s.length && s[left] === s[right]) {
//       if (right - left + 1 > long.length) {
//         long = s.substring(left, right + 1);
//       }
//       left--;
//       right++;
//     }
//   }

//   return long;
// }

// 다섯 번째 시도
function longestPalindrome(s: string): any {
  if (s.length === 1) return s;
  let long = "";

  function checkPalindrome(left: number, right: number) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > long.length) {
        long = s.substring(left, right + 1);
      }
      left--;
      right++;
    }
  }

  for (let center = 0; center < s.length; center++) {
    checkPalindrome(center, center);
    checkPalindrome(center, center + 1);
  }

  return long;
}

console.log(longestPalindrome("abba")); // "abba"
console.log(longestPalindrome("babad")); // "bab" or "aba"
console.log(longestPalindrome("cbbd")); // "bb"
console.log(longestPalindrome("aasddwqwfdfeeq")); // "fdf or wqw "
console.log(longestPalindrome("a")); // "a"
console.log(longestPalindrome("ac")); // "a"
console.log(longestPalindrome("acb")); // "a"
console.log(longestPalindrome("aacabdkacaa")); // "aca"
console.log(
  longestPalindrome(
    "jglknendplocymmvwtoxvebkekzfdhykknufqdkntnqvgfbahsljkobhbxkvyictzkqjqydczuxjkgecdyhixdttxfqmgksrkyvopwprsgoszftuhawflzjyuyrujrxluhzjvbflxgcovilthvuihzttzithnsqbdxtafxrfrblulsakrahulwthhbjcslceewxfxtavljpimaqqlcbrdgtgjryjytgxljxtravwdlnrrauxplempnbfeusgtqzjtzshwieutxdytlrrqvyemlyzolhbkzhyfyttevqnfvmpqjngcnazmaagwihxrhmcibyfkccyrqwnzlzqeuenhwlzhbxqxerfifzncimwqsfatudjihtumrtjtggzleovihifxufvwqeimbxvzlxwcsknksogsbwwdlwulnetdysvsfkonggeedtshxqkgbhoscjgpiel"
  )
); // "sknks"
