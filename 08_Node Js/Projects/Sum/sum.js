const sumRequestHandler = (req, res) => {
    console.log("In Sum Request Handler", req.url);
    console.log("1. In Sum req", req,res);
    const body = [];
    let result;
    req.on('data', chunk => {
        body.push(chunk);
        console.log("2. Chunk Came");
    });
    req.on('end', () => {
        console.log("3. req end");
        const bodyParse = Buffer.concat(body).toString();
        const param = new URLSearchParams(bodyParse);
        const bodyObj = Object.fromEntries(param);
        result = Number(bodyObj.first) + Number(bodyObj.second);
    });

    console.log("4. End event came");
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
}

exports.sumRequestHandler = sumRequestHandler; // named exports