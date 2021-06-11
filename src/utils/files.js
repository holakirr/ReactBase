/** Возвращает расширение файла
 *
 * @param {string} filename путь/имя файла
 *
 * @returns {string} расширение файла
 *
 */
export const getFileExtension = ({ filename = '' } = {}) => (filename.split('.').pop() || '').toLowerCase();
