var studentGrade;
(function (studentGrade) {
    studentGrade[studentGrade["Black"] = 0] = "Black";
    studentGrade[studentGrade["Red"] = 1] = "Red";
    studentGrade[studentGrade["Yellow"] = 2] = "Yellow";
    studentGrade[studentGrade["Orange"] = 3] = "Orange";
    studentGrade[studentGrade["Green"] = 4] = "Green";
})(studentGrade || (studentGrade = {}));
;
var myGradeInfo = studentGrade.Orange;
console.log(myGradeInfo);
