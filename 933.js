
var RecentCounter = function() {
    this.arr = [];
    this.counts = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.arr.push(t);
    
    let count = this.arr.filter((a) => a >= t - 3000 && a <= t);
    
    this.counts.push(count.length);
    
    return this.counts[this.counts.length - 1];
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */