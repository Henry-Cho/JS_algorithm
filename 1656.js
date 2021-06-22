/**
 * @param {number} n
 */

 let stream = {};

 var OrderedStream = function(n) {
     for (let i = 1; i <= n; i++) {
         stream[i] = []; 
     }
 };
 
 /** 
  * @param {number} idKey 
  * @param {string} value
  * @return {string[]}
  */
 let cur_idx = 1;
 
 OrderedStream.prototype.insert = function(idKey, value) {
     let answer = [];
     stream[idKey] = value;
     
     if (stream[cur_idx].length === 0) {
         return [];
     }
     else {
         while (stream[cur_idx].length !== 0) {
             answer.push(stream[cur_idx]);
             if (stream[cur_idx + 1] == null) {
                 break;
             }
             ++cur_idx;
         }
         return answer;
     }
     
 };
 
 /** 
  * Your OrderedStream object will be instantiated and called as such:
  * var obj = new OrderedStream(n)
  * var param_1 = obj.insert(idKey,value)
  */