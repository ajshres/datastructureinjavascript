// Stack is a datastructure where data is stored and retrieve in a certain manner
// Last in First out

var Stack = function(capacity) {
    this._storage = {};
    this._count = 0;
    this._capacity = capacity || Infinity;
};

Stack.prototype.push = function(value) {
    if (this._count < this._capacity) {
        this._storage[this._count++] = value;
        return this._count;
    }
    return 'Maximum capacity already exist. Please remove element before adding new one.';
};

Stack.prototype.pop = function() {
    if (this._count > 0) {
        var value = this._storage[--this._count];
        delete this._storage[this._count];
        return value;
    }
    return 'Nothing to pop. Please add element to stack before you pop one.';
};

Stack.prototype.size = function() {
    return this._count;
};

Stack.prototype.peek = function() {
    if (this_count > 0) {
        return this._storage[this_count - 1];
    }
    return 'No record existed';
};
// Test
var myNewStack = new Stack();
myNewStack.push("Task 1");