
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



seneca.add({ cmd: 'word_count' }, function (msg, res) {

  if (!msg.phrase) return res({ 
    message: 'no phrase passed'
  }, null);

  return res(null, {
    message: msg.phrase.split(" ").length
  });
  
 
});

seneca.add({ cmd: 'word_count', skipShort: true}, function (msg, res) {

  if (!msg.phrase) return res({ 
    message: 'no phrase passed'
  }, null);

  return res({ 
    message: msg.phrase.split(' ').filter(function (word) { return word.length >= 3 }).length
  });
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

seneca.act({ cmd: 'word_count', phrase: 'This is a Hello World' }, function (err, data) {
  if (err) return console.error(err.message);
  console.log(data);
});

seneca.act({ cmd: 'word_count', skipShort: true, phrase: 'This is a Hello World' }, function (err, data) {
  if (err) return console.error(err.message);
  console.log(data);
});

