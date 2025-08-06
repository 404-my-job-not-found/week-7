var groupAnagrams = function (strs) {
  const sortedStrs = new Map();
  const result = [];

  strs.sort();

  strs.forEach((str) => {
    const sortedStr = str.split('').sort().join('');

    if (sortedStrs.has(sortedStr)) {
      sortedStrs.get(sortedStr).push(str);
    } else {
      sortedStrs.set(sortedStr, [str]);
    }
  });

  sortedStrs.forEach((value) => {
    result.push(value);
  });

  return result.sort((a, b) => a.length - b.length);
};
