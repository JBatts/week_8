// Creating a Web Server!
const fs = require('fs'); // File system
const http = require('node:http'); // Free code! The http for node

function read(filePath) {
    return fs.readFileSync(filePath, "utf8"); // File to string
}

const hostname = '127.0.0.1'; // AKA localhost, home or loopback (talk to ourselves)
const port = 5000; // Like a specific telephone extentsion (e.g. 123) e.g. 80/443 5000 8000

const server = http.createServer((req, res) => {
    res.statusCode = 200; // say everything is OK

    if (req.url.includes("json") && req.method === "GET") {
        res.setHeader('Content-Type', 'text/json'); // How to parse (what kind of info)

        const data = [
            { name: "apple" },
            { name: "banana" },
            { name: "apple" },
            { name: "donuts" },
            { name: "Timothy the Terrible" },

        ];
        const jsonText = JSON.stringify(data);

        res.end(jsonText) // End by sending the response (e.g. 'Hello World!\n')

    } else if (req.url === "/" || req.url.includes("html") && req.method === "GET") {
        res.setHeader('Content-Type', 'text/html'); // How to parse (what kind of info)

        const html = read("demo/static/index.html");
        res.end(html)// End by sending the response (e.g. 'Hello World!\n')
    } else if (req.url.includes("login")) { // POST is cool
        res.setHeader('Content-Type', 'text/plain'); // How to Parse (what kind of text)
        let body = '';
        req.on('data', chunk => body += chunk.toString()); // Convert Buffer to string
        req.on('end', () => res.end(body));
    } else {
        res.statusCode = 404 // Not Found
        res.setHeader('Content-Type', 'text/plain'); // How to parse (what kind of info)
        res.end(`404 - File Not Found \nMethod: ${req.method}\nUrl: ${req.url}`); // End by sending the response/content (e.g. 'Hello World!\n')
    };
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});