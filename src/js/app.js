import { isWebp }from './modules'
import nav from './modules/nav'
import hidenElem from './modules/hidenElem'
import form from './modules/form'


// Проверка браузера на поддерку .webp изображений ====================================================================================================================================================

// ====================================================================================================================================================
window.addEventListener('DOMContentLoaded', function(){
    isWebp();
    nav();
    hidenElem();
    form();
})

