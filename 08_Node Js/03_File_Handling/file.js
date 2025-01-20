const fs = require('fs');

// Sync...
// fs.writeFileSync('./test.txt',"Hay there...");

// Async...
// fs.writeFile('./test.txt',"Hello World",(err) => {});

// Read File Sync...
// const result = fs.readFileSync('./test.txt','utf-8');
// console.log(result);

// Read File Async
// fs.readFile('./test.txt','utf-8',(err, result) => {
//     if(err) {
//         console.log("Error", err);
//     }
//     else {
//         console.log(result);
//     }
// });

// Append file Sync...
// fs.appendFileSync('./test.txt',`Hello there \n`);

// Append file Async
// fs.appendFile('./test.txt','Hii guy',(err) => {});

// Copy file Sync...
// fs.copyFileSync('./test.txt','./copy.txt');

// Copy file Async...
// fs.copyFile('./test.txt','./copy.txt',(err) =>{});

// Delete file
// fs.unlinkSync('./copy.txt');
// fs.unlink('./copy.txt',(err) => {});

// Checks the file stat means time , byte, and other
// console.log(fs.statSync('./test.txt'));

// fs.mkdirSync('./my-docs'); // it creates folder


