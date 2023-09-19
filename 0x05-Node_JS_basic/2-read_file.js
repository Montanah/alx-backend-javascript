// Reading content from database.csv synchronously with Node JS
const fs = require('fs');

function countStudents (path) {
    try {
        const data = fs.readFileSync(path, 'utf8');
        const lines = data.trim().split('\n');

        const counts = {};

        lines.forEach((line) => {
          const fields = line.split(',');
          const field = fields[fields.length - 1].trim();

          if (field !== '') {
            // Increment the count for the field
            counts[field] = (counts[field] || 0) + 1;
          }
        });

        console.log('Number of students:');
        for (const field in counts) {
          if (counts[field]) {
            console.log(`Number of students in ${field}: ${counts[field]}. List: ${getFieldStudents(field, lines)}`);
          }
        }
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

countStudents('database.csv');
module.exports = countStudents;
