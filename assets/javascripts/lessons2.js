/*
$( document ).ready(function() {

});
*/

document.addEventListener('DOMContentLoaded', function() {

function getLastDayOfMonth(year, month) {
    var date = new Date(year, month + 1, 1);
    return date.getDate();
}
var newDate = new Date();
var currYear = newDate.getFullYear();
console.log(currYear);
var currMonth = newDate.getMonth() + 1;
var nextMonth = currMonth + 1;
document.write(getLastDayOfMonth(2018, 3) + '.' + '0' + nextMonth + '.' + currYear);


/*
var newDate = new Date(2018, 03, 01);
var currDate = newDate.getDate();
var currMonth = newDate.getMonth() + 1;
newDate.setDate(currMonth + 1);
document.write('current day is 0' + currDate + '.0' + currMonth + '<br/>');
document.write('first day in next month is ' + newDate);
console.log(currMonth);
*/
/** Узнать сколько времени ушло на выполнение этой функции **/
/*

//console.timeEnd('START: ');
var t0 = performance.now();
function iterFn() {
    var arr = [];
    for (var i = 0; i < 10e3; i++) {
        arr.push(Math.pow(10e10, 10*10));
    }
}
iterFn();
var t1 = performance.now();
console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
//console.timeEnd('END: ');
//iterFn.addEventListener('keydown', function(event) {});
*/

/*
//console.log(Date.now(dmy) + '<br/>');
//console.log(new Date(Date.parse('2018/03/21')) + '<br/>');
var n = new Date(Date.now());
document.write(n + '<br/>');
var time = new Date();
document.write(time + '<br/>');
var value = 1000 * 60 * 60 * 24 * 16;
var time2 = new Date(value);
document.write(time2 + '<br/>');

var date = new Date(2014, 11, 31, 12, 30, 0);
var options = {
    era: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
};
// среда, 31 декабря 2014 г. н.э. 12:30:00
document.write( date.toLocaleString("ru", options) + '<br>');
// Wednesday, December 31, 2014 Anno Domini 12:30:00 PM
document.write( date.toLocaleString("en-US", options) + '<br>');
//document.write( date.toLocaleString("zh-Hans-CN", options) + '<br>');
var d = new Date();
document.write(d.getDate() + '<br/>');
document.write(d.getDay() + '<br/>');
document.write(d.getFullYear() + '<br/>');

var today = [
    'mon',
    'tue',
    'wed',
    'thu',
    'fri',
    'sat',
    'sun'
];
var nowDay = function(days) {
    var dayNow = d.getDay() - 1;
    document.write(days[dayNow]);
}
nowDay(today);


//for (var i = 1; i < today.length; i++) {
    //console.log(d.getDay() == today[i]);  
//}
*/

/*
var inpt = document.getElementsByClassName('inpt');
inpt[0].addEventListener('keydown', function(event) {
//    console.log(event);
        //if(event.ctrlKey == true && event.key == 'v') {
        if(event.ctrlKey == true && event.keyCode === 86) {    
            //event.preventDefault();
            event.target.readOnly = "true";
        }
       
});
*/

//console.log(btnPopup[0]);
/*function woHotKey(elem) {
    elem.click(function() {

    });
}*/
/*
var btnPopup = document.getElementsByClassName('popupOpenBtn');
function displayPopup() {
    var popup_wrapper = document.getElementById('popup-wrapper');
    popup_wrapper.style.display = 'flex';
    popup_wrapper.style.animation = 'popup-fade-in .5s linear';
}
btnPopup[0].addEventListener('click', displayPopup);
var btnPopupClose = document.getElementById('popupClose');
btnPopupClose.addEventListener('click', function () {
    var popup_wrapper = document.getElementById('popup-wrapper');
    popup_wrapper.addEventListener('animationend', function(){
        popup_wrapper.style.display = 'none';
    });
    popup_wrapper.style.animation = 'popup-fade-out .5s linear';
});
// по клику на body вызывается обработчик
document.body.addEventListener('click', function(event){
    //console.log('event ', event);
//    console.log('event.path ', event.path);
   var wrapper = document.getElementById('popup-wrapper');
   // если true - то мы кликнули в границах popup
    var found = false;
    // перебираем путь события, прошло ли оно
    // через 'popup-container'
   for (var i = 0; i < event.path.length; i++) {
       if (event.path[i].id === 'popup-container') {
           found = true;
           break;
       }
   }
   // если в пути нет этого элемента с таким классом,
   // значит мы кликнули вне popup и нам надо его закрыть
  if (!found && event.target.className !== 'popupOpenBtn') {
       wrapper.style.display = 'none';
   }
});
*/
/*
var btnPopup = document.getElementsByClassName('popupOpenBtn');
function displayPopup() {
    var popup_wrapper = document.getElementById('popup-wrapper');
    popup_wrapper.style.display = 'flex';
    popup_wrapper.style.animation = 'popup-fade-in .5s linear';
}
btnPopup[0].addEventListener('click', displayPopup);
var btnPopupClose = document.getElementById('popupClose');
btnPopupClose.addEventListener('click', function(event) {
    var popup_wrapper = document.getElementById('popup-wrapper');
    popup_wrapper.addEventListener('animationend', function(){
        popup_wrapper.style.display = 'none';
    });
   event.target.style.animation = 'popup-fade-out .5s linear';
});
var mainPopupClose = document.getElementsByTagName('body');
mainPopupClose[0].addEventListener('click', function(event) {
    var popup_wrapper = document.getElementById('popup-wrapper');
    if (event.path[1] == 'body') {
        popup_wrapper.addEventListener('animationend', function(){
            event.target.style.display = 'none';
        });
        popup_wrapper.style.animation = 'popup-fade-out .5s linear';
    }
    else {return;}
});
for (var i = 0; i < event.path.length; i++) {
    if (event.path[i].id === 'popup-container') {}
    else {}
}
*/

/** Выводить по клику на кнопку popup в котором пользователь
 * подтверждает свою почту. По клику за границами на затемнённую
 * область скрывать popup **/


/*
    var form = document.querySelector('form');
    form.onclick = function(event) {
        event.target.style.backgroundColor = 'yellow';
        console.log("target = " + event.target.tagName + ", this=" + this.tagName)
    }
*/
    /* Передаём объект события чтобы потом мы могли обратиться к его свойствам */
/*
    var eventDemonstrator = document.getElementById('btn');
    eventDemonstrator.addEventListener('click', function(event) {
        // в объект события передаётся информация о событии
        // смотрим что входит в объект
        console.log('event: ', event);
        // элемент на котором произошло событие
        console.log('event.target: ', event.target);
        // событие находится на кнопке и не всплывает, потому что выше
        // нет обработчиков cliсk
        console.log('event.currentTarget: ', event.currentTarget);
    });
    // повешаем обработчики на элементы выше и при
    // вызове одного будут срабатывать и все остальные
    var div = eventDemonstrator.parentElement;
    div.addEventListener('click', function(event) {
        // событие всплывает, потому что выше
        // есть обработчик cliсk
        console.log('div clicked. or bubbled.');
    });
    document.body.addEventListener('click', function(event) {
        console.log('body clicked. or bubbled.');
    });

    /** Последовательность срабатывания событий **/
/*
    var area = document.getElementById('area');
    area.onclick = function(e) {
        this.value += "click\n"; this.scrollTop = this.scrollHeight;
    };
    area.onmousedown = function(e) {
        this.value += "\nmousedown\n"; this.scrollTop = this.scrollHeight;
    };
    area.onmouseup = function(e) {
        this.value += "mouseup\n"; this.scrollTop = this.scrollHeight;
    };
    var button = document.getElementById('button');
    button.onclick = function() {
        text.value += ' 1 ';
        text.focus(); // вызов инициирует событие onfocus
        text.value += ' 2 ';
    };
    var text = document.getElementById('text');
    text.onfocus = function() {
        text.value += ' !focus! ';
    };
*/    
});