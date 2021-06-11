import rest from '../utils/rest';

import Configuration from '../configuration';

/** Формирует запрос
 *
 * @param {string} action часть запроса
 * @param {object} options параметры запроса
 *
 * @returns {object} запрос
 *
 */
const getOptions = ({ action, options = {} } = {}) => ({
  url: `${Configuration.ApiBaseUrl}${action.replace('#ver#', Configuration.ApiBaseVersion)}`,
  options: {
    ...options,
  }
});

/**
 * Запрос get
 *
 * @param {string} url ссылка
 * @param {object} options параметры
 *
 * @returns Promise
 */
export const get = ({ action, options = {} } = {}) => rest.get({
  ...getOptions({ action, options })
});

/**
   * Запрос post
   *
   * @param {string} url ссылка
   * @param {object} options параметры запроса
   *
   * @returns Promise
   */
export const post = ({ action, options = {} } = {}) => rest.post({
  ...getOptions({ action, options })
});

/**
   * Запрос put
   *
   * @param {string} url ссылка
   * @param {object} options параметры запроса
   *
   * @returns Promise
   */
export const put = ({ action, options = {} } = {}) => rest.put({
  ...getOptions({ action, options })
});

/**
 * Запрос delete
 *
 * @param {string} url ссылка
 * @param {object} options параметры запроса
 *
 * @returns Promise
 */
export const del = ({ action, options = {} } = {}) => rest.del({
  ...getOptions({ action, options })
});

/**
 * Запрос upload
 *
 * @param {string} url ссылка
 * @param {object} options параметры запроса
 *
 * @returns Promise
 */
export const upload = ({
  action,
  options = {},
  file = {},
  onUploadProgress = () => { },
} = {}) => rest.upload({
  ...getOptions({ action }),
  options,
  file,
  onUploadProgress
});

/**
 * Запрос redirect
 *
 * @param {string} url ссылка
 * @param {object} options параметры запроса
 *
 * @returns Promise
 */
export const redirect = ({
  action,
  options = {},
} = {}) => rest.redirect({
  ...getOptions({ action }),
  options
});

export const postForm = props => rest.postForm(props);
