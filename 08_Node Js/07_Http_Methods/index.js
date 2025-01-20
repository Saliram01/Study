const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req,res) => {
    if(req.url === '/favicon.ico') return res.end();
    const log = `${Date.now()}: ${req.method} ${req.url} New Request Received \n`;
    const myUrl = url.parse(req.url,true);

    fs.appendFile('log.txt',log,(error, data) => {
        switch(myUrl.pathname) {
            case '/': 
            if (req.method === 'GET') res.end('Welcome In Home Page');
            break;

            case '/about' :
            const username = myUrl.query.myname;
            res.end(`Hi, ${username}`);
            break;

            case '/search':
                const search = myUrl.query.search_query;
                res.end(`Here are your results for ${search}`);
            break;

            case '/signup':
                if(req.method === 'GET') res.end(`This is a sign up form`);
                else if(req.method === 'POST') {
                    // DB QUERY
                    res.end('Success');
                }
                break;
            default: res.end('404 Page Not Found!');
        }
        
    });
});

server.listen(3001,() => { console.log("Server Started!")});