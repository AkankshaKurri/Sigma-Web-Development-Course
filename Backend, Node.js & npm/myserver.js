//Go to "nodejs.org tutorials"
//Go to first website "Introduction to Node.js"
//copy that "An Example Node.js Application"

const { createServer } = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//PS C:\Users\Akanksha kurri\OneDrive\Documents\Documents\MyFiles\Sigma Web Development Course\Backend, Node.js & npm> node ./myserver.js
//Server running at http://127.0.0.1:3000/

//Go to this website "http://127.0.0.1:3000/"
//Hello wprld will be written