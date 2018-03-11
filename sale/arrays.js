var arr = ['1','2','3'];
// меняем каждый элемент добавляя 1
arr.forEach(
   function(item, index, array) {
       array[index] = item + '1';
   }
);
console.log('ARR', arr);


var arr = {
    'ru':['голубой', 'красный', 'зеленый'],
    'en':['blue', 'red', 'green'],
};
//выведет только один массив
alert(arr['ru']);
//выведем слово голубой
alert(arr['ru'][0]); //выведет 'голубой'
alert(arr['ru'][1]); //выведет 'красный'
alert(arr['en'][1]); //выведет 'red'


//Проверьте работу с удалением и добавлением элементов массива
var numbers = ["Ноль", "Один", "Два"];
numbers.pop(); // удалили два
alert(numbers);
numbers.push('Новое два'); // добавили новое два
alert(numbers);
numbers.shift(); // удалили 0 с начала массива
numbers.unshift('Новый 0'); // добавили в начало массива
alert(numbers.length);