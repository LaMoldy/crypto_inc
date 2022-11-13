import chalk from "chalk";

export default class MessageLogger {
  static errorMessage(message) {
    console.log(chalk.red("[Error] ") + message);
  }

  static warningMessage(message) {
    console.log(chalk.yellow("[Warning] ") + message);
  }

  static infoMessage(message) {
    console.log(chalk.blue("[Info] ") + message);
  }
}
