"use strict";
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
printLabel({ label: 'test' });
function createSquare(config) {
    let newSquare = { color: 'white', area: 100 };
    config.color ? newSquare.color = config.color : null;
    config.width ? newSquare.area = config.width : null;
    return newSquare;
}
let sq1 = createSquare({ color: 'red' });
console.log(sq1);
let p1 = { x: 1, y: 2 };
// p1.x = 2 can not change readonly
// readonly array
let na = [1, 2, 3, 4];
let ra = na;
function createSphere(config) {
    // 
}
createSphere({ extraProp: 'anything' });
function aFunc(callback) {
    callback('a', 'b');
}
aFunc(() => { return true; });
let myArray;
myArray = ['a', 'b', 'c'];
console.log('>', myArray[0]);
class Animal {
    constructor(type = 'default') {
        this.type = type;
    }
}
class Dog extends Animal {
    constructor(breed = 'default') {
        super();
        this.breed = breed;
    }
}
let indexableArray = [new Animal(), new Animal()];
console.log(indexableArray[0]);
// start from here
// https://coding.imooc.com/lesson/330.html#mid=24483
