Function.prototype.inherits = function(SuperClass) {
    function Surrogate() {};
    Surrogate.prototype = SuperClass.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
}

Function.prototype.inherits2 = function(SuperClass) {
    this.prototype = Object.create(SuperClass.prototype);
    this.prototype.constructor = this;
 }

function MovingObject () {}

MovingObject.prototype.move = function () {
    console.log(this.name + ' vrooooooom!');
}

function Ship (name) {
    this.name = name;
}
Ship.inherits2(MovingObject);

function Asteroid (name) {
    this.name = name;
}
Asteroid.inherits2(MovingObject);

ship1 = new Ship('ship1');
asteroid1 = new Asteroid('asteroid1');

console.log(ship1.move());
console.log(asteroid1.move());




// function Animal(name) {
//     this.name = name;
// }

// Animal.prototype.eat = function () {
//     console.log(this.name + ' is eating!')
// }

// function Cat(name) {
//     this.name = name;
    
// }

// Cat.inherits(Animal);

// cat1 = new Cat('leo');
// console.log(cat1.eat());