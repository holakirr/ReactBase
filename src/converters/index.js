import dateFormat from 'dateformat-light';

/** Форматирует дату в строку по шаблону
 *
 * @param {Date} date Дата
 * @param {string} format формат
 *
 * @returns {string} форматированную дату
 *
 */
export const FormatDate = ({
  date = new Date(),
  format = 'dd.mm.yyyy'
} = {}) => dateFormat(date, format);

/** Форматирует дату в формат сервера
 *
 * @param {Date} date дата
 *
 * @returns {string} форматированная строка
 *
 */
export const FormatDateToServer = ({ value = '' } = {}) => {
  if (!value) {
    return value;
  }

  const [date, month, year] = value.split('.');

  return `${month}.${date}.${year}`;
};

/** Преобразует строку даты в объект даты. Формат dd<sep>mm<sep>yyyy, где sep - разделитель.
 *  По умолчанию точка.
 *
 * @param {string} date Дата в виде строки
 * @param {string} separator разделитель
 *
 * @returns {Date} дата
 *
 */
export const StringDateToDate = ({
  date = '',
  separator = '.'
} = {}) => {
  if (!date) {
    return null;
  }

  const [day, month, year] = date.split(separator);

  if (!day || !month || !year) {
    return null;
  }

  return new Date([year, month, day].join('-'));
};

/** Приводит полное ФИО к краткому формату - только инициалы
 *
 * @param {string} name Полное ФИО
 *
 * @returns {string} краткому формату - только инициалы ФИО
 *
 */
export const FullNameToShortForm = ({ name = '' } = {}) => {
  if (!name) {
    return '';
  }

  const [first = '', second = '', third = ''] = name.split(' ');
  const [firstSymbolOfSecond = ''] = second || '';
  const [firstSymbolOfThird = ''] = third || '';
  const result = [
    first || '',
    firstSymbolOfSecond ? ' ' : '',
    firstSymbolOfSecond || '',
    firstSymbolOfSecond ? '.' : '',
    firstSymbolOfThird ? ' ' : '',
    firstSymbolOfThird || '',
    firstSymbolOfThird ? '.' : '',
  ];

  return result.join('');
};

/** Вставляет в число разделитель
 *
 * @param {number|string} num число
 * @param {string} separator разделитель
 *
 * @returns {string} число в виде строки с разделителем
 *
 */
export const InsertSeparatorToNumber = ({
  num = '',
  separator = ' '
} = '') => {
  const n = String(num || '');
  if (n === '') {
    return '';
  }
  const p = n.indexOf('.');

  return n.replace(
    /\d(?=(?:\d{3})+(?:\.|$))/g,
    (m, i) => (p < 0 || i < p ? `${m}${separator}` : m)
  );
};

/** Приводить значение к числу
 *
 * @param {object} value значение
 *
 * @returns {Number} число
 */
export const ToNumber = ({ value = '' } = {}) => {
  if (!value) {
    return value;
  }

  // fix to safari 9
  if (typeof value === 'object') {
    if (!(value.target || {}).value) {
      return (value.target || {}).value;
    }

    return Number((value.target || {}).value.toString().replace(/\D/g, ''));
  }

  return Number(value.toString().replace(/\D/g, ''));
};

/** Приводить телефон из клиентского формата в серверный
 *
 * @param {string} value телефон (+7 (XXX) XXX XX XX)
 *
 * @returns {string} телефон в серверном формате
 */
export const PhoneNumberToServerFormat = ({ value = '' } = {}) => {
  if (!value) {
    return value;
  }

  const formatted = ToNumber({ value });

  return formatted.toString().slice(-10);
};

/** Приводить телефон из серверного формата в клиентский
 *
 * @param {string} value телефон (XXXXXXXXXX)
 *
 * @returns {string} телефон в клиентском формате
 */
export const PhoneServerFormatToPhoneNumber = ({ value = '' } = {}) => {
  if (!value) {
    return value;
  }

  if (value.length === 10) {
    return `+7 (${value.slice(0, 3)}) ${value.slice(3, 6)} ${value.slice(6, 8)} ${value.slice(8, 10)}`;
  }

  return value;
};


/** Разбивает ФИО на части
 *
 * @param {string} fullName ФИО
 *
 * @returns {object<{surname, name, patronymic}>} объект с частями ФИО
 *
 */
export const SplitFullName = ({ fullName = '' } = {}) => {
  if (!fullName) {
    return {
      surname: '',
      name: '',
      patronymic: ''
    };
  }

  const [
    surname = '',
    name = '',
    ...patronymic
  ] = (fullName || '').split(' ');

  return {
    surname,
    name,
    patronymic: patronymic && patronymic.length > 1 ?
      patronymic.join(' ') :
      patronymic.join('')
  };
};

/**
 * Разбивает ФИО на части из Dadata
 *
 * @param {object} fullName - Объект ФИО с данными из Dadata
 *
 * @returns {object<surname, name, patronymic>} Части ФИО
 */
export const DadataSpouseNameToApiSpouseName = ({ fullName = {} }) => {
  const { surname, name, patronymic } = (fullName || {}).data || {};

  return {
    surname,
    name,
    patronymic
  };
};

/** Разбивает номер документа на серию и номер
 *
 * @param {string} value номер документа
 *
 * @returns {object<{series, number}>} объект с частями документа
 *
 */
export const SplitDocNumber = ({ value = '' } = {}) => {
  const [series = '', number = ''] = (value || '').split('   ');

  return { series, number };
};
