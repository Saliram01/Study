const http = require('http');

const server = http.createServer((req, res) => {
    // REQUEST
    console.log(req.url, req.method, req.headers);

    // RESPONSE
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Hello Node Js </title></head>');
        res.write('<body><h1>Welcome To Home</h1></body>');
        res.write('</html>');
        return res.end();
    }
    else if (req.url === '/products') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Hello Node Js </title></head>');
        res.write('<body><h1>Checkout Our Products</h1></body>');
        res.write('</html>');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Hello Node Js </title></head>');
    res.write('<body><h1>Hello i am learning Node js</h1></body>');
    res.write('</html>');
})
const port = 3000;
server.listen(port, () => {
    console.log(`Server running on address http://localhost:${port}`);
})