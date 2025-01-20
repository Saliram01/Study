const sumRequestHandler = (req, res) => {
    console.log("In Sum Request Handler", req.url);
    const body = [];
    req.on('data', chunk => body.push(chunk))
    req.on('end', () => {
        const bodyParse = Buffer.concat(body).toString();
        const param = new URLSearchParams(bodyParse);
        const bodyObj = Object.fromEntries(param);
        const result = Number(bodyObj.first) + Number(bodyObj.second);
        console.log(result);

        res.setHeader("Content-Type", "text/html");
        res.write(`
        <html>
            <head>
                <title>Result</title>
            </head>
            <body>
                <h2>Your sum is: ${result}</h2>
            </body>
        </html>    
        `);
        return res.end();
    })
}

exports.sumRequestHandler = sumRequestHandler; // named exports