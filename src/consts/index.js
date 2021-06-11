/** Константы приложения */
export const AppConsts = {
  /** Событие после создания store */
  InitApp: '@@INIT_APP',

  /** Ошибка 401 */
  Error401: '401----Unauthorized',

  /** Ошибка 409 */
  Error409: '409----Conflict',

  /** Максимальный размер файла, МБ */
  MaxFileSize: 10,

  /** Текст ошибки при отправке файлов */
  FilesSendErrorMessage: 'Произошла ошибка при отправке файлов. Попробуйте повторить отправку позже.',

  /** Текст ошибки для формата файла */
  FileTypeErrorMessage: 'Неверный формат файла',

  /** Текст ошибки для размера файла */
  FileSizeErrorMessage: 'Превышен допустимый размер файла',
};

/** Названия попапов */
export const PopupNames = {
  Error: 'error',
};

/** Роутеры приложения */
export const AppRouters = {
  /** Начальный экран */
  Home: '/',
};

/** Типы ошибок */
export const ErrorTypes = {
  /** Клиентская ошибка */
  ClientError: 'ClientError',
  /** Серверная ошибка */
  ServerError: 'ServerError'
};

/** Коды ошибок Http */
export const HttpErrorCodes = {
  Error409: 409,
};

/** Экраны приложения */
export const AppModes = {
  /** Не определено */
  None: '',

  /** Домашняя страница */
  Home: 'home'
};

/** Перечисление ошибочных состояний поля */
export const FieldErrorStatus = {
  /** Обязательное */
  Required: 'Required',

  /** Неверное значение */
  Invalid: 'Invalid',

  /** Вне диапазона значений */
  OutOfRange: 'OutOfRange',

  /** Без ошибок */
  None: ''
};

/** Статусы документов */
export const DocumentStates = {
  /** В процессе загрузки */
  Uploading: 'uploading',

  /** Загружен */
  Uploaded: 'uploaded',

  /** Ошибка */
  Error: 'error'
};

/** Типы документов */
export const DocTypes = {

};

export const TopMenuItems = {
  Products: 1,

  MyRequests: 2
};
