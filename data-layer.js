var employee_storage = require('./employee-model');

var seneca = require('seneca')()
  .use(employee_storage);

var employee = {
  name: 'David',
  surname: 'Smith',
  position: 'Key-Smasher'
}

function add_employee () {
  seneca.act({ role: 'employee', cmd: 'add'}, function (err, msg) {
    console.log(msg);
  });
}
add_employee();