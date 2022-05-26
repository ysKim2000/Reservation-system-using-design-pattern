const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question("아무거나 입력하세요: ", (input) => {
	//TODO: 입력 받은 후 할 작업 작성
	console.log(`입력한 내용 : ${input}`);

	rl.close();	//close()를 호출하지 않으면 무한 반복
});

// const readline = require('readline');
// const rl = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout,
// });

// rl.on('line', (input) => {
// 	//TODO: 입력 받은 후 할 작업 작성
// 	console.log(`입력한 내용 : ${input}`);

// 	rl.close();//close()를 호출하지 않으면 무한 반복
// });