/*-- ----------------------------------------------------------------------
Program       :Typescript Class Practice 
Date          :12-10-2018
Auther        :Sumit Patil
Institute     :WebStack Academy (P) Ltd.
------------------------------------------------------------------------ */
class MyInputs
{
    x:number;
    y:number;

    add()
    {
        console.log("The addition is:"+(this.x + this.y));
    }

    sub()
    {
        console.log("The subtraction is "+ (this.x -this.y));
    }
}

let currentInput =new MyInputs();

currentInput.x=100;
currentInput.y=50;

currentInput.add();
currentInput.sub();
