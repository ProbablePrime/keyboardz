# Keyboardz
Push and release windows keys using Edge.js and C#.

This is an [Edge.js](https://github.com/tjanczuk/edge) module. 


# Usage

```javascript
var keyboardz = require('keyboardz');

keyboardz.holdKey("W");
keyboardz.releaseKey("W");

```

No effort is made by this module to do syncronization or timing. Thats up to your node.js usage of it. It just sends raw global keyboard events. 

If you forget to clear your keys a physical keyboard press is needed to reset them. 

## TODO
* [ ] Better handling of keys. Right now you have to know what they are called, "W" rather than "w" etc.
* [ ] Fix the arrow keys, something is up with them. No idea what.
