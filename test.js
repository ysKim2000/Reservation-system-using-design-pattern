const readline = require('readline')
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

rl.on("line", function(line) {
	console.log("input: ", line)
	rl.close()
})
rl.on("close", function() {
	process.exit()
})