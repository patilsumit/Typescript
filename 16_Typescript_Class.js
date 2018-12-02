/*-- ----------------------------------------------------------------------
Program       :Typescript Classroom Exercise
Date          :12-10-2018
Auther        :Sumit Patil
Institute     :WebStack Academy (P) Ltd.
------------------------------------------------------------------------ */
var MyInputs = /** @class */ (function () {
    function MyInputs() {
    }
    MyInputs.prototype.add = function () {
        console.log("The addition is:" + (this.x + this.y));
    };
    MyInputs.prototype.sub = function () {
        console.log("The subtraction is " + (this.x - this.y));
    };
    return MyInputs;
}());
var currentInput = new MyInputs();
currentInput.x = 100;
currentInput.y = 50;
currentInput.add();
currentInput.sub();
