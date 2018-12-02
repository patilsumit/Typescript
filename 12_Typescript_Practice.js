/*-- ----------------------------------------------------------------------
Program       :Typescript  Practice
Date          :10-10-2018
Auther        :Sumit Patil
Institute     :WebStack Academy (P) Ltd.
------------------------------------------------------------------------ */
var message = "Hello Typescript SP";
console.log(message);
var Greeting = (function () {
    function Greeting() {
    }
    Greeting.prototype.Greet = function () {
        console.log("Hello Protype World!");
    };
    return Greeting;
}());
var obj = new Greeting();
obj.Greet();
