const fs = require('fs');
const roy = require('./roygbiv');

function done(output) {
	process.stdout.write(output);
	process.stdout.write('\nprompt> ');
}

function evaluateCmd(userInput) {
	const userInputArray = userInput.split(' ');
	const command = userInputArray[0];

	switch (command) {
		case 'echo':
			commandLibrary.echo(roy.red(userInputArray.slice(1).join(' ')));
			break;
		case 'cat': 
			commandLibrary.cat(userInputArray.slice(1));
			break;
		case 'royecho':
			commandLibrary.roy(userInputArray.slice(1))
	}
}

const commandLibrary = {
	echo: function(userInput) {
		done(userInput);
	},
	cat: function(fullPath) {
		const fileName = fullPath[0];
		fs.readFile(fileName, (err, data) => {
			if (err) {
				throw err;
			} else {
				done(data);
			}
		})
	},
	roy: function(userInput) {
		done(roy.rainbowMe(userInput.join(' ')));
	}
};

exports.commandLibrary = commandLibrary;
exports.evaluateCmd = evaluateCmd;