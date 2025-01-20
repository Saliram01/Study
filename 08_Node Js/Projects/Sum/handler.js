const { sumRequestHandler } = require('./sum');

const requestHandler = (req, res) => {
    console.log(req.url, req.method);

    if(req.url === '/') {
        res.setHeader('Content-Type','text/html');
        res.write(`
            <html>
                <header><title>Calculator</title></header>
                <body>
                    <h2>Welcome in Home Page</h2>
                    <a href="/calculator">Go To Calculator Page</a>
                </body>
            </html>    
        `);
        return res.end();
    }
    else if(req.url === '/calculator') {
        res.setHeader('Content-Type','text/html');
        res.write(`
            <html>
                <header><title>Calculator</title></header>
                <body>
                    <h2>Welcome Calculator</h2>
                    <form action="/calculate-result" method="POST">
                        <input type="number" placeholder="Enter first num" name="first"/>
                        <input type="text" placeholder="Enter second num" name="second"/>
                        <button type="submit">Submit</button>
                    </form>
                    <h2></h2>
                </body>
            </html>    
        `);
        return res.end();
    } 

    else if (req.url.toLowerCase() === "/calculate-result" && req.method === "POST") {
        return sumRequestHandler(req,res);
    }

    res.setHeader('Content-Type','text/html');
        res.write(`
            <html>
                <header><title>Calculator</title></header>
                <body>
                    <h2>404 Page does not exists..!!</h2>
                    <a href="/">Go To Home</a>
                </body>
            </html>    
    `);
        return res.end();
}

module.exports = requestHandler; 