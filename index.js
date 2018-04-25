const commands = require('./commands');

process.stdout.write('prompt> ');
process.stdin.on('data', (userInput) => {
	userInput = userInput.toString().trim();
	commands.evaluateCmd(userInput);
});