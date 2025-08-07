/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  if (strs.length === 1) return [strs];
  let map = new Map();

  for (const str of strs) {
    const sorted = str.split("").sort().join("");

    if (map.has(sorted)) {
      map.set(sorted, [...map.get(sorted), str]);
    } else {
      map.set(sorted, [str]);
    }
  }

  return [...map.values()];
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));
