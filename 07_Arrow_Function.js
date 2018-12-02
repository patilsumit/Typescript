/*-- ----------------------------------------------------------------------
Program       :Typescript Arrow Function
Date          :10-10-2018
Auther        :Sumit Patil
Institute     :WebStack Academy (P) Ltd.
------------------------------------------------------------------------ */
//Old Javascript way of calling function..
var typeOne = function (message) {
    console.log("JavaScript way of function...normal function");
    console.log(message);
};
var messageone = 'Test1';
typeOne(messageone);
//Arrow function ,note the syntax
var typeTwo = function (message) {
    console.log("TypeScript way ppf caling function...arrow function");
    console.log(message);
};
var messageTwo = 'Test2';
typeTwo(messageTwo);
//Arrow function with returning a primitive integer
var typeThree = function (message) {
    var x;
    x = message.length;
    return x;
};
var myLength;
var messageThree = 'Test3';
myLength = typeThree(messageThree);
console.log(myLength);
