/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let anagramsMap = new Map();

  for (let i = 0; i < strs.length; i++) {
    //문자열 배열로 변환 후 정렬 시키고 다시 문자열로 변환
    let sorted = strs[i].split("").sort().join("");

    if (!anagramsMap.has(sorted)) {
      anagramsMap.set(sorted, []);
    }
    anagramsMap.get(sorted).push(strs[i]);
  }

  return Array.from(anagramsMap.values());
};
