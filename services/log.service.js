import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {
  console.log(chalk.bgRed('ERROR') + ' ' + error);
};

const printSuccess = (message) => {
  console.log(chalk.bgGreen('Success') + ' ' + message);
};

const printHelp = (message) => {
  console.log(
    dedent(`${chalk.bgCyan('Help')}
    Без параметров - вывод погоды
    -s [CITY] параметров - вывод погоды
    -h для вывода мощи
    -t [API_KEY] для сохранения токена`)
  );
};

export { printError, printSuccess, printHelp };
