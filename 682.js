    /**
     * @param {string[]} ops
     * @return {number}
     */
    var calPoints = function(ops) {
        let arr = [];
        
        for (let i = 0; i < ops.length; i++) {
            console.log(`${i}번째 순서`, ops[i]);
            if (!isNaN(parseInt(ops[i]))) {
                arr.push(parseInt(ops[i]));
            }
            if (ops[i] === "C") {
                // console.log("그래 난 씨다");
                arr.pop();
            }
            if (ops[i] === "D") {
                arr.push(arr[arr.length - 1] * 2);
            }
            if (ops[i] === "+") {
                arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
            }

            console.log(arr);
        }
        
        return arr.reduce((a,b) => a + b, 0);
    };

    console.log(calPoints(["1"]));