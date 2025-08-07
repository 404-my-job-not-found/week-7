/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const map = new Map();

    for (let i = 0; i < strs.length; i++) {
        let sortedStr = strs[i].split("").sort().join("");

        if (map.has(sortedStr)) {
            map.get(sortedStr).push(strs[i]);
        } else {
            map.set(sortedStr, [strs[i]]);
        }
    }

    return Array.from(map.values()).sort((a, b) => a.length - b.length);
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

groupAnagrams(strs);
