var http = require('http');


function start() {
	function onRequest(request, response) {
	  response.writeHead(200, {'Content-Type': 'text/plain'});
	  response.write('Hello World, we have a page if we want to test something here.');
	  response.end();
	}

	http.createServer(onRequest).listen(8888);
	console.log('Server started and listening to port 8888');
}

exports.start = start;
