const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    if(req.url === '/favicon.ico') return;

    const log = `${Date.now()}: ${req.method} ${req.url} New request server\n`;
    fs.appendFile('./log.txt',log,(err) => {
        if(err) console.error("Error logging request:",err);
    });

    switch(req.url) {
        case '/': 
        // Home Page
        res.setHeader('Content-Type','text/html');
        res.end(`
            <h2>Welcome in home page</h2>    
            <a href="/form">Go to Form</a>
        `);
        break;

        case '/form': 
        // Form Page
        res.setHeader('Content-Type','text/html');
        res.end(`
            <form action="/form-data" method="POST">
                <label>Username</label> <br>
                <input type="text" name="username" placeholder="Enter your username"/>
                <br>
                <label>Password</label> <br>
                <input type="password" name="password" placeholder="Enter your password"/>
                <br>
                <input type="submit"/>
            </form>    
        `);
        break;

        case '/form-data': 
        // Handle Form
        if(req.url.toLocaleLowerCase() === '/form-data' && req.method === 'POST') {
            let body = '';

            req.on('data', chunk => {
                body += chunk.toString();
            });

            req.on('end', () => {
                // Parse form data
                const formData = new URLSearchParams(body);

                // Save Data to file
                const dataToSave = `Username: ${formData.get('username')},\n Password: ${formData.get('password')}`;

                fs.appendFile('./form-data.txt', dataToSave, (err) => {
                    if(err) {
                        res.setHeader('Content-Type','text/html');
                        res.end('Error saving data.');
                        console.error(`Error writing to file`, err);
                        return;
                    }
                    res.setHeader('Content-Type','text/html');
                    res.end(`
                        <h2>Form Submitted Successfully!</h2>
                        <a href="/">Go to Home</a>
                    `)
                });
                
            });
        } else { // 405
            res.setHeader('Content-Type','text/html');
            res.end('Method Not Allowed');
        }
        break;

        default:
            // Handle 404
            res.setHeader('Content-Type','text/html');
            res.end('<h2>404 - Page Not Found</h2>');
            break;
    }
});

server.listen(3001,() => {
    console.log("Server Started on http://localhost:3001");
});