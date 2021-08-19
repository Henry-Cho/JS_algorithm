/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    // create an object containing the Roman numerals and their values
        let obj = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
        }
        // I am going to add each letter's value to this sum variable
        let sum = 0;
        
        for (let i = 0; i < s.length; i++) {
        // This is when found "IV" -> "'1''5'" (a smaller number comes before a bigger number)
        // I am going to add the difference between the bigger value and the smaller value
            if (s[i+1] && obj[s[i]] < obj[s[i+1]]) {
                sum += obj[s[i+1]] - obj[s[i]];
            // here, I skip the next step
                ++i;
                continue;
            }
           // if nothing happens above, just add a letter's value to the sum
            sum += obj[s[i]];
        }
        
        return sum;
    };