// 1704번 문제
/**
 * @param {string} s
 * @return {boolean}
 */

 const bowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

 var halvesAreAlike = function(s) {
     let first_half = s.slice(0, (s.length / 2));
     let second_half = s.slice((s.length / 2), s.length);
     
     let bowel_count = 0;
     
     for (let i = 0; i < first_half.length; i++) {
         if (bowels.includes(first_half[i])) {
             ++bowel_count;
         }
     }
     
     for (let i = 0; i < second_half.length; i++) {
         if (bowels.includes(second_half[i])) {
             --bowel_count;
         }
     }
     
     if (bowel_count !== 0) {
         return false;
     }
     return true;
     
 };