const CSSParser = require('../index'),
	path = require('path'),
	FILE_PATH = path.resolve(__dirname, 'variables.css');
console.log(CSSParser.toJS(FILE_PATH));