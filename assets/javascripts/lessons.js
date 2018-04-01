/*
$( document ).ready(function() {
	$( "#popup" ).hide();
	$( "#popupBtn" ).click(function(){
		$( "#popup" ).show();
	});
	$( "#popupClose" ).click(function(){
		$( "#popup" ).hide();
	});
});
*/
document.addEventListener('DOMContentLoaded', function() {

	var input = document.getElementsByClassName('lab');
	var inputWrp = document.getElementsByClassName('mat-form-field');
	var label = inputWrp[0].children[0];
//	console.log(inputWrp[0].children[0]);
	//input.onblur = label.classList.add('move');
    input[0].addEventListener('click', function() {
    	label.classList.add('move');
    });
    input[0].addEventListener('blur', function() {
    	if (!input[0].value == "") {return;}
    	else{label.classList.remove('move');}
    });
/*
	var btnPopup = document.getElementsByClassName('popupOpenBtn');
	function displayPopup() {
		var popup_wrapper = document.getElementsByClassName('popup-wrapper');
		popup_wrapper[0].style.display = 'flex';
		popup_wrapper[0].classList.toggle("expanded");
	}

	btnPopup[0].addEventListener('click', displayPopup);
	var btnPopupClose = document.getElementsByClassName('btnOk');
	btnPopupClose[0].addEventListener('click', function () {
	    var popup_wrapper = document.getElementsByClassName('popup-wrapper');
	    popup_wrapper[0].style.display = 'none';
	});
/** Сделать тоже самое, только чтобы popup медленно
 * появлялся и также исчезал **/
/*	var btnPopup = document.getElementsByClassName('popupOpenBtn');
    function displayPopup() {
        var popup_wrapper = document.getElementsByClassName('popup-wrapper');
        popup_wrapper[0].style.display = 'flex';
        popup_wrapper[0].style.animation = 'popup-fade-in .5s linear';
    }
    btnPopup[0].addEventListener('click', displayPopup);
    var btnPopupClose = document.getElementsByClassName('btnOk');
    btnPopupClose[0].addEventListener('click', function () {
        var popup_wrapper = document.getElementsByClassName('popup-wrapper');
        popup_wrapper[0].addEventListener('animationend', function(){
            popup_wrapper[0].style.display = 'none';
        });
        popup_wrapper[0].style.animation = 'popup-fade-out .5s linear';
    });
*/

    /** Измените функцию, добавив в неё обработчик с transitionend,
     * благодаря которому сообщение будет плавно исчезать. **/
/*
    var msgData = {
        message: 'You have one new message!',
        title: 'Information',
        type: 'info',
        time: 3000
    };
    function displayMessage(msgData) {
        // копируем объект, чтобы избежать изменения по ссылке
        var data = Object.assign({}, msgData);
        // если нет сообщения выходим из функции
        if (!data.message) {
            // throw new Error('message is not defined')
            return;
        }
        // ставим тип по умолчанию
        if (!data.type) {
            data.type = 'info';
        }
        // если нет заголовка сообщения можно его не передавать
        if (!data.title) {
            data.title = '';
        }
        if (!data.time) {
            data.time = 1000;
        }
        var container = document.getElementById('messages-container');
        var msgDiv = document.createElement('div');
        msgDiv.classList.add('message');
        var msgHeader = document.createElement('div');
        msgHeader.classList.add('msgHeader');
        // передаём переменную, которая определяет
        // нужный класс, а класс тип сообщения
        msgDiv.classList.add(data.type);
        var spHeader = document.createElement('span');
        // записываем заголовок сообщения
        spHeader.innerText = data.title;
        msgHeader.appendChild(spHeader);
        msgDiv.appendChild(msgHeader);
        var msgSp = document.createElement('span');
        msgSp.innerText = data.message;
        msgDiv.appendChild(msgSp);
        container.appendChild(msgDiv);
        // вешаем событие, которое сработает по завершению анимации
        msgDiv.addEventListener('transitionend', function(){
            container.removeChild(msgDiv);
        });
        setTimeout(function() {
            msgDiv.classList.add('fade-out');
            // container.removeChild(msgDiv);
        }, data.time);
    }
    displayMessage(msgData);

*/
/*
var msgData = ('message333');
var msgData2 = [
    {
	    message: 'You have one new message!',
	    title: 'Information',
	    type: 'info',
	    time: 3000
    },
    {
        message: 'You have new messages!',
        title: 'Error',
        type: 'error',
        time: 3000
    },
    {
        message: 'You have new messages!',
        title: 'Success',
        type: 'success',
        time: 3000
    }
];

function displayMessage(message, type, title) {
    // если нет сообщения выходим из функции
    if (!message) {
        // throw new Error('message is not defined')
        return;
    }
    // ставим тип по умолчанию
    if (!type) {
        type = 'info';
    }
    // если нет заголовка сообщения можно его не передавать
    if (!title) {
        title = '';
    }
    var container = document.getElementById('messages-container');
    var msgDiv = document.createElement('div');
    msgDiv.classList.add('message');
    var msgHeader = document.createElement('div');
    msgHeader.classList.add('msgHeader');
    // передаём переменную, которая определяет
    // нужный класс, а класс тип сообщения
    msgDiv.classList.add(type);
    var spHeader = document.createElement('span');
    // записываем заголовок сообщения
    spHeader.innerText = title;
    msgHeader.appendChild(spHeader);
    msgDiv.appendChild(msgHeader);
    var msgSp = document.createElement('span');
    msgSp.innerText = message;
    msgDiv.appendChild(msgSp);
    container.appendChild(msgDiv);
    msgDiv.addEventListener("transitionend", function() {
    	container.removeChild(msgDiv);
    }
    );
    setTimeout(function() {
        msgDiv.classList.add('fade-out');
    }, data.time);
}
displayMessage(msgData);
*/

/*
for (var i = 0; i < msgData2.length; i++ ) {
	for (var k in msgData2[i]) {
		displayMessage(msgData2[i][k]);
	}
}
*/

/*func: show mess

function displayMessage(message, type, title) {
    // если нет сообщения выходим из функции
    if (!message) {
        // throw new Error('message is not defined')
        return;
    }
    // ставим тип по умолчанию
    if (!type) {
        type = 'info';
    }
    // если нет заголовка сообщения можно его не передавать
    if (!title) {
        title = '';
    }
    var container = document.getElementById('messages-container');
    var msgDiv = document.createElement('div');
    msgDiv.classList.add('message');
    var msgHeader = document.createElement('div');
    msgHeader.classList.add('msgHeader');
    // передаём переменную, которая определяет
    // нужный класс, а класс тип сообщения
    msgDiv.classList.add(type);
    var spHeader = document.createElement('span');
    // записываем заголовок сообщения
    spHeader.innerText = title;
    msgHeader.appendChild(spHeader);
    msgDiv.appendChild(msgHeader);
    var msgSp = document.createElement('span');
    msgSp.innerText = message;
    msgDiv.appendChild(msgSp);
    container.appendChild(msgDiv);
    setTimeout(function() {
        container.removeChild(msgDiv);
    }, 5000);
}
var message = 'У вас 3 новых сообщения';
displayMessage(message, 'error', 'Error!');
// если хотим вывести больше одного сообщения
var messages = [
    'У вас 1 новое сообщение',
    'У вас 2 новых сообщения',
    'У вас 3 новых сообщения'
];
for (var i in messages) {
    setTimeout(function(i) {
        displayMessage(messages[i], 'error', 'Error');
    }, i * 500, i);
        // или выводим все сразу из массива
        // displayMessage(messages[i]);
}
*/

});