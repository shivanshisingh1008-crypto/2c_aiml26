const EventEmitter = require('events');
const attendanceEmitter = new EventEmitter();

attendanceEmitter.on('studentPresent', (name, rollNo, subject) => {
  console.log(`Student Present: Name: ${name}, Roll No: ${rollNo}, Subject: ${subject}`);
});

attendanceEmitter.on('studentAbsent', (name, rollNo) => {
  console.log(`Student Absent: Name: ${name}, Roll No: ${rollNo}`);
});

attendanceEmitter.on('attendanceSummary', (presentCount, absentCount) => {
  console.log(`Attendance Summary: Present Students: ${presentCount}, Absent Students: ${absentCount}`);
});

attendanceEmitter.emit('studentPresent', 'Alice', 101, 'Mathematics');
attendanceEmitter.emit('studentAbsent', 'Bob', 102);
attendanceEmitter.emit('attendanceSummary', 1, 1);

