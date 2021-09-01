/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    digits[digits.length - 1] += 1;
    
    let increment = false;
    
    if (digits[digits.length - 1] > 9) {
        digits[digits.length - 1] = 0;
        increment = true;
    }
    
    if (digits.length < 2) {
        if (increment) {
            return [1, 0];
        }
        return [digits[0]];
    }
    
    for (let i = digits.length - 2; i >= 0; i--) {
        if (i === 0 && increment) {
            if (digits[i] < 9) {
                digits[i] += 1;
            }
            else {
                digits[i] = 0;
                digits.unshift(1);
            }
            break;
        }
        if (increment) {
            digits[i] += 1;
            if (digits[i] > 9) {
                digits[i] = 0;
                increment = true;
                continue;
            }
            increment = false;
            continue;
        }
        break;
    }
    
    return digits;
};