/*-- ----------------------------------------------------------------------
Program       :Typescript Function Overloading Practice 
Date          :11-10-2018
Auther        :Sumit Patil
Institute     :WebStack Academy (P) Ltd.
------------------------------------------------------------------------ */
 function myOverload(topAndBottom:number ,leftAndRight:number);
 function myOverload(top:number,right:number,bottom:number,left:number);

function myOverload(a:number,b :number ,c?: number,d?: number)
{
    //Function Body Actual
     return a+b;
}

let myNum1:number,myNum2:number,myNum3:number,myNum4:number;

console.log (myOverload(50,60));          //overloding example-1
console.log(myOverload(myNum1,myNum2,myNum3,myNum4));    //overloding example-2
console.log(myOverload(40,50,10,50));                     //this is error function
