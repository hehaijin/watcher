'use strict'

const zmq=require('zeromq');
const subscriber=zmq.socket('sub');

subscriber.subscribe('');
subscriber.on('message', data=> {
	
	const message=JSON.parse(data);
	console.log(message);
	
});

subscriber.connect("tcp://localhost:8080");
