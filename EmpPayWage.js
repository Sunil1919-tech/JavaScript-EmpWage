console.log("Welcome to EmpWage computation using JavaScript");

//UC1-Checking Employee Attendence
const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == IS_ABSENT) {
    console.log("Employee Is ABSENT");
} else {
    console.log("Employee Is PRESENT");
}
