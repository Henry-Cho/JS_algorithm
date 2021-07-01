/**
 * @param {number} num
 * @return {number}
 */
 var maximum69Number  = function(num) {
    let str_arr = num.toString();
    let answer_arr = [];
    
    if (!str_arr.includes("6")) {
        return num;
    }
    for (i = 0; i < str_arr.length; i++) {
        if (str_arr[i] === "6") {
            let step = [];
            step = num.toString().split("");
            step.splice(i, 1, "9");
            answer_arr.push(parseInt(step.join("")));
        }
    }
    
    return Math.max(...answer_arr);
};