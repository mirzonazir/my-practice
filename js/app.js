'use strict';
//практическое задание 1.1

let myName = 'Мирзоназир';
let myAge = 34;
let married = true;

console.log(`Моё имя ${myName}`);
console.log(`Мне ${myAge} года`);
console.log(`Семейное положение - ${married}`);

console.log("Типы использованных переменных - " + myName + ', ' + myAge + ', ' + married + ' - имеют типы ' + typeof (myName) + ' ' + typeof (myAge) + ' ' + typeof (married));
/* ----------- */

//практическое задание 1.2
//2
console.log(`Посчитать сколько секунд в одном часе`);
let hour = 1;
let minute = 60;
let sec = 60;
let result = (hour * minute) * sec;
console.log(`В 1 часу - ${result} секунд`);
/* ----------- */

//3
console.log(`Напишите скрипт, в котором по-очереди переменная будет изменять свое  значение  с  помощью  комбинированных  (сокращенных) операторов `);
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

digit %= 5;

console.log(`Остаток от деления переменной на 5 = ${digit}`);
/* ----------- */

//4
console.log(`Результаты сравнения выражений `);
console.log(5 > 4);
console.log("ананас" > "яблоко");
console.log("2" > "12");
console.log(undefined == null);
console.log(undefined === null);
console.log(null == "0");
console.log(null === + "0");

/* ----------- */


/* //практическое задание 1.3 */
/* Условные конструкции */

/*2 и 3 одинаковые условия
Напишите скрипт, который определяет, к какой четверти часа относится хранимое в отдельной переменной количество минут. 
Скрипт должен выводить в консоль название четверти (Первая, вторая, третья или четвертая). 
*/

let quarterHour = 48;

if (quarterHour > 0 && quarterHour < 16) {
    console.log(`Первая`);
} else if (quarterHour > 15 && quarterHour < 31) {
    console.log(`Вторая`);
} else if (quarterHour > 30 && quarterHour < 46) {
    console.log(`Третья`);
} else if (quarterHour > 45 && quarterHour < 60) {
    console.log(`Четвертая`);
}
/* ----------- */

//4
/* Напишите скрипт, который будет по номеру месяца определять время года. Если номера с таким месяцем не существует,  
скрипт  должен выводить соответствующее сообщение в консоль.*/

let seasonNumber = 5;
let seasonName;

if (seasonNumber > 0 && seasonNumber < 3 || seasonNumber === 12) {
    seasonName = 'зима';
} else if (seasonNumber > 2 && seasonNumber < 6) {
    seasonName = "весна";
}
else if (seasonNumber > 5 && seasonNumber < 9) {
    seasonName = "лето";
}
else if (seasonNumber > 8 && seasonNumber < 12) {
    seasonName = "осень";
} else {
    seasonName = "не относится ни к какому сезону";
}

console.log(`Выбранный вами месяц относиться к сезону ${seasonName}`);

/*
switch (seasonNumber) {
    case 1:
        seasonName = 'Winter';
        break;
    case 2:
        seasonName = 'Spring';
        break;
    case 3:
        seasonName = 'Summer';
        break;
    case 4:
        seasonName = 'Fall';
        break;    
    default: seasonName = 'Please check season'; 
        break;
}; */

/*-----------------*/


//5
/* Напишите скрипт, который будет выводить в консоль квадрат числа, если оно четное, и его кубическую степень в противном случае */

let inputYourNumber = 9;
if (inputYourNumber % 2 === 0) {
    inputYourNumber **= 2;
    console.log(`Значение в квадрате будет ${inputYourNumber}`);
} else if (inputYourNumber % 2 !== 0) {
    inputYourNumber **= 3;
    console.log(`Значение в кубе равно ${inputYourNumber}`);
};

let step;
for (step = 0; step < 5; step++) {
    console.log(`${step} Идём 1 шаг на восток`);
}

/* Напишите скрипт, который определяет все числа в диапазоне от 1 до 100, кратные 3, 5 или 3 и 5 одновременно. */

let digitRange = 20;

if (digitRange > 0 && digitRange <= 100) {
    for (digitRange = 0; digitRange < 100; digitRange++) {
        if (digitRange % 3 === 0 && digitRange % 5 === 0) {
            console.log(`${digitRange} - кратные на 3 и на 5`);
        }
        if (digitRange % 3 === 0) {
            console.log(`${digitRange} - делится на 3`);
        } else if (digitRange % 5 === 0) {
            console.log(`${digitRange} - делится на 5`);
        }
        else {
            console.log(` ${digitRange} - Не делится на 3 или на 5`);
        }

    }
} else {
    console.log(`Введите число в диапазоне от 0 до 100`);
}


// Напишите скрипт, который вычисляет и выводит в консоль все трехзначные числа Армстронга

for (let i = 1; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        for (let k = 0; k < 10; k++) {
            let powResult = Math.pow(i, 3) + Math.pow(j, 3) + Math.pow(k, 3);
            let plusResult = (i * 100) + (j * 10) + k;
            if (powResult === plusResult) {
                console.log(`${powResult} - число Армстронга`);
            }
        }
    }
}





