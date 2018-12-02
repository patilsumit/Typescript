//Usage of any
let anyTest: any

//Not issues here
anyTest='123';
anyTest=123;

let myBoolArray: boolean[];
myBoolArray =[true,false];

myBoolArray[0]='false'; //Error
myBoolArray[0]='true';  //Error