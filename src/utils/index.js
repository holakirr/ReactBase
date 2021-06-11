/* eslint-disable no-mixed-operators */
/* eslint-disable eqeqeq */
/* eslint-disable no-bitwise */

import {
  getListPageSize
} from '../configuration';

const jwtDecode = require('jwt-decode');

/** Возвращает случайное число в диапазоне
 *
 * @param {number} min минимальная граница диапазона
 * @param {number} max максимальная граница диапазона
 *
 * @returns {number} случайное число в диапазоне
 */
export const RandomInteger = ({ min = 0, max = 100 } = {}) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

/** Возвращает количество страниц
 *
 * @param {number} count количество элементов
 * @param {number} size размер страницы
 *
 * @returns {number} количество страниц
 *
 */
export const getPageCount = ({ count = 0, size = getListPageSize() } = {}) => Math.round((count || 0) / size) +
  ((count || 0) % size > 0 && ((count || 0) % size) !== count ? 1 : 0);

/**
 * Приостанавливает выполенение программы
 *
 * param {number} timeout длительность приостановки мсек
 *
 */
export const delay = async ({ timeout = 0 } = {}) => {
  await new Promise((resolve) => {
    setTimeout(
      () => {
        resolve();
      },
      timeout || RandomInteger({ min: 1000, max: 1500 })
    );
  });
};

/**
 * Генерирует GUID
 *
 */
export const generateUUID = () => {
  let d = new Date().getTime();
  if (Date.now) {
    d = Date.now();
  }
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    // eslint-disable-next-line no-bitwise
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid;
};

/** Преобразует токен аутентификации в объект
 *
 * @param {string} token токен аутентификации
 *
 * @returns {object<Name, Id, ImageUrl>} объект с данными о пользователе (Name - ФИО, Id - Ид., ImageUrl - аватар)
 *
 */
export const DecodeAuthToken = ({ token = '' } = {}) => {
  const empty = {
    Name: '',
    Id: '',
    ImageUrl: '',
    exp: null,
    iss: '',
    aud: ''
  };

  // TODO: изменить структуру токена под свои нужды

  if (!token) {
    return empty;
  }

  try {
    return jwtDecode(token);
  } catch (e) {
    console.log(e);

    return empty;
  }
};
