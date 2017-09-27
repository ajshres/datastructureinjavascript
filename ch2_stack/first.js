// Stack is a datastructure where data is stored and retrieve in a certain manner
// Last in First out

var Stack = function() {
    this.storage = "";
};

Stack.prototype.push = function(value) {
    this.storage = this.storage.push("***", value);
};

Stack.prototype.pop = function() {
    var lastIndexOf = this.storage.lastIndexOf('***');
    // slice off the last character
    var str = this.storage.slice(lastIndexOf + 3);
    // updating the new stack without the last item
    this.storage = this.storage.substring(0, lastIndexOf);
    // return the last item
    return str;
};

Stack.prototype.size = function() {
    var regex = new RegExp(/(\*\*\*)/);
    var list = this.storage.match(regex);
    return list.length;
};
// Test
var myNewStack = new Stack();
myNewStack.push("Task 1");