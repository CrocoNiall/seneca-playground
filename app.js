
var seneca = require('seneca')();

seneca.add({ role: 'math', cmd: 'sum'}, function (msg, res) {
  var sum = msg.left + msg.right
  res(null, { answer: sum});
});

seneca.add({ role: 'math', cmd: 'prod'}, function (msg, res) {
  var prod = msg.left * msg.right
  res(null, prod)
});

seneca.act({ role: 'math', cmd: 'sum', left: 3, right: 10}, console.log);
