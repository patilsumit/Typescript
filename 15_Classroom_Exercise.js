var grades = function (studentInput) {
    var value = { allMarks: 0, allGrade: null };
    value.allMarks = ((studentInput.myAssignments / 80) * 0.3 +
        (studentInput.myAttendance / 20) * 0.2 +
        (studentInput.myTestMark / 100) * 0.3 +
        (studentInput.myProject / 50) * 0.2) * 100;
    if (value.allMarks >= 70) {
        value.allGrade = "Excellent";
    }
    else if (value.allMarks <= 70) {
        value.allGrade = "Very Good";
    }
    else if (value.allMarks <= 65) {
        value.allGrade = "Good";
    }
    else {
        value.allGrade = "Average";
    }
    return value;
};
var student = {
    myAttendance: 0,
    myAssignments: 0,
    myProject: 0,
    myTestMark: 0
};
student.myAttendance = 17;
student.myAssignments = 70;
student.myProject = 35;
student.myTestMark = 65;
var myResult;
myResult = grades(student);
console.log(myResult.allMarks);
console.log(myResult.allGrade);
