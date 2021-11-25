"use strict";
var arrayOfNumbers = [1, 1, 2, 3, 5, 8, 13];
var arrayOfStrings = ['Hello', 'Typescript'];
function reverse(array) {
    return array.reverse();
}
var cars = ['Ford', 'Audi'];
var carsTwo = ['Ford', 'Audi'];
var promise = new Promise(function (resolve) {
    setTimeout(function () {
        resolve(42);
    }, 3000);
});
promise.then(function (res) {
    console.log('res: ', res.toFixed());
});
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
var merge = mergeObjects({ name: 'Igor' }, { age: 24 });
console.log(merge);
function withCount(value) {
    return {
        value: value,
        count: "".concat(value.length, " symbols")
    };
}
var hello = withCount('Hello');
console.log(hello);
function getObjectValue(obj, key) {
    return obj[key];
}
var person = {
    name: 'Igor',
    age: 24
};
var getPersonName = getObjectValue(person, 'name');
console.log(getPersonName);
var Collection = (function () {
    function Collection(_items) {
        if (_items === void 0) { _items = []; }
        this._items = _items;
    }
    Collection.prototype.add = function (item) {
        this._items.push(item);
    };
    Collection.prototype.remove = function (item) {
        this._items = this._items.filter(function (i) { return i !== item; });
    };
    Object.defineProperty(Collection.prototype, "items", {
        get: function () {
            return this._items;
        },
        enumerable: false,
        configurable: true
    });
    return Collection;
}());
var strings = new Collection(['I', 'Am', 'Strings']);
strings.add('!');
strings.remove('Am');
console.log(strings.items);
var numbers = new Collection([1, 2, 3]);
numbers.add(4);
numbers.remove(2);
console.log(numbers.items);
function createAndValidateCar(model, year) {
    var car = {};
    if (model.length > 3) {
        car.brand = model;
    }
    if (year > 2000) {
        car.year = year;
    }
    return car;
}
var carBrands = ['Ford', 'Audi'];
console.log(carBrands[0]);
var ford = {
    brand: 'Ford',
    year: 2021
};
console.log(ford.brand);
