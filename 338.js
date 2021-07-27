/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
    let ans = [];
    for (let i = 0; i <= n; i++) {
        let numOne = 0;
        let binary = i.toString(2).split("").filter((a) => a === "1").length;
        ans.push(binary);
    }
    return ans;
};