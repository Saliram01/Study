// Note -> We use always non-blocking operation.
/*
    1st = Clint request -> Go to event queue.
    2nd = Event loop check sync or async request and if sync it sends to thread pool
            if async it process and send.
    
    About Thread Pool
    Default there are 4 thread.
    we can increase the size according to system cpu cores 
    eg -> if computer has 8 core cpu- we can make 8 thread

*/

const os = require('os'); // It gives information about our system or computer.
console.log(os.cpus().length);


const fs = require('fs');

// Synchronous Check And Blocking...
// console.log("1");
// const result = fs.readFileSync('.test.txt','utf-8');
// console.log(result);
// console.log("2");


// Non - Blocking
// console.log("1");
// fs.readFile('.test.txt','utf-8',(err, result) => {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log(result);
//     }
// });
// console.log("2");
