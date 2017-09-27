function Queue(capacity) {
    this._storage = {};
    this._head = 0;
    this._tail = 0;
    this._capacity = capacity || Infinity;
}

Queue.prototype.enqueue = function(value) {
    if (this.count() <= this_capacity) {
        this._storage[this._tail++] = value;
        return this.count();
    }
    return 'Maximum Capacity Exceeded';
};

Queue.prototype.dequeue = function() {
    // Doesnot check no value condition
    var value = this._storage[this._head];
    delete this._storage[this._head];
    if (this._head < this._tail) {
        this._head++;
    }
    // condition to reset after all elements are dequeued
    if (this._head === this._tail) {
        this._head = this._tail = 0;
    }
    return value;
};

Queue.prototype.size = function() {
    return this.count();
};

Queue.prototype.count = function() {
    return this._tail - this._head;
};

Queue.prototype.peek = function() {
    return this._storage[this._head]; // check count if record existed or not  
};