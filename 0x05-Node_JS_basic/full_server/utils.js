/* create a function named readDatabase that accepts a file path as argument:
It should read the database asynchronously
It should return a promise
When the file is not accessible, it should reject the promise with the error
When the file can be read, it should return an object of arrays of the firstname of students per fields
*/

const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (!err) {
        const fields = {};
        const students = data.split('\n');
        students.shift();
        students.forEach((student) => {
          if (student) {
            const row = student.split(',');
            if (!fields[row[3]]) fields[row[3]] = [];
            fields[row[3]].push(row[0]);
          }
        });
        resolve(fields);
      } else {
        reject(Error('Cannot load the database'));
      }
    });
  });
}

export default readDatabase;
module.exports = readDatabase;
