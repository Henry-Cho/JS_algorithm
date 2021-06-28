/**
 * @param {number[][]} image
 * @return {number[][]}
 */

 const invertNum = (num) => {
    let n = 0;
    if (num === 1) {
        return n;
    }
    return 1;
}

var flipAndInvertImage = function(image) {
    let reverse_arr = [];
    for (let i = 0; i < image.length; i++) {
        let stack = [];
        for (let j = 0; j < image[i].length; j++) {
            stack.push(image[i][image[i].length - 1 - j]);
        }
        reverse_arr.push(stack);
    }
    
    for (let i = 0; i < reverse_arr.length; i++) {
        for (let j = 0; j < reverse_arr[i].length; j++) {
            reverse_arr[i][j] = invertNum(reverse_arr[i][j]);
        }
    }
    
    return reverse_arr;
};