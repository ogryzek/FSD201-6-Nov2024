const http = require('http');

// const server_function = function(request, response) {
//     response.write('Hello, World!\n');
//     response.end();
// }
// const server = http.createServer(server_function);
// server.listen(3000);

http.createServer((req, res) =>{
    res.write('Hello, Worldddd!\n')
    res.end();
}).listen(3000);
