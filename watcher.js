'use strict';

const fs=require('fs')
const filename= process.argv[2];

if(!filename) {
	
	throw Error('A file to watch must be specified');
}

fs.watch('target.txt',()=> console.log('File Changed'));
console.log(`start watching ${filename} for changes ...`);
