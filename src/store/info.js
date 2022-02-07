import Vue from "vue";
import Vuex from "vuex";
import generateRandomId from '../helpers/generateRandomId';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
  },
  state: {
    droplist: [
      {
        id: generateRandomId(),
        title: 'Портфолио',
        body: [
          {
            title: 'Skillbox. Курс Vue. Интернет магазин.',
            githubLink: 'https://github.com/andreynef/vueOnlineStoreSkillbox',
            websiteLink:'https://andreynef.github.io/vue-skillbox-deploy/',
          },
          {
            title: 'Skillbox. Курс React. Reddit App (Express,API,SSR,TS). В доработке',
            githubLink: 'https://github.com/andreynef/react-reddit',
            websiteLink:'https://react-reddit-app-andrey.herokuapp.com/',
          },
          {
            title: 'Skillbox. Дипломная работа по JS. Unsplash Photo App (React,Redux,Webpack)',
            githubLink: 'https://github.com/andreynef/jsDiplomaRedux',
            websiteLink:'https://jsdiploma.nef-an.ru/',
          },
          {
            title: 'Сайт для "ADHD movers" (MaterialUi, NextJs, Firebase)',
            githubLink: 'https://github.com/andreynef/adhd_movers',
            websiteLink:'https://adhdmovers.nef-an.ru',
          },
          {
            title: 'Сайт для мувинга (MaterialUi, NextJs, Firebase)',
            githubLink: null,
            websiteLink:'https://konstant-movers.com',
          },
          {
            title: 'Курс по MaterialUi - React, Router. Итоговая работа',
            githubLink: 'https://github.com/andreynef/material-ui-arc',
            websiteLink:'https://arc.nef-an.ru',
          },
          {
            title: 'Курс по MaterialUi - React, Router. Менеджер проектов (диалоговое окно с поиском)',
            githubLink: 'https://github.com/andreynef/materialUi-ArcProjectManager',
            websiteLink:'https://arcpm.nef-an.ru',
          },
          {
            title: 'Тестовое задание, HTML верстка',
            githubLink: 'https://github.com/andreynef/Affinage-testTask',
            websiteLink:'https://affinage.nef-an.ru',
          },
          {
            title: 'Skillbox. Дипломная работа по верстке. Визитка',
            githubLink: 'https://github.com/andreynef/VerstkaDiploma-skillbox-',
            websiteLink:'https://skillbox-bcard.nef-an.ru/',
          },
          {
            title: 'SkillBox. HTML верстка, адаптив, новости',
            githubLink: 'https://github.com/andreynef/VerstkaNewsAdaptive-skillbox-',
            websiteLink:'https://skillbox-news.nef-an.ru/',
          },
        ],
      },
      {
        title: 'Online-университет Skillbox. Профессия Frontend-Разработчик',
        id: generateRandomId(),
        open: false,
        body: [
          {
            id: generateRandomId(),
            title: 'Веб-вёрстка 2019',
            done: true,
            inProcess: false,
            finalWork: true,
            comments: [],
            open: false,
            body: [
              {
                id: generateRandomId(),
                title: 'Вводный модуль',
                inProcess: false,
                done: true,
                open: false,
                body: [
                  {
                    title: 'Как работают сайты. Backend и frontend. Вёрстка',
                    done: true,
                  },
                  {
                    title: 'Как выглядит и из чего состоит код веб-страницы',
                    done: true,
                  },
                  {
                    title: 'Установка редактора кода Sublime Text',
                    done: true,
                  },
                  {
                    title: 'Простая веб-страница на HTML. Тэги и атрибуты',
                    done: true,
                  },
                  {
                    title: 'CSS-стили. Селекторы, параметры и значения',
                    done: true,
                  },
                ],
              },
              {
                id: generateRandomId(),
                title: 'HTML',
                inProcess: false,
                done: true,
                open: false,
                body: [
                  {
                    title: 'Приветственное видео',
                    done: true,
                  },
                  {
                    title: 'Структура HTML5-документа',
                    done: true,
                  },
                  {
                    title: 'Обзор и демонстрация работы основных HTML-тэгов',
                    done: true,
                  },
                  {
                    title: 'Вёрстка веб-форм. Поля и кнопки. Валидация форм',
                    done: true,
                  },
                  {
                    title: 'Таблицы и табличная вёрстка',
                    done: true,
                  },
                  {
                    title: 'Семантическая вёрстка. Стандарты и валидность',
                    done: true,
                  },
                ],
              },
              {
                id: generateRandomId(),
                title: 'Основы CSS',
                inProcess: false,
                done: true,
                open: false,
                body: [
                  {
                    title: 'Переходим к следующему модулю',
                    done: true,
                  },
                  {
                    title: 'Как можно задавать стили. Селекторы',
                    done: true,
                  },
                  {
                    title: 'Отступы, поля, размеры и единицы измерения',
                    done: true,
                  },
                  {
                    title: 'Inline- и block- элементы, свойство display',
                    done: true,
                  },
                  {
                    title: 'Обтекание, позиционирование и слои',
                    done: true,
                  },
                  {
                    title: 'Блочная верстка',
                    done: true,
                  },
                  {
                    title: 'Цвета, шрифты, фон и границы',
                    done: true,
                  },
                ],
              },
              {
                id: generateRandomId(),
                title: 'Основы JavaScript',
                inProcess: false,
                done: true,
                open: false,
                body: [
                  {
                    title: 'Что такое JavaScript и как его подключать к веб-страни',
                    done: true,
                  },
                  {
                    title: 'Библиотека jQuery. Управление стилями элементов',
                    done: true,
                  },
                  {
                    title: 'Обработка событий',
                    done: true,
                  },
                  {
                    title: 'Работа с DOM, изменение, добавление и удаление элементов',
                    done: true,
                  },
                  {
                    title: 'Отображение и скрытие элементов, анимация',
                    done: true,
                  },
                  {
                    title: 'Работа с сетью, получение и отправка данных',
                    done: true,
                  },
                  {
                    title: 'JavaScript-фреймворки',
                    done: true,
                  },
                ],
              },
              {
                id: generateRandomId(),
                title: 'Адаптивность и кроссбраузерность',
                inProcess: false,
                done: true,
                open: false,
                body: [
                  {
                    title: 'Адаптивность и кроссбраузерность',
                    done: true,
                  },
                  {
                    title: 'Media-запросы',
                    done: true,
                  },
                  {
                    title: 'Flexbox',
                    done: true,
                  },
                  {
                    title: 'Шаги адаптивности и сетки',
                    done: true,
                  },
                  {
                    title: 'Разнообразие браузеров и их особенности',
                    done: true,
                  },
                  {
                    title: 'Инструменты проверки и обеспечения адаптивности и кроссбраузерности',
                    done: true,
                  },
                ],
              },
              {
                id: generateRandomId(),
                title: 'Оформление',
                inProcess: false,
                done: true,
                open: false,
                body: [
                  {
                    title: 'Фон, прозрачность и градиенты',
                    done: true,
                  },
                  {
                    title: 'Границы, аутлайны и тени',
                    done: true,
                  },
                  {
                    title: 'Шрифты и оформление текста. Типографика и спецсимволы',
                    done: true,
                  },
                  {
                    title: 'Стили указателей',
                    done: true,
                  },
                  {
                    title: 'Изображения. Форматы, сжатие, спрайты, iconfonts. Favicon',
                    done: true,
                  },
                  {
                    title: 'Рисование на веб-странице. SVG и Canvas',
                    done: true,
                  },
                ],
              },
              {
                id: generateRandomId(),
                title: 'Advanced CSS',
                inProcess: false,
                done: true,
                open: false,
                body: [
                  {
                    title: 'Сложные селекторы. Свойство important',
                    done: true,
                  },
                  {
                    title: 'Псевдо-классы и псевдо-элементы',
                    done: true,
                  },
                  {
                    title: 'Транформации, переходы и анимации',
                    done: true,
                  },
                  {
                    title: 'Стандарты именования в CSS. Методология БЭМ',
                    done: true,
                  },
                  {
                    title: 'Библиотеки стилей: Bootstrap, Semantic UI, Material UI',
                    done: true,
                  },
                  {
                    title: 'Шаблонизаторы (Twig, Haml) и препроцессоры (SASS, LESS, Stylus)',
                    done: true,
                  },
                ],
              },
              {
                id: generateRandomId(),
                title: 'Инструменты верстальщика',
                inProcess: false,
                done: true,
                open: false,
                body: [
                  {
                    title: 'Последний модуль. Осталось чуть-чуть!',
                    done: true,
                  },
                  {
                    title: 'Размещение своих работ в Интернете. Домен и хостинг',
                    done: true,
                  },
                  {
                    title: 'Инструменты командной разработки. Таск-трекеры и Git',
                    done: true,
                  },
                  {
                    title: 'Сборщики, минификаторы и оптимизаторы проектов',
                    done: true,
                  },
                  {
                    title: 'Инструменты прототипирования',
                    done: true,
                  },
                  {
                    title: 'Другие среды разработки. NetBeans, WebStorm',
                    done: true,
                  },
                ],
              },
            ]
          },
          {
            id: generateRandomId(),
            title: 'Веб-вёрстка 2020',
            done: false,
            inProcess: true,
            finalWork: false,
            comments: [],
            open: false,
            body: [
              {
                id: generateRandomId(),
                title: 'Введение',
                inProcess: false,
                done: false,
                open: false,
                body: [
                  {
                    title: 'Приветствие',
                    done: false,
                  },
                  {
                    title: 'Как работают сайты. Верстка. Backend и Frontend',
                    done: false,
                  },
                  {
                    title: 'Возможности HTML, CSS, JS',
                    done: false,
                  },
                  {
                    title: 'Редактор кода. Codepen',
                    done: false,
                  },
                  {
                    title: 'Работа с devtools',
                    done: false,
                  },
                  {
                    title: 'VS Code',
                    done: false,
                  },
                  {
                    title: 'Домашняя работа',
                    done: false,
                  },
                ],
              },
              {
                id: generateRandomId(),
                title: 'Базовый HTML',
                inProcess: false,
                done: true,
                open: false,
                body: [
                  {
                    title: 'Ускорение работы. Emmet',
                    done: false,
                  },
                  {
                    title: 'Элементы HTML-разметки. Базовые теги',
                    done: false,
                  },
                  {
                    title: 'Теги картинок и ссылок. Кнопки',
                    done: false,
                  },
                  {
                    title: 'Теги таблиц',
                    done: false,
                  },
                  {
                    title: 'Служебные теги',
                    done: false,
                  },
                  {
                    title: 'Кодстайл HTML',
                    done: false,
                  },
                  {
                    title: 'Домашняя работа',
                    done: false,
                  },
                ],
              },
              {
                id: generateRandomId(),
                title: 'Базовый CSS',
                inProcess: false,
                done: true,
                open: false,
                body: [
                  {
                    title: 'Подключение CSS',
                    done: false,
                  },
                  {
                    title: 'Селекторы. Вес селектора',
                    done: false,
                  },
                  {
                    title: 'Единицы измерения CSS',
                    done: false,
                  },
                  {
                    title: 'Стилизация CSS',
                    done: false,
                  },
                  {
                    title: 'Свойство display',
                    done: false,
                  },
                  {
                    title: 'Блочная модель',
                    done: false,
                  },
                  {
                    title: 'Позиционирование',
                    done: false,
                  },
                  {
                    title: 'Кодстайл CSS',
                    done: false,
                  },
                  {
                    title: 'Домашняя работа',
                    done: false,
                  },
                ],
              },
              {
                id: generateRandomId(),
                title: 'Работа с макетом',
                inProcess: false,
                done: true,
                open: false,
                body: [
                  {
                    title: 'Форматы изображений',
                    done: false,
                  },
                  {
                    title: 'Работа с макетом. Photoshop',
                    done: false,
                  },
                  {
                    title: 'Экспорт изображений',
                    done: false,
                  },
                  {
                    title: 'Работа с макетом. Figma',
                    done: false,
                  },
                  {
                    title: 'Домашняя работа',
                    done: false,
                  },
                ],
              },
              {
                id: generateRandomId(),
                title: 'Layout',
                inProcess: false,
                done: true,
                open: false,
                body: [
                  {
                    title: 'Интро',
                    done: false,
                  },
                  {
                    title: 'HTML-семантика',
                    done: false,
                  },
                  {
                    title: 'Разметка макета',
                    done: false,
                  },
                  {
                    title: 'Флексбокс — базовая сетка (часть 1)',
                    done: false,
                  },
                  {
                    title: 'Флексбокс — базовая сетка (часть 2)',
                    done: false,
                  },
                  {
                    title: 'Css-стилизация (часть1)',
                    done: false,
                  },
                  {
                    title: 'Css-стилизация (часть2)',
                    done: false,
                  },
                  {
                    title: 'Домашняя работа',
                    done: false,
                  },
                ],
              },
              {
                id: generateRandomId(),
                title: 'Продвинутый HTML. Формы',
                inProcess: false,
                done: true,
                open: false,
                body: [
                  {
                    title: 'Узконаправленные теги',
                    done:false,
                  },
                  {
                    title: 'Теги для аудио и видео. Iframe. Нюансы использовани',
                    done:false,
                  },
                  {
                    title: 'Продвинутое подключение изображений',
                    done:false,
                  },
                  {
                    title: 'Формы',
                    done:false,
                  },
                ],
              },
              {
                id: generateRandomId(),
                title: 'Продвинутый СSS',
                inProcess: false,
                done:false,
                open: false,
                body: [
                  {
                    title: 'Интро',
                    done:false,
                  },
                  {
                    title: 'Подключение шрифтов',
                    done:false,
                  },
                  {
                    title: 'Комбинаторные селекторы',
                    done:false,
                  },
                  {
                    title: 'Псевдоклассы',
                    done:false,
                  },
                  {
                    title: 'Псевдоэлементы',
                    done:false,
                  },
                  {
                    title: 'Transition',
                    done:false,
                  },
                  {
                    title: 'Transform',
                    done:false,
                  },
                  {
                    title: 'Кастомные свойства',
                    done:false,
                  },
                  {
                    title: 'CSS-функции',
                    done:false,
                  },
                  {
                    title: 'БЭМ-именование',
                    done:false,
                  },
                ],
              },
              {
                id: generateRandomId(),
                title: 'Сетки',
                inProcess: false,
                done:false,
                open: false,
                body: [
                  {
                    title: 'Интро',
                    done:false,
                  },
                  {
                    title: 'Что такое сетка?',
                    done:false,
                  },
                  {
                    title: 'Построение собственной сетки',
                    done:false,
                  },
                  {
                    title: 'Сетки на примере Bootstrap',
                    done:false,
                  },
                  {
                    title: 'Практика: bootstrap',
                    done:false,
                  },
                  {
                    title: 'Пример сложной разработки сетки',
                    done:false,
                  },
                  {
                    title: 'Аутро',
                    done:false,
                  },
                  {
                    title: 'Домашняя работа',
                    done:false,
                  },
                ],
              },
              {
                id: generateRandomId(),
                title: 'Адаптивность. Декстоп и планшет',
                inProcess: true,
                done: false,
                open: false,
                body: [
                  {
                    title: 'Интро',
                    done:false,
                  },
                  {
                    title: 'Виды верстки',
                    done:false,
                  },
                  {
                    title: 'Медиа-запросы. Mobile First',
                    done:false,
                  },
                  {
                    title: 'Медиа-запросы. Практика',
                    done:false,
                  },
                  {
                    title: 'Best Practices',
                    done:false,
                  },
                  {
                    title: 'Pixel Perfect',
                    done:false,
                  },
                  {
                    title: 'Домашняя работа',
                    done: false,
                  },
                ],
              },
              {
                id: generateRandomId(),
                title: 'Адаптивность. Мобильные устройства',
                inProcess: true,
                done: false,
                open: false,
                body: [
                  {
                    title: 'Интро',
                    done:false,
                  },
                  {
                    title: 'Адаптивные изображения',
                    done:false,
                  },
                  {
                    title: 'Настройка сервера для проверки адаптивности',
                    done:false,
                  },
                  {
                    title: 'Формы на нативных устройствах',
                    done:false,
                  },
                  {
                    title: 'Практика',
                    done:false,
                  },
                  {
                    title: 'Домашняя работа',
                    done: false,
                  },
                ],
                inDevelopment: false,
              },
              {
                id: generateRandomId(),
                title: 'Доступность',
                inProcess: true,
                done: false,
                open: false,
                body: [
                  {
                    title: 'Интро',
                    done:false,
                  },
                  {
                    title: 'Понятие доступности',
                    done:false,
                  },
                  {
                    title: 'Проверка доступности. Клавиатура',
                    done:false,
                  },
                  {
                    title: 'Проверка доступности. Скринридер',
                    done:false,
                  },
                  {
                    title: 'Влияние семантики на доступность',
                    done:false,
                  },
                  {
                    title: 'ARIA',
                    done:false,
                  },
                  {
                    title: 'Аутро',
                    done:false,
                  },
                  {
                    title: 'Домашняя работа',
                    done: false,
                  },
                ],
              },
              {
                id: generateRandomId(),
                title: 'Javascript для верстальщика (откроется 06.11.2020)',
                inProcess: false,
                done: false,
                open: false,
                body: [],
                inDevelopment: true,
              },
              {
                id: generateRandomId(),
                title: 'Кроссбраузерность (откроется 27.11.2020)',
                inProcess: false,
                done: false,
                open: false,
                body: [],
                inDevelopment: true,
              },
              {
                id: generateRandomId(),
                title: 'Практикум (бонус) (откроется 18.12.2020)',
                inProcess: false,
                done: false,
                open: false,
                body: [],
                inDevelopment: true,
              },
              {
                id: generateRandomId(),
                title: 'Работа с хостингом (откроется 08.01.2021)',
                inProcess: false,
                done: false,
                open: false,
                body: [],
                inDevelopment: true,
              },
              {
                id: generateRandomId(),
                title: 'Курсовая (мини-проект)',
                inProcess: false,
                done: false,
                open: false,
                body: [],
                inDevelopment: true,
              },
              {
                id: generateRandomId(),
                title: 'Верстка HTML-писем',
                inProcess: false,
                done: false,
                open: false,
                body: [],
                inDevelopment: true,
              },
              {
                id: generateRandomId(),
                title: 'Сборщики',
                inProcess: false,
                done: false,
                open: false,
                body: [],
                inDevelopment: true,
              },
              {
                id: generateRandomId(),
                title: 'Препроцессоры и Постпроцессоры',
                inProcess: false,
                done: false,
                open: false,
                body: [],
                inDevelopment: true,
              },
              {
                id: generateRandomId(),
                title: 'CSS Grid',
                inProcess: false,
                done: false,
                open: false,
                body: [],
                inDevelopment: true,
              },
              {
                id: generateRandomId(),
                title: 'Анимация',
                inProcess: false,
                done: false,
                open: false,
                body: [],
                inDevelopment: true,
              },
              {
                id: generateRandomId(),
                title: 'CMS',
                inProcess: false,
                done: false,
                open: false,
                body: [],
                inDevelopment: true,
              },
              {
                id: generateRandomId(),
                title: 'Будущее верстки',
                inProcess: false,
                done: false,
                open: false,
                body: [],
                inDevelopment: true,
              },
              {
                id: generateRandomId(),
                title: 'Информация о дипломном проекте',
                inProcess: false,
                done: false,
                open: false,
                body: [],
                inDevelopment: true,
              },
            ]
          },
          {
            id: generateRandomId(),
            title: 'JavaScript 2019',
            done: true,
            inProcess: false,
            finalWork: false,
            comments: [],
            open: false,
            body: [
              {
                id: generateRandomId(),
                title: 'Знакомство с языком',
                inProcess: false,
                done: true,
                open: false,
                body: [
                  {
                    title: 'Интро',
                    done: true,
                  },
                  {
                    title: 'Что умеет JavaScript и почему он так популярен?',
                    done: true,
                  },
                  {
                    title: 'Инструменты разработчика',
                    done: true,
                  },
                  {
                    title: 'Hello, world!',
                    done: true,
                  },
                  {
                    title: 'Синтаксис языка',
                    done: true,
                  },
                  {
                    title: 'Аутро',
                    done: true,
                  },
                  {
                    title: 'Домашняя работа',
                    done: true,
                  },
                ],
              },
              {
                id: generateRandomId(),
                title: 'Основы',
                inProcess: false,
                done: true,
                open: false,
                body: [
                  {
                    title: 'Приветственное видео',
                    done: true,
                  },
                  {
                    title: 'Интро',
                    done: true,
                  },
                  {
                    title: 'Числа',
                    done: true,
                  },
                  {
                    title: 'Строки',
                    done: true,
                  },
                  {
                    title: 'Логические (булевые) значения',
                    done: true,
                  },
                  {
                    title: 'NaN (Not a Number)',
                    done: true,
                  },
                  {
                    title: 'Infinity',
                    done: true,
                  },
                  {
                    title: 'Математические операторы',
                    done: true,
                  },
                  {
                    title: 'Переменные',
                    done: true,
                  },
                  {
                    title: 'Преобразование типов',
                    done: true,
                  },
                  {
                    title: 'Условия',
                    done: true,
                  },
                  {
                    title: 'Циклы',
                    done: true,
                  },
                  {
                    title: 'Домашняя работа',
                    done: true,
                  },
                ],
              },
              {
                id: generateRandomId(),
                title: 'Функции',
                inProcess: false,
                done: true,
                open: false,
                body: [
                  {
                    title: 'Переходим к следующему модулю',
                    done: true,
                  },
                  {
                    title: 'Интро',
                    done: true,
                  },
                  {
                    title: 'Объявление и вызов функций',
                    done: true,
                  },
                  {
                    title: 'Аргументы',
                    done: true,
                  },
                  {
                    title: 'Локальные и глобальные переменные',
                    done: true,
                  },
                  {
                    title: 'Hoisting',
                    done: true,
                  },
                  {
                    title: 'Возвращаемые значения',
                    done: true,
                  },
                  {
                    title: 'Рекурсия',
                    done: true,
                  },
                  {
                    title: 'Домашняя работа',
                    done: true,
                  },
                ],
              },
              {
                id: generateRandomId(),
                title: 'Массивы и объекты',
                inProcess: false,
                done: true,
                open: false,
                body: [
                  {
                    title: 'Понятие объектов',
                    done: true,
                  },
                  {
                    title: 'Объекты в JavaScript',
                    done: true,
                  },
                  {
                    title: 'Перебор свойств объекта',
                    done: true,
                  },
                  {
                    title: 'Массивы',
                    done: true,
                  },
                  {
                    title: 'Стандартный объект Math',
                    done: true,
                  },
                  {
                    title: 'Стандартный объект String',
                    done: true,
                  },
                  {
                    title: 'Стандартный объект Array',
                    done: true,
                  },
                  {
                    title: 'Стандартный объект Date',
                    done: true,
                  },
                  {
                    title: 'Домашняя работа',
                    done: true,
                  },
                ],
              },
              {
                id: generateRandomId(),
                title: 'Замыкания',
                inProcess: false,
                done: true,
                open: false,
                body: [
                  {
                    title: 'Глобальный объект window',
                    done: true,
                  },
                  {
                    title: 'Сборщик мусора',
                    done: true,
                  },
                  {
                    title: 'Замыкания',
                    done: true,
                  },
                  {
                    title: 'IIFE',
                    done: true,
                  },
                  {
                    title: 'Домашняя работа',
                    done: true,
                  },
                ],
              },
              {
                id: generateRandomId(),
                title: 'Объекты и конструкторы',
                inProcess: false,
                done: true,
                open: false,
                body: [
                  {
                    title: 'Функции-конструкторы',
                    done: true,
                  },
                  {
                    title: 'Контекст вызова',
                    done: true,
                  },
                  {
                    title: 'Привязка контекста (call, apply и bind)',
                    done: true,
                  },
                  {
                    title: 'Домашняя работа',
                    done: true,
                  },
                ],
              },
              {
                id: generateRandomId(),
                title: 'Объектно-ориентированное программирование',
                inProcess: false,
                done: true,
                open: false,
                body: [
                  {
                    title: 'ООП. Наследование, инкапсуляция, полиморфизм',
                    done: true,
                  },
                  {
                    title: 'Функциональное наследование',
                    done: true,
                  },
                  {
                    title: 'Прототипное наследование',
                    done: true,
                  },
                  {
                    title: 'Прототипы стандартных объектов',
                    done: true,
                  },
                  {
                    title: 'Домашняя работа',
                    done: true,
                  },
                ],
              },
              {
                id: generateRandomId(),
                title: 'Разное',
                inProcess: false,
                done: true,
                open: false,
                body: [
                  {
                    title: 'Объект arguments',
                    done: true,
                  },
                  {
                    title: 'setTimeout и setInterval',
                    done: true,
                  },
                  {
                    title: 'Выполнение кода через eval',
                    done: true,
                  },
                  {
                    title: 'Обработка исключений (throw, catch)',
                    done: true,
                  },
                  {
                    title: 'Регулярные выражения',
                    done: true,
                  },
                  {
                    title: 'Строгий режим (strict mode)',
                    done: true,
                  },
                  {
                    title: 'Домашняя работа',
                    done: true,
                  },
                ],
              },
              {
                id: generateRandomId(),
                title: 'JavaScript в браузере. DOM',
                inProcess: false,
                done: true,
                open: false,
                body: [
                  {
                    title: 'Интро',
                    done: true,
                  },
                  {
                    title: 'DOM',
                    done: true,
                  },
                  {
                    title: 'Порядок выполнения скриптов',
                    done: true,
                  },
                  {
                    title: 'Селекторы',
                    done: true,
                  },
                  {
                    title: 'Свойства и методы элементов',
                    done: true,
                  },
                  {
                    title: 'События и обработчики',
                    done: true,
                  },
                  {
                    title: 'Погружение и всплытие событий',
                    done: true,
                  },
                  {
                    title: 'Домашняя работа',
                    done: true,
                  },
                ],
              },
              {
                id: generateRandomId(),
                title: 'Web API',
                inProcess: false,
                done: true,
                open: false,
                body: [
                  {
                    title: 'Интро',
                    done: true,
                  },
                  {
                    title: 'Console',
                    done: true,
                  },
                  {
                    title: 'Window',
                    done: true,
                  },
                  {
                    title: 'Document',
                    done: true,
                  },
                  {
                    title: 'Информация о браузере и истории переходов',
                    done: true,
                  },
                  {
                    title: 'LocalStorage и SessionStorage',
                    done: true,
                  },
                  {
                    title: 'ContentEditable',
                    done: true,
                  },
                  {
                    title: 'Разнообразие Web API',
                    done: true,
                  },
                  {
                    title: 'Домашняя работа',
                    done: true,
                  },
                ],
              },
              {
                id: generateRandomId(),
                title: 'Клиент и сервер',
                inProcess: false,
                done: true,
                open: false,
                body: [
                  {
                    title: 'Клиент-серверное взаимодействие (интро)',
                    done: true,
                  },
                  {
                    title: 'Запуск локального сервера',
                    done: true,
                  },
                  {
                    title: 'AJAX и callback',
                    done: true,
                  },
                  {
                    title: 'JSON и Promise',
                    done: true,
                  },
                  {
                    title: 'API и WebSocket',
                    done: true,
                  },
                  {
                    title: 'Домашняя работа',
                    done: true,
                  },
                ],
              },
              {
                id: generateRandomId(),
                title: 'jQuery',
                inProcess: false,
                done: true,
                open: false,
                body: [
                  {
                    title: 'Библиотека jQuery. Интро',
                    done: true,
                  },
                  {
                    title: 'Библиотеки и frameworks. Интро',
                    done: true,
                  },
                  {
                    title: 'Возможности jQuery',
                    done: true,
                  },
                  {
                    title: 'Анимация',
                    done: true,
                  },
                  {
                    title: 'AJAX',
                    done: true,
                  },
                  {
                    title: 'Плагины',
                    done: true,
                  },
                  {
                    title: 'Домашняя работа',
                    done: true,
                  },
                ],
              },
              {
                id: generateRandomId(),
                title: 'Современный JavaScript. ES 2015',
                inProcess: false,
                done: true,
                open: false,
                body: [
                  {
                    title: 'История стандарта ECMAScript. Интро',
                    done: true,
                  },
                  {
                    title: 'Транспиляция и полифиллы',
                    done: true,
                  },
                  {
                    title: 'Let и const',
                    done: true,
                  },
                  {
                    title: 'Деструктуризация',
                    done: true,
                  },
                  {
                    title: 'Rest и spread',
                    done: true,
                  },
                  {
                    title: 'Template strings',
                    done: true,
                  },
                  {
                    title: 'Стрелочные функции и параметры по умолчанию',
                    done: true,
                  },
                  {
                    title: 'Классы и наследование',
                    done: true,
                  },
                  {
                    title: 'Домашняя работа',
                    done: true,
                  },
                ],
              },
              {
                id: generateRandomId(),
                title: 'Сборка проектов',
                inProcess: false,
                done: true,
                open: false,
                body: [
                  {
                    title: 'Интро. Что такое сборка проектов и для чего она нужна?',
                    done: true,
                  },
                  {
                    title: 'Node.js',
                    done: true,
                  },
                  {
                    title: 'npm',
                    done: true,
                  },
                  {
                    title: 'Gulp',
                    done: true,
                  },
                  {
                    title: 'Webpack',
                    done: true,
                  },
                  {
                    title: 'Домашняя работа',
                    done: true,
                  },
                ],
              },
              {
                id: generateRandomId(),
                title: 'React',
                inProcess: false,
                done: true,
                open: false,
                body: [
                  {
                    title: 'DOM и императивный подход. Интро',
                    done: true,
                  },
                  {
                    title: 'React и декларативный подход',
                    done: true,
                  },
                  {
                    title: 'Подготовка рабочего пространства',
                    done: true,
                  },
                  {
                    title: 'Простое React-приложение',
                    done: true,
                  },
                  {
                    title: 'Разделение на компоненты',
                    done: true,
                  },
                  {
                    title: 'Домашняя работа',
                    done: true,
                  },
                ],
              },
              {
                id: generateRandomId(),
                title: 'Redux',
                inProcess: false,
                done: true,
                open: false,
                body: [
                  {
                    title: 'Последний модуль. Осталось чуть-чуть!',
                    done: true,
                  },
                  {
                    title: 'Интро',
                    done: true,
                  },
                  {
                    title: 'Ключевые принципы Redux',
                    done: true,
                  },
                  {
                    title: 'Установка зависимостей и разделение на компоненты',
                    done: true,
                  },
                  {
                    title: 'Создание store и reducers',
                    done: true,
                  },
                  {
                    title: 'Создание actions',
                    done: true,
                  },
                  {
                    title: 'Запуск приложения',
                    done: true,
                  },
                  {
                    title: 'Домашняя работа',
                    done: true,
                  },
                ],
              },
              {
                id: generateRandomId(),
                title: 'Бонус',
                inProcess: false,
                done: true,
                open: false,
                body: [
                  {
                    title: 'Библиотеки и фреймворки 2017',
                    done: true,
                  },
                  {
                    title: 'Развитие стандарта ECMAScri',
                    done: true,
                  },
                  {
                    title: 'Тестирование кода',
                    done: true,
                  },
                ],
              },
            ]
          },
          {
            id: generateRandomId(),
            title: 'JavaScript-фреймворк React.js',
            done: false,
            inProcess: true,
            finalWork: false,
            comments: [],
            open: false,
            body: [
              {
                id: generateRandomId(),
                title: 'Введение в React',
                inProcess: false,
                done: true,
                open: false,
                body: [
                  {
                    title: 'Что такое React. Основные преимущества',
                    done: true,
                  },
                  {
                    title: 'Основы декларативного подхода',
                    done: true,
                  },
                  {
                    title: 'Возможности React, компоненты, состояние, применения',
                    done: true,
                  },
                  {
                    title: 'Экосистема React, основные библиотеки, из чего обычно состоит реакт',
                    done: true,
                  },
                ],
              },
              {
                id: generateRandomId(),
                title: 'Создание проекта',
                inProcess: false,
                done: true,
                open: false,
                body: [
                  {
                    title: 'Конфигурация webpack на клиенте',
                    done: true,
                  },
                  {
                    title: 'Конфигурация webpack на сервере',
                    done: true,
                  },
                  {
                    title: 'Подключаем к проекту HMR и SSR',
                    done: true,
                  },
                  {
                    title: 'Подключаем typescript',
                    done: true,
                  },
                  {
                    title: 'CSS modules, Jest, Enzyme',
                    done: true,
                  },
                ],
              },
              {
                id: generateRandomId(),
                title: 'Typescript',
                inProcess: false,
                done: true,
                open: false,
                body: [
                  {
                    title: 'Основы Typescript, Типы',
                    done: true,
                  },
                  {
                    title: 'Работа с массивами',
                    done: true,
                  },
                  {
                    title: 'Работа с объектами и интерфейсами',
                    done: true,
                  },
                  {
                    title: 'Типизация функций и типы ТС',
                    done: true,
                  },
                  {
                    title: 'Generics',
                    done: true,
                  },
                  {
                    title: 'Классы',
                    done: true,
                  },
                  {
                    title: 'Infer, typeof, keyof, Mapped Types',
                    done: true,
                  },
                ],
              },
              {
                id: generateRandomId(),
                title: 'Компоненты на примере новостной карточки Reddit',
                inProcess: false,
                done: true,
                open: false,
                body: [
                  {
                    title: 'Компоненты в React',
                    done: true,
                  },
                  {
                    title: 'Состояния в Class Components',
                    done: true,
                  },
                  {
                    title: 'Состояния в Functional Components',
                    done: true,
                  },
                  {
                    title: 'Создаем Layout приложения. Часть 1',
                    done: true,
                  },
                  {
                    title: 'Создаем Layout приложения. Часть 2',
                    done: true,
                  },
                  {
                    title: 'Создаем компонент новостной карточки',
                    done: true,
                  },
                  {
                    title: 'Жизненный цикл компонента',
                    done: true,
                  },
                ],
              },
              {
                id: generateRandomId(),
                title: 'Hooks и Функциональное программирование',
                inProcess: false,
                done: true,
                open: false,
                body: [
                  {
                    title: 'Карирование и Функции высшего порядка',
                    done: true,
                  },
                  {
                    title: 'Hooks в реакт',
                    done: true,
                  },
                  {
                    title: 'Map Reduce React',
                    done: true,
                  },
                  {
                    title: 'Создание компонента dropdown c использованием hooks',
                    done: true,
                  },
                  {
                    title: 'Compose, Pipe и применение в React',
                    done: true,
                  },
                ],
              },
              {
                id: generateRandomId(),
                title: 'Больше о компонентах и введение в тестирование компонентов',
                inProcess: false,
                done:true,
                open: false,
                body: [
                  {
                    title: 'Адаптивные и неадаптивные компоненты. Mobile first и desktop first в адаптиве. Разница в подходах',
                    done:false,
                  },
                  {
                    title: 'Дропдаун меню',
                    done:false,
                  },
                  {
                    title: 'Введение в unit тесты и jest',
                    done:false,
                  },
                  {
                    title: 'Пишем тест на реакт компонент Enzyme vs Snapshots',
                    done:false,
                  },
                  {
                    title: 'Вспомогательные компоненты',
                    done:false,
                  },
                ],
              },
              {
                id: generateRandomId(),
                title: 'Работа с публичным API на примере Reddit',
                inProcess: false,
                done:true,
                open: false,
                body: [
                  {
                    title: 'Как работать с API',
                    done:false,
                  },
                  {
                    title: 'Регистрируем аккаунт разработчика на Reddit',
                    done:false,
                  },
                  {
                    title: 'OAuth2',
                    done:false,
                  },
                  {
                    title: 'Авторизация пользователя',
                    done:false,
                  },
                  {
                    title: 'Как структурировать API запросы',
                    done:false,
                  },
                ],
              },
              {
                id: generateRandomId(),
                title: 'Введение в Redux на примере Новостной ленты (откроется 08.09.2020)',
                inProcess: false,
                done: true,
                open: false,
                body: [],
                inDevelopment: true,
              },
              {
                id: generateRandomId(),
                title: 'Использование Redux-Thunk на примере бесконечной ленты (откроется 29.09.2020)',
                inProcess: false,
                done: true,
                open: false,
                body: [],
                inDevelopment: true,
              },
              {
                id: generateRandomId(),
                title: 'Сайдбар + роутинг (откроется 30.09.2020)',
                inProcess: false,
                done: false,
                open: false,
                body: [],
                inDevelopment: true,
              },
              {
                id: generateRandomId(),
                title: 'Формы на примере комментариев и карточки поста (откроется 20.10.2020)',
                inProcess: false,
                done: true,
                open: false,
                body: [],
                inDevelopment: true,
              },
              {
                id: generateRandomId(),
                title: 'SSR + NextJS (откроется 21.12.2020)',
                inProcess: false,
                done: false,
                open: false,
                body: [],
                inDevelopment: true,
              },
              {
                id: generateRandomId(),
                title: 'Бонус-модуль: Mobx (откроется 21.12.2020)',
                inProcess: false,
                done: false,
                open: false,
                body: [],
                inDevelopment: true,
              },
            ]
          },
          {
            id: generateRandomId(),
            title: 'Система контроля версий Git',
            inProcess: false,
            done: true,
            open: true,
            body: [
              {
                title: 'Версии программного кода',
                done: true,
              },
              {
                title: 'Установка Git',
                done: true,
              },
              {
                title: 'Индекс и частичные коммиты',
                done: true,
              },
              {
                title: 'Сравнение версий',
                done: true,
              },
              {
                title: 'Отмена изменений и откат версий',
                done: true,
              },
              {
                title: 'Репозитории и коллективная работа',
                done: true,
              },
              {
                title: 'Ветки: создание и управление',
                done: true,
              },
              {
                title: 'Слияние и разрешение конфликтов',
                done: true,
              },
              {
                title: 'Полезные инструменты',
                done: true,
              },
              {
                title: 'Правила работы с Git',
                done: true,
              },
            ],
          },
          {
            id: generateRandomId(),
            title: 'Универсальные знания программиста',
            done: false,
            inProcess: false,
            finalWork: false,
            comments: [],
            open: false,
            body: [
              {
                id: generateRandomId(),
                title: 'Протокол HTTP',
                inProcess: false,
                done: false,
                open: false,
                body: [
                  {
                    title: 'Протокол HTTP. Запрос и ответ',
                    done: false,
                  },
                  {
                    title: 'Методы HTTP-запросов GET и POST',
                    done: false,
                  },
                  {
                    title: 'Другие методы HTTP-запросов',
                    done: false,
                  },
                  {
                    title: 'Статус-коды HTTP-ответов',
                    done: false,
                  },
                  {
                    title: 'Адресация сетевых ресурсов',
                    done: false,
                  },
                  {
                    title: 'HTTP-заголовки',
                    done: false,
                  },
                  {
                    title: 'Версии протокола HTTP и HTTPS',
                    done: false,
                  },
                ],
              },
              {
                id: generateRandomId(),
                title: 'Введение в алгоритмы',
                inProcess: false,
                done: false,
                open: false,
                body: [
                  {
                    title: 'Введение в алгоритмы',
                    done: false,
                  },
                  {
                    title: 'Зачем нужны алгоритмы',
                    done: false,
                  },
                  {
                    title: 'Рекурсивные алгоритмы',
                    done: false,
                  },
                  {
                    title: 'Временная сложность алгоритмов',
                    done: false,
                  },
                  {
                    title: 'Алгоритм бинарного поиска',
                    done: false,
                  },
                  {
                    title: 'Алгоритм сортировки пузырьком',
                    done: false,
                  },
                  {
                    title: 'Алгоритм сортировки QuickSort',
                    done: false,
                  },
                  {
                    title: 'Алгоритм сортировки MergeSort',
                    done: false,
                  },
                  {
                    title: 'Алгоритм поиска подстроки Рабина-Карпа',
                    done: false,
                  },
                  {
                    title: 'Алгоритм поиска подстроки Кнута-Морриса-Пратта',
                    done: false,
                  },
                  {
                    title: 'Алгоритм поиска подстроки Бойера-Мура',
                    done: false,
                  },
                ],
              },
            ]
          },
        ],
      },
      {
        title: 'Образование',
        id: generateRandomId(),
        open: false,
        body: [
          {   title: 'Online-университет Skillbox',
            yearStart: 2019,
            yearEnd: 'now',
            specialization: 'Frontend-Разработчик.'
          },
          {
            title: 'Stamford International University',
            yearStart: 2014,
            yearEnd: 2016,
            grade: 'MBA (english program)',
            faculty: 'Marketing',
          },
          {
            title: 'Florida Keys Community College',
            yearStart: 2008,
            yearEnd: 2008,
            specialization: 'English courses. Upper-internediate'
          },
          {
            title: 'Ижевский Государственный Технический Университет',
            yearStart: 2001,
            yearEnd: 2006,
            grade: 'высшее',
            faculty: 'Машиностроительный',
            specialization: 'Ракетные двигатели и установки',
          },
          {
            title: 'Международный Восточно-Европейский Университет',
            yearStart: 1998,
            yearEnd: 2000,
            grade: 'средне-специальное',
            faculty: 'Экономический',
            specialization: 'Экономист бухгалтер'
          }

        ],
      },
      {
        title: 'Опыт работы',
        id: generateRandomId(),
        open: false,
        body:[
          {
            title: 'Разное. (онлайн репетиторство, торговля на бирже, подработка на выездных мероприятих в Москве)',
            yearStart: 2017,
            yearEnd: 2020,
            position: 'разное',
            duties: 'разное',
          },
          {
            title: 'Kornpitacksuksa the Creative Thinking School (Thailand)',
            yearStart: 2017,
            yearEnd: 2017,
            position: 'учитель',
            duties: 'преподавание английского языка детям 5-10 лет',
          },
          {
            title: 'OOO Тау Груп',
            yearStart: 2008,
            yearEnd: 2015,
            position: 'Совладелец бизнеса (автомойка)',
            duties: 'Заказ автохимии, контроль состояния оборудования, контроль качества, общение с клиентами, работа с кассой, составление отчетов.',
          },
        ],
      },
      {
        title: 'Обо мне',
        id: generateRandomId(),
        open: false,
        body:[
          {
            sport: 'Спортивная ходьба по улице (до магазина)',
            relax: 'Моб игры, лес, костер',
            freeTime: 'семья, друзья, велик, самообучение',
            about: `Я начинающий frontend разработчик. Моя цель – найти ту самую работу, где я могу развиваться вместе со всеми, в обществе интересных мне людей и совместно приносить пользу общему делу. Мне импонирует это направление в веб разработке, т.к. можно видеть долгоиграющий результат своих трудов. К тому же оно достаточно перспективное и в дальнейшем(!) есть возможность работать удаленно.
                          Оцениваю себя как творческого человека но для начала не помешает и системный подход. В обществе друзей общительный. При деловых встречах предпочитаю краткость и информативность. Не пью и не курю, но не ЗОЖ. 
                          В глобальных планах планирую развиться до fullstack.`
          },
        ],
      },
    ],
  },
  getters:{
    dropList:state=>state.droplist,
  },
  mutations:{
  },
  actions: {
  }
});