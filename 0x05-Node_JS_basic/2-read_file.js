/* Create a function named countStudents. It should accept a path in argument
The script should attempt to read the database file synchronously
If the database is not available, it should throw an error with the text Cannot load the database
If the database is available, it should log the following message to the console Number of students: NUMBER_OF_STUDENTS
It should log the number of students in each field, and the list with the following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
CSV file can contain empty lines (at the end) - and they are not a valid student!
*/

const fs = require('fs');

function countStudents (path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n');
    const headers = lines.shift().split(',');
    const students = lines.filter((line) => line).map((line) => {
      const student = line.split(',');
      return headers.reduce((obj, header, index) => {
        obj[header] = student[index];
        return obj;
      }, {});
    });
    const nStudents = students.length;
    const csStudents = students.filter((student) => student.field === 'CS').length;
    const sweStudents = students.filter((student) => student.field === 'SWE').length;
    console.log(`Number of students: ${nStudents}`);
    console.log(`Number of students in CS: ${csStudents}. List: ${students.filter((student) => student.field === 'CS').map((student) => student.firstname).join(', ')}`);
    console.log(`Number of students in SWE: ${sweStudents}. List: ${students.filter((student) => student.field === 'SWE').map((student) => student.firstname).join(', ')}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

function getFieldStudents (field, lines) {
    const students = [];

    lines.forEach((line) => {
        const fields = line.split(',');
        if (fields[fields.length - 1].trim() === field && fields[0] !== 'firstname') {
            students.push(fields[0]);
        }
    });

    return students.join(', ');
}

module.exports = countStudents;
