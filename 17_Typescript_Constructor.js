/*-- ----------------------------------------------------------------------
Program       :Typescript Constructor Practice
Date          :12-10-2018
Auther        :Sumit Patil
Institute     :WebStack Academy (P) Ltd.
------------------------------------------------------------------------ */
var MyInputs = /** @class */ (function () {
    function MyInputs(val1, val2) {
        this.x = val1;
        this.y = val2;
    }
    MyInputs.prototype.add = function () {
        console.log("The addition is:" + (this.x + this.y));
    };
    MyInputs.prototype.sub = function () {
        console.log("The subtraction is " + (this.x - this.y));
    };
    return MyInputs;
}());
var currentInput = new MyInputs(150, 90);
currentInput.add();
currentInput.sub();
