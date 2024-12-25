const studentName = "Bob Bobsky";

const math = 10;
const english = 6;
const science = 8;
const sport = 9;
const chemistry = 6;

const totalGrades = math + english + science + sport + chemistry;
const averageGrade = totalGrades / 5;
const hasPassed = averageGrade;
if (hasPassed >= 8) {
  console.log(`student has passed`);
} else {
  console.log(`student has failed`);
}
