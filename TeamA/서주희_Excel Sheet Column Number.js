var titleToNumber = function (columnTitle) {
  const length = columnTitle.length;
  const aCharCode = 'A'.charCodeAt();
  let result = 0;

  for (let i = length - 1; i >= 0; i--) {
    const difference = columnTitle[i].charCodeAt() - aCharCode;
    result += (difference + 1) * 26 ** (length - i - 1);
  }

  return result;
};
