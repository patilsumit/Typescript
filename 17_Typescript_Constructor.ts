/*-- ----------------------------------------------------------------------
Program       :Typescript Constructor Practice 
Date          :12-10-2018
Auther        :Sumit Patil
Institute     :WebStack Academy (P) Ltd.
------------------------------------------------------------------------ */
class MyInputs
{
    x:number;
    y:number;

    constructor(val1:number,val2:number)
    {
        this.x=val1;
        this.y=val2;
    }

    add()
    {
        console.log("The addition is:"+(this.x + this.y));
    }

    sub()
    {
        console.log("The subtraction is "+ (this.x -this.y));
    }
}

let currentInput =new MyInputs(150,90);

currentInput.add();
currentInput.sub();
