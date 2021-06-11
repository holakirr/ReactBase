import {
  AppConsts
} from '../consts';

/** Отправляет запрос на сервер через fetch
   *
   * @param {string} url ссылка
   * @param {object} options параметры
   *
   * @returns {Promise} промис
   *
   */
export default (url, options) => {
  const fetchOptions = {
    ...options || {},
  };

  fetchOptions.headers = {
    ...fetchOptions.headers,
    mode: 'cors',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  };

  fetchOptions.method = fetchOptions.method || 'POST';

  if (fetchOptions.body && typeof (fetchOptions.body) !== 'string') {
    fetchOptions.body = JSON.stringify(fetchOptions.body);
  }

  return fetch(`${url}`, fetchOptions)
    .then((response) => {
      if (response.status === 401) {
        throw Error(AppConsts.Error401);
      } else if (response.status === 500 ||
        response.status === 400) {
        return response.text()
          .then(text => ({
            isSuccess: false,
            errorMessage: text,
            code: response.status,
            options: {
              url,
              fetchOptions: {
                ...fetchOptions,
                body: JSON.parse(fetchOptions.body || '{}')
              }
            }
          }));
      } if (response.status === 409) {
        return response.text()
          .then(text => ({
            isSuccess: false,
            code: response.status,
            payload: {
              data: text ? JSON.parse(text) : undefined
            }
          }));
      } if (response.status > 400) {
        throw Error(`${response.status}----${response.statusText}`);
      }

      return response.text().then(text => (text ? JSON.parse(text) : undefined));
    })
    .then(response => ((response || {}).isSuccess === false ?
      response :
      {
        isSuccess: true,
        payload: {
          data: response
        }
      }))
    .catch(err => ({
      isSuccess: false,
      errorMessage: err.message,
      options: {
        url,
        fetchOptions: {
          ...fetchOptions,
          body: JSON.parse(fetchOptions.body || '{}')
        }
      }
    }));
};
