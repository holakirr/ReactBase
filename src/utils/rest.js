import axios from 'axios';
import fetch from './fetch';

/** Загружает файл на сервер
 *
 * @param {File} file файл
 * @param {function} onUploadProgress фукнция прогресса
 * @param {string} url урл
 * @param {Array<{ name: string, value: object}>} options дополнительные параметры
 *
 */
const upload = ({
  file = {},
  onUploadProgress = () => { },
  url,
  options = []
}) => {
  const data = new FormData();

  data.append('file', file);
  options.forEach(x => data.append(x.name, x.value));

  return axios.post(url, data, { onUploadProgress });
};

/**
 * Запрос get
 *
 * @param {string} url ссылка
 * @param {object} options параметры
 *
 * @returns Promise
 */
const get = ({ url, options = {} } = {}) => fetch(url, {
  ...options,
  method: 'GET'
});

/**
 * Запрос post
 *
 * @param {string} url ссылка
 * @param {object} options параметры запроса
 *
 * @returns Promise
 */
const post = ({ url, options = {} } = {}) => fetch(url, {
  ...options,
  method: 'POST'
});

/**
 * Запрос put
 *
 * @param {string} url ссылка
 * @param {object} options параметры запроса
 *
 * @returns Promise
 */
const put = ({ url, options = {} } = {}) => fetch(url, {
  ...options,
  method: 'PUT'
});

/**
 * Запрос delete
 *
 * @param {string} url ссылка
 * @param {object} options параметры запроса
 *
 * @returns Promise
 */
const del = ({ url, options = {} } = {}) => fetch(url, {
  ...options,
  method: 'DELETE'
});

/** Осуществляет редирект приложения
 *
 * @param {string} url урл
 * @param {Array<{ name: string, value: object}>} options дополнительные параметры
 *
 */
const redirect = ({
  url,
  options = []
}) => {
  const data = new FormData();

  options.forEach(x => data.append(x.name, x.value));

  return axios.post(url, data);
};

const postForm = ({ path, params, method } = {}) => {
  const form = document.createElement('form');
  form.setAttribute('method', method || 'post');
  form.setAttribute('action', path);

  (params || []).forEach((x) => {
    const hiddenField = document.createElement('input');
    hiddenField.setAttribute('type', 'hidden');
    if (x.value) {
      hiddenField.setAttribute('name', x.name);
      hiddenField.setAttribute('value', x.value);
    }

    form.appendChild(hiddenField);
  });

  document.body.appendChild(form);
  form.submit();
};

/**
 * Эскпортирует методы запросов
 */
export default {
  /** Запрос get */
  get,

  /** Запрос post */
  post,

  /** Запрос put */
  put,

  /** Запрос delete */
  del,

  /** Запрос загрузки файла */
  upload,

  /** Запрос редиректа приложения */
  redirect,

  postForm
};
