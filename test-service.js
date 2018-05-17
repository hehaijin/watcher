'use strict'

const server=require('net').createServer(connection=>{
	console.log('subscriber connected');
	const firstChunk='{"type":"changed","time';
	const secondChunk='stamp":14502434343}\n';
	connection.write(firstChunk);
	const timer=setTimeout( ()=>{
		connection.write(secondChunk);
		connection.end();
	} ,100);
	
	connection.on('end',()=>{
		
		clearTimeout(timer);
		console.log("subscriber disconnected");
	});
	
	
	
});

server.listen(8080, ()=> console.log("test server on"));