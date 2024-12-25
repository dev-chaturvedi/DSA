/**
 * @param {number} n
 * @return {number}
 */
var fibonacci = function(n) {
    let [p1, p2] = [0, 1];
    while (n--) {
        [p1, p2] = [p2, p1 + p2];
    }
    return p1;    
};
