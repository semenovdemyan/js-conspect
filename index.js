//3 + 2
//'Demian'
//Demian
//console.log('Demian')
//const message = 666
//alert(message)

//Верный пример присваивания значения:
//let a = 10
//a = 20
//let b
//b = false
//b = 'Striiiing'

//Неверный пример присваивания:
//const = c
//c = 20

// console.log(a) //ReferenceError
//let a
//console.log(a) //undefined
//a = true
//console.log(a) // true
//console.log(10) // undefined

//  const myCity = {
//  city: 'New York',
//  popular: true,
//  country: 'USA'
//  }   или
//  const myCity = {
//  country: 'USA',
//  popular: true,
//  city: 'New York
//  }

//const myCity = {
//city: 'New York',
//popular: true,
//country: 'USA'
//}
//delete myCity.country
//console.log(myCity)

//const myCity = {
//  city: 'New York'
//}
//myCity['popular'] = true
//console.log(myCity)
// или
//const countryPropertyName = 'country'
//myCity[countryPropertyName] = 'USA'

//const myCity = {
//  city: 'New York',
//  info: {
//    isPopular: true,
//    country: 'USA'
//  }
//}
//console.log(myCity.info.isPopular) // true
//delete myCity.info['isPopular'] // Не имеет смысла - лучше использовать точечную запись.
//console.log(myCity)

//const name = 'Demian'
//const postQty = 23
//const userProfile = {
//  name,
//  postQty,
//  hasSignedAgreement: false
//}

//const myCity = {
//city: 'New York',
//cityGreeting: function () {
//  console.log('Greetings!')
//}
//}
//myCity.cityGreeting() // 'Greetings!'
//или
//const myCity = {
//  city: 'New York',
//  cityGreeting () {
//  console.log('Greetings!')
//  }
//  }
//  myCity.cityGreeting() // 'Greetings!'

//copy by value или мутирование примитивных типов
//const a = 10
//let b = a
//b = 30
//console.log (a) // 10
//console.log (b) // 30

// мутирование значений ссылочного типа:
// const person = {
// name: 'Bob',
// age:21
// }
//Мутация объекта, на который ссылается переменная:
// person.age = 22
// person.isAdult = true

//console.log(person.age) // 22
//console.log(person.isAdult) //true
//copy by reference или мутирование копий:
//const person = {
//  name: 'Bob',
//  age:25
//}

//const person2 = person
//person2.age = 26
//person2.isAdult = true
//console.log(person.age) //26
//console.log(person.isAdult) //true

//Использование метода assign, который является методом объекта Object.
//Так как Object является свойством глобального объекта, он доступен как в ВЕБ , так и в JS.
//Помимо этого, Object является и типом, и классом, поэтому пишется с большой буквы.
//Он является прототипом всех объектов в JavaScript (о прототипах позже).

//const person = {
//  name: 'Bob',
//  age: 25
//}
//const person2 = Object.assign({}, person) // {} - пустой новый объект, person - это объект копирования.

//person2.age = 26

//console.log(person2.age) // 26
//console.log(person.age) //25

// const person = {
//  name: 'Bob',
//  age: 25
// }

// const person2 = {...person}

// person2.name = 'Alice'
// console.log(person2.name) // Alice
// console.log(person.name) // Bob

//  const person = {
//    name: 'Bob',
//    age: 25
//  }

//  const person2 = JSON.parse(JSON.stringify(person))
//
//
//  person2.name = 'Alice'

//console.log(person2.name) // Alice
//console.log(person.name) // Bob

//let a = 5
//let b = 3
//let c

//c = a + b
//console.log(c) //8    192, 197 лучше не использовать блоки кода повторно. Если блоки повторяются, лучше оптимизировать код.
//a = 8
//b = 12
//c = a + b
//console.log(c) // 20

// Оптимизация с помощью функции:
//let a = 5
//let b = 3
//function sum (a, b) {
//  const c = a + b
//console.log(c)
//}
//sum(a, b) // 8

//a = 8
//b = 12
//sum(a, b) // 20

//function myFn(a, b) {
//let c
//a = a + 1
//c = a + b
//return c
//}

///??? Почему при console.dir(myFn) светится undefined вместо свойств функции?
//А вот почему: значения переменных внутри функции определяются только при вызове этой функции.
//myFn = (10, 3) //14

// Передача значения по ссылке.
//const personOne = {
//  name: 'Bob',
//  age: 21
// }
// function increasePersonAge(person) {
// person.age += 1 // += - это оператор, меняющий значение на единицу.
// return person;
// }

//increasePersonAge(person)
// {
// person.age += 1
// return person
// }

//increasePersonAge(personOne)
//console.log(personOne.age) //22

//const personOne = {
//  name: 'Bob',
//  age: 21
//}

//function increasePersonAge(person) {
//  const updatedPerson = Object.assign({}, person)
//  updatedPerson.age += 1
//  return updatedPerson
//}

//const updatedPersonOne = increasePersonAge(personOne) //Это присваивание результата предыдущей функции новой переменной.
//console.log(personOne.age)
//console.log(updatedPersonOne.age)

//function anotherFunction() {
// действия
//}

//function fnWithCallback(callbackFunction) {
//  callbackFunction()
//}

//fnWithCallback(anotherFunction)
//пример:
//function printMyName() {
//  console.log('Demian')
//}

//setTimeout(printMyName, 1000)

//глобальные переменные:
//let a
//let b

//function myFn() {
//  let b // локальная переменная
//  a = true
//  b = 10
//  console.log(b) //10
//}

//myFn()

//console.log(a) // true
//console.log(b) // undefined

//const a = 5
//function myFn() {
//  function innerFn() {
//    console.log(a)
//  }
//  innerFn()
//}
//myFn() // 5
//innerFn() //error

//'use strict'
//function myFn() {
//  a = true //error
//console.log(a)
//}

//myFn()

//console.log(a)

//const button = {
//  width: 200,
//  text: 'Buy'
//}

//const redButton = {
//  ...button,
//  color: 'red'
//}

//console.table(redButton)

//const button = {
//   width: 200,
//   text: 'Buy',
//   color: 'black'
//   }

//   const redButton = {
//   color: 'Red',
//   ...button
//   }

//   console.table(redButton) //color: black

//const buttonInfo = {
//  text: 'Buy'
//}

//const buttonStyle = {
//  color: 'yellow',
//  width: 200,
//  height: 300
//}

//const button = {
//  ...buttonInfo,
//  ...buttonStyle
//}

//  console.table(button)

//const hello = 'Hello '
//const world = 'World'

//const greeting = hello + world

//const hello = 'Hello'
//const world = 'World'

//const greeting = `${hello} ${world}`

//Задание для самопроверки (самостоятельно собрать фразу и вывести в консоль).
//const myNameIs = 'Меня зовут'
//let name = 'Demian'
//const coma = '.'
//const iAmFrom = 'мой город -'
//let city = 'Санкт-Петербург'
//const greeting = `${myNameIs} ${name}${coma} ${iAmFrom} ${city}`

//console.log(greeting)

//function  myFn(a,b) {
//  let c
//  a = a + 1
//  c = a + b
//  return  c
//}

//function(a,b) {
//  let c
//  a = a + 1
//  c = a + b
//  return c
//}

//setTimeout(function () {
//  console.log('Отложенное сообщение')
//}, 1000
//)

//(a, b) => {
//  let c
//  a = a + 1
//  c = a + b
//  return c
//}

//нельзя переприсвоить значение переменной.
//const myFunction = (a, b) => {
//  let c
//  a = a + 1
//  c = a + b
//  return c
//}
//myFunction(5, 3)

//setTimeout(() => {
//  console.log('Отложенное сообщение')
//}, 1000
//)

//a => {
//тело функции
//}

//(a, b) => a + b // скобки можно опустить

//function multByFactor(value, multiplier = 1) {
//  return value * multiplier
//}

//multByFactor(10, 2) //20
//multByFactor(5)

//Задание: Попробовать переписать пример, описанный выше как анонимную стрелочную функцию.
//ЧЕРНОВИКИ (повторение в метро)
//Результат на стриншоте 468 в папке



// Скриншот 413_1_JS
//const newPost = (post, addedAt = Date()) => ({ //Date - это функция по умолчанию
//  ...post,
//  addedAt, //здесь мы сократили запись  "addedAt =  addedAt"
//})// тут мы делаем неявный возврат

//const firstPost = {
//  id: 1,
//  author: 'Demian'
//}

//newPost(firstPost) // тут мы передаём ссылку на объект firstPost
//Именно в момент вызова последней ссылки происходит присваивание дефолтного значения аргументу addedAt, исходя из встроенной функции Date - текущей даты.

//Задание:переписать функию с неявного возврата на явный.
//Результат: (снимок экрана 413_2_JS)





// TRY/CATCH
//const fnWithError = () => {
//  throw new Error('ОПАНЬКИ!')
//}

//try {
//  fnWithError()
//} catch (error) {
//  console.error(error) //Эта строка описывает полный текст ошибки, её можно не указывать, если достаточно просто текста, заданного для message
//  console.log(error.message)
//}

//console.log('Continue...') при использовании 





//let a;

//const b = 5;

//if (a>b) {
//  console.log('a is larger');
//}

//for (let i = 0; i++; i<5) { // for - это инструкция цикла.
//  console.log(i);
//}



//'abc'; // такая инструкция не имеет значения, похожим образом передаётся выражение-инструкция 'use strict'

//a = a + 3; // При добавлении ; мы сделали из выражения инструкцию

//c = a + b; //Здесь подразумеваем, что переменные были объявлены ранее

//d = 'Good' + ' ' + 'Evening';

//myFunction(c, d);

//console.log('Hey');





//const myArray = [1, 2, 3]
//console.log(myArray) // [1, 2, 3]

//const myArray2 = new Array(1, 2, 3) //вызываем функцию массив и присваиваем ему аргументы.
//console.log(myArray2) // [1, 2, 3]



//const myArray3 = [1, true, 'Demian']
//myArray3 // выводим в консоль 


// Чтобы заменить элемент массива или добавить новый:
//const myArray = [1, 2, 3, 4]
//console.log(myArray) // [1, 2, 3, 4]
//console.log(myArray.length) // 4

//myArray[2] = 'abc'

//console.log(myArray) // [1, 2, 'abc', 4]
//console.log(myArray[2]) // 'abc'

//myArray[4] = true // добавляем новый элемент в конце массива с индексом [4]

//console.log(myArray) // [1, 2, 'abc', 4, true]
//console.log(myArray.length) // 5 (значение length обновлено)
// Этот метод добавления не совсем удобен, для массивов доступны многие методы.



//const myArray = [1, 2, 3]
//myArray.push(4) 
//console.log(myArray) // [1, 2, 3, 4]


//pop удаляет последний элемент с конца массива и возвращает удалённый элемент.
//const myArray = [1, 2, 3]
//myArray.pop(4) 
//console.log(myArray) // [1, 2]

//const removedElement = myArray.pop()

//console.log(myArray) // [1]
//console.log(removedElement) // 2


//unshift добавляет элемент в начале массива.
//const myArray = [1, 2, 3]
//console.log(myArray) // [1, 2, 3]

//myArray.unshift(true)

//console.log(myArray) // [true, 1, 2, 3]

//myArray.unshift('abc')

//console.log(myArray) //['abc', true, 1, 2, 3]


//shift удаляет первый элемент массива по аналогии с pop.


//forEach возвращает undefined, то есть он ничего не возвращает, а просто перебирает все элементы массива и совершает с ними действия.
//const myArray = [1, 2, 3]
//console.log(myArray) // [1, 2, 3]

//myArray.forEach(el => console.log(el*2)) // внутри вызова метода находится функция, где el => console.log(el*2) - это callback fn

//console.log(myArray) // [1, 2, 3] Оригинальный массив не изменился.


// map действует схожим образом с forEach, но возвращает новый массив.
//const myArray = [1, 2, 3]
//console.log(myArray) // [1, 2, 3]

//const newArray = myArray.map(el=>el*3)

//console.log(newArray) //[3, 6, 9]
//console.log(myArray) //[1, 2, 3] Оригинальный массив так же не изменился.






//Деструктуризация объектов:
//const userProfile = {
//  name: 'Demian',
//  commentsQty: 23,
//  hasSignedAgreemet: false,
//}

//const { name, commentsQty } = userProfile       //Объявление новых переменных и присваивание значений на основе значений свойств объекта.
//const { hasSignedAgreement } = userProfile      //Здесь мы объявляем и присваиваем значение свойствам объекта. эти свойства можно указать и одной строкой.

//console.log(name)
//console.log(commentsQty)



// Деструктуризация массивов (важно соблюдать порядок свойств, так как какждое свойство массива имеет свой индекс):
//const fruits = ['Apple', 'Banana']

//const [fruitOne, fruitTwo] = fruits
//console.log(fruitOne) // Apple
//console.log(fruitTwo) // Banana



// Деструктуризация в функциях:
//const userProfile = {
//  name: 'Demian',
//  commentsQty: 23,
//  hasSignAgreement: false,
//}

//const userInfo = ({ name, commentsQty }) => { //В ({}) происходит деструктуризация параметров объекта
//  if (!commentsQty) {
//    return `User ${name} has no comments`
//  } 

//  return `User ${name} has ${commentsQty} comments`
//}

//userInfo(userProfile) 
//console.log(userProfile)




//Условные инструкции.
//синтаксис инструкции такой:
//if (Условие) {
  // Блок кода, выполняемый ОДНОКРАТНО, если Условие ПРАВДИВО
//}
//Пример:
//let val = 10

//if (val > 5) {
//  val += 20
//}

//console.log(val) // 30

// Пример if с оператором отрицания:
//const person = {
//  age: 20
//}

//if (!person.name) { // undefined = true
//  console.log('Имя не указано')
  // другие действия в случае, если свойства "name" у объекта "person" нет.
//}



// инструкция if else
//if (Условие) {
  // Блок кода, выполняемый однократно, если Условие правдиво
//} else {
  //Блок кода, выполняемый однократно, если Условие ложно
//}

// Пример:
//let val = 10

//if (val < 5) {
//  val += 20
//} else {
//  val -= 20
//}

//console.log(val) //-10


// инструкция if else if   (можно заменить на if if if для большей читабельности)
//if (Условие 1) {
// Блок кода, выполняемый однократно, если Условие 1 правдиво.
//} else if (Условие 2) {
// Блок кода, выполняемый однократно, если Условие 2 правдиво
//} else {
// Блок кода, выполняемый однократно, если предыдущие условия ложны
//}

// Пример
//const age = 25

//if (age >= 18) {
//  console.log('is adult') 
//} else if (age >=12 <= 18) { // от 12 до 18
//  console.log('is teenager')
//} else {
//  console.log('is child')
//}

//ИЛИ

//const age = 5

//if (age >= 18) {
//  console.log('is tenager')
//}

//if (age >= 12 && age < 18) {
//}

//if (age < 12) {
//  console.log('is child')
//}

// Использование if в функциях:
//const sumPositiveNumbers = (a, b) => {
//  if (typeof a !== 'number' || typeof b !== 'number') {
//    return 'One of the arguments is not a number'
//  }

//  if (a <= 0 || b <= 0) {
//    return 'Numbers are not positive' 
//  }

//  return a + b
//}

//sumPositiveNumbers(3, 8) // (-54, 234) / (4, -13234) / ('someString', 32) / (123, false)




// Инструкция switch
//switch (Выражение) {
//  case A: 
  // Действия или Выражение === А
//    break
//  case B:
    //Действия, если Выражение === В
//    break
//  default:
    // Действия по умолчанию
//}

//Пример:
//const month = 2
//switch (month) {
//  case 12:
//    console.log('Декабрь')
//    break
//  case 1:
//    console.log('Январь')
//    break
//  case 2:
//    console.log('Февраль')
//    break

//  default: 
//  console.log('Это не зимний месяц')      
//}




//const value1 = 11
//const value2 = 23

//value1 && value2
//? myFunction1(value1, value2)
//: myFunction2() // Бесполезный пример, который ничего не возвращает, так как значения myFunction1/2 ничему не присвоены. Это просто выражение-инструкция.


//let value = 11
//console.log(value >= 0 ? value : -value)    // 11

//value = =5
//const res = value >= 0 ? value : -value
//console.log(res)    // 5






//Цикл for
//for (начальная инструкция; Условие; Итерационное действие) {
  //Блок кода, выполняемый на каждой итерации
//}

//Пример:
//for ( let i = 0;   i< 5;   i++ ) {
//  console.log(i)
//}  // в примере будет сравнение 0 с первым условием, затем переход к итерации до тех пор, пока 0 < 5 (на последней итерации условие ложно, поэтому мы выйдем из цикла.)

// Пример for для массивов (не рекомендуется к использованию):
//const myArray = ['first', 'second', 'third']

//for (let i = 0; i < myArray.length; i++) {
//  console.log(myArray[i])
//}
//'first'
//'second'
//'third' // Когда i будет равно length, мы выйдем из цикла.



//let f = (a, b) => a + b




























//Если значению типа «строка» присваивается значение типа «число», то переменная поменяет свой тип. Это пример динамической типизации - для смены типа достаточно задекларировать её перед изменением значения.

//Объекты указываются между фигурными свойствами, могут иметь несколько свойств и обладать вложенностью, когда свойствами объекта являются другие объекты. Оператор удаления delete (для удаления свойств объекта):
//Const myCity = {
//country: 'Russia',
//city: 'SPb',
//population: '2 millions'
//}

//delete myCity.population
//console.log(myCity)

//country: 'Russia'
//city: 'SPb'
//
//Если при добавлении свойства использовать вместо точечной записи квадратные скобки,
//то новое свойство внутри них записывается со значением «строка»:
//myCity['millionsCountPopulation'] = true

//Квадратные скобки используются примерно так:
//myCity = {
//city: 'spb'
//}

//console.log(myCity)

//const countryPropertyName = 'country'
//MyCity[countryPropertyName] = 'Russia'
//console.log(myCity) //{city: 'spb' , country: 'Russia' }

//let sayHi = () => alert('Hello!')
//console.log(sayHi)
//       ===
//let sayHi
//sayHi = 'Hello!'
//alert(sayHi)
//
//
//
//
//
//
//const newPost = (post, addedAt = Date()) => ({
//  ...post,
//  addedAt,
//})
//
//const firstPost = {
//  id:1,
//  author:'Demian'
//}
//newPost(firstPost)



//const myArray = [1, 2, 3, 4, 5]
//const rem = myArray.pop()
//const poppedElemOfmyArray = myArray
//console.log(poppedElemOfmyArray)
//console.log(myArray)
//console.log(rem)


//const myString = 'Hey';

// for (const letter of myString) {
// console.log(letter)
// }



// fetch('https://jsonplaceholder.typicode.com/todos/50')  //
  // .then(response => {  //
    // console.log(response)  // 
    // return response.json()  //
  // })  //
// .then(json => console.log(json))  //
// .catch(error => console.error(error))  //


// fetch('https://jsonplaceholder.typicode.com/todos/50')
  // .then(response => {
    // console.log(response) 
    // return response.json()
  // })
// .then(json => console.log(json))
// .catch(error => console.log(error.message)) 