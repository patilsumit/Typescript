/*-- ----------------------------------------------------------------------
Program       :Typescript Classroom Exercise 
Date          :11-10-2018
Auther        :Sumit Patil
Institute     :WebStack Academy (P) Ltd.
------------------------------------------------------------------------ */
interface MyInputs
{
    myAttendance:number;
    myAssignments:number;
    myProject:number;
    myTestMark:number;
}

interface myAssessments
{
    allMarks:number;
    allGrade:string;
}

let grades =(studentInput:MyInputs) =>
{
  let value:myAssessments ={allMarks:0,allGrade:null};
  value.allMarks=((studentInput.myAssignments/80) * 0.3  +
  (studentInput.myAttendance/20) * 0.2 +
  (studentInput.myTestMark/100) * 0.3 +
  (studentInput.myProject/50) * 0.2 ) * 100 ;
  
   if(value.allMarks>=70)
   {
       value.allGrade="Excellent";
   }
   else if(value.allMarks<=70)
   {
       value.allGrade="Very Good";
   }
   else if(value.allMarks<=65)
   {
         value.allGrade="Good";
   }
   else
   {
       value.allGrade="Average";
   }
  
  return value;
}


let student: MyInputs={
    myAttendance:0,
    myAssignments:0,
    myProject:0,
    myTestMark:0
}

student.myAttendance=17;
student.myAssignments=70;
student.myProject=35;
student.myTestMark=65;

let myResult : myAssessments;
myResult=grades(student);

console.log(myResult.allMarks);
console.log(myResult.allGrade);

