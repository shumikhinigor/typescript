"use strict";
var FormNamespace;
(function (FormNamespace) {
    var Form = (function () {
        function Form(email) {
            this.email = email;
            this.type = 'inline';
            this.state = 'active';
        }
        Form.prototype.getInfo = function () {
            return {
                type: this.type,
                state: this.state
            };
        };
        return Form;
    }());
    var myForm = new Form('test@test.ru');
    console.log(myForm);
})(FormNamespace || (FormNamespace = {}));
