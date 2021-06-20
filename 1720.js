// 1720번 문제
/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
 var decode = function(encoded, first) {
    let arr = [first];
    for (let i = 0; i < encoded.length; i++) {
// XOR 연산자 사용 
        arr.push(arr[i] ^ encoded[i]);
        
    }
    return arr;
};