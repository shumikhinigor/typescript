"use strict";
var rectWhite = {
    id: 1,
    color: 'white',
    size: {
        width: 10,
        height: 10
    }
};
var rectBlack = {
    id: 2,
    color: 'black',
    size: {
        width: 10,
        height: 10
    }
};
var rectYellow = {};
var rectRed = {};
var rectBlue = {
    id: 3,
    color: 'blue',
    size: {
        width: 30,
        height: 30
    },
    getArea: function () {
        return this.size.width * this.size.height;
    }
};
var Clock = (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());
var css = {
    border: '1px solid black',
    marginTop: '10px',
    borderRadius: '5px'
};
