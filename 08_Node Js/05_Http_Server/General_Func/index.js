function requestListner(req,res) {
  console.log(req);
//   process.exit(); // stops the server or event loops
}

const server = http.createServer(requestListner)
.listen(3000,() => console.log(`Server running on address http://localhost:3000`));