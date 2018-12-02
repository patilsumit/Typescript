/*-- ----------------------------------------------------------------------
Program       :Typescript Interface Practice 
Date          :10-10-2018
Auther        :Sumit Patil
Institute     :WebStack Academy (P) Ltd.
------------------------------------------------------------------------ */
interface myAssessments
{
    overallMarks: number;
    overallBand: string;
}

//Interface for sending input arguments
interface MyInputs
{
    myAttendance : number,
    myAssignments: number,
    myProject : number,
    myTest : number
}


let typeFour =(studentInput:MyInputs) =>
{
  //Ensure you initialize interface elements,
  //Failing which you will get compilation error
  let value:myAssessments ={overallMarks:0, overallBand:null};
  value.overallMarks=studentInput.myTest +
  studentInput.myAttendance +
  studentInput.myAssignments +
  studentInput.myProject ;
  value.overallBand="Green";

  return value;
}

let resultValue: myAssessments;
let student: MyInputs={
    myAttendance:0,
    myAssignments:0,
    myProject:0,
    myTest:0
}

student.myAttendance=20;
student.myAssignments=20;
student.myProject=20;
student.myTest=25;

resultValue=typeFour(student);

console.log(resultValue.overallMarks);
console.log(resultValue.overallBand);

