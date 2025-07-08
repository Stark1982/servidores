const http = require('http');
const horaActual = new Date().toLocaleDateString();

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('!Hola¡ este es mi primer servidor con Node.js');
    res.end (`La hora actual es: ${horaActual} `);
    
});

const port = 3000;

server.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
    console.log(`texto interno`);
});