'use strict'
const fs=require('fs');
const filename=process.argv[2];
fs.readFile(filename,(err,data)=>{
	
	if(err){
		throw err;
	}
	console.log(data);
	
});