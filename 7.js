/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    let isNegative = x < 0 ? true : false;
    let arr = [...x.toString()];
    if (isNegative) {
        arr = [...arr].slice(1);
    }
     
    if (arr.length === 2) {
        let tempO = arr[0];
        arr[0] = arr[1];
        arr[1] = tempO;
        return isNegative ? parseInt("-" + arr.join("")) : parseInt(arr.join(""));
    }
     
    let len_arr = arr.length % 2 === 0 ? arr.length / 2 : arr.length / 2 - 1;
     
    for (let i = 0; i < len_arr; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
   
    let answer = arr.join("");
    answer = isNegative ? parseInt("-" + answer) : parseInt(answer);
     
    if (Math.pow(-2, 31) > answer || Math.pow(2, 31) < answer) {
        return 0;
    }
    
    return answer
    
};