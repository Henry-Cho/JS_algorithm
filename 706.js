class MyHashMap {
    
    constructor() {
        this.obj = {};
    }
    
    put(key, val) {
        if (this.obj[key] !== undefined) {
            this.obj[key] = val;
            return;
        }
        this.obj[key] = val;
    }
    
    get(key) {
        return this.obj[key] !== undefined ? this.obj[key] : -1;
    }
    
    remove(key) {
        if (this.obj[key] !== undefined) {
            delete this.obj[key];
        }
    }
}

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */