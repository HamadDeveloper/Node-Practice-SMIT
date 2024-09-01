import { createServer } from "node:http";

// Create the server
const server = createServer((req, res) => {
    // Set the response HTTP header with status and content type
    if(req.url=== '/'){
        res.end("this is home page")
    }
    else if(req.url=== '/about'){
        res.end("this is about page")
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404: Not Found');
    }
});

// Make the server listen on port 3000 at 127.0.0.1
server.listen(3000, () => {
    console.log('Listening on 127.0.0.1:3000');
});
