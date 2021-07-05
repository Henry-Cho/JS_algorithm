/**
 * @param {string[][]} paths
 * @return {string}
 */
 var destCity = function(paths) {

    let dic = {};

    for (let i = 0; i < paths.length; i++) {
        for (let j = 0; j < paths[i].length; j++) {
            if (paths[i][j] in dic) {
                dic[paths[i][j]][0] = dic[paths[i][j]][0] + 1;
                continue;
            }
            dic[paths[i][j]] = [1, j];
        }
    }

    let end = Object.keys(dic).filter((key) => dic[key][0] === 1 && dic[key][1] === 1);

    return end[0];
    
};

console.log(destCity([["pYyNGfBYbm","wxAscRuzOl"],["kzwEQHfwce","pYyNGfBYbm"]]));