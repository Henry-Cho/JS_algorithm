/**
 * @param {number} n
 * @return {number[]}
 */
 let count = 0;
 let num = 0;
  const convertOne = () => {
      if (count % 2 === 0) {
          ++count;
          --num;
          return num; 
      }
      ++count;
      return Math.abs(num);
  }
  
  var sumZero = function(n) {
      let ans = [];
      while (n !== 0) {
          ans.push(convertOne());
          --n;
      }
      
      let answer = ans.reduce((a,b) => a + b, 0);
     
      if (answer !== 0) {
         if (count % 2 !== 0) {
             ans[ans.length - 1] = 0;
             count = 0;
             num = 0;
             return ans;
         }
      }
     count = 0;
     num = 0;
      return ans;
  };