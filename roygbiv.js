const BLACK 			= '\033[0;30m';
const RED 				= '\033[0;31m';
const GREEN 			= '\033[0;32m';
const ORANGE 			= '\033[0;33m';
const BLUE 				= '\033[0;34m';
const PURPLE 			= '\033[0;35m';
const CYAN 				= '\033[0;36m';
const LIGHT_GRAY 		= '\033[0;37m';
const DARK_GRAY 		= '\033[1;30m';
const LIGHT_RED 		= '\033[1;31m';
const LIGHT_GREEN 		= '\033[1;32m';
const YELLOW 			= '\033[1;33m';
const LIGHT_BLUE 		= '\033[1;34m';
const LIGHT_PURPLE		= '\033[1;35m';
const LIGHT_CYAN 		= '\033[1;36m';
const WHITE 			= '\033[1;37m';
const NO_COLOR			= '\033[0m';
const RAINBOW 			= [
							'red',
							'orange',
							'yellow',
							'green',
							'blue',
							'purple'
						]


const addColor = (color, str) => {
	return `${color}${str}${NO_COLOR}`;
}

exports.colors = [
	'BLACK',
	'RED',
	'GREEN',
	'ORANGE',
	'BLUE',
	'PURPLE',
	'CYAN',
	'LIGHT_GRAY',
	'DARK_GRAY',
	'LIGHT_RED',
	'LIGHT_GREEN',
	'YELLOW',
	'LIGHT_BLUE',
	'LIGHT_PURPLE',
	'LIGHT_CYAN',
	'WHITE',
	'NO_COLOR'
];

exports.black = (str) => {
	return addColor(BLACK, str);
}
exports.red = (str) => {
	return addColor(RED, str);
}
exports.green = (str) => {
	return addColor(GREEN, str);
}
exports.orange = (str) => {
	return addColor(ORANGE, str);
}
exports.blue = (str) => {
	return addColor(BLUE, str);
}
exports.purple = (str) => {
	return addColor(PURPLE, str);
}
exports.cyan = (str) => {
	return addColor(CYAN, str);
}
exports.lightGray = (str) => {
	return addColor(LIGHT_GRAY, str);
}
exports.darkGray = (str) => {
	return addColor(DARK_GRAY, str);
}
exports.lightRed = (str) => {
	return addColor(LIGHT_RED, str);
}
exports.lightGreen = (str) => {
	return addColor(LIGHT_GREEN, str);
}
exports.yellow = (str) => {
	return addColor(YELLOW, str);
}
exports.lightBlue = (STR) => {
	return addColor(LIGHT_BLUE, str);
}
exports.lightPurple = (str) => {
	return addColor(LIGHT_PURPLE, str);
}
exports.lightCyan = (str) => {
	return addColor(LIGHT_CYAN, str);
}
exports.white = (str) => {
	return addColor(WHITE, str);
}
exports.noColor = (str) => {
	return addColor(NO_COLOR, str);
}

// map() creates a new array by calling the provided function on every element of the calling userInputArray
// Carrie is probably splitting the string and rejoining it because she wants to use different colors for each of the characters; need to look at the RAINBOW definition to understand

exports.rainbowMe = (str) => {
	return str.split('').map((x, i) => {
		var color = RAINBOW[i % RAINBOW.length];
		return x === ' ' ? x : exports[color](x);
	}).join('');
}

exports.babyBlue = (str) => {
	return addColor(LIGHT_BLUE,str);
}
