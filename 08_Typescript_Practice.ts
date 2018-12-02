/*-- ----------------------------------------------------------------------
Program       :Typescript Arrow Practice Function
Date          :10-10-2018
Auther        :Sumit Patil
Institute     :WebStack Academy (P) Ltd.
------------------------------------------------------------------------ */
let obj={
        myVar:'foo',

        myFunc:function()
        {
            console.log(this.myVar),
            setTimeout(function()
            {
                console.log(this.myVar);
            },1000);
        }
}

obj.myFunc();
