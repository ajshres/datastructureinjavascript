// Class Definition with constructor
function Building(floors) {
    this.name = "Building";
    this.floors = floors;
};

// This is classical way of defining public methods to class
// This function will only have one instance. All the object created will reference to
//    this very function for reference
Building.prototype.getFloors = function() {
    return this.floors;
};