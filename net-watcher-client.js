'use strict'

const netclient=require('net').connect({port:8080});
const client=require('./lib/ldj-client.js').connect(netclient);
client.on('message', message=> {
	
	if(message.type==='watching'){
	 console.log(`now watching ${message.file}`);
	}
	else if(message.type==='changed')
	{
		console.log(message);
	}
	else{
		console.log(`unrecognized message  ${message.type}`);
	}
});