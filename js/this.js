'use strict';
// const user = {
//   tag: 'Mango',
//   foo: function showThis() {
//     this.tag2 = this.tag;
//     console.log(this);
//   },
// };

// user.foo(); // this вызывается в контексте user

// const action = function (a, b, arr) {
//   console.log(a, b, arr);
//   console.log(this);
// };

// const user = {
//   tag: 'Mango',
//   showThis() {
//     console.log(this);
//   },
// };

// action.call(user, 1, '23', 'Hello');
// action.apply(user, [1, 3, ...[3]]);

// const changeColor = function (color) {
//   console.log(this);
//   this.color = color;
// };

// const hat = {
//   color: 'red',
// };

// const hoody = {
//   color: 'green',
// };

// const changeHat = changeColor.bind(hat);

// changeHat('super puper RED');
// console.log(hat);

// changeColor.call(hat, 'super RED');
// changeColor.call(hoody, 'super puper GREEN');

// console.log(hat);
// console.log(hoody);

// const counter = {
//   value: 0,
//   increment(value) {
//     console.log(this);
//     this.value += value;
//   },
//   decrement(value) {
//     console.log(this);
//     this.value -= value;
//   },
// };

// const updateCounter = function (value, operation) {
//   operation(value);
// };

// updateCounter(10, counter.increment.bind(counter));
// console.log(counter);
// updateCounter(1, counter.decrement.bind(counter));
// console.log(counter);

// const model = {
//   model: 'Tesla',
// };

// const car = Object.create(model);
// car.wheels = 4;
// car.engine = 1;

// const whiteCar = Object.create(car);
// whiteCar.color = 'white';
// whiteCar.extra = 'turbo';
// whiteCar.super = function () {
//   console.log('Privet');
// };
// console.log(whiteCar);

// // console.log(whiteCar.color);
// // console.log(whiteCar.model);

// // for (const key in whiteCar) {
// //   if (whiteCar.hasOwnProperty(key)) console.log(key);
// // }

// const keys = Object.keys(whiteCar);
// console.log(keys);

// const objC = {
//   z: 5,
// };

// console.log('objC: ', objC);

// const objB = Object.create(objC);
// objB.y = 2;

// console.log('ObjB: ', objB);

// const objA = Object.create(objB);
// objA.x = 1;

// console.log('objA: ', objA);

// const dummyObj = Object.create({ message: "This is prototype's property" });
// dummyObj.message = 'This is own property';
// console.log(dummyObj);

// console.log(dummyObj.message);

// const Car = function (
//   { brand, model, price } = { brand: 1, model: 2, price: 3 }
// ) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// };
// console.log(Car);

// const myCar = new Car({ brand: 'BMW', price: 34000 });

// console.log(myCar);

// const myCar2 = new Car({ brand: 'Tesla', model: 'X', price: 48000 });
// console.log(myCar2);

// const myCar3 = new Car();
// console.log(myCar3);

// const User = function ({ name, email, password } = {}) {
//   this.name = name;
//   this.email = email;
//   this.password = password;
// };

// User.prototype.changeName = function (name) {
//   this.name = name;
// };

// User.prototype.changeMail = function (email) {
//   this.email = email;
// };

// const dima = new User({
//   name: 'Dima',
//   email: 'd1mkaa@yahoo.com',
//   password: 123345,
// });
// console.log(dima);
// dima.changeName('Dmitrulin');
// dima.changeMail('my-new-email@123.com');
// console.table(dima);

// function showTag() {
//   console.log('This: ', this);
// }

// const changeColor = function (color) {
//   console.log(this);
//   this.color = color;
// };

// const hat = {
//   color: 'red',
// };

// const dress = {
//   color: 'black',
// };

// changeColor.call(hat, 'super Blue');
// changeColor.call(dress, 'PUPER SUPER RED');

// console.log(hat);
// console.log(dress);

// const changeHatColor = changeColor.bind(hat);
// const changeDressColor = changeColor.bind(dress);
// changeDressColor('Yeah!!! We changed color of dress to Pink');
// changeHatColor('Due to bind - changed color to RED');
// console.log(hat);
// console.log(dress);
// const count = {
//   value: 0,
//   increment(value) {
//     this.value += value;
//     console.log(this);
//   },
//   decrement(value) {
//     this.value -= value;
//     console.log(this);
//   },
// };

// const updateCount = function (value, operation) {
//   operation(value);
// };

// updateCount(10, count.increment.bind(count));
// updateCount(10, count.increment.bind(count));
// updateCount(120, count.decrement.bind(count));
// updateCount(120, count.decrement.bind(count));

// updateCount(50, count.decrement.call(count, 50));

// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log('This: ', this);
//     this.color = color;
//   };

//   return changeColor;
// };

// const updateColor = makeChangeColor();

// const hat = {
//   color: 'blue',
//   updateColor,
// };

// hat.updateColor('red');
// console.log(hat);

// const objA = {
//   name: 'Mango',
//   showThis() {
//     console.log('Show this: ', this);
//     // return this;
//   },
// };

// const foo = objA.showThis;
// // const fooA = objA.showThis();

// // console.log(foo);
// foo();

// function titleCase(str) {
//   const normalized = str.toLowerCase();
//   const words = normalized.split(' ');
//   console.log(words);
//   const everyFirstLetterUpper = words.map(a => {
//     const arr = a.split('');
//     arr.splice(0, 1, arr[0].toUpperCase());
//     return arr.join('');
//   });
//   return everyFirstLetterUpper.join(' ');
// }

// console.log(titleCase("I'm a little tea pot"));

// function mutation(arr) {
//   const arr1 = arr[0].split('');
//   const arr2 = arr[1].split('');

//   if (arr1.length < arr2.length) {
//     return false;
//   }

//   return arr2.every(a => arr1.includes(a));
// }

// console.log(mutation(['hello', 'hel']));

// const objA = {
//   x: 1,
// };

// console.log(objA.hasOwnProperty('constructor'));

// const objB = Object.create(objA);
// console.log(objB);
// console.log(objB.x);
// objB.y = 2;
// console.log(objB);
// const objC = Object.create(objB);
// console.log(objC.x);
// console.log(objC.y);

// const objB = {
//   y: 2,
// };

// const objC = {
//   z: 3,
// };

// const Car = function ({ brand, model, price } = {}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
//   // this.changePrice = function (newPrice) {
//   //   this.price = newPrice;
//   // };
// };

// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };

// const bmw = new Car({ brand: 'BMW', model: 'X5', price: 70000 });
// console.log(bmw);

// const tesla = new Car();
// console.log(tesla);
// tesla.changePrice(80000);
// console.log(tesla);

// console.log(Car.prototype);

// Car.prototype.newFoo = function () {
//   console.log('Our new function in Car');
// };

// console.log(Car.prototype);
// console.log(tesla);
// tesla.newFoo();
// tesla.changePrice(1000);
// console.log(tesla);

// const User = function ({ fullName, login, password } = {}) {
//   this.fullName = fullName;
//   this.login = login;
//   this.password = password;
// };

// User.prototype.changeLogin = function (newLogin) {
//   this.login = newLogin;
// };

// User.prototype.addAge = function (age) {
//   this.age = age;
// };

// console.log(User);

// const dimka = new User({
//   fullName: 'Dima Zharyy',
//   login: 'd1mka',
//   password: '123123123',
// });

// console.log(dimka);
// dimka.addAge('18');
// console.log(dimka);
// dimka.changeLogin('d1mkaaaaa');
// console.log(dimka);

// const oleg = new User({
//   fullName: 'Oleg Maloy',
//   login: 'olezha',
//   password: 'qweqwe',
// });

// console.log(oleg);
// oleg.changeLogin('Oleger');
// console.log(oleg);

// const objA = {
//   c: 3,
// };

// const objA = {
//   c: 2,
// };

// const objB = objA;
// objB.x = 3;
// console.log(objA);
// console.log(objB);
// console.log(objA.hasOwnProperty('x'));

// console.log(objA.__proto__ === Object.prototype);

// console.log(Math.prototype);

// Math.myNumber = function (number) {
//   console.log(number);
// };

// Math.myNumber(3000);

// const myNumber = new Math();
// console.log(myNumber);

// const externalInterface = {
//   playerStatus: {
//     vip: 'VIP',
//     golden: 'Golden',
//     silver: 'Silver',
//     bronze: 'Bronze',
//   },
//   addCity(newCity) {
//     this.city = newCity;
//   },
//   addPlayerStatus({ newStatus = this.playerStatus.bronze }) {
//     this.status = newStatus;
//   },
// };
// const Player = function ({ playerId, login, country, clan = 'none' } = {}) {
//   this.playerId = playerId;
//   this.login = login;
//   this.country = country;
//   this.clan = clan;
// };

// Player.prototype.changeLogin = function (newLogin) {
//   this.login = newLogin;
// };

// Player.prototype.changeClan = function (newClan) {
//   this.clan = newClan;
// };

// const d1mka = new Player({ playerId: 1, login: 'd1mka', country: 'Ukraine' });
// console.log(d1mka);

// d1mka.changeClan('POLTAVA clan');
// d1mka.changeLogin('d1mkaa');
// console.log(d1mka);

// class Player1 {
//   static description = 'Class describes Player';
//   static logInfo = function (obj) {
//     console.log(obj);
//   };

//   #password = '123123123';

//   className = 'Player1';

//   constructor({ playerId, login, country, clan = 'none' } = {}) {
//     this.playerId = playerId;
//     this.login = login;
//     this.country = country;
//     this.clan = clan;
//   }

//   get playerCity() {
//     return this.city;
//   }

//   set addCity(newCity) {
//     this.city = newCity;
//   }

//   get playerClan() {
//     return this.clan;
//   }

//   set changeClan(newClan) {
//     this.clan = newClan;
//   }

//   get playerLogin() {
//     return this.login;
//   }

//   set changeLogin(newLogin) {
//     this.login = newLogin;
//   }

//   get playerStatus() {
//     return this.status;
//   }

//   set changeStatus(newStatus) {
//     this.status = newStatus;
//   }

//   // addCity(newCity) {
//   //   this.city = newCity;
//   // }

//   // changeClan(newClan) {
//   //   this.clan = newClan;
//   // }

//   // changeLogin(newLogin) {
//   //   this.login = newLogin;
//   // }

//   // changeStatus(newStatus) {
//   //   this.status = newStatus;
//   // }
// }

// const myPlayer = new Player1({
//   playerId: 1,
//   login: 'd1mka',
//   country: 'Ukraine',
// });

// console.table(myPlayer);

// myPlayer.changeClan = 'POLTAVA-clan';
// console.table(myPlayer);
// console.log(myPlayer.playerLogin);
// console.log(myPlayer.login);
// myPlayer.changeLogin = 'd1mkaaaaaaa';
// console.log(myPlayer.playerLogin);

// myPlayer.changeStatus('VIP');
// console.log(myPlayer);

// myPlayer.changeClan('POLTAVA clan');
// console.log(myPlayer);

// myPlayer.changeLogin('d1mkaaaaa');
// console.log(myPlayer);

// console.log(Player1.description);
// Player1.logInfo(myPlayer);
// console.log(myPlayer.className);

// class Hero {
//   constructor({ name = 'hero', xp = 0 } = {}) {
//     this.name = name;
//     this.xp = xp;
//   }

//   gainXp(amount) {
//     console.log(`${this.name} gains ${amount}xp`);
//     this.xp += amount;
//   }
// }

// class Warrior extends Hero {
//   constructor({ weapon = 'knife', ...restProps }) {
//     super(restProps);
//     this.weapon = weapon;
//   }

//   set addWeapon(newWeapon) {
//     this.weapon = newWeapon;
//   }
// }

// class Wizard extends Hero {
//   constructor({ spells = [], ...restProps }) {
//     super(restProps);
//     this.spells = spells;
//   }
// }

// const mango = new Warrior({ name: 'Mango', xp: 1000 });
// console.log(mango);
// mango.gainXp(5000);
// console.log(mango);
// mango.addWeapon = 'Gun';
// console.log(mango);

// const dima = new Wizard({ name: 'd1mkaa', spells: ['fireball', 'heal'] });
// console.log(dima);
// dima.gainXp(2000);
// console.log(dima);

//
// Реалізуйте функцію, яка розгладить масив:
// const arr = [1, 2, [3, 4], [5, 6], 7];

// const spreadArr = function (array) {
//   const newArr = [];
//   for (const el of array) {
//     if (Array.isArray(el)) {
//       newArr.push(...el);
//     } else {
//       newArr.push(el);
//     }
//   }
//   return newArr;
// };

// console.log(spreadArr(arr));

// Result = [1, 2, 3, 4, 5, 6, 7]

// 6. Напиши функцію, яка приймає рядок text, та повертає масив усіх великих літер, які є в text в такому ж порядку.
// Приклад:

// const getCapitals = function (str) {
//   const arr = str.split('');
//   const result = [];

//   for (const el of arr) {
//     if (!Number.isNaN(+el)) {
//       continue;
//     }

//     if (el === el.toUpperCase() && el !== ' ') {
//       result.push(el);
//     }
//   }
//   return result;
// };

// console.log(typeof 1);

// console.log(getCapitals('Ukraine Everywhere')); // ['U', 'E']
// console.log(getCapitals('UkraiNe EveRywherE')); // ['U', 'N', 'E', 'R', 'E']
// console.log(getCapitals('1234M5678A9')); // ['M', 'A']

// 2. У нас есть объект, в котором храняться зарплаты команды.
// Напишите код для сумирования всех зарплат и сохраните его результат в переменной sum.
// Если объект salaries пуст, то результат должен быть 0.

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// const sum = Object.values(salaries);

// let result = 0;

// for (const el of sum) {
//   result += el;
// }

// console.log(result);

// const calc = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },

//   sum() {
//     const { a, b } = this;
//     return a + b;
//   },
// };

// const stones = [
//   { name: 'Изумруд', price: 1300, quantity: 4 },
//   { name: 'Бриллиант', price: 2700, quantity: 6 },
//   { name: 'Сапфир', price: 400, quantity: 7 },
//   { name: 'Щебень', price: 150, quantity: 100 },
// ];

// console.log(stones);

// const calcTotalPrice = function (stones, stoneName) {
//   const result = stones.find(a => a.name === stoneName);
//   return result.price * result.quantity;
// };

// console.log(calcTotalPrice(stones, 'Щебень'));

// const animal = {
//   legs: 4,
//   changeName(name) {
//     this.name = name;
//   },
// };

// const dog = Object.create(animal);

// dog.name = 'Oliver';

// for (const key in dog) {
//   console.log(key);
// }

// const puppy = Object.create(dog);

// puppy.surname = 'Junior';

// for (const key in puppy) {
//   console.log(key);
// }

// const arr = Object.keys(puppy);
// console.log(arr);

// dog.changeName('Ollie');
// console.log(dog);

// class User {
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   get emailAddress() {
//     return this.#email;
//   }
// }
