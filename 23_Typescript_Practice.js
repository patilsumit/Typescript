/*-- ----------------------------------------------------------------------
Program       :Typescript Practice
Date          :21-10-2018
Auther        :Sumit Patil
Institute     :WebStack Academy (P) Ltd.
------------------------------------------------------------------------ */
var a = "sharada";
var b = a.charCodeAt(2); //Print Ask Value
console.log(b);
var c = "sumitpatil";
var d = c.substr(1, 5);
console.log("substr():" + d);
var myArray;
myArray = [1, 2, 3, 4];
console.log(myArray[1]);
console.log(myArray[3]);
var myTuple = [10, "Hello", "World", "Typescript"];
console.log("Before push" + myTuple.length);
console.log("Before push" + myTuple);
myTuple.push(15);
myTuple.push(100);
console.log("Before push" + myTuple.length);
console.log("Before push" + myTuple);
myTuple.pop();
console.log("Before push" + myTuple.length);
console.log("Before push" + myTuple);
