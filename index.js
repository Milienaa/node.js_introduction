const fs = require('fs');
let studentArr = ['Bezklynska Miliena', 'Nazarchenko Artem', 'Popova Alina', 'Shamrai Tymur', 'Nikitin Andrew', 'Varyshko Andrew', 'Zhovnirovich Ivan'];

fs.writeFileSync('list_students.txt', 'List of students\n'); 

listStudents(studentArr);

function listStudents(studentArr) {
    for (let i = 0; i < studentArr.length; i++) {
        fs.appendFileSync('list_students.txt', `${i + 1}. ${studentArr[i]}\n`); 
    }
}