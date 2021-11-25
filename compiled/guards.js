"use strict";
function strip(x) {
    if (typeof x === 'number')
        return x.toFixed(2);
    return x.trim();
}
var MyResponse = (function () {
    function MyResponse() {
        this.header = 'response header';
        this.result = 'response result';
    }
    return MyResponse;
}());
var MyError = (function () {
    function MyError() {
        this.header = 'error header';
        this.message = 'error result';
    }
    return MyError;
}());
function handle(res) {
    if (res instanceof MyResponse)
        return { info: res.header + res.result };
    else
        return { info: res.header + res.message };
}
function setAlertType(type) {
    console.log(type);
}
