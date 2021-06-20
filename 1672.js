/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    let total_wealth_list = [];
    for (let i = 0; i < accounts.length; i++) {
        let sum_of_list = accounts[i].reduce((a,b) => a + b);

        total_wealth_list.push(sum_of_list);
    }
    // console.log(total_wealth_list);
    return Math.max(...total_wealth_list);
};