/** Возвращает значение параметра из строки с параметрами
 *
 * @param {string} name название параметра
 * @param {string} url строка с параметрами или window.location.search по умолчанию
 *
 */
export const findParameter = ({ name = '', url = '' } = {}) => {
  let result = null;
  let tmp = [];

  const items = (url || window.location.search).substr(1).split('&');

  for (let i = 0; i < items.length; i += 1) {
    tmp = items[i].split('=');
    if (tmp[0] === name) {
      result = decodeURIComponent(tmp[1] || '');
      break;
    }
  }

  return result;
};
