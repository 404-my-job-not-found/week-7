var titleToNumber = function (columnTitle) {
  let sum = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    sum +=
      Math.pow(26, columnTitle.length - 1 - i) *
      (columnTitle[i].charCodeAt() - 64);
  }
  return sum;
};
