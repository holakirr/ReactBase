const Configuration = require('Configuration');

/**
 * Возвращает конфигурацию приложения
 */
export const getConfig = () => Configuration || {};

/**
 * Возвращает размер страницы из конфигурации
 *
 * returns {number} размер страницы
 */
export const getListPageSize = () => (getConfig().List || {}).PageSize || 25;

export const getUrls = () => getConfig().Urls || {};

export const getOrdersSiteUrl = () => getUrls().OrdersSite || '';

export default Configuration;
