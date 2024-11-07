const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    if(req.url === '/home') {
        res.write('<h1>Welcome To Home</h1>');
        return res.end();
    }
    else if(req.url === '/men') {
        res.write('<h1>Welcome To Men</h1>');
        return res.end();
    }
    else if(req.url === '/women') {
        res.write('<h1>Welcome To Women</h1>');
        return res.end();
    }
    else if(req.url === '/kids') {
        res.write('<h1>Welcome To Kids</h1>');
        return res.end();
    }
    else if(req.url === '/cart') {
        res.write('<h1>Welcome To Cart</h1>');
        return res.end();
    }
    res.write(`
         <html lang="en">
         <head>
            <title>Nevigator</title>
        </head>
        <body>
            <header>
                <h1>Nav List</h1>
                <nav>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/men">Men</a></li>
                        <li><a href="/women">Women</a></li>
                        <li><a href="/kids">Kids</a></li>
                        <li><a href="/cart">Cart</a></li>
                    </ul>
                </nav>
            </header>
        </body>
        </html>   
    `);

    return res.end();
})

const port = 3000;
server.listen(port,() => {
    console.log(`Server running address http://localhost:${port}`);
})