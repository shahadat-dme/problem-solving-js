function isCheckLeapYear(year){
    if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
        return year > 1;
    } else {
        return year < 1;
    }
}
// console.log(isCheckLeapYear(2004));
// console.log(isCheckLeapYear(2025));
console.log(isCheckLeapYear(2));
console.log(isCheckLeapYear(4));