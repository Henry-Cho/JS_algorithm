/**
 * @param {number[]} arr
 * @return {number}
 */
 var sumOddLengthSubarrays = function(arr) {
    let len_arr = arr.length;
    let num_arr = [];
    for (let i = 1; i <= len_arr; i++) {
        if (i % 2 !== 0) {
            num_arr.push(i);
        }
    }
    console.log(`Odd num array: ${num_arr}`);
    let sum = 0;
    for (let j = 0; j < num_arr.length; j++) {
        console.log(j);
        let step_sum = 0;
        let step_arr = [];
        for (let k = 0; k < len_arr; k++) {
            step_arr = arr.slice(k, k + num_arr[j]);
            if (step_arr.length !== num_arr[j]) {
                step_arr = [0];
            }
            console.log(`Step array: ${step_arr}`);
            step_sum = step_arr.reduce((a,b) => a + b);
            sum += step_sum;
            console.log(`Sum: ${sum}`)
        }
    }
    return sum;
};

sumOddLengthSubarrays([1,4,2,5,3]);