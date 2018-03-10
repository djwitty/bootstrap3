document.addEventListener('DOMContentLoaded', function() {

	function curryHard(greeting) {
		return function(name) {
			return function(surname) {
				alert(greeting + ', ' + name + ' ' + surname);
			}
		}
	}
	curryHard('Привет')('Миша')('Абрамович');
/*
	function curry(greeting) {
		return function(name) {
			alert(greeting + ', ' + name);
		}
	}
	curry('Привет')('Миша');
*/
});