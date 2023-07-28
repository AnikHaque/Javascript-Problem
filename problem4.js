function calculateGrade(score) {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80 && score <= 89) {
        return 'B';
    } else if (score >= 70 && score <= 79) {
        return 'C';
    } else if (score >= 60 && score <= 69) {
        return 'D';
    } else {
        return 'F';
    }
}

const score = 85;
const grade = calculateGrade(score);
console.log(`The grade for a score of ${score} is: ${grade}`);
