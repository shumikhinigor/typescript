"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function ComponentDecorator(config) {
    return function (Constructor) {
        return (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _this = _super.apply(this, args) || this;
                var el = document.querySelector(config.selector);
                el.innerHTML = config.template;
                return _this;
            }
            return class_1;
        }(Constructor));
    };
}
function Bind(_1, _2, descriptor) {
    var original = descriptor.value;
    return {
        configurable: true,
        enumerable: false,
        get: function () {
            return original.bind(this);
        }
    };
}
var CardComponent = (function () {
    function CardComponent(name) {
        this.name = name;
    }
    CardComponent.prototype.logName = function () {
        console.log("Component Name: ".concat(this.name));
    };
    __decorate([
        Bind
    ], CardComponent.prototype, "logName", null);
    CardComponent = __decorate([
        ComponentDecorator({
            selector: '#app',
            template: "\n        <div class=\"card\">\n            <div class=\"card-content\">\n                <div class=\"card-title\">Card</div>\n            </div>\n        </div>\n    "
        })
    ], CardComponent);
    return CardComponent;
}());
var card = new CardComponent('card');
var btn = document.querySelector('#btn');
btn.addEventListener('click', card.logName);
var validators = {};
function Required(target, prop) {
    var _a;
    validators[target.constructor.name] = __assign(__assign({}, validators[target.constructor.name]), (_a = {}, _a[prop] = 'required', _a));
}
function validate(obj) {
    var objConfig = validators[obj.constructor.name];
    if (!objConfig)
        return true;
    var isValid = true;
    Object.keys(objConfig).forEach(function (key) {
        if (objConfig[key] === 'required') {
            isValid = isValid && !!obj[key];
        }
    });
    return isValid;
}
var Form = (function () {
    function Form(email) {
        this.email = email;
    }
    __decorate([
        Required
    ], Form.prototype, "email", void 0);
    return Form;
}());
var form = new Form('test@test.ru');
console.log(form);
if (validate(form))
    console.log('Valid: ', form);
else
    console.log('Validation Error');
