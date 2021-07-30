/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
 var shortestToChar = function(s, c) {

    let ans = [];

    let idx_arr = [...s].map((i, idx) => {
        if (i === c) {
            return idx;
        }
    });

    idx_arr = idx_arr.filter((i) => i !== undefined);

    for (let j = 0; j < idx_arr[0]; j++) {
        ans.push(Math.abs(idx_arr[0] - j));
    }
    for (let i = 0; i < idx_arr.length; i++) {

        let target = idx_arr[i];
        // console.log("이번 타겟은", target, `${i}번째`);
        let next_target = idx_arr[i + 1] ? true : false;
        // console.log(next_target);

        if (next_target) {
            // console.log("현재의 ans", ans);
            // console.log('next target 이 있을 때');
            for (let j = idx_arr[i]; j < idx_arr[i+1]; j++) {
                let startABS = Math.abs(idx_arr[i] - j);
                // console.log('앞에서 시작했을 때', startABS);
                let endABS = Math.abs(idx_arr[i+1] - j);
                // console.log('뒤에서 시작했을 때', endABS);
                if (startABS <= endABS) {
                    // console.log("난 여기서 startABS 를 넣었어", startABS);
                    ans.push(startABS);
                }
                else {
                    // console.log("난 여기서 endABS 를 넣었어", endABS);
                    ans.push(endABS);
                }

            }
        }
        else {
            for (let j = target; j < s.length; j++) {
                ans.push(j - target);
            }
        }
    // console.log("------------------------------------");
    }
    
    return ans;
};

// console.log(shortestToChar("loveleetcode", "e"));

// console.log(shortestToChar("aaab", "b"));