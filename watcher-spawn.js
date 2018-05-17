'use strict';

const fs=require('fs')
const filename= process.argv[2];
const spawn=require('child_process').exec;

if(!filename) {
	
	throw Error('A file to watch must be specified');
}

fs.watch('target.txt',()=> {
	
	const ls=spawn('dir',[filename]);
	let output='';
	ls.stdout.on('data',chunk=> console.log(chunk));
	//ls.on('close',()=> console.log(output));
	

	//console.log('File Changed')
	});
console.log(`start watching ${filename} for changes ...`);
