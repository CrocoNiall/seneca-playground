
var seneca = require('seneca')();

seneca.add({ role: 'math', cmd: 'sum'}, function (msg, res) {
  var sum = msg.left + msg.right
  res(null, { answer: sum});
});

seneca.add({ role: 'math', cmd: 'prod'}, function (msg, res) {
  var prod = msg.left * msg.right
  res(null, prod)
});

seneca.add({ component: 'greeter' }, function (msg, res) {
  res(null, { message: 'Hello! ' + msg.name });
}); 

seneca.act({ role: 'math', cmd: 'sum', left: 3, right: 10}, function (err, data) {
  if (err) {
    return console.error(err)
  } 
  console.log(data)
});

seneca.act({ component: 'greeter', name: 'Niall'}, function (err, res) {
  if (err) return console.error(err);
  console.log(res.message);
});
