'use strict';
const TaskKitTask = require('taskkit-task');
const runShell = require('runshell');

class ShellTask extends TaskKitTask {
  execute(done) {
    runShell(this.options.command, {
      args: this.options.args,
      log: true,
      timeout: this.options.timeout,
      env: this.options.env
    }, (err, results) => {
      if (!this.options.continue) {
        return done(err);
      }
    });
    if (this.options.continue === true) {
      return done();
    }
  }
}

module.exports = ShellTask;
