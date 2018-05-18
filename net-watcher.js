'use strict'
const fs=require('fs');
const net=require('net');
const filename=process.argv[2];
if(!filename){
	
	throw Error('Error: no filename attached');
}

const server=net.createServer(connection=> {
	
	console.log('connected');
	connection.write(JSON.stringify({type:'watching',file:filename}));
	const watcher=fs.watch(filename, ()=> connection.write(JSON.stringify({type:'changed',timestamp:Date.now()}   )));
	connection.on('close', ()=> {
		console.log("connection closed\n");
		watcher.close();
	});
	
});
server.listen(8080);