/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n === 0) return 1;

    if (n < 0) {
        x = 1 / x;
        n = -n;
    }

    function fastPow(x, n) {
        if (n === 1) return x;

        const half = fastPow(x, Math.floor(n / 2));
        return n % 2 === 0 ? half * half : half * half * x;
    }

    return fastPow(x, n);
};

const x = 2.0;
const n = 10;
myPow(x, n);
