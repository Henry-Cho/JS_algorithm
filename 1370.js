/**
 * @param {string} s
 * @return {string}
 */

// const equalCheck = (str1, str2) => {
//     let check1 = str1.map((a) => String.fromCharCode(a)).join("");
//     let check2 = str2.map((a) => String.fromCharCode(a)).join("");

//     return check1 === check2;
// }

var sortString = function(s) {
    s = s.split("");
    let new_s = s.map((i) => i.charCodeAt(0));
    
    // return new_s;
    let arr = [Math.min(...new_s)];
    
    while (arr[arr.length - 1] !== Math.max(...new_s)) {
        let filtered_arr = new_s.filter((o) => arr[arr.length - 1] < o);
        // console.log(filtered_arr);
        arr.push(filtered_arr.sort()[0]);
    }
    // return answer;

    console.log('1번');

    if (arr.length === new_s.length) {
        let answer = arr.map((a) => String.fromCharCode(a));
        return answer.join("");
    }

    arr.push(Math.max(...new_s));

    let abc = arr.map((a) => String.fromCharCode(a));
    console.log(abc.join(""));

    while (arr[arr.length - 1] !== Math.min(...new_s)) {
        let filtered_arr = new_s.filter((o) => arr[arr.length - 1] > o);
        // console.log(filtered_arr);
        let ssss = filtered_arr.sort().map((a) => String.fromCharCode(a));
        console.log(String.fromCharCode(arr[arr.length - 1]));
        console.log('filtered_arr', ssss.join(""));
        arr.push(filtered_arr.sort()[filtered_arr.length - 1]);
        // console.log(String.fromCharCode(filtered_arr.sort()[filtered_arr.length - 1]));
    }

    console.log('2번');
    let acb = arr.map((a) => String.fromCharCode(a));
    console.log(acb.join(""));
    if (arr.length === new_s.length) {
        let answer = arr.map((a) => String.fromCharCode(a));
        return answer.join("");
    }

    while (arr.length !== new_s.length) {
        arr.push(Math.min(...new_s));
        
        while (arr[arr.length - 1] !== Math.max(...new_s)) {
            let filtered_arr = new_s.filter((o) => arr[arr.length - 1] < o);
            // console.log(filtered_arr);
            arr.push(filtered_arr.sort()[0]);
        }

        arr.push(Math.max(...new_s));

        while (arr[arr.length - 1] !== Math.min(...new_s)) {
            let filtered_arr = new_s.filter((o) => arr[arr.length - 1] > o);
            // console.log(filtered_arr);
            arr.push(filtered_arr.sort()[filtered_arr.length - 1]);
        }
    }
    console.log('3번');

    let answer = arr.map((a) => String.fromCharCode(a));

    return answer.join("");
    
};

console.log(sortString("leetcode"));