const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('', function(answer){
    let result = answer.split(' ');
    console.log(Number(result[0]) + Number(result[1]));
    rl.close();
});
