# Keyboardz
Push and release windows keys using Edge.js and C#.

This is an [Edge.js](https://github.com/tjanczuk/edge) module. 


# Usage

```javascript
var keyboardz = require('keyboardz');

keyboardz.holdKey("W");
keyboardz.releaseKey("W");

```

## Timing?
```javascript
var keyboardz = require('keyboardz');

var key = "W";
setTimeout(function(){
	console.log('PUSH');
	keyboardz.holdKey(key);
},1000);

setTimeout(function(){
	console.log('RELEASE');
	keyboardz.releaseKey(key);
},5000);
```

No effort is made by this module to do syncronization or timing. Thats up to your node.js usage of it. It just sends raw global keyboard events. 

If you forget to clear your keys a physical keyboard press is needed to reset them once your application closes.


## TODO
* [ ] Better handling of keys. Right now you have to know what they are called, "W" rather than "w" etc.
* [ ] Fix the arrow keys, something is up with them. No idea what.
