// 1)
//Что такое Jquery?
//Это одна из библиотек JS.

// 2)
//В чем польза Jquery?
//Уменьшает количество кода.

// 3)
//Какие функции содержит в себе Jquery?
//Например, облегчение получения элементов из HTML с помощью $().

// 4)
//Какие известные компании используют Jquery?
//Ответ на этот вопрос будет длинным - по статистике, более 50% процентов опубликованных сайтов используют jQuery.

// 5)
//Куда нужно подключать Jquery?
//К HTML с помощью <script src="..."></script>

// 6)
//В какую папку нужно поместить скаченый Jquery?
//В папку, где у вас есть файлы HTML, к которым вы хотели бы подключить jQuery.

// 7)
//Как лучше подключать Jquery?
//В самом конце body, перед скриптами других JS файлов, если они есть.

// 8)
//Как выглядит базовый синтаксис Jquery?
//Если вы хотите узнать, как это выглядит, то взгляните на начало файла Hw39.js

// 9)
//Что делает метод $(this).hide() ?
//Делает элемент, который имеется ввиду под this, невидимым.

// 10)
//Что делает метод $("p").hide() ?
//Делает все элементы <p></p>, найденные в документе, невидимыми.

// 11)
//Что делает метод $(".test").hide() ?
//Делает все элементы с классом 'test', найденные в документе, невидимыми.

// 12)
//Что делает метод $("#test").hide() ?
//Делает все элементы с ID 'test', найденные в документе, невидимыми.

// 13)
//Пропиши ниже событие готовности верстки в Jquery
$(document).ready(function(){
    //код
})

// 14)
//Пропиши ниже событие готовности верстки в Jquery коротко
$(document).ready(() => {
    //твой код
})

// 15)
//Для чего нужны селлекторы в Jquery?
//Чтобы находить в файле HTML какие-либо элементы.

// 16)
//Догадайся что делает скрипт ниже
$(document).ready(() => {
    $('.button').click(() => {
        console.log('Hello')
    })
})
//При нажатии на кнопку с классом 'button' выводит в консоли 'Hello'.

// 17)
//Как в Jquery обратится к селлектору id?
// $(#id)
//где id - какой-либо ID

// 18)
//Как в Jquery обратится к селлектору class?
// $(.class)
//где class - какой-либо класс

// 19)
//Перечисли ниже все селлекторы Jquery которые есть, а не те которые помнишь!
//В jQuery бесконечное количество возможных селекторов, например, *, #screen, .btn, .inp, [href] и т.д.