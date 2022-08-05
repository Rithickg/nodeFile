var events = require('events');
var eventEmitter = new events.EventEmitter();

var myEventHandler = function(){
console.log("This is an EventEmitter doing emit when emit is called");
}

eventEmitter.on("Event",myEventHandler);

eventEmitter.emit("Event");