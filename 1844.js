var replaceDigits = function(s) {
    for (let i = 0; i < s.length; i+=2) {
        s = [...s];
        console.log(s[i]);
        let int_s = s[i].charCodeAt(0) + parseInt(s[i+1]);
        console.log(int_s);
        if (String.fromCharCode(int_s) >= 'z') {
            s[i+1] = 'z';
            console.log(s);
            continue;
        }
        s[i+1] = String.fromCharCode(int_s);
        console.log(s);
    }
    return s.join("");
};

console.log(replaceDigits("a1c1e1"));