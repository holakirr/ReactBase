/** Устанавливает значение в сессионное хранилище
 *
 * @param {string} key ключ
 * @param {string} value значение
 *
 */
export const setItem = ({ key = '', value = '' } = {}) => {
  if (sessionStorage && key) {
    sessionStorage.setItem(key, value);
  }
};

/** Удаляет значение из сессионного хранилища
 *
 * @param {string} key ключ
 *
 */
export const removeItem = ({ key = '' } = {}) => {
  if (sessionStorage && key) {
    sessionStorage.removeItem(key);
  }
};

/** Возвращает значение из сессионного хранилища
 *
 * @param {string} key ключ
 *
 * @returns {string} значение из хранилища по ключу или ''
 */
export const getItem = ({ key = '' } = {}) => {
  if (sessionStorage && key) {
    return sessionStorage.getItem(key);
  }

  return '';
};
