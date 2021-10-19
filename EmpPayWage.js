console.log("Welcome to EmpWage computation using JavaScript");

//UC8-computing the total wage and storing day wise Wage using Map
{
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;
    const WORKING_DAYS = 20;
    const MAX_HOURS_IN_MONTH = 160;
    let totalEmpHrs = 0;
    let totalWorkingDays = 0;

    let empDailyWageArray = new Array();
    let empDailyWageMap = new Map();
    function calDailyWage(empHrs) {
        return empHrs * WAGE_PER_HOUR;
    }

    function getWorkingHours(empCheck) {
        switch (empCheck) {
            case IS_PART_TIME:
                return PART_TIME_HOURS;
            case IS_FULL_TIME:
                return FULL_TIME_HOURS;
            default:
                return 0;
        }
    }

    let empHrs = 0;
    while (totalEmpHrs <= MAX_HOURS_IN_MONTH && totalWorkingDays < WORKING_DAYS) {
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        empHrs = getWorkingHours(empCheck);
        totalEmpHrs += empHrs;
        empDailyWageArray.push(calDailyWage(empHrs));
        empDailyWageMap.set(totalWorkingDays, calDailyWage(empHrs));

    }
    console.log(empDailyWageMap);
    function totalEmpWages(totalWage, dailyWage) {
        return totalWage + dailyWage;
    }
    console.log("Emp Wage Map TotalHrs : " + Array.from(empDailyWageMap.values()).reduce(totalEmpWages, 0));
}