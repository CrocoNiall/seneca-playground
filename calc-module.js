function init (msg, res) {
  console.log('Plugin Init');
  res();
}

function math (options) {
  this.add({ role: 'math', cmd: 'add' }, function (msg, res) {
    return res(null, {
      message: msg.left + msg.right
    });
  });

  this.add({ role: 'math', cmd: 'product' }, function (msg, res) {
    return res(null, {
      message: msg.left * msg.right 
    });
  });

  this.add({ init: 'math' }, init);
}

require('seneca')()
  .use(math)
  .act('role:math, cmd:add, left:3, right:10', console.log);