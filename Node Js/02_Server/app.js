// CREATION NODE SERVER
const http = require('http');

// 1st method general function
// function requestListner(req,res) {
//   console.log(req);
//   process.exit(); // stops the server or event loops
// }
// const listner = http.createServer(requestListner);
// const port = 3000;
// listner.listen(port,() => console.log(`Server running on address http://localhost:${port}`));

// OR

// 2nd method using arrow function
const server = http.createServer((req, res) => {
  console.log(req);
     process.exit(); // stop event loop
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running on address http://localhost:${port}`);
});