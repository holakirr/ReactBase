import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { rainbow } from 'react-syntax-highlighter/dist/styles/hljs';

import {
  /** импортируем компоненты */
  storiesOfDecorator
} from '../imports';

import GroupPng from './images/storybook_groups.png';
import PropsPng from './images/storybook_props.png';
import SourcePng from './images/storybook_source.png';
import FakesPng from './images/fakes.png';
import Naming1 from './images/naming1.png';
import Naming2 from './images/naming2.png';
import Naming3 from './images/naming3.png';
import Extensions from './images/extensions.png';
import CreateComponentMenu from './images/create-component-menu.png';
import CreateContainerMenu from './images/create-container-menu.png';
import CreateComponentResult from './images/create-component-result.png';
import CreateComponentResult1 from './images/create-component-result-1.png';
import CreateComponentResult2 from './images/create-component-result-2.png';
import CreateContainerResult from './images/create-container-result.png';
import CreateContainerResult1 from './images/create-container-result-1.png';
import ReactToolsExtensions from './images/react-tools-extensions.png';
import VSCodeExtensionsInstall from './images/vscode-extensions-install.png';

import {
  Container,
  H1
} from './styles';

const stories = storiesOfDecorator('Wiki|Стандарты написания кода', module).addParameters({
  info: {
    source: false,
    propTables: null
  },
});

/*
<SyntaxHighlighter
  language="javascript"
  style={rainbow}
  wrapLines
  showLineNumbers
>
  {`
  declare module 'react-syntax-highlighter/dist/styles/prism/base16-ateliersulphurpool.light' {
    const style: any;
    export default style;
  }
  `}
</SyntaxHighlighter>
*/

stories
  .add('Общие принципы', () => (
    <Container>
      <H1>Введение</H1>

      <p>Среднестатистический программист проводит гораздо больше времени за чтением кода, а не его написанием.</p>

      <p>
        Читать код сложнее, чем писать его. Особенно если речь идет о чужом программном коде.
        Но вы можете серьезно облегчить работу себе и коллегам, если ваш код будет качественным, понятным.
      </p>

      <p>
        “Качество кода” довольно обширный термин, включающий в себя достаточно много разных аспектов,
        среди которых проектирование интерфейсов классов и методов, реализация методов, правильное
        взаимодействие классов и методов друг с другом, конвенции по форматированию и оформлению кода,
        именованию классов, методов и переменных.
      </p>

      <p>В нашей команде используется набор пра­вил и согла­ше­ний для написания кода.</p>

      <H1>Общие принципы</H1>
      <p>
        При написании кода мы отдаем предпочтение стандарту <b>ES6+</b> и пользуемся главными преимуществами новых стандартов:
      </p>
      <ul>
        <li><b>let, const и блочная область видимости</b></li>
        <li><b>Стрелочные функции</b></li>
        <li><b>Параметры по умолчанию</b></li>
        <li><b>Spread / Rest оператор</b></li>
        <li><b>Деструктуризация массивов и объектов</b></li>
        <li><b>Строковые шаблоны и разделители (интерполяция)</b></li>
      </ul>


      <p>
        Эти и другие преимущества необходимо понимать и уметь их использовать
      </p>

      <p>
      Максимально возможное соблюдение прин­ци­пов про­грам­ми­ро­ва­ния, напри­мер: DRY, KISS, YAGNI
      </p>

      <ul>
        <li>
          <b>Keep It Simple Stupid (или KISS). Дословно – "Делай это проще, тупица".</b><br />
          Этот принцип гласит, что для решения поставленных задач необходимо выбирать
          наиболее простое решение
        </li>
        <li>
          <b>You Ain’t Gonna Need It (или YAGNI). Вам это не понадобится.</b><br />
          Он гласит: Работайте над решением текущих задач, не пишите код только потому,
          что думаете, будто он пригодится вам в дальнейшем (вы можете предсказывать будущее?)

        </li>
        <li>
          <b>Dont Repeat Yourself (или DRY). Не повторяйся.</b><br />
        Этот принцип призывает вас воздержаться от дублирования кода в пределах компонента,
        репозитория или связанного контекста.
        </li>
        <li>
          <b>SRP (Single responsibility principle) - Принцип единственной обязанности.</b><br />
          Каждый модуль, компонент или контейнер должен иметь одну ответственность. Необходимо придерживаться правила, что изменение модуля, компонента или контейнера должно иметь единственную цель/причину.
        </li>
        <li>
          <b>Receive an object, return an object (RORO)</b><br />
          Каждая функция на вход должна принимать объект и возвращать объект.

          <SyntaxHighlighter
            language="javascript"
            style={rainbow}
            wrapLines
            showLineNumbers
          >
            {`/** Определение функции */
  function findUsersByRole ({
    role,
    withContactInfo, 
    includeInactive
  }) {...}

  /**  Вызов функции */
  findUsersByRole({
    role: 'admin', 
    withContactInfo: true, 
    includeInactive: true
  })
  `}
          </SyntaxHighlighter>

          Деструктурируйте все объекты.

          <SyntaxHighlighter
            language="javascript"
            style={rainbow}
            wrapLines
            showLineNumbers
          >
            {`<label>{ this.props.foo }</label> // wrong

const { foo } = this.props;
<label>{ foo }</label> // right

const someFunction = (arguments) => 
  this.setState({ 
   foo: arguments.bar
}); // wrong

const someFunction = ({ baz } = {}) =>
  this.setState({ 
    foo: baz 
}); // right`}
          </SyntaxHighlighter>
        </li>
        <li>
          Используйте функциональные выражения и стрелочные функции вместо объявлений функций там где это возможно.

          <SyntaxHighlighter
            language="javascript"
            style={rainbow}
            wrapLines
            showLineNumbers
          >
            {`объявление функции: // wrong
function fnName(argument) {
  // ...
};
функциональное выражение: // right
const someFunction = function ({ argument } = {}){ 
  // ...
}
стрелочная функция: // right
const someArrowFunction = ({ argument } = {}) => // ...`}
          </SyntaxHighlighter>
        </li>
      </ul>

      <H1>Процесс разработки</H1>
      <p>В процессе разработки наша команда использует следующее:</p>
      <ul>
        <li>для разработки пользовательского интерфейса приложения - <b>react</b><br /></li>
        <li>для стилизации компонентов - <b>styled components</b><br /></li>
        <li>для управления состоянием приложения - <b>redux</b><br /></li>
        <li>для написания бизнес-логики - <b>redux-saga</b><br /></li>
        <li>для написания actions, reduсers - <b>redux-symbiotes</b><br /></li>
        <li>для кеширования данных и декомпозиции контейнеров - <b>Reselect</b><br /></li>
        <li>для визуального тестирования и интерактивной разработки - <b>Storybook</b><br /></li>
        <li>для unit-тестов - <b>Jest</b><br /></li>
        <li>для контроля качества кода настроен <b>eslint</b> с набором правил от <a href="https://github.com/leonidlebedev/javascript-airbnb" target="_blank" rel="noopener noreferrer">airbnb</a><br /></li>
        <li>для комментирования кода мы используем формат <b><a href="http://usejsdoc.org/" target="_blank" rel="noopener noreferrer">JSDoc</a></b><br /></li>
        <li>для сборки приложения - <b>webpack</b><br /></li>
        <li>
          для условной сборки модулей - <b>ifdef-loader</b><br />

          <SyntaxHighlighter
            language="javascript"
            style={rainbow}
            wrapLines
            showLineNumbers
          >
            {`
  /** store/index.js */
  /// #if !DEBUG
  const sagaMiddleware = createSagaMiddleware();
  /// #endif
  
  /// #if DEBUG
  const sagaMiddleware = createSagaMiddleware({
    sagaMonitor: window.__SAGA_MONITOR_EXTENSION__
  });
  /// #endif
  `}
          </SyntaxHighlighter>
          <SyntaxHighlighter
            language="javascript"
            style={rainbow}
            wrapLines
            showLineNumbers
          >
            {`
  /** webpack.config */
  /** Объявление переменных */
  const opts = {
    FAKE: true,
    DEBUG: true,
    PROD: false
  };

  /** настройки лоадера */
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: [{
      loader: 'babel-loader'
    },
    { loader: 'ifdef-loader', options: opts }]
  }
  `}
          </SyntaxHighlighter>
        </li>
        <li>для формирования текста в коммитах - <b><a href="https://www.conventionalcommits.org/en/v1.0.0-beta.2/" target="_blank" rel="noopener noreferrer">Conventional Commits</a></b> с настроенным <b>commitlint</b><br /></li>
      </ul>

      <p>
        <b style={{ color: 'red' }}>
          ВАЖНО!!! Все приложения должны работать в режиме фейка, т.е. без подключения к БД.<br />
          Для этого в проект добавлена папка fakes, конфиг webpack.fake.config.js и точка входа entry/fakes.jsx.<br />
          В папке fakes/services реализуются сервисы одинаковые по контрактам с реальными сервисами.<br />
          В папке fakes/data описываеются данные для фейковых сервисов.<br /> <br />

          <img src={FakesPng} alt="" />

          <SyntaxHighlighter
            language="javascript"
            style={rainbow}
            wrapLines
            showLineNumbers
          >
            {`
  /** Реальный сервис */
  import {
    get,
    post,
    del,
    put
  } from './rest';
  
  const action = '/api/Filters';
  const actionDicts = '/api/FiltersDictionary';
  
  /** Сервис работы с фильтрами */
  export const FilterApi = {
    /** Загружает список шаблонов фильтров
     *
     * @returns {array<object>} список шаблонов фильтров
     *
     */
    loadTemplates: () => get({
      action
    }),

    ....
  `}
          </SyntaxHighlighter>
          <SyntaxHighlighter
            language="javascript"
            style={rainbow}
            wrapLines
            showLineNumbers
          >
            {`
  /** Фейковый сервис */
  import {
    RandomInteger
  } from '../../src/utils';
  
  import {
    DefaultTemplates,
  } from '../data/default';
  
  import {
    FilterGroups,
    FilterGroupsByTemplates,
    FilterData
  } from '../data/filter';
  
  let DefaultTemplatesCopy = [
    ...DefaultTemplates
  ];
  
  export const FilterApi = {
    loadTemplates: async () => {
      console.log('start run FilterApi loadTemplates');
  
      await new Promise((resolve) => {
        setTimeout(
          () => {
            resolve();
          },
          RandomInteger({ min: 1000, max: 1500 })
        );
      });
  
      console.log('end run FilterApi loadTemplates');
  
      return {
        isSuccess: true,
        payload: {
          data: (FilterData.templates[window.login] || {}).items || DefaultTemplatesCopy
        }
      };
    },

    ....
  `}
          </SyntaxHighlighter>
        </b>
      </p>

      <H1>Архитектура приложения</H1>

      Архитектура любого приложения команды основана на <b>redux</b> и построена по принципу пирога, включает в себя следующее:

      <ol>
        <li>роутинг</li>
        <li>"тупые" компоненты</li>
        <li>контейнеры</li>
        <li>глобальное состояние</li>
        <li>side-effects</li>
        <li>селекторы</li>
        <li>сервисы (API)</li>
      </ol>

      <H1>Соглашение об именовании</H1>

      <ul>
        <li>
          PascalCase для имен файлов и папок компонентов<br />
          <img src={Naming1} alt="" />
        </li>
        <li>
          Нижний регистр для имен корневых папок и файлов, таких как `src`, `components`, `assets` и т.д.<br />
          <img src={Naming3} alt="" />
        </li>
        <li>
          Нижний регистр для имен папок ресурсов в папках компонентов, например, `images` и т.д., а также для файлов index.js и styled.js<br />
          <img src={Naming2} alt="" />
        </li>
      </ul>

      <H1>Структура папок</H1>

      <SyntaxHighlighter
        language="javascript"
        style={rainbow}
        wrapLines
        showLineNumbers
      >
        {`- entry // точки входа
    |_ entry.jsx // точка входа dev, test, prod
    |_ fakes.jsx // точка входа fake
    |_ index.jsx // основная точка входа
- fakes // фейковые данные и сервисы
- src
    |_ components // компоненты
        |_ .Common // общие компоненты
          |_ Button // компонент Кнопка
              |_ Button.jsx // файл компонента
              |_ index.js // экспорт компонента
              |_ styled.jsx // стили компонента
          |_ index.js // экспортируем все общие компоненты.
        |_ .Shared
          |_ index.js // экспортируем все общие специфичные компоненты.
        |_ index.js // экспортируем все компоненты.
    |_ configuration // конфигурация приложения
    |_ consts // константы приложения
    |_ containers // контейнеры приложения
      |_ index.js // экспортируем все контейнеры.
    |_ sagas // саги приложения
    |_ selectors // селекторы приложения
    |_ services // сервисы приложения
    |_ symbiotes // симбиоты приложения (действия и редьюсеры)
- templates // шаблоны страниц
- tests // тесты jest
`}
      </SyntaxHighlighter>

      <H1>Правила написания компонентов</H1>
      Подробнее правила описаны на странице <a href="/?selectedKind=Стандарты%20написания%20кода&selectedStory=Компоненты&full=0&addons=1&stories=1&panelRight=1&addonPanel=storybooks%2Fstorybook-addon-knobs">Компоненты</a>
      <ol>
        <li>Приоритетом является <b>написание собственных компонентов</b>, а не использование готовых решений из npm</li>
        <li>Компонент должен быть максимально <b>"тупым"</b>.</li>
        <li>Компонент должен соответствовать принципу <b>единственной ответственности</b>.</li>
        <li>Компонент без возможности ввода должен заниматься только <b>отображением полученных данных</b>.</li>
        <li>По возможности <b>избегать сильной вложенности</b> простых компонентов друг в друга</li>
        <li>Использование <b>state</b> допустимо только в тех случаях, когда он не влияет на общее состояние приложения (store)</li>
        <li>Обязательное использование <b>PropTypes</b> с комментариями</li>
        <li>Желательно в файле компонента добавлять блок комментария с <b>описанием компонента</b></li>
        <li><b>Максимальный размер компонента 100-150 строк</b>, если получается больше значит нужно вынести какие-то части кода в отдельный файл</li>
        <li>Компонент не может содержать в себе контейнер напрямую, а только как свойство children</li>
      </ol>

      <H1>Правила написания контейнеров</H1>
      Подробнее правила описаны на странице <a href="/?selectedKind=Стандарты%20написания%20кода&selectedStory=Контейнеры&full=0&addons=1&stories=1&panelRight=1&addonPanel=storybooks%2Fstorybook-addon-knobs">Контейнеры</a>
      <ol>
        <li>Контейнер - композиция простых компонентов или других контейнеров для решения бизнес-задач</li>
        <li>Данные для контейнера предоставляет селектор (reselect)</li>
        <li>Бизнес-логика контейнера реализуется в сагах (redux-saga)</li>
      </ol>
    </Container>
  ))
  .add('ESlint', () => (
    <Container>
      Для контроля качества кода настроен <b>eslint</b> с набором правил от airbnb
      <p>Подробно все правила eslint описаны на странице <a href="https://github.com/leonidlebedev/javascript-airbnb" target="_blank" rel="noopener noreferrer">Руководство по написанию JavaScript кода от Airbnb</a>
        <br />Наша конфигурация eslint, используемая в проектах
      </p>
      <SyntaxHighlighter
        language="javascript"
        style={rainbow}
        wrapLines
        showLineNumbers
      >
        {`
{
  "extends": [
    "airbnb",
    "plugin:jest/recommended"
  ],
  "plugins": [
    "react",
    "jsx-a11y",
    "import",
    "jest"
  ],
  "env": {
    "es6": true,
    "browser": true,
    "jest/globals": true
  },
  "parser": "babel-eslint",
  "rules": {
    "react/no-multi-comp": "off",
    "jest/no-disabled-tests": "warn",
    "no-nested-ternary": "off",
    "global-require": "off",
    "import/no-dynamic-require": "off",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
    "react/jsx-one-expression-per-line": 0,
    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "operator-linebreak": [
      1,
      "after",
      {
        "overrides": {
          "?": "after",
          ":": "after"
        }
      }
    ],
    "import/no-unresolved": [
      "error",
      {
        "ignore": [ "config.*.json" ]
      }
    ],
    "linebreak-style": [
      "off",
      "windows"
    ],
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "import/prefer-default-export": 0,
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": true
      }
    ],
    "react/prop-types": 0,
    "no-debugger": "warn",
    "comma-dangle": "off",
    "max-len": [
      "error",
      120,
      2,
      {
        "ignoreUrls": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true,
        "ignoreRegExpLiterals": true
      }
    ]
  },
  "globals": {
    "NODE_ENV": true
  },
  "settings": {
    "import/resolver": {
      "node": {
        "paths": [
          "./"
        ]
      }
    }
  }
}
        `}
      </SyntaxHighlighter>
    </Container>
  ))
  .add('Storybook', () => (
    <Container>
      <p>Storybook это окружение для разработки UI компонентов. Storybook позволяет просматривать библиотеку компонентов, увидеть различные состояния компонентов и интерактивно разрабатывать и тестировать компоненты.</p>

      <p>Storybook запускается отдельно от приложения.
        Это позволяет разрабатывать компоненты в изоляции,
        что улучшает возможность переиспользования компонентов,
        тестируемость и скорость их разработки.
        Вы можете создавать новые компоненты быстро и независимо от основного проекта.
      </p>

      <p>Наш Storybook включает в себя дополнения - <b>addons</b></p>
      <ul>
        <li><b>@storybook/addon-knobs</b> - позволяет управлять {'props\'ами'} компонента</li>
        <li><b>@storybook/addon-info</b> - при написании PropTypes и комментариев, отображает описание компонента, его свойства, значения по умолчанию, исходный код компонента</li>
      </ul>

      Пример работы addon-info<br />
      <img src={SourcePng} alt="" />

      <p>Также наш Storybook уже настроен на работу с <b>styled components</b></p>

      <H1>Правила написания stories</H1>
      Мы разделяем stories на два раздела <i>Components</i> и <i>UI</i>. <br /><br />
      В разделе <i>Components</i> мы размещаем простые компоненты.<br />
      Например компонент кнопки Button, текстового поля Input, селекта Select и др.<br /><br />
      В разделе <i>UI</i> мы размещаем простые или сложные layouts, собранные из простых компонентов.<br />
      Например какая-то форма, которая содержит компоненты Input, Button, Select и пр.<br /><br />

      Story можно группировать, например в разделе <i>Components</i> может быть группа Buttons, а внутри нее будут story компонента Button, RoundButton, BigButton и пр.

      <br /><br />Каждая отдельная story описывает отдельный компонент.<br /><br />

      <img src={GroupPng} alt="" />

      <H1>Пример написания stories</H1>
      <SyntaxHighlighter
        language="javascript"
        style={rainbow}
        wrapLines
        showLineNumbers
      >
        {`
import React from 'react';
import { storiesOfDecorator } from '../..';

import {
    text, boolean, select
} from '@storybook/addon-knobs';

/** импортируем компонент button который будем описывать */
import {
    Button
} from '../../../common';

/** В скобках мы можем группировать stories */
const stories = storiesOfDecorator('Components|Form/Buttons', module);

/** 
* Описываем компонент Button, его props и их значения, 
* которые можно будет менять в правой панели Storybook 
*/
stories.add('Button', () => (
    <Button
        title={text('Title', 'Я кнопка')}
        block={boolean('Block', false)}
        inverted={boolean('inverted', false)}
        fullWidth={boolean('fullWidth', false)}
        centered={boolean('centered', false)}
        color={select('color', {
            lightBlue: 'lightBlue',
            green: 'green',
            blue: 'blue',
            orange: 'orange',
            red: 'red',
            common: 'common'
        }, 'lightBlue')}
        borderWidth={text('borderWidth', '1')}
        size={select('size', {
            default: 'default',
            small: 'small',
            medium: 'medium'
        }, 'default')}
        onClick={() => alert('CLICK!!!!!')}
        disabled={boolean('disabled', false)}
    />
));
            `}
      </SyntaxHighlighter>

      Так будет выглядеть вышеописанная панель управления {'props\'ами'}<br /><br />
      <img src={PropsPng} alt="" /><br />
    </Container>
  ))
  .add('Jest unit testing', () => (
    <Container>
      Для тестирования используются jest и enzyme. <br /><br />

      Написание тестов необязательно. Исключением являются функции или модули со сложной логикой, а также с критичными базовыми алгоритмами.<br /><br />

      Пример метода проверки високосного года
      <SyntaxHighlighter
        language="javascript"
        style={rainbow}
        wrapLines
        showLineNumbers
      >
        {`
/** Проверка на високосный год */
export const isLeapYear = year => year % 4 === 0;
        `}
      </SyntaxHighlighter>

      Пример теста проверки високосного года
      <SyntaxHighlighter
        language="javascript"
        style={rainbow}
        wrapLines
        showLineNumbers
      >
        {`
describe('isLeapYear tests', () => {
  it('2012 isLeap', () => {
      const year = 2012;

      expect(isLeapYear(year)).toBe(true);
  });

  it('2013 not isLeap', () => {
      const year = 2013;

      expect(isLeapYear(year)).toBe(false);
  });
});
        `}
      </SyntaxHighlighter>

    </Container>
  ))
  .add('PropTypes', () => (
    <Container>
      При написании компонентов обязательно указывать PropTypes. <br />
      Это позволяет видеть все props в удобной таблице Storybook.<br /><br />
      <img src={SourcePng} alt="" />

      <H1>Правильное описание PropTypes на примере компонента Button</H1>

      <p>Обязательно написание комментариев в формате JSDoc</p>

      <SyntaxHighlighter
        language="javascript"
        style={rainbow}
        wrapLines
        showLineNumbers
      >
        {`
Button.propTypes = {
  /** Состояние disabled */
  disabled: PropTypes.bool,
  /** текст кнопки */
  title: PropTypes.string,
  /** отображать как block или inline-block */
  block: PropTypes.bool,
  /** стиль кнопки inverted */
  inverted: PropTypes.bool,
  /** Кнопка растягивается на всю ширину родителя */
  fullWidth: PropTypes.bool,
  /** Цвет кнопки */
  color: PropTypes.string,
  /** Толщина бордера */
  borderWidth: PropTypes.string,
  /** Размер кнопки small|medium|default */
  size: PropTypes.string,
  /** Фиксированная ширина кнопки в px если нужно, по умолчанию ширина автоматическая по ширине текста */
  width: PropTypes.string,
  /** Горизонтальное выравнивание кнопки в контейнере если true то кнопка становится display: block, margin: 0 auto */
  centered: PropTypes.bool,
  /** клик на кнопку */
  onClick: PropTypes.func,
  /** Толщина текста 300|400|500|700|900 */
  weight: PropTypes.string,
  /** Размер текста s12|s20|s26 и тп */
  textSize: PropTypes.string,
};

Button.defaultProps = {
  disabled: false,
  title: '',
  block: false,
  inverted: false,
  fullWidth: false,
  color: 'lightBlue',
  borderWidth: '1',
  size: 'default',
  width: 'auto',
  centered: false,
  onClick: () => {},
};
        `}
      </SyntaxHighlighter>
    </Container>
  ))
  .add('Git commits', () => (
    <Container>
      <p>Для формирования текста в коммитах - <b><a href="https://www.conventionalcommits.org/en/v1.0.0-beta.2/" target="_blank" rel="noopener noreferrer">Conventional Commits</a></b> с настроенным <b>commitlint</b>.</p>

      <p>
        <b>Типы коммитов:</b>

        <ul>
          <li>build	Сборка проекта или изменения внешних зависимостей</li>
          <li>ci	Настройка CI и работа со скриптами</li>
          <li>docs	Обновление документации</li>
          <li>feat	Добавление нового функционала</li>
          <li>fix	Исправление ошибок</li>
          <li>perf	Изменения направленные на улучшение производительности</li>
          <li>refactor	Правки кода без исправления ошибок или добавления новых функций</li>
          <li>revert	Откат на предыдущие коммиты</li>
          <li>style	Правки по кодстайлу (табы, отступы, точки, запятые и т.д.)</li>
          <li>test	Добавление тестов</li>
          <li>misc или chore Прочее</li>
        </ul>
      </p>

      <p>Области коммитов задаются в зависимости от проекта.</p>

      <b>Иконки коммитов:</b>

      <ul>
        <li>Initial commit	🎉 :tada:</li>
        <li>Version tag	🔖 :bookmark:</li>
        <li>New feature	✨ :sparkles:</li>
        <li>Bugfix	🐛 :bug:</li>
        <li>Metadata	📇 :card_index:</li>
        <li>Documentation	📚 :books:</li>
        <li>Documenting source code	💡 :bulb:</li>
        <li>Performance	🐎 :racehorse:</li>
        <li>Cosmetic	💄 :lipstick:</li>
        <li>Tests	🚨 :rotating_light:</li>
        <li>Adding a test	✅ :white_check_mark:</li>
        <li>General update	⚡️ :zap:</li>
        <li>Improve format/structure	🎨 :art:</li>
        <li>Refactor code	🔨 :hammer:</li>
        <li>Removing code/files	🔥 :fire:</li>
        <li>Continuous Integration	💚 :green_heart:</li>
        <li>Security	🔒 :lock:</li>
        <li>Upgrading dependencies	⬆️ :arrow_up:</li>
        <li>Downgrading dependencies	⬇️ :arrow_down:</li>
        <li>Lint	👕 :shirt:</li>
        <li>Translation	👽 :alien:</li>
        <li>Text	📝 :pencil:</li>
        <li>Critical hotfix	🚑 :ambulance:</li>
        <li>Deploying stuff	🚀 :rocket:</li>
        <li>Fixing on MacOS	🍎 :apple:</li>
        <li>Fixing on Windows	🏁 :checkered_flag:</li>
        <li>Work in progress	🚧 :construction:</li>
        <li>Adding CI build system	👷 :construction_worker:</li>
        <li>Analytics or tracking code	📈 :chart_with_upwards_trend:</li>
        <li>Removing a dependency	➖ :heavy_minus_sign:</li>
        <li>Adding a dependency	➕ :heavy_plus_sign:</li>
        <li>Docker	🐳 :whale:</li>
        <li>Configuration files	🔧 :wrench:</li>
        <li>Package.json in JS	📦 :package:</li>
        <li>Merging branches	🔀 :twisted_rightwards_arrows:</li>
        <li>Bad code / need improv.	💩 :hankey:</li>
        <li>Reverting changes	⏪ :rewind:</li>
        <li>Breaking changes	💥 :boom:</li>
        <li>Code review changes	👌 :ok_hand:</li>
        <li>Accessibility	♿️ :wheelchair:</li>
        <li>Move/rename repository	🚚 :truck:</li>
      </ul>

      <p>
        <b>Примеры коммитов:</b>

        <p>
          <b>Добавление новой фичи, разработка не закончена</b>

          <p>
            feat(statement): :sparkles: :construction: Реализовать функционал по выгрузке выписки по всем счетам клиента<br /><br />

            Добавлен вызов api Card/Report<br /><br />

            meta: AML-242
          </p>
        </p>
        <p>
          где:<br />
          feat - тип коммита<br />
          statement - область коммита, в данном случае добалвяетс функционал Выписка<br />
          :sparkles: :construction: - иконки коммита<br />
          Реализовать функционал по выгрузке выписки по всем счетам клиента - краткое описание коммита<br />
          Добавлен вызов api Card/Report - дополнительное/подробное описание коммита<br />
          meta: AML-242 - мета-данные коммита, в данном случае AML-242 связанная задача
        </p>
        <p>
          <b>Добавление новой фичи, разработка закончена</b>

          <p>
            feat(statement): :sparkles: Реализовать функционал по выгрузке выписки по всем счетам клиента<br /><br />

            Полная реализация.<br /><br />

            meta: AML-242
          </p>
        </p>
        <p>
          <b>Исправление бага</b>

          <p>
            fix(api): :bug: Убрать не нужный валидатор<br /><br />

            meta: AML-196
          </p>
        </p>
        <p>
          <b>Прочее</b>

          <p>
            misc(dependencies): :arrow_up: Обновить зависимости
          </p>
          <p>
            misc(merge): Исправить ошибки слияния с develop
          </p>
        </p>
      </p>
    </Container>
  ))
  .add('Компоненты', () => (
    <Container>
      <H1>Правила написания компонентов</H1>
      Подробнее правила описаны на странице <a href="/?selectedKind=Стандарты%20написания%20кода&selectedStory=Компоненты&full=0&addons=1&stories=1&panelRight=1&addonPanel=storybooks%2Fstorybook-addon-knobs">Компоненты</a>
      <ol>
        <li>Приоритетом является <b>написание собственных компонентов</b>, а не использование готовых решений из npm</li>
        <li>Компонент должен быть максимально <b>"тупым"</b>.</li>
        <li>
          Компонент должен соответствовать принципу <b>единственной ответственности</b>.<br /><br />
          Например, в компоненте InputField не рекомендуется реализовывать ввод даты, email или по маске. Для этого необходимо сделать отдельные компоненты DateField, EMailField или MaskedField.
          При этом компоненты DateField, EMailField или MaskedField могут использовать компонент InputField.
        </li>
        <li>Компонент без возможности ввода должен заниматься только <b>отображением полученных данных</b>.</li>
        <li>По возможности <b>избегать сильной вложенности</b> простых компонентов друг в друга</li>
        <li>Использование <b>state</b> допустимо только в тех случаях, когда он не влияет на общее состояние приложения (store)</li>
        <li>Обязательное использование <b>PropTypes</b> с комментариями</li>
        <li>Желательно в файле компонента добавлять блок комментария с <b>описанием компонента</b></li>
        <li><b>Максимальный размер компонента 100-150 строк</b>, если получается больше значит нужно вынести какие-то части кода в отдельный файл</li>
        <li>Компонент не может содержать в себе контейнер напрямую, а только как свойство children</li>
      </ol>

      <H1>При разработке компонентов необходимо учитывать следующее:</H1>

      <ol>
        <li>Использовать пакет <a href="https://www.styled-components.com/">styled-components</a></li>
        <li>Рекомендуется использовать пакет <a href="https://github.com/jxnblk/styled-system">styled-system</a></li>
        <li>Рекомендуется внедрять в компоненты поддержку тем.</li>
        <li>Переиспользование простых компонентов внутри других компонентов. Примером может служить компонент <i>Text</i> и компонент <i>Button</i>, который в качестве текста кнопки должен использовать компонент Text. При этом компонент Text внутри компонента Button должен настраиваться через отдельное свойство компонента <i>Button</i> - <b>textProps</b>.</li>

        <li>Крайне не рекомендуется использование методов жизненного цикла компонента, таких как <b>componentDidMount()</b>, <b>componentWillUnmount()</b> и др., т.к. текущая архитектура приложения подразумевает, что компоненты получают данные снаружи в зависимости от логики приложения, а не запрашивают их самостоятельно.
        </li>

        <li>Управление отображением компонентов рекомендуется делать через HOC, чтобы исключить повторяющиеся свойства и код.</li>

        <li>Компонент не должен содержать в себе loader, визуализацию процесса загрузки необходимо делать через HOC</li>

        <li>Рекомендуется простые общие компоненты распологать в папке Components/.Common, а специфичные общие компоненты в папке Components/.Shared</li>

        <li>Для унификации импорта компонентов необходимо их экспортировать из корневой папки компонентов ./Components</li>

      </ol>

    </Container>
  ))
  .add('Контейнеры', () => (
    <Container>
      <H1>Правила написания контейнеров</H1>

      <ol>
        <li>
          Контейнер - композиция простых компонентов или других контейнеров для решения бизнес-задач
          <SyntaxHighlighter
            language="javascript"
            style={rainbow}
            wrapLines
            showLineNumbers
          >
            {`
const ClientListContainer = ({ isShow = false }) => (
  <FadeAnimation open={isShow}>
    <React.Fragment>
      <FiltersPanel />
      <Header />
      <Container width="1440" paddingTop="15"> // Container - простой компонент
        <ChangesWarning />
        <ConnectedClientList />
        <Pager /> // Pager - контейнер
        <EmptyMessage />
      </Container>
    </React.Fragment>
  </FadeAnimation>
);
            `}
          </SyntaxHighlighter>

        </li>
        <li>
          Данные для контейнера предоставляет селектор (reselect)

          <SyntaxHighlighter
            language="javascript"
            style={rainbow}
            wrapLines
            showLineNumbers
          >
            {`
/** модуль конейнера */
import { connect } from 'react-redux';

import {
  getPagerProps
} from '../../../selectors/clients';

import {
  Pagination,
  Showable
} from '../../../components';

import {
  actions
} from '../../../symbiotes';

export default connect(
  state => ({
    ...getPagerProps(state)
  }),
  dispatch => ({
    onChange: ({ page } = {}) => {
      dispatch(actions.clients.page.set({ page }));
    }
  })
)(Showable(Pagination));
            `}
          </SyntaxHighlighter>
          ../path/to/selector.js<br />
          Метод селектора
          <SyntaxHighlighter
            language="javascript"
            style={rainbow}
            wrapLines
            showLineNumbers
          >
            {`
export const getPagerProps = createSelector(
  [getClientListCurrentPage, getClientsState],
  (page, state) => {
    const pages = getPageCount({ count: state.totalCount });

    return {
      activePage: page,
      pages,
      step: 3,
      isShow: pages > 1
    };
  }
);
            `}
          </SyntaxHighlighter>
        </li>
        <li>Бизнес-логика контейнера реализуется в сагах (redux-saga)
          <SyntaxHighlighter
            language="javascript"
            style={rainbow}
            wrapLines
            showLineNumbers
          >
            {`
  /** модуль конейнера */
  import ...

  export default connect(
    state => ({
      ...getPagerProps(state)
    }),
    dispatch => ({
      onChange: ({ page } = {}) => {
        /** запуск бизнес-логики */ 
        dispatch(actions.clients.page.set({ page }));
      }
    })
  )(Showable(Pagination));
              `}
          </SyntaxHighlighter>
          ../path/to/saga.js<br />
          Перехват actions.clients.page.set
          <SyntaxHighlighter
            language="javascript"
            style={rainbow}
            wrapLines
            showLineNumbers
          >
            {`
export default function* () {
  yield takeEvery(
    [
      actions.clients.load.start.toString(),
      actions.clients.page.set.toString(),
    ],
    handleLoadClients
  );
  ...
}
              `}
          </SyntaxHighlighter>
          ../path/to/saga.js<br />
          Функция с бизнес-логикой
          <SyntaxHighlighter
            language="javascript"
            style={rainbow}
            wrapLines
            showLineNumbers
          >
            {`
export function* handleLoadClients() {
try {
  yield sagaWrapper({
    action: actions.clients.load,
    api: {
      func: Api.clients.loadClients,
      params: {
        ...
      }
    }
  });
} catch (e) {
  console.log(e);
  yield put(actions.clients.load.fail());
}
}
              `}
          </SyntaxHighlighter>

        </li>
      </ol>
    </Container>
  ))
  .add('Инструменты', () => (
    <Container>
      <p>Ограничений на использование IDE не накладыввается. Главное требование комфорт при разработке и отсутствие конфликтов с другими IDE.</p>
      <p>Приоритетной IDE являетсся VS Code.</p>
        Список рекомендуемых расширений для установки:

      <ul>
        <li>anseki.vscode-color</li>
        <li>bradgashler.htmltagwrap</li>
        <li>CoenraadS.bracket-pair-colorizer</li>
        <li>dbaeumer.vscode-eslint</li>
        <li>eamodio.gitlens</li>
        <li>EQuimper.react-native-react-redux</li>
        <li>formulahendry.auto-close-tag</li>
        <li>formulahendry.auto-rename-tag</li>
        <li>formulahendry.code-runner</li>
        <li>heaths.vscode-guid</li>
        <li>jchannon.csharpextensions</li>
        <li>joelday.docthis</li>
        <li>jpoissonnier.vscode-styled-components</li>
        <li>jsynowiec.vscode-insertdatestring</li>
        <li>k--kato.docomment</li>
        <li>Leopotam.csharpfixformat</li>
        <li>lXSPandora.vscode-styled-components-snippets</li>
        <li>mrluje.vscode-goto-node-modules</li>
        <li>ms-vscode.csharp</li>
        <li>naumovs.color-highlight</li>
        <li>pflannery.vscode-versionlens</li>
        <li>robertohuertasm.vscode-icons</li>
        <li>robinbentley.sass-indented</li>
        <li>SanaAjani.taskrunnercode</li>
        <li>wix.vscode-import-cost</li>
      </ul>
      <H1>Расширения</H1>

      <ul>
        <li>
          <b>Набор команд для приложений ReactJS, Styled-Components, Storybook.</b><br />
          <b>Установка</b><br />
          <img src={VSCodeExtensionsInstall} alt="" /><br />
          Данное расширение добавляет два пункта меню:
          <p>
            <ul>
              <li>
                <b>Создать компонент</b> <br />
                <img src={CreateComponentMenu} alt="" /><br />
                Создает минимальный набор каталогов и файлов для разработки компонента, а также экспортирует данный компонент из каталога components. <br />
                <img src={CreateComponentResult} alt="" /><br />
                <img src={CreateComponentResult1} alt="" /><br />
                <img src={CreateComponentResult2} alt="" />
              </li>
              <li>
                <b>Создать контейнер</b> <br />
                <img src={CreateContainerMenu} alt="" /><br />
                Создает минимальный набор каталогов и файлов для разработки контейнера, а также экспортирует данный компонент из каталога containers.  <br />
                <img src={CreateContainerResult} alt="" /><br />
                <img src={CreateContainerResult1} alt="" /><br />
              </li>
            </ul>
          </p>
        </li>
      </ul>
    </Container>
  ));
