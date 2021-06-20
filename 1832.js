/**
 * @param {string} sentence
 * @return {boolean}
 */
 var checkIfPangram = function(sentence) {
     // 알파벳 다 적기 귀찮아서
    let dic = {};
    for (let i = 97; i < 123; i++) {
        let alphabet = String.fromCharCode(i);
        dic[i] = alphabet;
    }
    // string => array
    sentence = sentence.split("");
    
    // sentence 안에 있는 요소들의 중복값들을 싹 다 제거하기
    let new_set = new Set(sentence);
    
    // 스프레드 문법을 통해 위에 Set 객체를 배열로 바꿔준 후에 오름차순 정렬을 시켜준다.
    new_set = [...new_set].sort();
    
    if (Object.values(dic).join("") === new_set.join("")) {
        return true;
    }
    return false;
};