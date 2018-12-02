/*-- ----------------------------------------------------------------------
Program       :Typescript Inheritance Super Classroom Practice 
Date          :21-10-2018
Auther        :Sumit Patil
Institute     :WebStack Academy (P) Ltd.
------------------------------------------------------------------------ */
interface initialData{
    Sname: string;
    Pnumber: number;
    Bpe: string;
    City: string;
}

interface middleData{
    Cname: string;
    Cstatus: string;
    Cfee: number;
    Bfee: number;
    Cfps: string;
}

class Student1 {
    studentName: string;
    phoneNumber: number;
    private BPE: string;
    city: string;

    constructor(inputDetail: initialData) {
        this.studentName = inputDetail.Sname;
        this.phoneNumber = inputDetail.Pnumber;
        this.BPE = inputDetail.Bpe;
        this.city = inputDetail.City;
    }

    getPlacementStatus() {
        if(this.BPE == "Eligible") {
            console.log("Placement Status: The Student is Eligible!");
        }
        else {
            console.log("Placement Status: The Student is not Eligible!");
        }
    }

    printData() {
        console.log("Student Name : " + this.studentName);
        console.log("Phone Number : " + this.phoneNumber);
        console.log("Placement Status : " + this.BPE);
        console.log("City : " + this.city);
    }
}

class WSAStudent1 extends Student1 {
    courseName: string;
    courseStatus: string;
    courseFee: number;
    balanceFee: number;
    private CFPS: string;

    constructor(info1,inputDetail2: middleData) {
        super(info1);
        this.courseName = inputDetail2.Cname;
        this.courseStatus = inputDetail2.Cstatus;
        this.courseFee = inputDetail2.Cfee;
        this.balanceFee = inputDetail2.Bfee;
        this.CFPS = inputDetail2.Cfps;
    }

    payFee() {
        if(this.CFPS=="Unpaid") {
            console.log("Fee Status : The student has to pay remaining fee");
        }
        else {
            console.log("Fee Status : The student has paid all fees");
        }
    }

    printStudentData() {
        super.printData();
        console.log("Course Name : " + this.courseName);
        console.log("Course Status : " + this.courseStatus);
        console.log("Course Fee : " + this.courseFee);
        console.log("Balance Fee : " + this.balanceFee);
        console.log("Course Fee Paid : " + this.CFPS);
    }
}


let info1 : initialData = {
    Sname: "Sumit",
    Pnumber: 7600520898,
    Bpe: "Eligible",
    City: "Bangalore"
};

let info2 : middleData = {
    Cname: "FullStack Web Developer",
    Cstatus: "Incomplete",
    Cfee: 30000,
    Bfee: 15000,
    Cfps: "Paid",
}

let newestData1 = new WSAStudent1(info1,info2);
console.log(newestData1.getPlacementStatus());
console.log(newestData1.payFee());
console.log(newestData1.printStudentData());