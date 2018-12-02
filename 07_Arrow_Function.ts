/*-- ----------------------------------------------------------------------
Program       :Typescript Arrow Function
Date          :10-10-2018
Auther        :Sumit Patil
Institute     :WebStack Academy (P) Ltd.
------------------------------------------------------------------------ */
//Old Javascript way of calling function..
let typeOne=function(message)
{
   console.log("JavaScript way of function...normal function");
   console.log(message);
}

let messageone='Test1';
typeOne(messageone);

//Arrow function ,note the syntax
let typeTwo =(message:string) => 
{
    console.log("TypeScript way ppf caling function...arrow function");
    console.log(message);
}

let messageTwo='Test2';
typeTwo(messageTwo);

//Arrow function with returning a primitive integer
let typeThree=(message:string) =>
{
    let x: number;
    x=message.length;
    return x;
}

let myLength:number;
let messageThree='Test3';
myLength=typeThree(messageThree);
console.log(myLength);
