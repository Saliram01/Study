const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req,res) => {
    if(req.url === '/favicon.ico') return res.end();
    const log = `${Date.now()}: ${req.url} New Request Received \n`;
    const myUrl = url.parse(req.url,true);
    console.log(myUrl);

    fs.appendFile('log.txt',log,(error, data) => {
        switch(myUrl.pathname) {
            case '/' : res.end('Welcome In Home');
            break;

            case '/about' :
            const username = myUrl.query.myname;
            res.end(`Hi, ${username}`);
            break;

            case '/search':
                const search = myUrl.query.search_query;
                res.end(`Here are your results for ${search}`);

            break;
            default: res.end('404 Page Not Found!');
        }
        
    });
});

server.listen(3001,() => { console.log("Server Started!")});