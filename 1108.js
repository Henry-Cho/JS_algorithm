/**
 * @param {string} address
 * @return {string}
 */
 var defangIPaddr = function(address) {
    let result = address.split(".").join("[.]");
    return result;
};