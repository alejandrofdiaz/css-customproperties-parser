const fs = require('fs'),
	path = require('path');

const REGEX_CURLY = /[^{\}]+(?=})/g;

const getCSSFile = pathToCSS => fs.readFileSync(pathToCSS, 'utf8');
const toJS = pathToCSS =>
	getCSSFile(pathToCSS)
		.replace(/(\r\n|\n|\r|\t)/gm, '')
		.match(REGEX_CURLY)
		.reduce((acum, value) => {
			return acum + value
		}, '')
		.split(';')
		.reduce((objectAcumulated, variable) => {
			if (variable) {
				const [name, value] = variable.split(':');
				objectAcumulated[name.replace('--', '')] = value;
			}
			return objectAcumulated;
		}, {});

module.exports = {
	toJS
}