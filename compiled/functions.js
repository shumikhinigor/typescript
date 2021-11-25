"use strict";
function add(a, b) {
    return a + b;
}
function toUppercase(str) {
    return str.toUpperCase();
}
function position(a, b) {
    if (!a && !b)
        return { x: undefined, y: undefined };
    if (a && !b)
        return { x: a, y: undefined, default: a.toString() };
    return { x: a, y: b };
}
console.log('empty: ', position());
console.log('one param: ', position(42));
console.log('two params: ', position(42, 42));
