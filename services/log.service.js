import chalk from 'chalk';
import dedent from 'dedent-js';
import { getIcon } from './api.services.js';

const printError = (error) => {
  console.log(chalk.bgRed('ERROR') + ' ' + error);
};

const printSuccess = (message) => {
  console.log(chalk.bgGreen('Success') + ' ' + message);
};

const printWeather = (message) => {
  const { name, weather, main, wind } = message;
  const icon = getIcon(weather[0].icon);

  console.log(
    dedent(`${chalk.bgYellow('WEATHER')}
     Погода в місті ${name}
     ${icon}  ${weather[0].description}
     Температура: ${main.temp}°C (відчувається як ${main.feels_like}°C)
     Вологість: ${main.humidity}%.
     Швидкість вітру: ${wind.speed}м/сек`)
  );
};

const printHelp = () => {
  console.log(
    dedent(`${chalk.bgCyan('Help')}
      Без параметрів – виведення погоди
     -s [CITY] вибір міста
     -h для виведення потужності
     -t [API_KEY] для збереження токена`)
  );
};

export { printError, printSuccess, printHelp, printWeather };
