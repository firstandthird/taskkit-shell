'use strict';
const TaskKitTask = require('taskkit-task');
const runShell = require('runshell');

class ShellTask extends TaskKitTask {
  // returns the module to load when running in a separate process:
  get classModule() {
    return path.join(__dirname, 'index.js');
  }
  execute(done) {
    const cmd = runShell(this.options.command, {
      args: this.options.args,
      log: false,
      timeout: this.options.timeout,
      env: this.options.env
    }, (err, results) => {
      if (!this.options.continue) {
        return done(err);
      }
    });
    cmd.stdout.on('data', (data) => {
      this.log(data.toString());
    });
    cmd.stderr.on('data', (data) => {
      this.log(data.toString());
    });
    if (this.options.continue === true) {
      return done();
    }
  }
}

module.exports = ShellTask;
