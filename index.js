const TaskKitTask = require('taskkit-task');
const runShell = require('runshell');

class ShellTask extends TaskKitTask {
  execute(done) {
    runShell(this.options.command, {
      args: this.options.arguments,
      env: process.env
    }, (err, results) => {
      if (err) {
        return done(err);
      }
      console.log(results); //eslint-disable-line no-console
      done();
    });
  }
}

module.exports = ShellTask;
