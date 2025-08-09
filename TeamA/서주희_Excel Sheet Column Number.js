var titleToNumber = function (columnTitle) {
  const aCharCode = 'A'.charCodeAt();
  let result = 0;
  columnTitle
    .split('')
    .reverse()
    .forEach((char, index) => {
      const difference = char.charCodeAt() - aCharCode;

      result += (difference + 1) * 26 ** index;
    });

  return result;
};
