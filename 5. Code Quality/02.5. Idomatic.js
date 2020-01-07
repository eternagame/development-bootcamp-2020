// Gets very complex with longer code.
// You need to read a lot of standard code to understand the code
function getGradesOfGoodStudents(students) {
  const res = [];
  for(const student of students){
    if(student.grade > 55) res.push(student.grade);
  }
  return res;
}

// More confusing for a beginner, but much easier to understand what's going on.
function getGradesOfGoodStudents(students) {
  return students.map(student => student.grade)
                 .filter(grade => grade > 55);
}