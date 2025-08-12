/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // 같은 문자를 갖는..
    const map = new Map();

    strs.map((str) => {
        const target = str.split("").sort().join("");
        
        map.has(target) ?  map.get(target).push(str) : map.set(target, [str]);
    });

    // console.log(map);

    return Array.from(map.values());
};