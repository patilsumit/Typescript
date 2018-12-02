function myOverload(a, b, c, d) {
    //Function Body Actual
    return a + b;
}
var myNum1, myNum2, myNum3, myNum4;
console.log(myOverload(50, 60)); //overloding example-1
console.log(myOverload(myNum1, myNum2, myNum3, myNum4)); //overloding example-2
console.log(myOverload(40, 50, 10, 50)); //this is error function
