// Creating a Web Server!

const http = require('node:http'); // Free code! The http for node

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
    } else if (req.url.includes("html") && req.method === "GET") {
        res.setHeader('Content-Type', 'text/html'); // How to parse (what kind of info)
        res.end(`
            <h1>Home Page </h1?
            <h3>Welcome to my first server, you like?</h3>
            <form>
                <input type = "text" name = "username" placeholder = "User Name">
                <input type = "password" name = "password" placeholder = "Password">
                <input type = "submit" value="Login"
            </form>
            `); // End by sending the response (e.g. 'Hello World!\n')
    } else if (req.url.includes("login")) {
        res.setHeader('Content-Type', 'text/plain');
        res.end(JSON.stringify(req.body, 0, 4));
    } else {
        res.setHeader('Content-Type', 'text/plain'); // How to parse (what kind of info)
        res.end(`Hello, World!\nMethod: ${req.method}\nUrl: ${req.url}`); // End by sending the response (e.g. 'Hello World!\n')
    };
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});