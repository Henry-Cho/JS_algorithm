/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 const getProduct = (num) => {
    let arr = num.split("");
    let answer = 0;
    for (let i = 0; i < arr.length; i++) {
        answer += parseInt(arr[i]);
    }

    return answer;
}

var sumBase = function(n, k) {
    // parseInt() is used for converting from other bases to base 10 (decimal).
    let str = n.toString(k);
    // let converted_num = parseInt(str, k);

    return getProduct(str);
};

console.log(sumBase(34, 6));