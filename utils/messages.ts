import * as chalk from "chalk";

export default class MessageLogger {
  static errorMessage(message: string): void {
    console.log(chalk.red("[Error] ") + message);
  }

  static warningMessage(message: string): void {
    console.log(chalk.yellow("[Warning] ") + message);
  }

  static infoMessage(message: string): void {
    console.log(chalk.blue("[Info] ") + message);
  }
}
