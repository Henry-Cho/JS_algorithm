// 811. Subdomain Visit Count
/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
 var subdomainVisits = function(cpdomains) {
    let ans = {};
    
    for (let i = 0; i < cpdomains.length; i++) {

        let arr = cpdomains[i].split(" ");
        let count = arr[0] + " ";
        let domain = arr[1].split(".");
        
        domain.forEach((d, idx) => {
            if (domain.length - 1 === idx) {
                if (ans[domain[idx]]) {
                    ans[domain[idx]] += parseInt(arr[0]);
                    return;
                }
                ans[domain[idx]] = parseInt(arr[0]);
                return;
            }
            
            let temp = [...domain].slice(idx);
            if ([...Object.keys(ans)].includes(temp.join("."))) {
                ans[temp.join(".")] += parseInt(count);
                return;
            }
            ans[temp.join(".")] = parseInt(count);
        })
    }
    
    let answer = [];
    
    for (let i = 0; i < [...Object.keys(ans)].length; i++) {
        let part = ans[[...Object.keys(ans)][i]] + " " + [...Object.keys(ans)][i];
        answer.push(part);
    }
    
    return answer;
};