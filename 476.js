/**
 * @param {number} num
 * @return {number}
 */
 var findComplement = function(num) {
    let bin = num.toString(2);
    bin = [...bin];
    
    for (let i = 0; i < bin.length; i++) {
        if (bin[i] === "0") {
            bin[i] = "1";
            continue;
        }
        bin[i] = "0";
    }
    
    while (bin[0] === "0") {
        bin[0] = "";
    }
    
    if (bin.join("") === "") {
        return 0;
    }
    
    return parseInt(bin.join(""), 2)
};