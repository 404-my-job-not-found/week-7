// 배열을 두개 만들어서 하나는 원본 배열을 저장하고(result) 하나는 sorting 된 배열(keys)을 저장할 수있게 초기화 했고,
// strs를 순회 하면서 sorting된 값을 key로 하여, keys배열에 같은 key가 존재 하지 않으면 keys배열에 key를 추가하고, result배열에 원본 str을 추가합니다.
// 이미 keys배열에 값이 존재 하면, result배열에서 keys배열의 인덱스를 찾아서 원본 배열을 추가한 뒤 배열을 반환하게 풀었습니다.

// 예시
// 입력: ["eat", "tea", "tan", "ate", "nat", "bat"]

// ### 단계별 실행 과정:
// 1단계: "eat" 처리
// - key = "aet" (정렬)
// - keys = ["aet"]
// - result = [["eat"]]
// <br>
// 2단계: "tea" 처리
// - key = "aet" (정렬)
// - keys.includes("aet") → true (이미 있음!)
// - result[0].push("tea")
// - result = [["eat", "tea"]]
// <br>
// 3단계: "tan" 처리
// - key = "ant" (정렬)
// - keys.includes("ant") → false (새로운 키)
// - keys = ["aet", "ant"]
// - result = [["eat", "tea"], ["tan"]]
// <br>
// 4단계: "ate" 처리
// - key = "aet" (정렬)
// - keys.includes("aet") → true (첫 번째 그룹)
// - result[0].push("ate")
// - result = [["eat", "tea", "ate"], ["tan"]]
// <br>
// 5단계: "nat" 처리
// - key = "ant" (정렬)
// - keys.includes("ant") → true (두 번째 그룹)
// - result[1].push("nat")
// - result = [["eat", "tea", "ate"], ["tan", "nat"]]
// <br>
// 6단계: "bat" 처리
// key = "abt" (정렬)
// keys.includes("abt") → false (새로운 키)
// keys = ["aet", "ant", "abt"]
// result = [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

function groupAnagrams(strs: string[]): string[][] {
  const result: string[][] = [];
  const keys: string[] = [];

  for (const s of strs) {
    const key = [...s].sort().join("");

    if (keys.includes(key)) {
      result[keys.indexOf(key)].push(s);
    } else {
      keys.push(key);
      result.push([s]);
    }
  }
  return result;
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
