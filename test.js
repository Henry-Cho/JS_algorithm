function getMaxInversions(arr) {
    let count = 0;
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i+1; j < arr.length - 1; j++) {
            console.log(`${arr[i]} 일 때`, arr.slice(j));
            console.log("그 다음 숫자", arr[j]);
            console.log("Max: ", Math.max(...arr.slice(j)));
            if (arr[i] > arr[j]) {
                for (let k = j+1; k < arr.length; k++) {
                    if (arr[j] > arr[k] && arr[i] > arr[k]) {
                        ++count;
                    }
                }
            }
        }
    }
    
    return count;
}

console.log(getMaxInversions([4, 1, 3, 2, 5]));