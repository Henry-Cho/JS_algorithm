/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
 var hammingDistance = function(x, y) {
    let count = 0;
    let x_bits = x.toString(2);
    let y_bits = y.toString(2);

    let standard_len = 0;
    let standard = "";

    if (x_bits.length === y_bits.length) {
        standard_len = x_bits.length;
        standard = "E";
    }
    else if (x_bits.length > y_bits.length) {
        standard_len = y_bits.length;
        standard = "Y";
    }
    else {
        standard_len = x_bits.length;
        standard = "X";
    }

    if (standard === "E") {
        for (let i = 0; i < standard_len; i++) {
            if (x_bits[i] !== y_bits[i]) {
                ++count;
            }
        }
    }
    else if (standard === "Y") {
        for (let i = 0; i < x_bits.length - standard_len; i++) {
            if (x_bits[i] === "1") {
                ++count;
            }
        }
        for (let i = 0; i < standard_len; i++) {
            if (x_bits[x_bits.length - standard_len + i] !== y_bits[i]) {
                ++count;
            }
        }
    }
    else {
        for (let i = 0; i < y_bits.length - standard_len; i++) {
            if (y_bits[i] === "1") {
                ++count;
            }
        }
        for (let i = 0; i < standard_len; i++) {
            if (y_bits[y_bits.length - standard_len + i] !== x_bits[i]) {
                ++count;
            }
        }
    }
    return count;
};