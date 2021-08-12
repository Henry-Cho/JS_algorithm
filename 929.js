/**
 * @param {string[]} emails
 * @return {number}
 */
 var numUniqueEmails = function(emails) {
    let obj = {};
    
    emails.forEach((e) => {
        let split_email = e.split("@");
        let local = split_email[0];
        let domain = split_email[1];
        
        let new_local = local.replaceAll(".", "");
        
        let without_plus = new_local.includes("+") ? new_local.split("+")[0] : new_local;
        
        let concat_address = without_plus + "@" + domain;
        
        obj[concat_address] = true;
    })
    
    return [...Object.keys(obj)].length;
};