// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:

var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:    
    console.log('client request URL: ', request.url);
    // this is how we do routing:
    if(request.url === '/') {
        fs.readFile('views/index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else if(request.url === '/tree') {
        fs.readFile('views/tree.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else if(request.url === '/tree.js') {
        fs.readFile('js/tree.js', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/javascript'});
            response.write(contents); 
            response.end();
        });
    }
    else if(request.url === '/tree.csv') {
        fs.readFile('csv/tree.csv', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'application/octet-stream'});
            response.write(contents); 
            response.end();
        });
    }
    else if(request.url === '/htree') {
        fs.readFile('views/htree.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else if(request.url === '/htree.js') {
        fs.readFile('js/htree.js', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/javascript'});
            response.write(contents); 
            response.end();
        });
    }
    else if(request.url === '/brain') {
        fs.readFile('views/brain.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else if(request.url === '/brain.js') {
        fs.readFile('js/brain.js', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/javascript'});
            response.write(contents); 
            response.end();
        });
    }
    else if(request.url === '/flare.csv') {
        fs.readFile('csv/flare.csv', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'application/octet-stream'});
            response.write(contents); 
            response.end();
        });
    }
    else if(request.url === '/numbers.csv') {
        fs.readFile('csv/numbers.csv', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'application/octet-stream'});
            response.write(contents); 
            response.end();
        });
    }
    else if(request.url === '/bst') {
        fs.readFile('views/bst.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    else if(request.url === '/bst.css') {
        fs.readFile('css/bst.css', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/css'});
            response.write(contents); 
            response.end();
        });
    }
    else if(request.url === '/bst.js') {
        fs.readFile('js/bst.js', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/javascript'});
            response.write(contents); 
            response.end();
        });
    }
 
    else {
        response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");