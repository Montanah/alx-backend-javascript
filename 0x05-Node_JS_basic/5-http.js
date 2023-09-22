/* create a small HTTP server using the http module:
It should be assigned to the variable app and this one must be exported
HTTP server should listen on port 1245
It should return plain text
When the URL path is /, it should display Hello Holberton School! in the page body
When the URL path is /students, it should display This is the list of our students followed by the same content as the file 3-read_file_async.js (with and without the database) - the name of the database must be passed as argument of the file
CSV file can contain empty lines (at the end) - and they are not a valid student!
*/

const http = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;

const app = http.createServer((req, res) => {
  const { url } = req;
  if (url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    countStudents(process.argv[2])
      .then((data) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(data);
      })
      .catch((error) => {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end(error.message);
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Invalid request');
  }
});

app.listen(port);

module.exports = app;
