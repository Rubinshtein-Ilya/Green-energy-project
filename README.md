# Gulp + WebPack + Babel

Сборку делал по примеру автора [youtube](https://www.youtube.com/watch?v=jU88mLuLWlk) канала: [Фрилансер по жизни](https://www.youtube.com/c/FreelancerLifeStyle)  

## Для работы используйте такие комманды

Для установки всех зависимостей: `$ npm install`  
Для запуска сборщика Gulp можно использовать: `$ npm run dev` или `$ gulp`  
Для сборки проекта в режиме `"production"`: `$ npm run build`
> Для сборки проекта в режиме `"production"` можно так же использовать комманду: `$ gulp build`, но тогда сборщик не может разобрать это `"production"` или `"development"` и собирет проект в режиме `"development"`

## На что еще обратить внимание

В сборке используется плагин `"gulp-fonter"` для конвертации шрифтов из `.ttf` в `.woff` и при сборке проекта - шрифты в формате `.woff` коряво будут переименованы и перенесутся в неправильную папку. Чтобы решить этот баг, сразу после установки зависимостей перейди в папку `node_modules` - найди там папку и файл: `gulp-fonter/dist/index.js`

22-я строка кода будет выглядеть вот так:

```javascript
newFont.path = source.dirname + '\\' + source.stem + '.' + type;
```

Тебе нужно её заменить на эту строку:

```javascript
newFont.path = source.dirname + '/' + source.stem + '.' + type;
```

Автор этого плагина допустил однажды ошибку и из за этого при установке зависимостей плагин скачивается с маленькой ошибкой в коде. Автору предложил пофиксить этот баг и даже письмо написал, но он до сих пор не отвечает.

2)установить плагин "path autocomplete", в настройках плагина "path-autocomplete.pathMappings": {

        "@img": "${folder}/src/images",
        "@scss": "${folder}/src/scss",
        "@js": "${folder}/src/js",
    }

## Что делает Gulp?

* сжимает HTML в режиме `build`;
* удаляет комментарии из HTML в режиме `build`;
* собирает SCSS файлы, добавляет вендорные префиксы;
* удаляет комментарии из SCSS файлов;
* в режиме и `build` сжимает SCSS и делает копию без сжатия;
* конвертирует шрифты в `.ttf`, из `.ttf` в `woff/woff2`;
* создает файл для подключения шрифтов. Данный файл создается по такому пути: `src/scss/config/fonts.scss`, выглядит это так:

```scss
@font-face {
  font-family: Inter;
  font-display: swap;
  src: url("../fonts/Inter-Bold.woff2") format("woff2"), url("../fonts/Inter-Bold.woff") format("woff");
  font-weight: 700;
  font-style: normal;
}
```

* сжимает изображения и конвертирует их дополнительно в формат `webp` и подключает их если браузер поддерживает этот формат;
* копирует папку `/files` с содержимым в финальную сборку. То есть любые файлы можно поместить в эту папку и она будет добавлена в финальную сборку;
* отдельной коммандой `$ npm run svgSprive` cоздает "svg cпрайты";
* перед каждым запуском сборщика чистит папку с финальным проектом, чтобы не собирать муссор;
* отдельной коммандой `$ npm run zip` можно заархивировать финальную папку для заказчика __с именем проекта__;
* так же для разработи `gulp` запускает сервер с автоматической перезагрузкой окна в браузере при изменении файлов в проекте;
* отдельной коммандой `$ npm run deployFTP` финальный проект выгружается на хостинг. Опции для отправки проекта на нужный хостинг указываются в файле: `gulp/config/ftp.js`.

## Что делает WebPack?

* именно `webpack` в данной сборке занимается обработкой файлов c JavaScript;
* поддерживается модульное подключение скриптов `import/export`;
* при импорте нет необходимости писать расширение файла `.js`, так же если осуществляется импорт из файла `index.js` не обязательно это указывать:

```javascript
import * as flsFunctions from './modules' // './modules/index.js'
```

* `webpack` c помощью `babel` позволяет тебе писать код на любимом __ES6+__;
* в режиме `"production"` при финальной сборке файлы JS сжимаются.

## Финал

Отдельной вишенкой является плагин `gh-pages` для деплоя папки `/dist` на отдельную ветку GitHub, чтобы красиво развернуть свой проект на GitHub Pages. Для этого в `package.json` укажи в поле __homepage__ ссылку на свою страницу gh-pages:

```json
"homepage": "https://{UserName}.github.io/{NameRepo}",
```
