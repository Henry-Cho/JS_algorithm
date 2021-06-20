/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */

 let char_list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

 let toInteger = (str) => {
     console.log(str);
     let str_list = [];
     let final_value = 0;
     for (let i = 0; i < str.length; i++) {
         let index = char_list.findIndex((c) => c === str[i]);
         console.log(`This is index ${index}`);
         index = index.toString();
         str_list.push(index);
     }

     console.log(str_list);

     final_value = str_list.join('');
     console.log(final_value);
     if (final_value === "") {
         return 0;
     }
     final_value = parseInt(final_value);
     console.log(final_value);
     return final_value;
 }
 
 var isSumEqual = function(firstWord, secondWord, targetWord) {
     // let char_list = [];
     // let start_letter = 97;
     // for (let i = 0; i < 10; i++) {
     //     let real_letter = String.fromCharCode(start_letter);
     //     char_list.push(real_letter);
     //     ++start_letter;
     // }
     
     let firstVal = 0;
     let secondVal = 0;
     let targetVal = 0;
     
     
     // First word
     
     firstVal = toInteger(firstWord);
     
     // Second word
     secondVal = toInteger(secondWord);
    
     // Target word
     targetVal = toInteger(targetWord);
     
     if (firstVal + secondVal === targetVal) {
         return true;
     }
     return false;
 };

console.log(toInteger("aab"));