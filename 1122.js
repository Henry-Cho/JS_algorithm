/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
 var relativeSortArray = function(arr1, arr2) {
    let obj1 = {};

    arr1.forEach((a) => {
        if (obj1[a]) {
            obj1[a] += 1;
            return;
        }
        obj1[a] = 1;
    })
    
    let isFound = [];
    let keys = [...Object.keys(obj1)].map((a) => parseInt(a));
    
    for (let i = 0; i < arr2.length; i++) {
        if (obj1[arr2[i]]) {
            let idx = keys.findIndex((a) => a === arr2[i]);
            keys.splice(idx, 1);

            for (let j = 0; j < obj1[arr2[i]]; j++) {
                isFound.push(arr2[i]);
            }
        }
    }

    let notFound = [...keys].sort((a,b) => a - b);

    notFound.forEach((f) => {
        for (let i = 0; i < obj1[f]; i++) {
            isFound.push(f);
        }
    })
    
    return isFound;
};