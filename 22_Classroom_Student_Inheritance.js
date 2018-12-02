var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student1 = /** @class */ (function () {
    function Student1(inputDetail) {
        this.studentName = inputDetail.Sname;
        this.phoneNumber = inputDetail.Pnumber;
        this.BPE = inputDetail.Bpe;
        this.city = inputDetail.City;
    }
    Student1.prototype.getPlacementStatus = function () {
        if (this.BPE == "Eligible") {
            console.log("Placement Status: The Student is Eligible!");
        }
        else {
            console.log("Placement Status: The Student is not Eligible!");
        }
    };
    Student1.prototype.printData = function () {
        console.log("Student Name : " + this.studentName);
        console.log("Phone Number : " + this.phoneNumber);
        console.log("Placement Status : " + this.BPE);
        console.log("City : " + this.city);
    };
    return Student1;
}());
var WSAStudent1 = /** @class */ (function (_super) {
    __extends(WSAStudent1, _super);
    function WSAStudent1(info1, inputDetail2) {
        var _this = _super.call(this, info1) || this;
        _this.courseName = inputDetail2.Cname;
        _this.courseStatus = inputDetail2.Cstatus;
        _this.courseFee = inputDetail2.Cfee;
        _this.balanceFee = inputDetail2.Bfee;
        _this.CFPS = inputDetail2.Cfps;
        return _this;
    }
    WSAStudent1.prototype.payFee = function () {
        if (this.CFPS == "Unpaid") {
            console.log("Fee Status : The student has to pay remaining fee");
        }
        else {
            console.log("Fee Status : The student has paid all fees");
        }
    };
    WSAStudent1.prototype.printStudentData = function () {
        _super.prototype.printData.call(this);
        console.log("Course Name : " + this.courseName);
        console.log("Course Status : " + this.courseStatus);
        console.log("Course Fee : " + this.courseFee);
        console.log("Balance Fee : " + this.balanceFee);
        console.log("Course Fee Paid : " + this.CFPS);
    };
    return WSAStudent1;
}(Student1));
var info1 = {
    Sname: "Raja",
    Pnumber: 9916919750,
    Bpe: "Eligible",
    City: "Bangalore"
};
var info2 = {
    Cname: "FullStack",
    Cstatus: "Incomplete",
    Cfee: 30000,
    Bfee: 15000,
    Cfps: "Paid"
};
var newestData1 = new WSAStudent1(info1, info2);
console.log(newestData1.getPlacementStatus());
console.log(newestData1.payFee());
console.log(newestData1.printStudentData());
