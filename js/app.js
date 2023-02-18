'use strict';
//практическое задание 1.1

let myName = 'Мирзоназир';
let myAge = 34;
let married = true;

console.log(`Моё имя ${myName}`);
console.log(`Мне ${myAge} года`);
console.log(`Семейное положение - ${married}`);

console.log("Типы использованных переменных - " + myName + ', '+ myAge+', ' + married + ' - имеют типы ' + typeof(myName) +' '+ typeof(myAge)+' '+ typeof(married));

//практическое задание 1.2
//2
let hour = 1;
let minute = 60;
let sec = 60;
let result = (hour * minute) * sec;
console.log(`В 1 часу - ${result} секунд`);

//3
let digit = 0;
console.log(`Стартовое значение: ${digit}`);

digit += 7; 
console.log(`Увеличение значение на 7 = ${digit}`);

digit *= 4; 
console.log(`Увеличение в 4 будет ${digit}`);

digit -= 8; 
console.log(`Уменьшение значения на 8 равно ${digit}`);

digit /= 4; 
console.log(`Деление на 4 будет ${digit}`);

digit **= 3; 
console.log(`Значение в кубе = ${digit}`);

digit % 2 !== 5;
console.log(`Остаток от деления переменной на 5 = ${digit}`);

//4
console.log(`Результаты сравнения выражений `);
console.log(5 > 4);
console.log("ананас" > "яблоко");
console.log("2" > "12");
console.log(undefined == null);
console.log(undefined === null);
console.log(null == "0");
console.log(null ===+ "0" );


