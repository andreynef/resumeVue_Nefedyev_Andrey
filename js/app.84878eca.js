(function(e){function t(t){for(var n,d,s=t[0],r=t[1],a=t[2],p=0,u=[];p<s.length;p++)d=s[p],Object.prototype.hasOwnProperty.call(o,d)&&o[d]&&u.push(o[d][0]),o[d]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);c&&c(t);while(u.length)u.shift()();return l.push.apply(l,a||[]),i()}function i(){for(var e,t=0;t<l.length;t++){for(var i=l[t],n=!0,s=1;s<i.length;s++){var r=i[s];0!==o[r]&&(n=!1)}n&&(l.splice(t--,1),e=d(d.s=i[0]))}return e}var n={},o={app:0},l=[];function d(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,d),i.l=!0,i.exports}d.m=e,d.c=n,d.d=function(e,t,i){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(d.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)d.d(i,n,function(t){return e[t]}.bind(null,n));return i},d.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=t,s=s.slice();for(var a=0;a<s.length;a++)t(s[a]);var c=r;l.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"0b05":function(e,t,i){"use strict";i("1315")},1315:function(e,t,i){},"29e1":function(e,t,i){},"2f1b":function(e,t,i){"use strict";i("29e1")},"30de":function(e,t,i){},3378:function(e,t,i){"use strict";i("f3b5")},4308:function(e,t,i){"use strict";i("c3d5")},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("small",{staticClass:"text"},[e._v("App is created using Vue and Vuex")]),i("div",{staticClass:"paperContainer"},[i("Header"),i("Proposition"),i("Stack"),i("DropList"),i("Footer")],1)])},l=[],d=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("header",{staticClass:"header"},[i("Photo"),i("div",{staticClass:"headerInner"},[i("JobSought"),i("Contacts")],1)],1)},s=[],r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:{photoContainerReview:e.isReview,photoContainer:!e.isReview},on:{click:function(t){return e.handleClick()}}},[i("img",{attrs:{src:e.cPhotoLink,alt:"myPhoto"}}),i("span",{staticClass:"photoContainer"},[e._v(e._s(e.index+1)+" из "+e._s(e.photoLinksArr.length))])])},a=[],c={data:function(){return{photoLinksArr:["/img/1.jpg","/img/2.jpg","/img/4.jpg","/img/8.jpg","/img/9.jpg"],isReview:!1,index:0}},methods:{handleClick:function(){this.isReview=!0,this.index<this.photoLinksArr.length-1?this.index=this.index+1:this.index=0}},computed:{cPhotoLink:function(){return this.photoLinksArr[this.index]}},beforeDestroy:function(){}},p=c,u=(i("6998"),i("2877")),m=Object(u["a"])(p,r,a,!1,null,"df518d02",null),b=m.exports,f=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},y=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"jobSoughtContainer"},[i("h1",{staticClass:"jobSoughtTitle"},[e._v("Соискаемая должность")]),i("p",{staticClass:"jobSoughtText"},[e._v("Front-end developer "),i("br"),e._v(" JavaScript developer")]),i("p",{staticClass:"jobSoughtText"},[e._v("Нефедьев Андрей Сергеевич")])])}],h={},v=h,_=(i("0b05"),Object(u["a"])(v,f,y,!1,null,"42087ba0",null)),g=_.exports,S=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},k=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"contacts"},[i("a",{staticClass:"phoneNumber contactsIcons",attrs:{title:"+7 (999) 879-29-87",href:"tel:+79998792987"}}),i("a",{staticClass:"email contactsIcons",attrs:{title:"andreynef@yandex.ru",href:"mailto:andreynef@yandex.ru"}}),i("a",{staticClass:"vk contactsIcons",attrs:{href:"https://vk.com/id3177378",target:"_blank",rel:"noopener noreferrer"}}),i("a",{staticClass:"wa contactsIcons",attrs:{href:"https://wa.me/+79998792987",target:"_blank",rel:"noopener noreferrer"}}),i("a",{staticClass:"vbr contactsIcons",attrs:{href:"viber://chat?number=%2B79998792987",target:"_blank",rel:"noopener noreferrer"}}),i("a",{staticClass:"tg contactsIcons",attrs:{href:"https://telegram.me/Nefedjev",target:"_blank",rel:"noopener noreferrer"}})])}],C={},P=C,T=(i("a244"),Object(u["a"])(P,S,k,!1,null,"2ca6892e",null)),x=T.exports,L={components:{Photo:b,Contacts:x,JobSought:g}},O=L,j=(i("7829"),Object(u["a"])(O,d,s,!1,null,"296c3649",null)),w=j.exports,I=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},M=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"propositionContainer"},[i("p",{staticClass:"propositionText"},[e._v(" Начинающий frontend-разработчик ищет организацию с которой будет расти профессионально, помогать расти компании и создавать удобные програмные продукты. ")]),i("p",{staticClass:"propositionText"},[e._v(" В IT сфере опыта работы нет, но есть желание развиваться в сфере web-разработки, изучать полезные технологии и углублять уже существующие знания. ")])])}],D={components:{},data:function(){return{}},methods:{},computed:{},beforeDestroy:function(){}},R=D,E=(i("9e78"),Object(u["a"])(R,I,M,!1,null,"237cdd37",null)),A=E.exports,H=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",{staticClass:"droplistContainer"},e._l(e.$store.state.infoModule.droplist,(function(e){return i("DropItem",{key:e.id,attrs:{item:e}})})),1)},J=[],W=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.item.body?i("li",{class:{mainItemContainer:e.isLevelOne(e.item.title),subItemContainer:!e.isLevelOne(e.item.title)}},[i("div",{class:{mainItemTitleWrapper:e.isLevelOne(e.item.title),subItemTitleWrapper:!e.isLevelOne(e.item.title)},on:{click:function(t){return e.$store.commit("infoModule/setOpen",e.item.id)}}},[i("h2",{staticClass:"itemTitle",style:{fontSize:"Портфолио"===e.item.title&&"23px",fontWeight:"Портфолио"===e.item.title&&600}},[e._v(" "+e._s(e.item.title)+" ")]),"Портфолио"===e.item.title?i("div",{staticClass:"sitePics"},[i("img",{attrs:{src:"/img/reddit.png",alt:"pic"}}),i("img",{attrs:{src:"/img/html.png",alt:"pic"}}),i("img",{attrs:{src:"/img/affinage.png",alt:"pic"}}),i("img",{attrs:{src:"/img/news.png",alt:"pic"}}),i("img",{attrs:{src:"/img/arc.png",alt:"pic"}}),i("img",{attrs:{src:"/img/arc2.png",alt:"pic"}}),i("img",{attrs:{src:"/img/kon.png",alt:"pic"}}),i("img",{attrs:{src:"/img/unsplash.png",alt:"pic"}})]):e._e(),e.item.done&&e.item.finalWorkGithubUrl?i("a",{staticClass:"link",attrs:{href:e.item.finalWorkGithubUrl,target:"_blank",rel:"noopener noreferrer"}},[e._v(" Итоговая работа ")]):e._e(),e.item.done&&e.item.githubLink?i("a",{staticClass:"link",attrs:{href:e.item.githubLink,target:"_blank",rel:"noopener noreferrer"}},[e._v(" Домашняя работа ")]):e._e(),e.item.done?i("div",{staticClass:"icon iconDone"}):e._e(),e.item.inProcess?i("div",{staticClass:"icon iconPause"}):e._e(),e.item.githubLink?i("div",{staticClass:"icon iconGithub"}):e._e(),i("div",{staticClass:"icon",class:{"icon-arrow-down":e.item.open,"icon-arrow-up":!e.item.open}})]),e.item.open?i("ul",{staticClass:"subDroplistContainer"},e._l(e.item.body,(function(e){return i("DropItem",{key:e.id,attrs:{item:e}})})),1):e._e()]):e._e(),e.item.body?e._e():i("li",{staticClass:"plainItemContainer"},[i("div",{staticClass:"plainItemTitleWrapper"},[e.item.title?i("h3",{staticClass:"plainItemTitle"},[e.item.websiteLink?i("a",{staticClass:"link",attrs:{href:e.item.websiteLink,target:"_blank",rel:"noopener noreferrer"}},[e._v(e._s(e.item.title)+" ")]):i("span",[e._v(e._s(e.item.title))])]):e._e(),e.item.githubLink?i("a",{staticClass:"icon iconGithub",attrs:{href:e.item.githubLink,target:"_blank",rel:"noopener noreferrer"}}):e._e(),e.item.websiteLink?i("a",{staticClass:"icon iconWebsite",attrs:{href:e.item.websiteLink,target:"_blank",rel:"noopener noreferrer"}}):e._e(),e.item.done?i("div",{staticClass:"icon iconDone"}):e._e()]),e.item.position?i("p",{staticClass:"plainItemText"},[e._v("Должность: "+e._s(e.item.position))]):e._e(),e.item.yearStart?i("p",{staticClass:"plainItemText"},[e._v("Год начала: "+e._s(e.item.yearStart))]):e._e(),e.item.yearEnd?i("p",{staticClass:"plainItemText"},[e._v("Год окончания: "+e._s(e.item.yearEnd))]):e._e(),e.item.duties?i("p",{staticClass:"plainItemText"},[e._v("Обязанности: "+e._s(e.item.duties))]):e._e(),e.item.grade?i("p",{staticClass:"plainItemText"},[e._v("Академическая степень: "+e._s(e.item.grade))]):e._e(),e.item.faculty?i("p",{staticClass:"plainItemText"},[e._v("Факультет: "+e._s(e.item.faculty))]):e._e(),e.item.specialization?i("p",{staticClass:"plainItemText"},[e._v("Специализация: "+e._s(e.item.specialization))]):e._e(),e.item.about?i("p",{staticClass:"plainItemText"},[e._v(e._s(e.item.about))]):e._e(),e.item.sport?i("p",{staticClass:"plainItemText"},[e._v("Спорт: "+e._s(e.item.sport))]):e._e(),e.item.relax?i("p",{staticClass:"plainItemText"},[e._v("Отдых: "+e._s(e.item.relax))]):e._e(),e.item.freeTime?i("p",{staticClass:"plainItemText"},[e._v("Свободное время: "+e._s(e.item.freeTime))]):e._e(),e.item.courses?i("div",e._l(e.item.courses,(function(t){return i("p",{key:t,staticClass:"plainItemText"},[e._v(e._s(t))])})),0):e._e()])])},$=[],N=(i("4de4"),i("d3b7"),i("d81d"),{name:"DropItem",components:{DropItem:U},props:["item"],data:function(){return{}},methods:{isLevelOne:function(e){var t=this.levelOneArr.filter((function(t){return e===t}));return t[0]===e}},computed:{levelOneArr:function(){return this.$store.state.infoModule.droplist.map((function(e){return e.title}))}},beforeDestroy:function(){}}),F=N,G=(i("2f1b"),Object(u["a"])(F,W,$,!1,null,"c8e17354",null)),U=G.exports,z={components:{DropItem:U}},B=z,V=(i("cee0"),Object(u["a"])(B,H,J,!1,null,"1adcab95",null)),Q=V.exports,K=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},X=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("section",{staticClass:"stack"},[i("div",{staticClass:"itemContainer"},[i("h2",{staticClass:"itemTitle"},[e._v("Навыки:")]),i("ul",{staticClass:"itemList"},[i("li",[e._v("HTML5")]),i("li",[e._v("CSS3, SCSS")]),i("li",[e._v("Валидная, адаптивная, кроссбраузерная верстка")]),i("li",[e._v("БЭМ")]),i("li",[e._v("JavaScript, ES6+")]),i("li",[e._v("React.js, Redux")]),i("li",[e._v("Next.js")]),i("li",[e._v("MaterialUi")]),i("li",[e._v("Firebase")]),i("li",[e._v("Gulp")]),i("li",[e._v("Webpack")]),i("li",[e._v("Git")])])]),i("div",{staticClass:"itemContainer"},[i("h2",{staticClass:"itemTitle"},[e._v("В процессе изучения:")]),i("ul",{staticClass:"itemList"},[i("li",[e._v("Vue")])])]),i("div",{staticClass:"itemContainer"},[i("h2",{staticClass:"itemTitle"},[e._v("В планах изучить:")]),i("ul",{staticClass:"itemList"},[i("li",[e._v("Node.js (backend)")]),i("li",[e._v("Базы данных")])])])])}],q={},Y=q,Z=(i("4308"),Object(u["a"])(Y,K,X,!1,null,"c41c8210",null)),ee=Z.exports,te=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ie=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("footer",{staticClass:"footerContainer"},[i("small",{staticClass:"footerText"},[e._v("© Andrey Nefedyev 2020")]),i("small",{staticClass:"footerText"},[i("a",{staticClass:"footerLink",attrs:{href:"https://github.com/andreynef/resume_Nefedyev_Andrey",target:"_blank",rel:"noopener noreferrer"}},[e._v("Код приложения-резюме на Github")])])])}],ne={},oe=ne,le=(i("3378"),Object(u["a"])(oe,te,ie,!1,null,"8613b9a0",null)),de=le.exports,se={name:"App",components:{Header:w,Footer:de,Proposition:A,Stack:ee,DropList:Q}},re=se,ae=(i("ef3e"),Object(u["a"])(re,o,l,!1,null,"01610313",null)),ce=ae.exports,pe=i("2f62"),ue=i("5530"),me=i("2909");i("25f0");function be(){return Math.random().toString(36).substring(2,15)}var fe={namespaced:!0,state:{droplist:[{id:be(),title:"Портфолио",body:[{title:"Skillbox. Курс Vue. Интернет магазин.",githubLink:"https://github.com/andreynef/vueOnlineStoreSkillbox",websiteLink:"https://andreynef.github.io/vue-skillbox-deploy/"},{title:"Skillbox. Курс React. Reddit App (Express,API,SSR,TS). В доработке",githubLink:"https://github.com/andreynef/react-reddit",websiteLink:"https://react-reddit-app-andrey.herokuapp.com/"},{title:"Skillbox. Дипломная работа по JS. Unsplash Photo App (React,Redux,Webpack)",githubLink:"https://github.com/andreynef/jsDiplomaRedux",websiteLink:"https://jsdiploma.andreynef.ru/"},{title:'Сайт для "ADHD movers" (MaterialUi, NextJs, Firebase)',githubLink:"https://github.com/andreynef/adhd_movers",websiteLink:"https://adhdmovers.andreynef.ru"},{title:"Сайт для мувинга (MaterialUi, NextJs, Firebase)",githubLink:null,websiteLink:"https://konstant-movers.com"},{title:"Курс по MaterialUi - React, Router. Итоговая работа",githubLink:"https://github.com/andreynef/material-ui-arc",websiteLink:"https://arc.andreynef.ru"},{title:"Курс по MaterialUi - React, Router. Менеджер проектов (диалоговое окно с поиском)",githubLink:"https://github.com/andreynef/materialUi-ArcProjectManager",websiteLink:"https://arcpm.andreynef.ru"},{title:"Тестовое задание, HTML верстка",githubLink:"https://github.com/andreynef/Affinage-testTask",websiteLink:"https://affinage.andreynef.ru"},{title:"Skillbox. Дипломная работа по верстке. Визитка",githubLink:"https://github.com/andreynef/VerstkaDiploma-skillbox-",websiteLink:"https://skillbox-bcard.andreynef.ru/"},{title:"SkillBox. HTML верстка, адаптив, новости",githubLink:"https://github.com/andreynef/VerstkaNewsAdaptive-skillbox-",websiteLink:"https://skillbox-news.andreynef.ru/"}]},{title:"Online-университет Skillbox. Профессия Frontend-Разработчик",id:be(),open:!1,body:[{id:be(),title:"Веб-вёрстка 2019",done:!0,inProcess:!1,finalWork:!0,comments:[],open:!1,body:[{id:be(),title:"Вводный модуль",inProcess:!1,done:!0,open:!1,body:[{title:"Как работают сайты. Backend и frontend. Вёрстка",done:!0},{title:"Как выглядит и из чего состоит код веб-страницы",done:!0},{title:"Установка редактора кода Sublime Text",done:!0},{title:"Простая веб-страница на HTML. Тэги и атрибуты",done:!0},{title:"CSS-стили. Селекторы, параметры и значения",done:!0}]},{id:be(),title:"HTML",inProcess:!1,done:!0,open:!1,body:[{title:"Приветственное видео",done:!0},{title:"Структура HTML5-документа",done:!0},{title:"Обзор и демонстрация работы основных HTML-тэгов",done:!0},{title:"Вёрстка веб-форм. Поля и кнопки. Валидация форм",done:!0},{title:"Таблицы и табличная вёрстка",done:!0},{title:"Семантическая вёрстка. Стандарты и валидность",done:!0}]},{id:be(),title:"Основы CSS",inProcess:!1,done:!0,open:!1,body:[{title:"Переходим к следующему модулю",done:!0},{title:"Как можно задавать стили. Селекторы",done:!0},{title:"Отступы, поля, размеры и единицы измерения",done:!0},{title:"Inline- и block- элементы, свойство display",done:!0},{title:"Обтекание, позиционирование и слои",done:!0},{title:"Блочная верстка",done:!0},{title:"Цвета, шрифты, фон и границы",done:!0}]},{id:be(),title:"Основы JavaScript",inProcess:!1,done:!0,open:!1,body:[{title:"Что такое JavaScript и как его подключать к веб-страни",done:!0},{title:"Библиотека jQuery. Управление стилями элементов",done:!0},{title:"Обработка событий",done:!0},{title:"Работа с DOM, изменение, добавление и удаление элементов",done:!0},{title:"Отображение и скрытие элементов, анимация",done:!0},{title:"Работа с сетью, получение и отправка данных",done:!0},{title:"JavaScript-фреймворки",done:!0}]},{id:be(),title:"Адаптивность и кроссбраузерность",inProcess:!1,done:!0,open:!1,body:[{title:"Адаптивность и кроссбраузерность",done:!0},{title:"Media-запросы",done:!0},{title:"Flexbox",done:!0},{title:"Шаги адаптивности и сетки",done:!0},{title:"Разнообразие браузеров и их особенности",done:!0},{title:"Инструменты проверки и обеспечения адаптивности и кроссбраузерности",done:!0}]},{id:be(),title:"Оформление",inProcess:!1,done:!0,open:!1,body:[{title:"Фон, прозрачность и градиенты",done:!0},{title:"Границы, аутлайны и тени",done:!0},{title:"Шрифты и оформление текста. Типографика и спецсимволы",done:!0},{title:"Стили указателей",done:!0},{title:"Изображения. Форматы, сжатие, спрайты, iconfonts. Favicon",done:!0},{title:"Рисование на веб-странице. SVG и Canvas",done:!0}]},{id:be(),title:"Advanced CSS",inProcess:!1,done:!0,open:!1,body:[{title:"Сложные селекторы. Свойство important",done:!0},{title:"Псевдо-классы и псевдо-элементы",done:!0},{title:"Транформации, переходы и анимации",done:!0},{title:"Стандарты именования в CSS. Методология БЭМ",done:!0},{title:"Библиотеки стилей: Bootstrap, Semantic UI, Material UI",done:!0},{title:"Шаблонизаторы (Twig, Haml) и препроцессоры (SASS, LESS, Stylus)",done:!0}]},{id:be(),title:"Инструменты верстальщика",inProcess:!1,done:!0,open:!1,body:[{title:"Последний модуль. Осталось чуть-чуть!",done:!0},{title:"Размещение своих работ в Интернете. Домен и хостинг",done:!0},{title:"Инструменты командной разработки. Таск-трекеры и Git",done:!0},{title:"Сборщики, минификаторы и оптимизаторы проектов",done:!0},{title:"Инструменты прототипирования",done:!0},{title:"Другие среды разработки. NetBeans, WebStorm",done:!0}]}]},{id:be(),title:"Веб-вёрстка 2020",done:!1,inProcess:!0,finalWork:!1,comments:[],open:!1,body:[{id:be(),title:"Введение",inProcess:!1,done:!1,open:!1,body:[{title:"Приветствие",done:!1},{title:"Как работают сайты. Верстка. Backend и Frontend",done:!1},{title:"Возможности HTML, CSS, JS",done:!1},{title:"Редактор кода. Codepen",done:!1},{title:"Работа с devtools",done:!1},{title:"VS Code",done:!1},{title:"Домашняя работа",done:!1}]},{id:be(),title:"Базовый HTML",inProcess:!1,done:!0,open:!1,body:[{title:"Ускорение работы. Emmet",done:!1},{title:"Элементы HTML-разметки. Базовые теги",done:!1},{title:"Теги картинок и ссылок. Кнопки",done:!1},{title:"Теги таблиц",done:!1},{title:"Служебные теги",done:!1},{title:"Кодстайл HTML",done:!1},{title:"Домашняя работа",done:!1}]},{id:be(),title:"Базовый CSS",inProcess:!1,done:!0,open:!1,body:[{title:"Подключение CSS",done:!1},{title:"Селекторы. Вес селектора",done:!1},{title:"Единицы измерения CSS",done:!1},{title:"Стилизация CSS",done:!1},{title:"Свойство display",done:!1},{title:"Блочная модель",done:!1},{title:"Позиционирование",done:!1},{title:"Кодстайл CSS",done:!1},{title:"Домашняя работа",done:!1}]},{id:be(),title:"Работа с макетом",inProcess:!1,done:!0,open:!1,body:[{title:"Форматы изображений",done:!1},{title:"Работа с макетом. Photoshop",done:!1},{title:"Экспорт изображений",done:!1},{title:"Работа с макетом. Figma",done:!1},{title:"Домашняя работа",done:!1}]},{id:be(),title:"Layout",inProcess:!1,done:!0,open:!1,body:[{title:"Интро",done:!1},{title:"HTML-семантика",done:!1},{title:"Разметка макета",done:!1},{title:"Флексбокс — базовая сетка (часть 1)",done:!1},{title:"Флексбокс — базовая сетка (часть 2)",done:!1},{title:"Css-стилизация (часть1)",done:!1},{title:"Css-стилизация (часть2)",done:!1},{title:"Домашняя работа",done:!1}]},{id:be(),title:"Продвинутый HTML. Формы",inProcess:!1,done:!0,open:!1,body:[{title:"Узконаправленные теги",done:!1},{title:"Теги для аудио и видео. Iframe. Нюансы использовани",done:!1},{title:"Продвинутое подключение изображений",done:!1},{title:"Формы",done:!1}]},{id:be(),title:"Продвинутый СSS",inProcess:!1,done:!1,open:!1,body:[{title:"Интро",done:!1},{title:"Подключение шрифтов",done:!1},{title:"Комбинаторные селекторы",done:!1},{title:"Псевдоклассы",done:!1},{title:"Псевдоэлементы",done:!1},{title:"Transition",done:!1},{title:"Transform",done:!1},{title:"Кастомные свойства",done:!1},{title:"CSS-функции",done:!1},{title:"БЭМ-именование",done:!1}]},{id:be(),title:"Сетки",inProcess:!1,done:!1,open:!1,body:[{title:"Интро",done:!1},{title:"Что такое сетка?",done:!1},{title:"Построение собственной сетки",done:!1},{title:"Сетки на примере Bootstrap",done:!1},{title:"Практика: bootstrap",done:!1},{title:"Пример сложной разработки сетки",done:!1},{title:"Аутро",done:!1},{title:"Домашняя работа",done:!1}]},{id:be(),title:"Адаптивность. Декстоп и планшет",inProcess:!0,done:!1,open:!1,body:[{title:"Интро",done:!1},{title:"Виды верстки",done:!1},{title:"Медиа-запросы. Mobile First",done:!1},{title:"Медиа-запросы. Практика",done:!1},{title:"Best Practices",done:!1},{title:"Pixel Perfect",done:!1},{title:"Домашняя работа",done:!1}]},{id:be(),title:"Адаптивность. Мобильные устройства",inProcess:!0,done:!1,open:!1,body:[{title:"Интро",done:!1},{title:"Адаптивные изображения",done:!1},{title:"Настройка сервера для проверки адаптивности",done:!1},{title:"Формы на нативных устройствах",done:!1},{title:"Практика",done:!1},{title:"Домашняя работа",done:!1}],inDevelopment:!1},{id:be(),title:"Доступность",inProcess:!0,done:!1,open:!1,body:[{title:"Интро",done:!1},{title:"Понятие доступности",done:!1},{title:"Проверка доступности. Клавиатура",done:!1},{title:"Проверка доступности. Скринридер",done:!1},{title:"Влияние семантики на доступность",done:!1},{title:"ARIA",done:!1},{title:"Аутро",done:!1},{title:"Домашняя работа",done:!1}]},{id:be(),title:"Javascript для верстальщика (откроется 06.11.2020)",inProcess:!1,done:!1,open:!1,body:[],inDevelopment:!0},{id:be(),title:"Кроссбраузерность (откроется 27.11.2020)",inProcess:!1,done:!1,open:!1,body:[],inDevelopment:!0},{id:be(),title:"Практикум (бонус) (откроется 18.12.2020)",inProcess:!1,done:!1,open:!1,body:[],inDevelopment:!0},{id:be(),title:"Работа с хостингом (откроется 08.01.2021)",inProcess:!1,done:!1,open:!1,body:[],inDevelopment:!0},{id:be(),title:"Курсовая (мини-проект)",inProcess:!1,done:!1,open:!1,body:[],inDevelopment:!0},{id:be(),title:"Верстка HTML-писем",inProcess:!1,done:!1,open:!1,body:[],inDevelopment:!0},{id:be(),title:"Сборщики",inProcess:!1,done:!1,open:!1,body:[],inDevelopment:!0},{id:be(),title:"Препроцессоры и Постпроцессоры",inProcess:!1,done:!1,open:!1,body:[],inDevelopment:!0},{id:be(),title:"CSS Grid",inProcess:!1,done:!1,open:!1,body:[],inDevelopment:!0},{id:be(),title:"Анимация",inProcess:!1,done:!1,open:!1,body:[],inDevelopment:!0},{id:be(),title:"CMS",inProcess:!1,done:!1,open:!1,body:[],inDevelopment:!0},{id:be(),title:"Будущее верстки",inProcess:!1,done:!1,open:!1,body:[],inDevelopment:!0},{id:be(),title:"Информация о дипломном проекте",inProcess:!1,done:!1,open:!1,body:[],inDevelopment:!0}]},{id:be(),title:"JavaScript 2019",done:!0,inProcess:!1,finalWork:!1,comments:[],open:!1,body:[{id:be(),title:"Знакомство с языком",inProcess:!1,done:!0,open:!1,body:[{title:"Интро",done:!0},{title:"Что умеет JavaScript и почему он так популярен?",done:!0},{title:"Инструменты разработчика",done:!0},{title:"Hello, world!",done:!0},{title:"Синтаксис языка",done:!0},{title:"Аутро",done:!0},{title:"Домашняя работа",done:!0}]},{id:be(),title:"Основы",inProcess:!1,done:!0,open:!1,body:[{title:"Приветственное видео",done:!0},{title:"Интро",done:!0},{title:"Числа",done:!0},{title:"Строки",done:!0},{title:"Логические (булевые) значения",done:!0},{title:"NaN (Not a Number)",done:!0},{title:"Infinity",done:!0},{title:"Математические операторы",done:!0},{title:"Переменные",done:!0},{title:"Преобразование типов",done:!0},{title:"Условия",done:!0},{title:"Циклы",done:!0},{title:"Домашняя работа",done:!0}]},{id:be(),title:"Функции",inProcess:!1,done:!0,open:!1,body:[{title:"Переходим к следующему модулю",done:!0},{title:"Интро",done:!0},{title:"Объявление и вызов функций",done:!0},{title:"Аргументы",done:!0},{title:"Локальные и глобальные переменные",done:!0},{title:"Hoisting",done:!0},{title:"Возвращаемые значения",done:!0},{title:"Рекурсия",done:!0},{title:"Домашняя работа",done:!0}]},{id:be(),title:"Массивы и объекты",inProcess:!1,done:!0,open:!1,body:[{title:"Понятие объектов",done:!0},{title:"Объекты в JavaScript",done:!0},{title:"Перебор свойств объекта",done:!0},{title:"Массивы",done:!0},{title:"Стандартный объект Math",done:!0},{title:"Стандартный объект String",done:!0},{title:"Стандартный объект Array",done:!0},{title:"Стандартный объект Date",done:!0},{title:"Домашняя работа",done:!0}]},{id:be(),title:"Замыкания",inProcess:!1,done:!0,open:!1,body:[{title:"Глобальный объект window",done:!0},{title:"Сборщик мусора",done:!0},{title:"Замыкания",done:!0},{title:"IIFE",done:!0},{title:"Домашняя работа",done:!0}]},{id:be(),title:"Объекты и конструкторы",inProcess:!1,done:!0,open:!1,body:[{title:"Функции-конструкторы",done:!0},{title:"Контекст вызова",done:!0},{title:"Привязка контекста (call, apply и bind)",done:!0},{title:"Домашняя работа",done:!0}]},{id:be(),title:"Объектно-ориентированное программирование",inProcess:!1,done:!0,open:!1,body:[{title:"ООП. Наследование, инкапсуляция, полиморфизм",done:!0},{title:"Функциональное наследование",done:!0},{title:"Прототипное наследование",done:!0},{title:"Прототипы стандартных объектов",done:!0},{title:"Домашняя работа",done:!0}]},{id:be(),title:"Разное",inProcess:!1,done:!0,open:!1,body:[{title:"Объект arguments",done:!0},{title:"setTimeout и setInterval",done:!0},{title:"Выполнение кода через eval",done:!0},{title:"Обработка исключений (throw, catch)",done:!0},{title:"Регулярные выражения",done:!0},{title:"Строгий режим (strict mode)",done:!0},{title:"Домашняя работа",done:!0}]},{id:be(),title:"JavaScript в браузере. DOM",inProcess:!1,done:!0,open:!1,body:[{title:"Интро",done:!0},{title:"DOM",done:!0},{title:"Порядок выполнения скриптов",done:!0},{title:"Селекторы",done:!0},{title:"Свойства и методы элементов",done:!0},{title:"События и обработчики",done:!0},{title:"Погружение и всплытие событий",done:!0},{title:"Домашняя работа",done:!0}]},{id:be(),title:"Web API",inProcess:!1,done:!0,open:!1,body:[{title:"Интро",done:!0},{title:"Console",done:!0},{title:"Window",done:!0},{title:"Document",done:!0},{title:"Информация о браузере и истории переходов",done:!0},{title:"LocalStorage и SessionStorage",done:!0},{title:"ContentEditable",done:!0},{title:"Разнообразие Web API",done:!0},{title:"Домашняя работа",done:!0}]},{id:be(),title:"Клиент и сервер",inProcess:!1,done:!0,open:!1,body:[{title:"Клиент-серверное взаимодействие (интро)",done:!0},{title:"Запуск локального сервера",done:!0},{title:"AJAX и callback",done:!0},{title:"JSON и Promise",done:!0},{title:"API и WebSocket",done:!0},{title:"Домашняя работа",done:!0}]},{id:be(),title:"jQuery",inProcess:!1,done:!0,open:!1,body:[{title:"Библиотека jQuery. Интро",done:!0},{title:"Библиотеки и frameworks. Интро",done:!0},{title:"Возможности jQuery",done:!0},{title:"Анимация",done:!0},{title:"AJAX",done:!0},{title:"Плагины",done:!0},{title:"Домашняя работа",done:!0}]},{id:be(),title:"Современный JavaScript. ES 2015",inProcess:!1,done:!0,open:!1,body:[{title:"История стандарта ECMAScript. Интро",done:!0},{title:"Транспиляция и полифиллы",done:!0},{title:"Let и const",done:!0},{title:"Деструктуризация",done:!0},{title:"Rest и spread",done:!0},{title:"Template strings",done:!0},{title:"Стрелочные функции и параметры по умолчанию",done:!0},{title:"Классы и наследование",done:!0},{title:"Домашняя работа",done:!0}]},{id:be(),title:"Сборка проектов",inProcess:!1,done:!0,open:!1,body:[{title:"Интро. Что такое сборка проектов и для чего она нужна?",done:!0},{title:"Node.js",done:!0},{title:"npm",done:!0},{title:"Gulp",done:!0},{title:"Webpack",done:!0},{title:"Домашняя работа",done:!0}]},{id:be(),title:"React",inProcess:!1,done:!0,open:!1,body:[{title:"DOM и императивный подход. Интро",done:!0},{title:"React и декларативный подход",done:!0},{title:"Подготовка рабочего пространства",done:!0},{title:"Простое React-приложение",done:!0},{title:"Разделение на компоненты",done:!0},{title:"Домашняя работа",done:!0}]},{id:be(),title:"Redux",inProcess:!1,done:!0,open:!1,body:[{title:"Последний модуль. Осталось чуть-чуть!",done:!0},{title:"Интро",done:!0},{title:"Ключевые принципы Redux",done:!0},{title:"Установка зависимостей и разделение на компоненты",done:!0},{title:"Создание store и reducers",done:!0},{title:"Создание actions",done:!0},{title:"Запуск приложения",done:!0},{title:"Домашняя работа",done:!0}]},{id:be(),title:"Бонус",inProcess:!1,done:!0,open:!1,body:[{title:"Библиотеки и фреймворки 2017",done:!0},{title:"Развитие стандарта ECMAScri",done:!0},{title:"Тестирование кода",done:!0}]}]},{id:be(),title:"JavaScript-фреймворк React.js",done:!1,inProcess:!0,finalWork:!1,comments:[],open:!1,body:[{id:be(),title:"Введение в React",inProcess:!1,done:!0,open:!1,body:[{title:"Что такое React. Основные преимущества",done:!0},{title:"Основы декларативного подхода",done:!0},{title:"Возможности React, компоненты, состояние, применения",done:!0},{title:"Экосистема React, основные библиотеки, из чего обычно состоит реакт",done:!0}]},{id:be(),title:"Создание проекта",inProcess:!1,done:!0,open:!1,body:[{title:"Конфигурация webpack на клиенте",done:!0},{title:"Конфигурация webpack на сервере",done:!0},{title:"Подключаем к проекту HMR и SSR",done:!0},{title:"Подключаем typescript",done:!0},{title:"CSS modules, Jest, Enzyme",done:!0}]},{id:be(),title:"Typescript",inProcess:!1,done:!0,open:!1,body:[{title:"Основы Typescript, Типы",done:!0},{title:"Работа с массивами",done:!0},{title:"Работа с объектами и интерфейсами",done:!0},{title:"Типизация функций и типы ТС",done:!0},{title:"Generics",done:!0},{title:"Классы",done:!0},{title:"Infer, typeof, keyof, Mapped Types",done:!0}]},{id:be(),title:"Компоненты на примере новостной карточки Reddit",inProcess:!1,done:!0,open:!1,body:[{title:"Компоненты в React",done:!0},{title:"Состояния в Class Components",done:!0},{title:"Состояния в Functional Components",done:!0},{title:"Создаем Layout приложения. Часть 1",done:!0},{title:"Создаем Layout приложения. Часть 2",done:!0},{title:"Создаем компонент новостной карточки",done:!0},{title:"Жизненный цикл компонента",done:!0}]},{id:be(),title:"Hooks и Функциональное программирование",inProcess:!1,done:!0,open:!1,body:[{title:"Карирование и Функции высшего порядка",done:!0},{title:"Hooks в реакт",done:!0},{title:"Map Reduce React",done:!0},{title:"Создание компонента dropdown c использованием hooks",done:!0},{title:"Compose, Pipe и применение в React",done:!0}]},{id:be(),title:"Больше о компонентах и введение в тестирование компонентов",inProcess:!1,done:!0,open:!1,body:[{title:"Адаптивные и неадаптивные компоненты. Mobile first и desktop first в адаптиве. Разница в подходах",done:!1},{title:"Дропдаун меню",done:!1},{title:"Введение в unit тесты и jest",done:!1},{title:"Пишем тест на реакт компонент Enzyme vs Snapshots",done:!1},{title:"Вспомогательные компоненты",done:!1}]},{id:be(),title:"Работа с публичным API на примере Reddit",inProcess:!1,done:!0,open:!1,body:[{title:"Как работать с API",done:!1},{title:"Регистрируем аккаунт разработчика на Reddit",done:!1},{title:"OAuth2",done:!1},{title:"Авторизация пользователя",done:!1},{title:"Как структурировать API запросы",done:!1}]},{id:be(),title:"Введение в Redux на примере Новостной ленты (откроется 08.09.2020)",inProcess:!1,done:!0,open:!1,body:[],inDevelopment:!0},{id:be(),title:"Использование Redux-Thunk на примере бесконечной ленты (откроется 29.09.2020)",inProcess:!1,done:!0,open:!1,body:[],inDevelopment:!0},{id:be(),title:"Сайдбар + роутинг (откроется 30.09.2020)",inProcess:!1,done:!1,open:!1,body:[],inDevelopment:!0},{id:be(),title:"Формы на примере комментариев и карточки поста (откроется 20.10.2020)",inProcess:!1,done:!0,open:!1,body:[],inDevelopment:!0},{id:be(),title:"SSR + NextJS (откроется 21.12.2020)",inProcess:!1,done:!1,open:!1,body:[],inDevelopment:!0},{id:be(),title:"Бонус-модуль: Mobx (откроется 21.12.2020)",inProcess:!1,done:!1,open:!1,body:[],inDevelopment:!0}]},{id:be(),title:"Система контроля версий Git",inProcess:!1,done:!0,open:!0,body:[{title:"Версии программного кода",done:!0},{title:"Установка Git",done:!0},{title:"Индекс и частичные коммиты",done:!0},{title:"Сравнение версий",done:!0},{title:"Отмена изменений и откат версий",done:!0},{title:"Репозитории и коллективная работа",done:!0},{title:"Ветки: создание и управление",done:!0},{title:"Слияние и разрешение конфликтов",done:!0},{title:"Полезные инструменты",done:!0},{title:"Правила работы с Git",done:!0}]},{id:be(),title:"Универсальные знания программиста",done:!1,inProcess:!1,finalWork:!1,comments:[],open:!1,body:[{id:be(),title:"Протокол HTTP",inProcess:!1,done:!1,open:!1,body:[{title:"Протокол HTTP. Запрос и ответ",done:!1},{title:"Методы HTTP-запросов GET и POST",done:!1},{title:"Другие методы HTTP-запросов",done:!1},{title:"Статус-коды HTTP-ответов",done:!1},{title:"Адресация сетевых ресурсов",done:!1},{title:"HTTP-заголовки",done:!1},{title:"Версии протокола HTTP и HTTPS",done:!1}]},{id:be(),title:"Введение в алгоритмы",inProcess:!1,done:!1,open:!1,body:[{title:"Введение в алгоритмы",done:!1},{title:"Зачем нужны алгоритмы",done:!1},{title:"Рекурсивные алгоритмы",done:!1},{title:"Временная сложность алгоритмов",done:!1},{title:"Алгоритм бинарного поиска",done:!1},{title:"Алгоритм сортировки пузырьком",done:!1},{title:"Алгоритм сортировки QuickSort",done:!1},{title:"Алгоритм сортировки MergeSort",done:!1},{title:"Алгоритм поиска подстроки Рабина-Карпа",done:!1},{title:"Алгоритм поиска подстроки Кнута-Морриса-Пратта",done:!1},{title:"Алгоритм поиска подстроки Бойера-Мура",done:!1}]}]}]},{title:"Образование",id:be(),open:!1,body:[{title:"Online-университет Skillbox",yearStart:2019,yearEnd:"now",specialization:"Frontend-Разработчик."},{title:"Stamford International University",yearStart:2014,yearEnd:2016,grade:"MBA (english program)",faculty:"Marketing"},{title:"Florida Keys Community College",yearStart:2008,yearEnd:2008,specialization:"English courses. Upper-internediate"},{title:"Ижевский Государственный Технический Университет",yearStart:2001,yearEnd:2006,grade:"высшее",faculty:"Машиностроительный",specialization:"Ракетные двигатели и установки"},{title:"Международный Восточно-Европейский Университет",yearStart:1998,yearEnd:2e3,grade:"средне-специальное",faculty:"Экономический",specialization:"Экономист бухгалтер"}]},{title:"Опыт работы",id:be(),open:!1,body:[{title:"Разное. (онлайн репетиторство, торговля на бирже, подработка на выездных мероприятих в Москве)",yearStart:2017,yearEnd:2020,position:"разное",duties:"разное"},{title:"Kornpitacksuksa the Creative Thinking School (Thailand)",yearStart:2017,yearEnd:2017,position:"учитель",duties:"преподавание английского языка детям 5-10 лет"},{title:"OOO Тау Груп",yearStart:2008,yearEnd:2015,position:"Совладелец бизнеса (автомойка)",duties:"Заказ автохимии, контроль состояния оборудования, контроль качества, общение с клиентами, работа с кассой, составление отчетов."}]},{title:"Обо мне",id:be(),open:!1,body:[{sport:"Спортивная ходьба по улице (до магазина)",relax:"Моб игры, лес, костер",freeTime:"семья, друзья, велик, самообучение",about:"Я начинающий frontend разработчик. Моя цель – найти ту самую работу, где я могу развиваться вместе со всеми, в обществе интересных мне людей и совместно приносить пользу общему делу. Мне импонирует это направление в веб разработке, т.к. можно видеть долгоиграющий результат своих трудов. К тому же оно достаточно перспективное и в дальнейшем(!) есть возможность работать удаленно.\n                          Оцениваю себя как творческого человека но для начала не помешает и системный подход. В обществе друзей общительный. При деловых встречах предпочитаю краткость и информативность. Не пью и не курю, но не ЗОЖ.\n                          В глобальных планах планирую развиться до fullstack."}]}]},mutations:{setOpen:function(e,t){e.droplist=Object(me["a"])(e.droplist.map((function(e){return e.id===t?Object(ue["a"])(Object(ue["a"])({},e),{},{open:!e.open}):e.body?Object(ue["a"])(Object(ue["a"])({},e),{},{body:Object(me["a"])(e.body.map((function(e){return e.id===t?Object(ue["a"])(Object(ue["a"])({},e),{},{open:!e.open}):e.body?Object(ue["a"])(Object(ue["a"])({},e),{},{body:Object(me["a"])(e.body.map((function(e){return e.id===t?Object(ue["a"])(Object(ue["a"])({},e),{},{open:!e.open}):e})))}):e})))}):e})))}},getters:{},actions:{}};n["a"].use(pe["a"]);var ye=new pe["a"].Store({modules:{infoModule:fe},state:{},getters:{},mutations:{},actions:{}});n["a"].config.productionTip=!1,new n["a"]({store:ye,render:function(e){return e(ce)}}).$mount("#app")},6998:function(e,t,i){"use strict";i("b228")},7829:function(e,t,i){"use strict";i("30de")},"89e5":function(e,t,i){},"98d7":function(e,t,i){},"9e78":function(e,t,i){"use strict";i("98d7")},a244:function(e,t,i){"use strict";i("89e5")},b228:function(e,t,i){},c3d5:function(e,t,i){},cee0:function(e,t,i){"use strict";i("f75a")},cf84:function(e,t,i){},ef3e:function(e,t,i){"use strict";i("cf84")},f3b5:function(e,t,i){},f75a:function(e,t,i){}});
//# sourceMappingURL=app.84878eca.js.map