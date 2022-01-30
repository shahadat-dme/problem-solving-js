function getGrade(percent) {
    if (percent >= 90) {
        return 'A+';
    }
    if (percent >= 80) {
        return 'A';
    }
    if (percent >= 70) {
        return 'B';
    }
    if (percent >= 60) {
        return 'C';
    }
    return 'F';
}

console.log(getGrade(90)); // A+
console.log(getGrade(81)); // A
console.log(getGrade(72)); // B
console.log(getGrade(63)); // C
console.log(getGrade(54)); // F