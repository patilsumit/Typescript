/*-- ----------------------------------------------------------------------
Program       :Typescript Interface Practice 
Date          :10-10-2018
Auther        :Sumit Patil
Institute     :WebStack Academy (P) Ltd.
------------------------------------------------------------------------ */
//Pack multiple attributes together ,start with CAPITAL LETTER
interface MyCoordinates
{
    x:number,
    y:number,
    z:number
}


let currentvalue: MyCoordinates =
{
    x:100,
    y:200,
    z:300
}

currentvalue.x=500;



console.log("X = " + currentvalue.x);
console.log("Y = " + currentvalue.y);
console.log("Z = " + currentvalue.z);

interface Point
{
    readonly x:number,
    readonly y:number
}

let p1: Point ={x:10 ,y:20};
p1.x=5;
console.log("p1="+p1.x);