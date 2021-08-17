/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    let str = x.toString();
    
    console.log(str);

    if (str.indexOf("-") !== -1) {
        return false;
    }
    
    if (str.length === 1) {
        return true;
    }
    
    if (str.length === 2) {
        return str[0] === str[1];
    }
    
    if (str.length % 2 !== 0) {
        let first = str.slice(0, parseInt(str.length / 2));
        let second = str.slice(parseInt(str.length / 2) + 1);

        console.log(first, second);
        
        return first === [...second].reverse().join("");
    }
    else {
        let first = str.slice(0, parseInt(str.length / 2));
        let second = str.slice(parseInt(str.length / 2));
        
        console.log(first, second);

        return first === [...second].reverse().join("");
    } 
};

console.log(isPalindrome(1001));