/**
 * @param {number[][]} edges
 * @return {number}
 */
 var findCenter = function(edges) {
    let dic = {};
    for (let i = 0; i < edges.length; i++) {
        if (!dic[edges[i][0]]) {
            dic[edges[i][0]] = 1;
        }
        else {
            dic[edges[i][0]] += 1;
        }
        
        if (!dic[edges[i][1]]) {
            dic[edges[i][1]] = 1;
        }
        else {
            dic[edges[i][1]] += 1;
        }
    }
    
    let answer = Object.keys(dic).reduce((a, b) => dic[a] > dic[b] ? a : b);
    console.log(answer);
    return answer;
}

findCenter([[1,10],[10,2],[3,10],[10,4],[10,5],[10,6],[10,7],[8,10],[9,10],[10,11],[12,10]]);