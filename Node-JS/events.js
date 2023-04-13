const events = require("events");
//create an instance of eeventEmitter to create custom events
const emitter = new events.EventEmitter();
//emit method to raise a custom events, it takes two arguments => 1. name of the event 2. data passed to the handler of the event
//The callback method will be executed when the "customEvent" is emitted.
emitter.on("customEvent", (message, user) => {
  console.log(`${user}: ${message}`);
});
emitter.emit("customEvent", "Hello World", "Computer");
