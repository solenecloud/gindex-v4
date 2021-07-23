const execa = require('execa');

module.exports = async () => {
  try {
    const result = await execa('git', ['--version']);
    const numRegex = /(git version).+/;
    if(numRegex.test(result.stdout)){
      return {
        res: true,
        output: result.stdout,
        cmd: result.command,
        exitCode: result.exitCode
      };
    } else {
      return {
        res: false,
        output: result.stderr,
        cmd: result.command,
        exitCode: result.exitCode
      };
    }
  } catch(e) {
    return {
      res: false,
      output: e.stderr,
      cmd: e.command,
      exitCode: e.exitCode
    };
  }
};
