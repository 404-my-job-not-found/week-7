/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // Map<정렬된키, 같은 키를 가진 단어들의 배열>
  const map = new Map();

  for (const s of strs) {
    // 단어의 문자들을 정렬하여 대표 키 생성
    // eat -> aet
    const key = s.split("").sort().join("");

    // 같은 키를 가진 그룹(배열)에 현재 단어를 push
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(s);
  }

  // 해시맵의 값들(각 그룹 배열)만 추출하여 반환
  return Array.from(map.values());
};
