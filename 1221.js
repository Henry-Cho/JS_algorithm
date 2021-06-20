/**
 * @param {string} s
 * @return {number}
 */
 var balancedStringSplit = function(s) {
    let dic = {R: 0, L: 0};
    let num_balanced = 0;
    for (let i = 0; i < s.length; i++) {

        if (s[i] === "R") {
            dic["R"] = dic["R"] + 1;
        }
        else dic["L"] = dic["L"] + 1;

        // console.log("---------------------------", i);
        // console.log(`R의 값: ${dic["R"]}`);
        // console.log(`L의 값: ${dic["L"]}`)
        // console.log(dic["R"] === dic["L"]);

        if (dic["R"] === dic["L"] && (dic["R"] !== 0 && dic["L"] !== 0)) {
            ++num_balanced;
            dic["R"] = 0;
            dic["L"] = 0;
        }

    }
    return num_balanced;
};
// console.log(balancedStringSplit("RLRRLLRLRL"));