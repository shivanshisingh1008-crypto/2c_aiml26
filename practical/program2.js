/*Question 2. Online Examination Event Management

Develop an event-driven application using the EventEmitter class.

Implement the following events:
1. examStarted – Display the examination start message.
2. answerSubmitted – Display the student's roll number and submitted answer.
3. timeWarning – Display a warning when only 5 minutes remain.
4. examCompleted – Display the examination completion message.
5. examSubmitted – Display a message when the student submits the examination.
Additional condition: Use a single EventEmitter object to manage all events.*/

const EventEmitter = require('events');
const examEmitter = new EventEmitter();

examEmitter.on('examStarted', () => {
  console.log('Examination started.');
});

examEmitter.on('answerSubmitted', (rollNo, answer) => {
  console.log(`Answer submitted by Student ${rollNo}: ${answer}`);
});

examEmitter.on('timeWarning', () => {
  console.log('Warning: Only 5 minutes remaining.');
});

examEmitter.on('examCompleted', () => {
  console.log('Examination completed.');
});

examEmitter.on('examSubmitted', (rollNo) => {
  console.log(`Student ${rollNo} has submitted the examination.`);
});

// Simulating the events
examEmitter.emit('examStarted');
examEmitter.emit('answerSubmitted', 101, 'Answer A');
examEmitter.emit('timeWarning');
examEmitter.emit('examCompleted');
examEmitter.emit('examSubmitted', 101);

