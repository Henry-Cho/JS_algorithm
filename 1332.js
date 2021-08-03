/**
 * @param {string} s
 * @return {number}
 */
 const checkS = (arr) => {
    let forward = [...arr];
    let backward = [...arr].reverse();
    
    if (forward.join("") === backward.join("")) {
        return true;        
    }
    return false;
}

var removePalindromeSub = function(s) {
    // let count = 0;

    if (checkS([...s])) {
        return 1;
    }
    return 2;
    // let copy_s = [...s];
    // let copy_str = [...s];
    // let front = [];
    
    // for (let i = 0; i < copy_str.length; i++) {
    //     front.push(copy_s.shift());
    //     console.log("front: ",front);
    //     console.log("back: ", copy_s);
    //     if (checkS(front) && checkS(copy_s)) {
    //         // count += 2;
    //         return 2;
    //     }
        // if (checkS(front) && !checkS(copy_s)) {
        //     ++count;
        // }
        // if (!checkS(front) && checkS(copy_s)) {
        //     ++count;
        // }
    // }
    // return count;
};

console.log(removePalindromeSub("baabb"));