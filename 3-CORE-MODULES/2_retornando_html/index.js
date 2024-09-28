const http = require('http');

const port = 3000

const server = http.createServer((req, res) => {

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html');
    res.end(`
        <h1>Hello World!</h1>
        <p>Este é um simples exemplo de um server usando Node.js</p>
    `);

});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});