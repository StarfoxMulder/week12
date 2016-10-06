var http = require('http');

//define port we want to listen to
var PORT1 = 7000;
var PORT2 = 7500;

//function to handle requests and send response
function handleRequest (request, response) {
	response.end('We made it everyone! This was your URL:'+request.url);
};

//create a server
var server = http.createServer(handleRequest);

//start our server
server.listen(PORT1, function() {
	//this callback is triggered when a server is successfully listening
	index = Math.floor(Math.random()*3)+1;
	switch(index) {
		case 1:
			word = "FANTASTIC";
			break;
		case 2:
			word = "OUTSTANDING";
			break;
		case 3:
			word = "BEEEEEAUTIFUL";
			break;
	};
	console.log('You are '+word+'!!');
});

server.listen(PORT2, function() {
	//this callback is triggered when a server is successfully listening
	index = Math.floor(Math.random()*3)+1;
	switch(index) {
		case 1:
			word = "REALLY dumb";
			break;
		case 2:
			word = "not good :(";
			break;
		case 3:
			word = "a lizard person";
			break;
	};
	console.log('You are '+word+'!!');
});