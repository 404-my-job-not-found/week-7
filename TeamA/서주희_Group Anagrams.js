var groupAnagrams = function (strs) {
  const sortedStrs = new Map();

  strs.forEach((str) => {
    const sortedStr = str.split('').sort().join('');

    if (sortedStrs.has(sortedStr)) {
      sortedStrs.get(sortedStr).push(str);
    } else {
      sortedStrs.set(sortedStr, [str]);
    }
  });

  return Array.from(sortedStrs.values());
};
