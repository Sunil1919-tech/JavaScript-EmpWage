console.log("Welcome to EmpWage computation using JavaScript");

//UC1-Checking Employee Attendence
const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck == IS_ABSENT) {
    console.log("Employee Is ABSENT");
} else {
    console.log("Employee Is PRESENT");
}

//UC2-daily employeeWage

const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
{
    let empHrs=0;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    switch(empCheck){
        case IS_PART_TIME:
            empHrs= PART_TIME_HOURS;
            break;
        case IS_FULL_TIME:
            empHrs= FULL_TIME_HOURS;
            break;
    }
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Employee Wage is:"+ empWage);
}