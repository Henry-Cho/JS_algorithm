/**
 * @param {string} s
 * @return {number[]}
 */
 var diStringMatch = function(s) {
    s = [...s];
    let ans = [];
    let arr = s.map((i, idx) => {
        return idx + 1;
    })
    
    arr.unshift(0);
    
    if (s[0] === "I") {
        ans.push(0);
        arr.shift();
    }
    else {
        ans.push(arr[arr.length - 1]);
        arr.pop();
    }
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "I" && s[i + 1] === "D") {
            ans.push(arr[arr.length - 1]);
            arr.pop();
        }
        else if (s[i] === "D" && s[i + 1] === "I"){
            ans.push(arr[0]);
            arr.shift();
        }
        else if (s[i] === "I") {
            ans.push(arr[0]);
            arr.shift();
        }
        else if (s[i] === "D") {
            ans.push(arr[arr.length - 1]);
            arr.pop();
        }
    }
    
    return ans;
};