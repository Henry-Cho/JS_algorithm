var generateTheString = function(n) {
    let isEven = (n / 2) % 2 === 0;

    if (isEven) {
        return "a".repeat(n / 2 + 1) + "b".repeat(n / 2 - 1);
    }
    let answer = "a".repeat(n);
    
    if (answer.length % 2 === 0) {
        return "a".repeat(n / 2) + "b".repeat(n / 2);
    }
    return answer;
};  