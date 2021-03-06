document.addEventListener('DOMContentLoaded', function() {

// значение span
var voteCount = 10;
// находим его по класу, он один - поэтому нулевой элемент массива
var voteCountSpan = document.getElementsByClassName('vote_span')[0];
// записываем в него значение и преобразуем его из числа в строку
voteCountSpan.innerHTML = voteCount + '';
/* пишем функцию обработчик которую назначим обработчиком события
     event - в функцию обработчик браузер передаёт объект
     в котором есть информация о событии а также ссылка на элемент
     на котором событие сработало*/
function counterClickHandler(event) {
    // находим 2 элемента - массив
    var voteButtons = document.getElementsByClassName('vote_btn');
    // ссылка на элемент, на котором сработало событие(в данном случае - кнопка - или +)
    var buttonClicked = event.target;
    // получаем атрибут с кнопки на которую нажали
    var counterDifference = buttonClicked.getAttribute('data-count');
    // приводим значение атрибута data-count к числу
    counterDifference = parseInt(counterDifference, 10);
    // +1 или -1 от значения span
    voteCount += counterDifference;
    // записываем новое значение в span в виде строки
    voteCountSpan.innerHTML = voteCount + '';
    // перебираем кнопки
    for (var i = 0; i < voteButtons.length; i++) {
        var btn = voteButtons[i];
        // удаляем событие с каждой кнопки чтобы мы не могли больше
        // чем 1 раз проголосовать
        btn.removeEventListener('click', counterClickHandler);
        // добавляем атрибут кнопкам
        btn.setAttribute('disabled', 'true');
        btn.style.color = 'grey';
    }
}

// находим 2 элемента - массив
var voteButtons = document.getElementsByClassName('vote_btn');
alert('Вы можете проголосовать только 1 раз!');
for (var i = 0; i < voteButtons.length; i++) {
    var button = voteButtons[i];
// вешаем обработчик события по клику на каждую кнопку
    button.addEventListener('click', counterClickHandler);
}



/*
alert('Вы можете проголосовать только один раз !');
var voter = document.getElementById('voter');
var voterMinus = voter.firstChild;
var voterPlus = voter.lastChild;
var value = document.getElementsByClassName('vote_span');

voterMinus.addEventListener('click', function () {debugger;
	value.innerHTML = value-1;
//	console.log(event.target.classList.toggle('minus'));
//	event.target.setAttribute("disable", "disable");
});
voterPlus.addEventListener('click', function () {
	event = value+1;
//	console.log(event.target.classList.toggle('plus'));
	event.target.setAttribute("disable", "disable");
});
*/

/*
 Объект события и ссылка на каком элементе оно сработало 
    var btnAddClass = document.getElementById('bdnAddClass');
    // назначили по клику обработчик события
    // браузер в обработчик события всегда передаёт объект события
    // в нём содержатся данные о событии и элемент на котором оно сработало
    btnAddClass.addEventListener('click', function (event) {
        // объект события
        console.log(event);
        // event.target = document.getElementById('btnAddClass') -
        // элемент на котором сработало событие
        console.log(event.target.classList.toggle('myClass'));
    });

// Передаём объект события в свою функцию
    var btnAddClass = document.getElementById('btnAddClass');
    function eventTargetHandler(event) {
        console.log(event.target);
    }
    btnAddClass.addEventListener('click', eventTargetHandler);

*/
/*
//добавляем анимацию в событие 
button.btnAddClass {
    transition: background-color .3s linear;
    width: 200px;
    background-color: red;
    color: white;
}
*/
/*
// таким образом можно добавлять несколько событий
	function handler1() {
		alert('Спасибо!');
	}
	function handler2() {
		alert('Спасибо ещё раз!');
	}
	btn.onclick = function() { alert("Привет"); };
	btn.addEventListener("click", handler1); // Спасибо!
	btn.addEventListener("click", handler2); // Спасибо ещё раз!


*/
/*
	function handler() {
		alert( 'addEventListener' );
	}
	var btn = document.getElementById('btn');
	btn.addEventListener("click", handler);
	btn.removeEventListener("click", handler);
*/

	/** Интервалы и таймеры (setInterval(),  setTimeout(), setImmediate())
 * внутренний таймер-планировщик, который позволяет задавать вызов функции
 * через заданный период времени
 * *************************************************************** **/

 	/** addEventListener и removeEventListener
     * *********************************** **/
    /* onclick не всегда срабатывает в отличии от addEventListener.
     Методы addEventListener и removeEventListener являются современным
     способом назначить или удалить обработчик, и при этом позволяют
     использовать сколько угодно любых обработчиков
     element.addEventListener(event, handler[, phase]);
     event - имя события, например click
     handler - ссылка на функцию, которую надо поставить обработчиком.
     phase - необязательный аргумент, «фаза», на которой обработчик должен
     сработать. Удаление обработчика осуществляется вызовом removeEventListener:
     element.removeEventListener(event, handler[, phase]);
     */

/*
 	// setInterval 
    // начать повторы функции с интервалом 0.5 сек
    var timerId = setInterval(function() {
        alert( "тик" );
    }, 500);
    // через 10 сек остановить повторы
    setTimeout(function() {
        clearInterval(timerId);
        alert( 'стоп' );
    }, 10000);
*/
/*
 	var timerId = setTimeout(function tick() {
        alert( "тик" );
        timerId = setTimeout(tick, 2000);
    }, 2000);
    
    setTimeout(function() {
        clearTimeout(timerId);
        alert('stop');
    }, 10000);
*/

/* 	function func() {
 		alert( 'Привет, setTimeout!' );
 	}
 	setTimeout(func, 1000);
*/


/*	
	 function pushToArrayMultiple(array, el) {
        /* выводит аргументы, которые функция получила от нас
         console.log('args', arguments);
         преобразовываем массив в строку, потому что
         строка это примитивный тип данных
         и он не изменится по ссылке, как в случае с объектами
         и преобразовываем её обратно в массив и записываем в переменную */
/*        
        var res = JSON.parse(JSON.stringify(array));
        // добавили в массив элементы
        res.push(el);
        // теперь нам нужно добавить остальное неопределённое
        // кол-во аргументов в массив
        if(arguments.length > 2) {
            for (var i = 2; i < arguments.length; i++) {
                res.push(arguments[i]);
            }
        }
        return res;
    }
    var arr = ['asd'];
    var newArr = pushToArrayMultiple(arr, 'qwe', 'zxc', 'ert', 'ert');
    console.log(newArr);
*/
/*	
	// объединяем плоские объекты в один
	var ob = {a: 'a'};
	var ob2 = {b : 'b'};
	var ob3 = {c : 'c'};
	var ob4 = Object.assign({}, ob, ob2, ob3);
	console.log('ob4', ob4);

	// но если есть одинаковые свойства - запишет последнее(ob2.a)
	var ob = {a: 'a'};
	var ob2 = {a : 'a1'};
	var ob3 = {c : 'c'};
	var ob4 = Object.assign({}, ob, ob2, ob3);
	console.log('ob4', ob4);
*/
/*
	var obj = {
		k1: 'v',
		k2: {
			k3: 't',
			k4: 'o'
		}
	};
	var obj2 = Object.assign({}, obj);
	obj2.k2.k3 = 'y';
	console.log(obj);
	console.log(obj2);


*/
/*
	var obj = {
		k1: 'v',
		k2: 'e'
	};

	var obj2 = Object.assign({}, obj);
	obj2.k1 = 'y';
	console.log(obj);
	console.log(obj2);
*/	
/*	var obj2 = obj;
	obj2.k1 = 'y';
	console.log(obj);
	console.log(obj2);
*/
/*
	function factorial(x) {
		if(x > 1) {
			return x * factorial(x - 1); // return 2 * 1
		}
		else {
			return x;
		}
	}
	alert(factorial(3));
*/
/*
	function factorial(x) {
		if(x > 1) {
			return x * factorial(x - 1); // return 2 * 1
		}
		else {
			return x;
		}
	}
	alert(factorial(5));
*/
/*
	function curryHard(greeting) {
		return function(name) {
			return function(surname) {
				alert(greeting + ', ' + name + ' ' + surname);
			}
		}
	}

	curryHard('Привет')('Миша')('Абрамович');
*/
/*
	function curry(greeting) {
		return function(name) {
			alert(greeting + ', ' + name);
		}
	}
	curry('Привет')('Миша');
*/
});