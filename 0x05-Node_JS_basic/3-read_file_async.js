/* Create a function named countStudents. It should accept a path in argument (same as in 2-read_file.js)
The script should attempt to read the database file asynchronously
The function should return a Promise
If the database is not available, it should throw an error with the text Cannot load the database
If the database is available, it should log the following message to the console Number of students: NUMBER_OF_STUDENTS
It should log the number of students in each field, and the list with the following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
CSV file can contain empty lines (at the end) - and they are not a valid student!
*/

const fs = require('fs');

function countStudents (path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
        if (err) reject(Error('Cannot load the database'));
        if (data) {
            const lines = data.split('\n').filter((line) => line);
            const fields = {};
            let count = 0;
            lines.shift();
            lines.forEach((line) => {
            count += 1;
            const student = line.split(',');
            if (!fields[student[3]]) fields[student[3]] = [];
            fields[student[3]].push(student[0]);
            });
            console.log(`Number of students: ${count}`);
            for (const field in fields) {
            if (field) {
                const list = fields[field];
                console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
            }
            }
        }
        resolve();
        });
    });
}

module.exports = countStudents;
