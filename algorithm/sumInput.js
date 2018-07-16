const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question("", function(answer){
	let arr = answer.split(" ");
	const a = Number(arr[0]);
	const b = Number(arr[1]);
	console.log(a+b);
	rl.close();
});