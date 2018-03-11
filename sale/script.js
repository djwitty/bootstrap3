/*var data = [
    {
        name: 'Vasya',
        surname: 'Pupkin',
        type: 'student'
    },
    {
        name: 'Petya',
        surname: 'Vasechkin',
        type: 'teacher'
    },
    {
        name: 'Maksim',
        surname: 'Maksimov',
        type: 'student'
    },
    {
        name: 'Ignat',
        surname: 'Ignatenko',
        type: 'teacher'
    },
    {
        name: 'Foma',
        surname: 'Fomin',
        type: 'teacher'
    },
    {
        name: 'Sergey',
        surname: 'Seregin',
        type: 'student'
    },
    {
        name: 'Foma',
        surname: 'Pupkin',
        type: 'teacher'
    },
    {
        name: 'Foma',
        surname: 'Fomin',
        type: 'teacher'
    },
    {
        name: 'Sergey',
        surname: 'Seregin',
        type: 'student'
    }
];

var counter = 0; // счётчик преподователей
var currentIndex = 0; // = i
while(counter < 2){
    // если дошли до конца массива и не нашли
    // 2х преподователей чтобы цикл не работал бесконечно
    // - выходим из него
    if (currentIndex === data.length) {
        console.log('iter', currentIndex);
        break;
    }
    // debugger;
    // если наткнулись на элемент с типом teacher - +1
    // в counter и выводим иф учителя
    if (data[currentIndex].type === 'teacher') {
        counter++;
        console.log(counter + ' ' + data[currentIndex].name + ' '
            + data[currentIndex].surname);
    }
    currentIndex++;
}

*/
/*
// есть объект с объектами. вывести для male и female 
// описание
var human = {
    male: {
        height: 180,
        weight: 80,
        hairColor: 'brown',
        eyeColor: 'green'
    },
    female: {
        height: 170,
        hairColor: 'red',
        eyeColor: 'grey'
    }
};
// добавляем свойство и делаем его невидимым для for...in с помощью свойства
// enumerable: false, value - значение по умолчанию и даём ему возможность менять значение
Object.defineProperty(human.female, '_weight', {
    enumerable: false,
    value: 0,
    writable: true
});
// делаем функции для set и get,
Object.defineProperty(human.female, 'weight', {
    set: function(value) {
        this._weight = value; // устанавливаем в приватную переменную свойство weight
    },
    get: function () {
        return this._weight - 20; // возвращает значение свойства - 20
    }
});
// console.log(human.male.height);
for(var gender in human){
    //console.log('gender', gender);
    console.log(gender + ': ');
    for(var property in human[gender]){
        console.log(property + ': ' + human[gender][property]);
    }
}
human.female.weight = 80;
// console.log(human.female.weight);
// запрещает добавление и изменение свойств в объекте
Object.freeze(human.female);
*/

/* узнать длину и равны ли они, если нет - вывести
 самый короткий (нам нужен короткий, потому что если 
 длина у них разная и если использовать самую большую 
 длину при доступе к элементу массива с меньшей длиной 
 нам покажет ошибку - выход за границы массива 
var arr = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4],
    [1, 2, 3, 4, 5, 6, 7],
    [1, 2]

];
// объявляем переменную в которой хранится большое число
var min = 10e15; // 10 ^ 15
var ln1 = arr[0].length;
var ln2 = arr[1].length;
var ln3 = arr[2].length;
console.log('length 1 = ', arr[0].length);
console.log('length 2 = ', arr[1].length);
console.log('length 3 = ', arr[2].length);
console.log('length 4 = ', arr[3].length);
for (var i = 0; i < arr.length; i++){
    if(min > arr[i].length){
        min = arr[i].length;
    }
}
console.log('min', min);

*/
/*
var person = {
	name: 'Mikhail',
	surname: 'Abramovich',
	age: 30,
	language: 'JS'
}
var person2 = {
	name: 'Ivan',
	surname: 'Ivanov',
	age: 22,
	language: 'PHP'
}
for (var key in person) {
	document.write('<table>');
	document.write('<tr>' + key + ': ' + person[key] + '</tr>');
}
for (var key in person2) {
	document.write('<tr>' + key + ': ' + person2[key] + '</tr>');
	document.write('</table>');
}
*/
/*
var arr = [
	{
		name: 'vasya',
		age: 21
	},
	{
		name: 'petya',
		age: 36
	}
];
for (var i = 0; i < arr.length; i++) {
	
	for (var key in arr[i]) {
		document.write(arr[i][key] + ' ');
	}
	document.write('<br/>');
}
*/

/*var cars = {
	name: ['bmw', 'mercedes', 'таврия'],
	model: ['x5', 'CLK', 'славута', 'dfsf'],
	year: ['2010', '2012', '1986']
}
for(var i = 0; i < cars.name.length; i++){
   // console.log(cars.name[i], cars.model[i], cars.year[i]);
   var str = '';
   for(var key in cars){
       str += ' ' + cars[key][i];
       console.log(cars[key][i]);
   }
   document.write(str + '<br/>');
}
*/
/*
document.write('<table border=1><tr>');
for (var key in cars) {
	document.write('<tr>');
	cars[key].forEach(
		function(item){
		document.write('<td align="center">' + item + '</td>');
   	});
   	document.write('<tr>');
}
document.write('</tr></table>');
*/
/*
var cars = [
   {
       name: 'bmw',
       model: 'x5',
       year: '2010'
   },
   {
       name: 'mercedes',
       model: 'clk',
       year: '2012'
   },
   {
       name: 'таврия',
       model: 'славута',
       year: '1986'
   }
];
for(var i = 0; i < cars.length; i++){
   console.log('Name: ' + cars[i].name + ' Model: ' + cars[i].model + ' Year: ' + cars[i].year);
}
*/


/*
var numbersArray = [ {num1: 1, num2: 2}, {num3: 3, num4: 4} ];
for(var i = 0; i < 2; i++){
   if (i === numbersArray.length) {
       break;
   }
   if(numbersArray[i].num3 === 3){
       console.log('num3', numbersArray[i].num3);
   } else {
       console.log('doesn\'t exist');
   }
}
*/
/*
var words = ['one', 'two', 'three', 'four'];
words.forEach(function(word) {
   console.log(word);
   if (word === 'one') {
       words.shift();
   }
});
console.log('words', words);
*/




/*

const items = ['item1', 'item2', 'item3'];
const copy = [];

for (var i=0; i < items.length; i++) {
   copy.push(items[i]);
   console.log('for', items[i]);
}
const items2 = ['item1', 'item2', 'item3'];
const copy2 = [];

items2.forEach(function(item){
   copy2.push(item);
   console.log('foreach', item);
});
*/

/*
// выводим элементы и массив по очереди
var arr = ["Яблоко", "Апельсин", "Груша"];
arr.forEach(function(item, i, arr) {
   console.log( i + ": " + item + " (массив:" + arr + ")" );
});
*/
/*
var arr = ['1','2','3'];
// меняем каждый элемент добавляя 1
arr.forEach(
   function(item, index, array) {
       array[index] = item + '1';
   }
);
console.log('ARR', arr);
*/
/*
var obj = {
	key1: 1,
	key2: 2
};
*/


/*
var arr = ['one', 'two', 'three', 'four', 'five'];
var word = prompt('Enter the word');
function find(arr, word) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == word) {
			return i;
		}
		
	}return -1;
}
var fnc = find(arr, word);
var numb = fnc + 1;
if (fnc === -1) {
	document.write('Sorry, you are mistake !')
}
else {
	document.write('This is element number: ' + numb + ' from ' + arr.length);
}

*/






/*
var arr = ['black', 'white'];
var random;

arr.push('red');
arr[arr.length-2]='yellow';
arr.shift();
arr.unshift('green', 'orange');
for (var i = 0; i < arr.length;i++) {
 random = Math.floor(Math.random() * arr.length);
}
document.write(arr[random]);
*/

/*var arr = ['Lorem','Ipsum','is','simply','dummy','text', '...'];
for (var i = 0; i < arr.length; i++) {
	document.write(arr[i] + ' ');
}*/


/*
var arr = [0, 1, 2, 3, 4, 5];
var arlngh = arr.length-1;
for (var i = arlngh; i >= 0; i--) {
	document.write(arr[i] + '<br/>');
}

*/
/*
//var result = 1;
//var summ = 0;
//var avrg = 0;
var arlngh = arr.length-1;
for (var i = arlngh; i <= 0; i--) {
//	result *= arr[i];
//	summ += arr[i];
	document.write(arr[i]);
}
//document.write('AAAAA');
//avrg = summ / arr.length;
//document.write('SUMM: ' + summ + '<br/>');
//document.write('RESULT: ' + result + '<br/>');

*/

/*
var arr = [];
var x = "name";
arr[0] = x;
arr[1] = "age";

console.log(arr);
*/

/*
var books = ['JavaScript', 'PHP', 'HTML', 'CSS'];

for (var i = 0; i < books.length; i++) {
    var str = (i + 1) + '. ' + books[i] + '<br>';
    document.write(str);
}

*/

/*var a = +prompt('chislo1');
var b = +prompt('chislo2');

if ((a > 0 || b > 0) && (a < 2 || b < 2)) {
	function summ(a, b) {
		var y = a + b;
		y.toFixed(1);
		return y;
	}
	var result = summ(a, b);
	document.write(result);
}
else {document.write('ERROR');}
*/
/* FORMULA
var x = +prompt('numb 1');
var y = +prompt('numb 2');
var z = +prompt('numb 3');

function formula(a, b, c) {
	var result = (a + b) / c;
	return result;
}

document.write( formula(x, y, z) );

/*
var userNumb1 = +prompt('chislo1 ?');
var userNumb2 = +prompt('chislo2 ?');
function maxAmount(a, b) {

}
*/
/*

var square = function(number) {
   return number * number;
}
alert(square);

var sum = function(a, b){
   return a + b;
}

*/

/*

function pow(a, n) {
    var b = a;
    for (var i = 1; i < n; i++) {
        b *= a;
    }
    return b;
}
userNumb1 = +prompt('Enter your number');
userNumb2 = +prompt('Enter your number');
alert(pow(userNumb1, userNumb2));

*/






/*
var summ =+prompt('на сколько скупились ?');
function sale(summ){
	if (summ > 500) {
		document.write('УРА');
	}
	else {
		document.write('Дулю тебе а не скидку !')
	}
}

sale(summ);

*/





/*
function Sum (a, b){
   return a + b;
}

var x = +prompt("Enter number 1: ");
var y = +prompt("Enter number 2: ");

var result = Sum (x, y);
console.log(result);
// Проверьте неизменность данных во внешней переменной:
var userName = 'user';
function showHi(userName, userSay) {
// тут мы внесли параметр userName, userSay
    userName = userName +' сказал: ';
    document.write(userName + userSay);
}
showHi ('user2', 'Привет!' + '<br>');
showHi ('user3', 'И тебе Привет!' + '<br>');
document.write('Значение переменной '+ userName
    +' осталось без изменений!');
// Проверьте изменение данных во внешней переменной:
function showHi(userName, userSay) {
   if (userSay === undefined) {
       userSay = 'Пока!';
   }
   userName = userName + ' сказал: ';
   document.write(userName + userSay);
}
showHi ('user2', 'Привет!');
showHi ('user3'); // ничего не передали


*/

/*
function Sum (a, b) {
	return a + b;
}

var x =  +prompt('Enter number 1: ');
var y =  +prompt('Enter number 2: ');

var result = Sum(x, y);
document.write(result);
*/
/*
var userName = 'user';
var a;
function showHi() {
	a = 'привет тебе, ' + userName + ', от функции !';
	var hi = 'привет тебе, ' + userName + ', от функции !';
	document.write( hi );
}
showHi ();
alert ("a = " + a);
*/

/*
var min =+prompt('введите минимальное значение');
var max =+prompt('введите максимальное значение');
var summ = 0;
	if(min <= from) {document.write('ERROR')}
	else {
		for ( var i = min; i <= max; i++) {
			if (i % 2 != 0) {
				summ += i;
			}
		}
	}
document.write(summ);
*/


/*


var count;
var countNumb = 0;
var summ = 0;
do {
	count = +prompt('введи 0');
	countNumb++;
	summ+=count;
}
while (count != 0);
document.write('Вы ввели ' + countNumb + ' попыток<br/>');
document.write('Общей суммой ' + summ + '<br/>');
document.write('Средняя орефметическое ' + summ / countNumb);

*/
/*
var summ = 0;
var count = +prompt('введите целое положительное число');

if ( !+count || count<1)
{
	alert ('ERROR !')
}
else {
	for (var i = 1; i <= count; i++) {
		summ += i;
	}
}
alert(summ);

*/

/*

var x = 30;
var count;
while (count != x) {
	count =+prompt('введите число от ноля до ста');
	if (count > 0 || count < 100) {
		if (count < x) {
			alert ('мало !');
			count++;
		}
		else if (count > x) {
			alert('много !');
		}
		else {
			alert ('ура !');
		}
	}
	else {
		alert ('введите число в диапазоне от 0 до 100');
	}
}
*/


/*
var min = +prompt('min');
var max = +prompt('max');
for (var i = min; i <= max; i++)
{
	if(i % 2 == 0) {
		if (i == max) {
			document.write(i + '. ');

		}
		else {
			document.write(i + ', ');
			continue;
		}
	}
}
*/


/*

var summ = 0;

for(var y = 5; y > 0; y--){
   summ += y;
}
document.write(summ);
*/
/*
var y = 1;
var x = 1;
while(x > 0 && y > 0){
var counter = +prompt("Введите counter: ");
if (counter == 5) {
    break;
}
alert(counter);
counter++;
}*/
/*
var count = 0;
do {
	alert(count);
	count ++;
} while (count < 4);


*/
/*
for(var y = 1; y < 5; y++){
   document.write('до continue = ' + y + '<br>');
   if(y % 2 == 0){  // проверка на чётные числа
       continue;
   }
   document.write('после continue = ' + y + '<br>');
}
*/

/*

var ara = ["Google","Safari","Mozilla","Opera","IE"];
var brows = prompt('Your brows');
var i;
var count = 0;
for(i=0;i <= ara.length;i++) {
   if(brows === ara[i]) {
       count = 1;
    //   alert('Its ok');
   }

}
if(count==1) {
   alert('yes');
}
else {
   alert('no');
}
*/
/*
var arr = ['chrome', 'Chrome', 'Mozilla', 'mozilla', 'Opera', 'opera', 'Safari', 'safari', 'IE', 'ie'];
var browser = prompt ('Какой у тя браузер ?');
//alert (arr.length);
for (var i = 0; i <= arr.length - 1; i++) {
//	alert (arr[i]);
	if (browser !== arr[i]){
		console.log ('Ваш браузер не поддерживается или вы неправильно ввели название');
		break;
	}
	else {	
		console.log ('У Вас отличный браузер, у вас должно все работать корректно');
		break;
	}
}
*/
/*
БРАУЗЕР

var browser = prompt ('Какой у тя браузер ?', '');
switch (browser) {
	case 'Chrome':
	case 'chrome':
		console.log ('Хром отличный браузер, у вас должно все работать корректно');

	case 'Mozilla':
	case 'mozilla':
		console.log ('Мозилла отличный браузер, у вас должно все работать корректно');

	case 'Opera':
	case 'opera':
		console.log ('Опера отличный браузер, у вас должно все работать корректно');

	case 'Safari':
	case 'safari':
		console.log ('Сафари отличный браузер, у вас должно все работать корректно');

	case 'IE':
	case 'ie':
		console.log ('IE это печаль, поставь хром http://chrome.google.com');

	default:
		console.log ('Ваш браузер не поддерживается или вы неправильно ввели название');
}


/*
MONTH

var month = +prompt ('введите номер месяца от 1 до 12');
if (month == 1 || month == 2 || month == 12) {
	alert ('Щас зима');
}
else if (month == 3 || month == 4 || month == 5) {
	alert ('Щас весна');
}
else if (month == 6 || month == 7 || month == 8) {
	alert ('Щас лето');
}
else if (month == 9 || month == 10 || month == 11) {
	alert ('Щас осень');
}
else {
	alert ('Вы неправильно ввели или неввели номер месяца');
}

/*
switch

var countX = +prompt('Введите число от 5 до 10?', '');
switch (countX) {
	case 10:
		alert ('10');
		break;
	case 5:
		alert('5');
		break;
	case 6:
		alert('6');
		break;
	case 8:
	case 7:
		alert('Восемь или семь')
		break;
	default:
		alert ('я не умею считать');
}
*/

/* SALE

var sale = 20;
var time = +prompt('введите время в которое вы совершили покупки');
var minAmount = +prompt('введите сумму на которую вы хотите совершить покупки');

if (time < 12 || time > 17)
{
	alert ('к сожалению Вы скидку не получите :(')
	
}
else if (minAmount < 500)
{
	alert ('к сожалению Вы скидку не получите :(')
}
else {
	alert ('Ура, вы получили скидку' + sale + '%')
}*/