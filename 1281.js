/**
 * @param {number} n
 * @return {number}
 */

 const product = (n) => {
    let answer = 0;
    return answer = n.reduce((a,b) => a * b);
}

const sum = (n) => {
    let answer = 0;
    return answer = n.reduce((a,b) => a + b);
}

 var subtractProductAndSum = function(n) {
    let newArray = n.toString().split("").map((e) => {return parseInt(e)});
    let productVal = product(newArray);
    let sumVal = sum(newArray);

    return productVal - sumVal;
};