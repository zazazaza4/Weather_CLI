#!/usr/bin/env node

import { getArgs } from './helpers/args.js';
import { getWeather } from './services/api.services.js';
import {
  printHelp,
  printSuccess,
  printError,
  printWeather,
} from './services/log.service.js';
import {
  getKeyValue,
  saveKeyValue,
  TOKEN_DICTIONARY,
} from './services/storage.service.js';

const saveToken = async (token) => {
  if (!token.length) {
    printError('Не передано токен');
    return;
  }

  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSuccess('Токен збережений');
  } catch (error) {
    printError(e.message);
  }
};

const saveCity = async (city) => {
  console.log(city);
  if (!city.length) {
    printError('Не передано місто');
    return;
  }

  try {
    await saveKeyValue(TOKEN_DICTIONARY.city, city);
    printSuccess('Місто збережено');
  } catch (error) {
    printError(e.message);
  }
};

const getForcast = async () => {
  try {
    const city = process.env.CITY ?? (await getKeyValue(TOKEN_DICTIONARY.city));
    const weather = await getWeather(city);
    printWeather(weather);
  } catch (error) {
    if (error?.response?.status == 404) {
      printError('Невірно вказано місто');
    } else if (error?.response?.status == 401) {
      printError('Невірно вказано токен');
    } else {
      printError(error.message);
    }
  }
};

const initCLI = () => {
  const args = getArgs(process.argv);

  if (args.h) {
    return printHelp();
  }

  if (args.s) {
    return saveCity(args.s);
  }

  if (args.t) {
    return saveToken(args.t);
  }

  getForcast();
};

initCLI();
