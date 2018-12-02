var _this = this;
/*-- ----------------------------------------------------------------------
Program       :Typescript Arrow Practice Function
Date          :10-10-2018
Auther        :Sumit Patil
Institute     :WebStack Academy (P) Ltd.
------------------------------------------------------------------------ */
var obj = {
    myVar: 'foo',
    myFunc: function () {
        console.log(_this.myVar),
            setTimeout(function () {
                console.log(_this.myVar);
            }, 1000);
    }
};
obj.myFunc();
