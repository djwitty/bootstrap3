document.addEventListener('DOMContentLoaded', function() {












/*var vendorStats = {
    'Splier-133': [
        {
            boughDetails: 200,
            soldDetails: 100,
            returns: 60,
            date: '01-12-2017'
        },
        {
            boughDetails: 120,
            soldDetails: 90,
            returns: 30,
            date: '01-01-2018'
        },
        {
            boughDetails: 100,
            soldDetails: 60,
            returns: 10,
            date: '01-02-2018'
        }
    ],
    'Vndr-135': [
        {
            boughDetails: 350,
            soldDetails: 325,
            returns: 30,
            date: '01-12-2017'
        },
        {
            boughDetails: 300,
            soldDetails: 200,
            returns: 33,
            date: '01-01-2018'
        },
        {
            boughDetails: 200,
            soldDetails: 157,
            returns: 45,
            date: '01-02-2018'
        }
    ]
};
var dataKeys = Object.keys(vendorStats);
var previousCount = -1;
notEquals = false;
var rows = 0; //3

for (var vndr in vendorStats) {

	var vendor = document.getElementById('vendors');
//	header.header
	var header = document.createElement('header');
	header.classList.add("header");
//	div.inner
	var div_inner = document.createElement('div');
	div_inner.classList.add("inner");
//	table.tb
	var tb = document.createElement('table');
	tb.classList.add("tb");
	tb.cellPadding = '5px';
	tb.cellSpacing = 0;
	tb.style.border = '1px solid black';
	
	

	header.innerHTML = vndr;
	div_inner.appendChild(header);

	for (var i = 0; i < vendorStats[vndr].length; i++) {
		var boughDetails = vendorStats[vndr][i].boughDetails;
		var soldDetails = vendorStats[vndr][i].soldDetails;
		var returns = vendorStats[vndr][i].returns;
		var date = vendorStats[vndr][i].date;
//		tr.appendChild(td);

		var tr = document.createElement('tr');
		var tr2 = document.createElement('tr');
		for (var keys2 in vendorStats[vndr][i]) {
			var th = document.createElement('th');
			th.innerHTML = keys2;
			tr2.appendChild(th);
			
		}
		for (var keys in vendorStats[vndr][i]) {
			var td = document.createElement('td');
			tr.appendChild(td);
			td.innerText = vendorStats[vndr][i][keys];
		}
		
		
		
		tr.appendChild(td);

		tb.appendChild(tr);
	}
	tr2.appendChild(th);
	tb.appendChild(tr2);
	
	div_inner.appendChild(tb);
	vendor.appendChild(div_inner);
}
*/
/*
var tb = document.createElement('table');
document.body.appendChild(tb);
tb.cellPadding = '5px';
tb.style.border = '1px solid black';
var dataKeys = Object.keys(tableData);
console.log('dataKeys', dataKeys);
var previousCount = -1;
notEquals = false;
var rows = 0; //3
for (var s = 0; s < dataKeys.length; s++) {
	var currentKey = dataKeys[s];
	var currentKeyValue = tableData[currentKey];
	if (previousCount !== currentKeyValue.length && previousCount !== -1) {
		notEquals = true;
		rows = 0;
		break;
	}
	previousCount = currentKeyValue.length; // current array lenght
	rows = currentKeyValue.length; //find count of rows in array
}
*/
/*

var dataBlog = [
    {
        title: '1 SpaceX в третий раз перенесла запуск глобального интернета',
        href: 'https://112.ua/mir/1spacex-v-kotoryy-raz-otlozhila-zapusk-rakety-so-sputnikami-dlya-razdachi-interneta-434237.html',
        img: 'https://icdn.lenta.ru/images/2018/02/16/13/20180216134312961/pic_172fdbda97a4d6ff469a559b75fffabd.jpg',
        comments: '102',
        date: '17:48, 21 февраля 2018'
    },
    {
        title: '2 SpaceX в который раз отложила запуск ракеты со спутниками для раздачи интернета',
        href: 'https://112.ua/mir/2spacex-v-kotoryy-raz-otlozhila-zapusk-rakety-so-sputnikami-dlya-razdachi-interneta-434237.html',
        img: 'https://imgclf.112.ua/original/2017/12/23/326898.jpg',
        comments: '79',
        date: '22:48, 21 февраля 2018'
    },
    {
        title: '3 SpaceX в который раз отложила запуск ракеты со спутниками для раздачи интернета',
        href: 'https://112.ua/mir/3spacex-v-kotoryy-raz-otlozhila-zapusk-rakety-so-sputnikami-dlya-razdachi-interneta-434237.html',
        img: 'http://www.filipoc.ru/attaches/posts/kosmos/2015-04-10/vzlet-raketyi/raketa-2.jpg',
        comments: '11',
        date: '22:48, 21 февраля 2018'
    },
    {
        title: '4 SpaceX в который раз отложила запуск ракеты со спутниками для раздачи интернета',
        href: 'https://112.ua/mir/4spacex-v-kotoryy-raz-otlozhila-zapusk-rakety-so-sputnikami-dlya-razdachi-interneta-434237.html',
        img: 'https://habrastorage.org/files/4fd/afe/47b/4fdafe47b1b44a569a1459e81a852655.jpg',
        comments: '12',
        date: '22:48, 21 февраля 2018'
    },
    {
        title: '5 SpaceX в который раз отложила запуск ракеты со спутниками для раздачи интернета',
        href: 'https://112.ua/mir/5spacex-v-kotoryy-raz-otlozhila-zapusk-rakety-so-sputnikami-dlya-razdachi-interneta-434237.html',
        img: 'https://vistanews.ru/uploads/posts/2017-02/1486995475_d1667647.jpg',
        comments: '431',
        date: '22:48, 21 февраля 2018'
    },
    {
        title: '6 SpaceX в который раз отложила запуск ракеты со спутниками для раздачи интернета',
        href: 'https://112.ua/mir/6spacex-v-kotoryy-raz-otlozhila-zapusk-rakety-so-sputnikami-dlya-razdachi-interneta-434237.html',
        img: 'https://infokava.com/uploads/posts/2017-09/1504981962_1504981938.jpg',
        comments: '89',
        date: '22:48, 21 февраля 2018'
    }
];


var newsContainer = document.getElementById('newsContainer');
var list = document.createElement('ul');


for (var i = 0; i < dataBlog.length; i++) {

	var list_item = document.createElement('li');
	var list_item_link = document.createElement('a');
	
	var div_inner = document.createElement('div');
	div_inner.classList.add("bottom");
	div_inner.style.position = "absolute";
	div_inner.style.bottom = 0;
	div_inner.style.left = 0;
	div_inner.style.height = "20px";
	div_inner.style.width = "94%";
	div_inner.style.backgroundColor = "gray";

	for (var keys in dataBlog[i]) {
		var news_title = dataBlog[i].title;
		var news_href = dataBlog[i].href;
		var news_img = dataBlog[i].img;
		var news_comments_count = dataBlog[i].comments;
		var news_date = dataBlog[i].date;

		list_item_link.innerText = news_title;
		list_item_link.href = news_href;
		list_item_link.classList.add("top");
		list_item.classList.add("list-item");
		list_item.style.backgroundImage = 'url("' + news_img + '")';
	}
	
	
	div_inner.innerHTML = "<span class='date'><b>" + news_date + "</b></span>" + "<span>Comments: <b>" + news_comments_count + "</b></span>";
	list_item.appendChild(div_inner);
	//list_item_link.innerHTML = "";
	list_item.appendChild(list_item_link);
	list.appendChild(list_item);

	newsContainer.appendChild(list);
}


*/

/*
var menu = ['Home', 'About', 'Services', 'Contact Us']
var ul = document.createElement('ul');
ul.setAttribute('id', 'mainMenu')


for (var i = 0; i < menu.length; i++) {
	var li = document.createElement('li');
	ul.appendChild(li);
	var link = document.createElement('a');
	link.href = '#';
	link.innerText = menu[i];
	li.appendChild(link);
}

window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  document.getElementById('scrolled').innerHTML = scrolled + 'px';

  document.getElementById('mainMenu').style.padding = '20px 0';
  if (scrolled !== 0) {
  	document.getElementById('mainMenu').style.padding = '10px 0';
  }
}
document.body.appendChild(ul);
*/
/*
var tableData = {
    name: [
        {
            value: 'Карандаши цветные',
            type: 'stationery'
        },
        {
            value: 'Стулья офисные',
            type: 'furniture'
        },
        {
            value: 'Ручки',
            type: 'stationery'
        }
    ],
    count: [
        {
            value: 10,
            type: 'count'
        },
        {
            value: 3,
            type: 'count'
        },
        {
            value: 5,
            type: 'count'
        }
    ],
    price: [
        {
            value: 2,
            type: 'price'
        },
        {
            value: 560,
            type: 'price'
        },
        {
            value: 5,
            type: 'price'
        }
    ]
};

var tb = document.createElement('table');
document.body.appendChild(tb);
tb.cellPadding = 0
tb.cellSpacing = 0
tb.style.border = '1px solid black';
// количество столбиков = количеству ключей объекта
// количество строк равно количеству элементов в массиве каждого ключа
// если они не совпадают нужно либо брать минимальное количество строк,
// либо выводить ошибку
// определяем кол-во столбцов
var dataKeys = Object.keys(tableData);
console.log('dataKeys', dataKeys);
// чтобы записывать предыдущую длину массива
var previousCount = -1;
// если длины массивов не равны меняем на true
// равно ли кол-во строк для каждого столбика по сравнению с предыдущим
var notEquals = false;
// кол-во строк
var rows = 0; // 3
for(var s = 0; s < dataKeys.length; s++){
    // console.log(dataKeys[s]);
    var currentKey = dataKeys[s]; // текущий ключ(name,count,price)
    var currentKeyValue = tableData[currentKey]; // обращаемся по ключу к его значению
    // console.log(currentKeyValue.length); // выводим длину массива = кол-во строк таблицы
    // нужно убедиться что у всех строк одинаковая длина
    // если длины массивов не равны меняем на true и прерываем цикл
    // чтобы потом не выводить неправильную таблицу
    if (previousCount !== currentKeyValue.length && previousCount !== -1) {
        notEquals = true;
        rows = 0;
        break;
    }
    // записываем текущее значение длины массива
    previousCount = currentKeyValue.length;
    // определили кол-во сторок и записали
    rows = currentKeyValue.length;
}
// если кол-во строк в столбиках не равны
if (notEquals === true) {
   alert('Ошибка, проверьте правильность информации в таблице');
}
// так идёт цикл
// tableData['name'][0], tableData['count'][0], tableData['price'][0]
// tableData['name'][1], tableData['count'][1], tableData['price][1]
// общая стоимость всех товаров
var totalPrice = 0;
// создаём и выводим таблицу, заполняем её данными
for (var i = 0; i < rows; i++) { // перебираем строки
    var tr = document.createElement('tr');
    tb.appendChild(tr);
    // перебираем ячейки в столбике
    for (var j = 0; j < dataKeys.length; j++) {
        var td = document.createElement('td');
        td.style.border = '1px solid red';
        td.style.text-align = 'center';
        // текущий ключ
        var currentKey = dataKeys[j];
        // текущая ячейка
        var currentCell = tableData[currentKey][i];
        // console.log(currentCell);
        // записываем в ячейку текущее значение
        td.innerHTML = currentCell.value;
        // если текущее значение значение ячейки имеет тип цена,
        // подсвечиваем её зелёны
        if(currentCell.type === 'price'){
            td.style.color = 'green';
        }
        tr.appendChild(td);
    }
    totalPrice+= tableData['count'][i].value * tableData['price'][i].value;
}
tr = document.createElement('tr');
td = document.createElement('td');
td.innerHTML = 'Сумма';
td.colSpan = dataKeys.length - 1;
tr.appendChild(td);
td = document.createElement('td');
td.innerHTML = totalPrice + '';
td.style.color = 'red';
tr.appendChild(td);
tb.appendChild(tr);

/*

var tb = document.createElement('table');
document.body.appendChild(tb);
tb.cellPadding = '5px';
tb.style.border = '1px solid black';
var dataKeys = Object.keys(tableData);
console.log('dataKeys', dataKeys);
var previousCount = -1;
notEquals = false;
var rows = 0; //3
for (var s = 0; s < dataKeys.length; s++) {
	var currentKey = dataKeys[s];
	var currentKeyValue = tableData[currentKey];
	if (previousCount !== currentKeyValue.length && previousCount !== -1) {
		notEquals = true;
		rows = 0;
		break;
	}
	previousCount = currentKeyValue.length; // current array lenght
	rows = currentKeyValue.length; //find count of rows in array
}
if (notEquals === true) {
	alert('WARNING !');
}
var totalPrice = 0;
for (var i = 0; i < rows; i++) {
	var tr = document.createElement('tr');
	tb.appendChild(tr);

	for (var j = 0; j < dataKeys.length; j++) {
		var td = document.createElement('td');
		var currentKey = dataKeys[j];
		var currentCell = tableData[currentKey][i];
		td.innerHTML = currentCell.value;
		if (currentCell.type === "price") {
			td.style.color = 'green';
		}
	}
}
document.body.appendChild(tb);

/*for (var keys in tableData) {
	var th = document.createElement('th');
    th.style.border = "1px solid red";
    tb.appendChild(th);
    for(var i = 0; i < tableData[keys].length; i++) {
        th.innerText = tableData[keys][i].type;

	}
}*/
/*for (var keys in tableData) {
	var tr = document.createElement('tr');
    tb.appendChild(tr);
	var td = document.createElement('td');
	td.style.border = "1px solid red";
    for(var j = 0; j < tableData[keys].length; j++) {
        var val = tableData[keys][j].value;
        td.innerText = val;
	}tr.appendChild(td);

}*/


});


/** создаём объект с функцией которая находит площадь
 * valueOf - возвращает примитивное заданное нами значение объекта.
 * ключ _area содержит в себе площадь, _-означает что свойство приватное
 * **/
/*
var sqr1 = {
    x: 3,
    y: 3,
    getArea: function() {
        this._area = this.x * this.y;
    },
    // задаём значение по умолчанию = 0
    // чтобы не получить ошибку NaN
    _area: 0,
    // функция возвращает значение площади
    valueOf: function(){
        return this._area;
    }
};
//=/*
var sqr2 = {
    x: 2,
    y: 3,
    //_area: 0,
    getArea: function() {
        this._area = this.x * this.y;
    },
    valueOf: function(){
        return this._area;
    }
};

sqr1.getArea();
//sqr2.getArea();
console.log(sqr1 + sqr2);
*/
/*
var object = {
    stringKey: 'One',
    key2: 2,
    // при выводе объекта вызывается сама
    toString: function() {
        // вернули значение двух ключей
        // return this.stringKey + ' ' + this.key2;
        // преобразовываем объект в формат строки(JSON)
         return JSON.stringify(this);
    },
    valueOf: function () {
        return this.key2;
    }
};
// alert преобразовывает объект в строку и срабатывает toString
alert(object);
// console.log не приводит к строке
console.log(object);
*/


/*

var obj = {
    key1: 1,
    key2: '2',
    keyArr: [1,2],
    keyObj: {
        subKey: 1
    },
    keyFunc: function() {
//        alert('Hi');
    },
    keyFuncParameters: function(param) {
//        console.log('param', param);
    }
};
*/
//var exists = Object.keys(obj).indexOf('key8') > -1;
//console.log("true = ", exists);
//obj.key1 = undefined;
//exists = Object.keys(obj).indexOf('key1') > -1;
//console.log("true = ", exists);
//delete obj.key1;
//exists = Object.keys(obj).indexOf('key1') > -1;
//console.log("true = ", exists);


/*console.log(obj.key1);
console.log(obj.key2);
console.log(obj.keyArr);
console.log(obj.keyObj);
console.log(obj.keyFunc());
console.log(obj.keyFuncParameters(1));
// Object.keys(obj) возвращает массив ключей объекта
console.log(Object.keys(obj));
*/
/*
for (var key in obj) {
    // получаем значения
    var value = obj[key];
    // проверка не является ли свойство унаследованым от другого объекта
    // и не является ли оно функцией
    if(!obj.hasOwnProperty(key) || value instanceof Function) {
        continue;
    }
    console.log('key', key, 'value', value);
}
*/
// =
/*
var keys = Object.keys(obj);
for (var j = 0; j < keys.length; j++) {
    var key = keys[j];
    var value = obj[key];
    if (value instanceof Function) {
        continue;
    }
    console.log('key', key, 'value', value);
}
*/


/*
var arrT = [
        ['1', '2', '3', '10'],
        ['4', '5', '6', '11'],
        ['7', 8, 9, '12', '78', '1']
];
var tb = document.createElement('table');
tb.cellPadding = '10px';
for(var j = 0; j < arrT.length; j++) {
    //console.log('arrT[j] -> ', arrT[j]);
    var tr = document.createElement('tr');
    tb.appendChild(tr);
    for (var i = 0; i < arrT[j].length; i++) {
        console.log('arrT[j][i] -> ', arrT[j][i]);
        var td = document.createElement('td');
        tr.appendChild(td);
        td.innerHTML = arrT[j][i];
    }
}
var container2 = document.getElementsByClassName('divMargin')[2];
container2.appendChild(tb);
*/


/*
// создаём массив и добавляем в цикле в него кнопки и надписи
document.addEventListener('DOMContentLoaded', function() {

    var container = document.getElementsByClassName('divMargin')[0];
    var arrButton = [];
    var buttonTexts = ['button1', 'button2', 'button3', 'button4', 'button5'];
    for(var i = 0; i < 5; i++){
        var button = document.createElement('button');
        button.innerText = buttonTexts[i];
        arrButton[i] = button;
        // добавляем в body кнопки
        container.appendChild(arrButton[i]);
    }
});
 */
/*
var elementsArray = document.getElementsByClassName('main-menu-btn');
for (var i = 0; i<elementsArray.length; i++){
    console.log(elementsArray[i]);
    elementsArray[i].style.margin = '5px';
    elementsArray[i].classList.add('button-standart-small');
}
var list = document.getElementsByTagName('ul');
var liElements = list[0].children;
console.log(liElements);
});
*/
/*
const employee = {
    name: 'John',
    phone: '+7 (765) 000-98-34',
    company: 'Opera Sofware',
    email: 'opera@gmail.com',
    duties: ['Frontend', 'Optimizaion', 'Testing']
};
for (var key in employee){
    //console.log(employee[key]);    
}
//document.write('Обязанности сотрудника: ' + employee.duties);

for (var key in employee) {
    console.log(key + ': ' + employee[key]);
}
// записываем ключи объкта в массив keys, с помощью которой
// мы можем обращаться к свойствам объекта
var keys = Object.keys(employee);
console.log('keys: ', keys);
// по ключу получаем значение
keys.forEach(function(key) {
    console.log(key + ': ' + employee[key]);
});
*/

/*
// выводим значения массивов с разной длиной
var test = {
    key1: [1, 2, 3],
    key2: [4, 5, 6, 'СЭМ'],
    key3: [8, 9],
    key4: [10]
};
for (var key in test) {
	for (var i = 0; i < test[key].length; i++) {
		console.log(test[key][i]);		
	};
};
*/
/*
var users = [
    {
        name: 'Vasya',
        surname: 'Pupkin',
        age: 51
    },
    {
        name: 'Petia',
        surname: 'Vasechkin',
        age: 15
    },
    {
        name: 'Fedor',
        surname: 'Ivanov',
        age: 25
    }
];

console.log(users);

//for (var i = 0; i < users.length; i++) {
	users.splice(0, 999);
//};
users.splice(0,0, {
	name: 'Dmitry',
	surname: 'Zvoncov',
	age: 30
},
{
	name: 'Alex',
	surname: 'Pugachev',
	age: 39
}
);
console.log(users);

*/
/*
users[users.length] = {
	name: 'Ihor',
	surname: 'Petrov',
	age: 99
};
*/
/*var users = [
    {
        name: 'Vasya',
        surname: 'Pupkin',
        age: 51
    },
    {
        name: 'Petia',
        surname: 'Vasechkin',
        age: 15
    },
    {
        name: 'Fedor',
        surname: 'Ivanov',
        age: 25
    }
];
users.splice(0, 1);
console.log('users: ', users);
users.push({
	name: 'Mikhail',
	surname: 'Abramovich',
	age: 30
});
users.splice(6,0, {
	name: 'Dmitry',
	surname: 'Zvoncov',
	age: 30
});
document.write('<table>');
for (var i = 0; i < users.length;i++) {
	for (var k in users[i]) {
		document.write(users[i][k] + ' ');
	}
	document.write('<br/>')
}
document.write('Количество пользователей: ' + users.length);
document.write('</table>')
*/
/*
for (var i = 0; i < users.length;i++) {
	for (var k in users[i]) {
	//	document.write(users[i][k] + ' ');
	}
	//console.log(users[i].age + '');
}
*/
/*var users = [
    {
        name: 'Vasya',
        surname: 'Pupkin',
        age: 51
    },
    {
        name: 'Petia',
        surname: 'Vasechkin',
        age: 15
    },
    {
        name: 'Fedor',
        surname: 'Ivanov',
        age: 25
    }
];
for (var i = 0; i < users.length;i++) {
	for (var k in users[i]) {
		document.write(users[i][k] + ' ');
	}
	document.write('<br/>');
}
delete users[0];
console.log(users);
users.unshift({name: 'Gena', surname: 'Bukin', age: 66});
*/

/*
var user = {
	name: 'vasya',
	surname: 'pupkin',
	age: 50,
	getFullName: function() {
		//this - link to current object
		console.log(this.name + ' ' + this.surname);
	},
	getUserInfo: function() {
		return this.name + ' ' + this.surname + ' ' + this.age;
	},
	options: {
		recieveMessages: false,
		recieveEmails: false
	},
	appearance: {
		height: 172,
		hairColor: 'gray-haired',
		eyeColor: 'blue'
	},
	characterTraits: ['kind', 'smart', 'strong', 'resourceful', 'fat']
};
var gui = user.getUserInfo();
var appe = user.appearance;
var ct = user.characterTraits;
if (user.getUserInfo && user.getUserInfo instanceof Function) {
	console.log('user: ', gui);
}
for (var chars in user.appearance) {
	console.log('characteristics: ', chars + ':', user.appearance[chars]);
}
for (var traits in user.characterTraits) {
	console.log('traits: ', user.characterTraits[traits]);
}
*/
/*
if (user.getFullName && user.getFullName instanceof Function) {
	user.getFullName();
}
user.getUserInfo = function() {
	console.log(this.name + ' ' + this.surname + ' ' + this.age)
};
if (user.getUserInfo && user.getUserInfo instanceof Function) {
	user.getUserInfo();
	user.age = 51;
	user.getUserInfo();
}
*/
/*console.log(user.options);
delete user.options.recieveEmails;
console.log(user.options);
user.options.killHimSelf = true;
user.helloWorld = 'Hi !';
console.log(user.options);
console.log(user);*/



/*
var colors = {
	red: "#f00",
	black: "#000",
	blue: "#00f"
};
colors.green = "#0f0"; //Add green element
delete colors.green; //Delete green element

for (var colorName in colors) {
	document.write(colorName + ': ');
	document.write(colors[colorName] + '<br/>');
}
*/
/*
document.addEventListener('DOMContentLoaded', function() {
	var divNew = document.createElement('div');
    divNew.innerHTML = 'тут текст, который будет в блоке divNew';
    divNew.style.border = '2px solid red';
    divNew.style.padding = '10px';
    divNew.classList.add('test-div');
 //   document.body.appendChild(divNew);
    console.log(divNew);
    var btnNew = document.createElement('button');
    var findDiv = document.getElementsByClassName('test-div');
    console.log(findDiv);
    findDiv.appendChild(btnNew);
    btnNew.style.border = '2px solid green';
    btnNew.innerHTML = 'BUTTON';
});
*/
// Создаём и добавляем в верстку новый элемент
    
/*

/*
console.log('firstChild = ', header.firstElementChild);
    // = console.log(header.children[0]);
    console.log('lastChild = ', header.lastElementChild);
    // = console.log(header.children[header.children.length - 1]);


// children возвращает непосредственных детей (1-го уровня вложенности)
    for (i = 0; i < document.body.children.length; i++) {
        console.log( document.body.children[i]);
    }

// Возвращает корневой элемент документа
    console.log(document.documentElement); // html
    // Свойство elem.parentNode возвращает родитель элемента.
    console.log( document.documentElement.parentNode ); // document

// ChildNodes, FirstChild, LastChild
    // Массив childNodes хранит все дочерние элементы, 
    // включая текстовые.
    for (i = 0; i < document.body.childNodes.length; i++) {
        console.log(document.body.childNodes[i]);
    }
	// children – только дочерние узлы-элементы, то есть соответствующие тегам.
   // firstElementChild, lastElementChild – соответственно, первый и последний дети-элементы.
   // previousElementSibling, nextElementSibling – соседи-элементы.
   // parentElement – родитель-элемент.

*/


/*
// чтобы воспользоваться следующей функцией,
    // помещаем в переменную header нулевой элемент
    // массива elementsArray
    var header = elementsArray[0];
    // функция добавляет класс
    header.classList.add('header-cls');
    header.style.paddingBottom = '5px';
    header.style.border = '1px solid black';
    console.log(header.classList.contains('header-cls'));
    // добавляет класс если его нет и удаляет если он есть
    header.classList.toggle('header-toggled');
    // classList.remove - удаляет класс
    // classList.contains - проверяет наличие класса у элемента
    */