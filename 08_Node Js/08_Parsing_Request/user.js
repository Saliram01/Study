const fs = require('fs');

const userRequestHandler = (req, res) => {
    // REQUEST
    console.log(req.url, req.method);

    // RESPONSE
    if (req.url === '/') {
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head> <title>User Input Form </title> </head>');
        res.write('<body><h1>Enter Your Details:</h1>');
        res.write('<form action="/submit-data" method="POST">');
        res.write('<div>');
        res.write('<input type="text" name="username" placeholder="Enter your name">');
        res.write('</div>');
        res.write('<label for="male">Male</label>');
        res.write('<input type="radio" id="male" name="gender" value="Male">');
        res.write('<label for="female">Female</label>');
        res.write('<input type="radio" id="female" name="gender" value="Female">');
        res.write('<div><input type="submit" value="Submit"></div>');
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    } 
    
    else if(req.url.toLowerCase() === '/submit-data' && req.method == 'POST') {
        const body = [];
        req.on('data', chunk => {
            console.log(chunk); 
            body.push(chunk);
        })

        req.on('end',() => {
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);

            const param = new URLSearchParams(parseBody);
            const bodyObj = Object.fromEntries(param);
            console.log(bodyObj);
 
            fs.writeFileSync('user.txt',JSON.stringify(bodyObj));
        });

        fs.writeFileSync('user.txt','Saliram Chaudhary');
        res.statusCode = 302;
        res.setHeader('Location','/');
    }


    
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head> <title>User Input Form </title> </head>');
    res.write('<body><h2>Learning Node js</h2></body>');
    res.write('</html>');
    res.end();
}

module.exports = userRequestHandler; // default exports