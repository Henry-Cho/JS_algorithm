/**
 * @param {string} number
 * @return {string}
 */
 var reformatNumber = function(number) {
    number = number.replace(/ /g, "").replace(/-/g, "");

    let ans = [];

    let part = [];
    
    if (number.length === 4) {
        let answer = [...number];
        answer.splice(2, 0, "-");
        return answer.join("");
    } 
     
    for (let i = 0; i < number.length; i++) {
        part.push(number[i]);

        if (part.length === 3) {
            let digits = part.join("");
            ans.push(digits);
            part = [];
        }
        
        if (i === number.length - 1 && part.length > 0) {
            ans.push(part.join(""));
        }

        if (number[i+1] && number.slice(i + 1).length === 4 && part.length === 0) {
            ans.push(number.slice(i+1, i+3));
            ans.push(number.slice(i+3));
            break;
        }
    }
    
    return ans.join("-");
};