module.exports = function (options) {
  this.add('role:employee, cmd: add', function (msg, done) {
    this.make('employee')
      .data$(msg.data)
      .save$(done);
  });

  this.find('role: employee, cmd: get', function (msg, done) {
    this.make('employee').load$(msg.id, done);
  })
}