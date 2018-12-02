var typeFour = function (studentInput) {
    //Ensure you initialize interface elements,
    //Failing which you will get compilation error
    var value = { overallMarks: 0, overallBand: null };
    value.overallMarks = studentInput.myTest +
        studentInput.myAttendance +
        studentInput.myAssignments +
        studentInput.myProject;
    value.overallBand = "Green";
    return value;
};
var resultValue;
var student = {
    myAttendance: 0,
    myAssignments: 0,
    myProject: 0,
    myTest: 0
};
student.myAttendance = 20;
student.myAssignments = 20;
student.myProject = 20;
student.myTest = 25;
resultValue = typeFour(student);
console.log(resultValue.overallMarks);
console.log(resultValue.overallBand);
