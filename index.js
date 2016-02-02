var edge = require('edge');
var dllPath = require('path').join(__dirname, 'InputSimulator.dll');
console.log(dllPath);
var holdKey = edge.func({
	source:require('path').join(__dirname, 'index.cs'),
	methodName:'holdKey',
	references:[dllPath]
});

var releaseKey = edge.func({
	source:require('path').join(__dirname, 'index.cs'),
	methodName:'releaseKey',
	references:[dllPath]
});

var holdKeySend = edge.func({
	source:require('path').join(__dirname, 'index.cs'),
	methodName:'sendInputDown',
	references:[dllPath]
});

var releaseKeySend = edge.func({
	source:require('path').join(__dirname, 'index.cs'),
	methodName:'sendInputUp',
	references:[dllPath]
});
module.exports = {
	holdKey,
	releaseKey,
	releaseKeySend,
	holdKeySend
};


