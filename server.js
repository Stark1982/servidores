const http = require('http');
const fs = require('fs');
const path = require('path');

/*const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('!Hola¡ este es mi primer servidor con Node.js');
    res.end (`La hora actual es: ${horaActual} `);
    
});
*/
const server = http.createServer((req, res) => {
    const filePath = Path.join(__dirnamedirname, 'index.html');

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.write.Head(500);
            res.end('error interno');
        } else {
            res.writeHead(200, { 'Content-Type':  'text/html' });
            res.end(content);
        }

        });
         });
        
    


const port = 3000;

server.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
    console.log(`texto interno`);
});
