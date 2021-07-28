//944. Delete Columns to Make Sorted
/**
 * @param {string[]} strs
 * @return {number}
 */
const checkArr = (arr) => {
    let new_arr = arr.map((a) => a.charCodeAt(0));
    
    for (let i = 0; i < new_arr.length - 1; i++) {
        if (new_arr[i] > new_arr[i+1]) {
            return false;
        }
    }
    return true;
}


var minDeletionSize = function(strs) {
    let new_str = [];
    
    for (let i = 0; i < strs[0].length; i++) {
        let arr = [];
        for (let j = 0; j < strs.length; j++) {
            arr.push(strs[j][i]);
        }
        
        new_str.push(arr); 
    }
    
    let delete_arr = 0;
    
    for (let i = 0; i < new_str.length; i++) {
        if (!checkArr(new_str[i])) {
            ++delete_arr;
        }
    }
    
    return delete_arr;
    
};