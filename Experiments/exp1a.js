
const EventEmitter = require('events');

const event = new EventEmitter();

// Create greet event
event.on('greet', () => {
    console.log("Hello! Welcome to Node.js");
});

// Create exit event
event.on('exit', () => {
    console.log("Goodbye! Exiting program...");
});

// Trigger events
event.emit('greet');
event.emit('exit');
