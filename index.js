const TaskKitTask = require('taskkit-task');
const runShell = require('runshell');

class ShellTask extends TaskKitTask {
  execute(done) {
    runShell(this.options.command, {
      args: this.options.arguments,
      log: true
    }, (err, results) => {
      done(err);
    });
  }
}

module.exports = ShellTask;
