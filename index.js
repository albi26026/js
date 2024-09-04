// let lname = prompt('введите вашу фамилию');
// let sname = prompt('введите ваше имя');
// let аname = prompt('введите ваше отчество');

// console.log('фамилия' + lname);
// console.log('имя' + sname);
// console.log('отчество' + aname);
// let isTry = confirm ("верно?")
// console.log(isTry)


// let lastName = prompt("Введите вашу Фамилию:");
// let firstName = prompt("Введите ваше Имя:");
// let middleName = prompt("Введите ваше Отчество:");

// console.log("Фамилия: " + lastName);
// console.log("Имя: " + firstName);
// console.log("Отчество: " + middleName);

// let isTrue = confirm('Это верно?');

// console.log("Верно ли ФИО?: " + isTrue);

// console.info('')
// console.error('ошибка')
// console.warn('предупреждение')

// "use strick"
// let num=1
// console.log(num)

// let num=1
// let str='asd'
// let bull=true
// let und= underfind
// let array = ['1','2']

// let str = 5
// console.log(String(str))

// let num = Math.min(2,3,4,5)
// console.log(num)

// for(i = 0; i<5; i++) {
//     console.log(i)
// }

// let num = 0
// while(num<5){
//     console.log(num)
//     num++
// }

// let arr=[1,2,3,4,5]
// arr.forEach(function(item){
//     console.log(item)
// })

// for(let element of arr){
//     console.log(element)
// }

// let arr = {
//     1:'a',
//     2:'b',
//     3:'c'
// }

// for(let key in arr){
//     console.log(key + arr[key]);
// }

// function echo(name){
//     return 'hello' + name
// }
// console.log(echo ('albert'))

// const echo = function(name){
//     console.log('hi' + name)
// }
// echo ('albert')

// const echo = (name)=>{
//     console.log('hello' + name);
// }
// echo('albert')

// let num =8
// console.log(num)

// function echo(){
//     let num2=8
//     console.log(num2)
// }
// num2=10
// echo()

// let block = document.getElementById('block')
// let block2 = document.getElementsByTagName('block2')
// let block3= document.getElementsByClassName('block3')
// let block4 = document.querySelector('block4')
// console.log(block)

// let div = document.createElement('div')

// document.body.appendChild(div)

// function echo(element){
//     console.log(element.value);
// }

// let block = document.querySelector("#block")

// block.style.cssText = 'background-color: #000; color:#fff'

// 1 Написать функцию, которая принимает два числа и возвращает результат их умножения (использовать prompt и alert)
// function numbers(){
// let num1 = prompt("Введите первое число")
// let num2 = prompt("Введите второе число")

// let result = num1 * num2

// alert("Результат:" + result)
// }
// numbers()

// 2 Написать функцию, которой передаем, имя, фамилия и возраст, и получаем строку "Привет Иван Петров с возрастом 17 лет" (использовать prompt и alert)
// function user(){
//     let lastName = prompt("Введите вашу Фамилию:");
//     let firstName = prompt("Введите ваше Имя:");
//     let age = prompt("Введите ваш возраст:");

//     alert('Привет!' + lastName + ' ' + firstName + 'с возрастом' + age)
// }

// user()
// 3 Написать функцию, которая принимает пол человека ('M','F') в виде строки, результат функции возвращает строку "Ваш пол мужской" (или женский) или же "Ваш пол не определен"
// function gender() {
//     let gen = prompt("Введите ваш гендер:");

//     if (gen === "M") {
//         return "Вы выбрали мужской гендер.";
//     } else if (gen === "F") {
//         return "Вы выбрали женский гендер.";
//     } else {
//         return "Некорректный ввод. Пожалуйста, введите 'мужской' или 'женский'.";
//     }
// }

// alert(gender());


// 4 Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке. (использовать switch)
// function DayOfWeek(dayNumber) {
//     switch (dayNumber) {
//         case 1: return "Понедельник";
//         case 2: return "Вторник";
//         case 3: return "Среда";
//         case 4: return "Четверг";
//         case 5: return "Пятница";
//         case 6: return "Суббота";
//         case 7: return "Воскресенье";
//         default: return "Ошибка: число должно быть от 1 до 7.";
//     }
// }

// let user = prompt("Введите число от 1 до 7:");
// let dayNumber = parseInt(user, 10);

// let result = DayOfWeek(dayNumber);
// alert(result);

// 5 Вывести числа от 1 до 100 в столбец. К каждой цифре подписать состояние возраста (1-17 ребенок, 18-30 - молодой, 30-55 - зрелый, от 55 - старый). Например. 33 – зрелый (использовать for, для вывода использовать document.write)
// for (let i = 1; i <= 100; i++) {
//     let age;

//     if (i >= 1 && i <= 17) {
//         age = "ребенок";
//     } else if (i >= 18 && i <= 30) {
//         age = "молодой";
//     } else if (i > 30 && i <= 55) {
//         age = "зрелый";
//     } else {
//         age = "старый";
//     }

//     console.log(i + age)
// }

// 6 Создай новую функцию, в которую передаешь имя и возраст человека и получаешь сообщение (Иван имеет возраст 44 и он зрелый). А также вызвать внутри своей функции, функцию из прошлого задания
// function user() {
//     let ageStatus;
//     let name = prompt("Введите ваше Имя:");
//     let age = parseInt(prompt("Введите ваш возраст:"), 10);
//     if (age >= 1 && age <= 17) {
//         ageStatus = 'ребенок';
//     } else if (age >= 18 && age <= 30) {
//         ageStatus = 'молодой';
//     } else if (age > 30 && age <= 55) {
//         ageStatus = 'зрелый';
//     } else if (age > 55 && age <= 100) {
//         ageStatus = 'старый';
//     } else {
//         ageStatus = 'неверный возраст'
//     }
//     alert('Привет!' + name + ' имеет возраст ' + age + ' вы ' + ageStatus);
// }
// user()

// 7 Вывести кнопку с текстом "Привет", при нажатии на неё выводим alert c текстом "Привет Мир!"
// const button = document.getElementById('Button');

//         button.addEventListener('click', function() {
//             alert("Привет Мир!");
// });

// 8 Выводим кнопку с текстом "Заполнить" и незаполненный инпут, при клике на кнопку, заполняем инпут текстом test@email.ru
// const Button = document.getElementById('Button');
// const Input = document.getElementById('Input');

// Button.addEventListener('click', function(){
//     Input.value = 'test@email.ru';
// })

// 9 Выводим кнопку и инпут, в инпуте можно ввести любой и текст и при нажатии на кнопку, выводится алерт с текстом "Вы ввели 'текст инпута'" или "Вы ничего не ввели в поле".
// const Input = document.getElementById('Input');
// const Button = document.getElementById('Button');

// Button.addEventListener('click', function() {
//     const inputText = Input.value; 

//     if (inputText.trim() === '') {
//         alert('Вы ничего не ввели в поле.');
//     } else {
//         alert('Вы ввели' + inputText); 
//     }
// });

// 10 Выводим две кнопки "заблокировать" и "разблокировать" и инпут. Одна из них блокирует инпут с помощью атрибута disabled, а другая разблокирует
// const blockButton = document.getElementById('blockButton');
// const unblockButton = document.getElementById('unblockButton');
// const inputField = document.getElementById('inputField');

// blockButton.addEventListener('click', function() {
//     inputField.disabled = true;
// });

// unblockButton.addEventListener('click', function() {
//     inputField.disabled = false;
// });

// 11 Вывести любой квадрат и кнопку "скрыть квадрат". Когда мы нажимаем на скрыть, квадрат исчезает и текст кнопки меняется на "показать квадрат" и так можно кликать сколько угодно раз.
// const square = document.getElementById('square');
// const toggleButton = document.getElementById('toggleButton');
// toggleButton.addEventListener('click', function() {
//     if (square.style.display === 'none') {
//         square.style.display = 'block';
//         toggleButton.textContent = 'Скрыть квадрат';
//     } else {
//         square.style.display = 'none';
//         toggleButton.textContent = 'Показать квадрат';
//     }
// });

// 12 Выводим красный квадрат, при наведении на него он становиться зеленым, а когда уводим курсор от него, обратно красным.
// const square = document.getElementById('square');
// square.addEventListener('mouseover', function() {
//     square.style.backgroundColor = 'green';
// });
// square.addEventListener('mouseout', function() {
//     square.style.backgroundColor = 'red'; //
// });

