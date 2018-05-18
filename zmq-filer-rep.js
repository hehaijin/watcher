'use strict'
const zmq= require('zeromq');
const fs=require('fs');



const responder=zmq.socket('rep');

responder.on('message', data=>{
	const request= JSON.parse(data);
	console.log(`received request to get: ${request.path}`);
	
	fs.readFile(request.path, (err,data)=>{
		console.log('sending response content.');
		responder.send(JSON.stringify({
			content:data.toString(),
			timestamp: Date.now(),
			pid:process.pid
			
			
		}));
		
		
		
	});
	
});

responder.bind('tcp://127.0.0.1:8080', err=>{
	console.log("listening for zmq requesters");
});

process.on('SIGINT', ()=> {
	console.log("shutting down due to user interruption, closing responder");
	responder.close();
});
