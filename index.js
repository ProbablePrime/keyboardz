var edge = require('edge');

var holdKey = edge.func({
	source:require('path').join(__dirname, 'index.cs'),
	methodName:'holdKey'
});

var releaseKey = edge.func({
	source:require('path').join(__dirname, 'index.cs'),
	methodName:'releaseKey'
});
module.exports = {
	holdKey,
	releaseKey
};


