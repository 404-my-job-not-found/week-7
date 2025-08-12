/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {

    // console.log(columnTitle);
    // 뭐지 정규식으로 풀어야하나?

    // A -> 1
    // Z -> 26
    // AA -> (1 x 26) + 1
    // ZY -> (26 x 26) + 25 

    // 자릿수도 알아야 하는구만
    // 
    const map = {
        A: 1, B: 2, C: 3, D: 4, E: 5,
        F: 6, G: 7, H: 8, I: 9, J: 10,
        K: 11, L: 12, M: 13, N: 14, O: 15,
        P: 16, Q: 17, R: 18, S: 19, T: 20,
        U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26
    };

    let result = 0;

    for (let i = 0; i < columnTitle.length; i++) {
        result = result * 26 + map[columnTitle[i]];
    }

    return result;
};