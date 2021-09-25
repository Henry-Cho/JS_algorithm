/**
 * @param {string[]} logs
 * @return {number}
 */
 var minOperations = function(logs) {
    let log = {};
    let from_main = 0;
    for (let i = 0; i < logs.length; i++) {
        let split_log = logs[i].split("/");
        
        if (!split_log[0].includes(".")) {
            // parent
            ++from_main;
        }
        
        if (split_log[0] === "..") {
            if (from_main < 1) {
                continue;
            }
            --from_main;
        }
    }
    
    return from_main;
};