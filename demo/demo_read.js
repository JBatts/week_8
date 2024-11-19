const fs = require('fs'); // File system

function read(filePath){
    return fs.readFileSync(filePath, "utf8"); // File to string
}

const html = read("demo/static/index.html");
console.log(html)