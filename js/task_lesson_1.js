// 'use strict'

// 1. Пишемо реєстрацію користувача за допомогою prompt.  Окремо логін та пароль. Валідацію не потрібно робити.
// 2. Аналогічно пишемо логінізацію: запитуємо логін та пароль, порівнюємо їх з даними, які були введені при авторизації.
// Якщо все вірно - виводимо в консоль, що логін успішний.Якщо ні - знову запитуємо логін та пароль.
// 3. Запитуємо максимальну суму, яку готовий витратити користувач на тур.
// 4. Виводимо список усіх країн в alert, які доступні по сумі для користувача.
// 5. Вказуємо країну через prompt  і купляємо тур.
// 6. Виводимо повідомлення, що тур оплачений і залишок на рахунку користувача.

// const countries = [
//   'Ukraine',
//   'Poland',
//   'Croatia',
//   'Montenegro',
//   'France',
//   'USA',
// ];
// const countriesPrice = [100, 200, 300, 400, 500, 600];

// const login = prompt('Enter login');
// const password = prompt('Enter password');

// const signIn = () => {
//   const signLogin = prompt('Enter Login to sign in');
//   if (signLogin === null) {
//     return;
//   }

//   if (login === signLogin) {
//     const signPassword = prompt('Enter password to sign in');
//     if (password === signPassword) {
//       return alert(`Hi ${login}! Glad to see you!`);
//     } else {
//       alert('Error! Invalid password! Try Again');
//       return signIn();
//     }
//   }
//   alert(`User ${signLogin} didn't exist! Try Again`);
//   return signIn();
// };

// signIn();

// const affordableCountries = () => {
//   let avaliableFunds = prompt('What is your budget?');

//   if (avaliableFunds === null) {
//     return;
//   }

//   if (avaliableFunds < 100) {
//     alert('You have not enough funds! Deposit your balance and try again!');
//     return affordableCountries();
//   }

//   if (avaliableFunds >= 100 && avaliableFunds < 200) {
//     const avaliableCountries = countries.slice(0, 1);
//     alert(`You can visit next countries: ${avaliableCountries}`);

//     const userChoice = prompt('Choose the country you want to visit');
//     if (userChoice === null) {
//       alert('You did not choose any country');
//       return affordableCountries();
//     }

//     if (avaliableCountries.every(a => a !== userChoice)) {
//       alert('Please, type correctly! Try again!');
//       return affordableCountries();
//     }

//     if (userChoice === avaliableCountries[0]) {
//       alert(
//         `Your choice is ${userChoice}! Funds left ${
//           avaliableFunds - countriesPrice[0]
//         }`
//       );
//     }
//   }
//   if (avaliableFunds >= 200 && avaliableFunds < 300) {
//     const avaliableCountries = countries.slice(0, 2);
//     alert(`You can visit next countries: ${avaliableCountries}`);

//     const userChoice = prompt('Choose the country you want to visit');
//     if (userChoice === null) {
//       alert('You did not choose any country');
//       return;
//     }

//     if (avaliableCountries.every(a => a !== userChoice)) {
//       alert('Please, type correctly! Try again!');
//       return affordableCountries();
//     }

//     if (userChoice === avaliableCountries[0]) {
//       alert(
//         `Your choice is ${userChoice}! Funds left ${
//           avaliableFunds - countriesPrice[0]
//         }`
//       );
//     }
//     if (userChoice === avaliableCountries[1]) {
//       alert(
//         `Your choice is ${userChoice}! Funds left ${
//           avaliableFunds - countriesPrice[1]
//         }`
//       );
//     }
//     return;
//   }
//   if (avaliableFunds >= 300 && avaliableFunds < 400) {
//     const avaliableCountries = countries.slice(0, 3);
//     alert(`You can visit next countries: ${avaliableCountries}`);

//     const userChoice = prompt('Choose the country you want to visit');
//     if (userChoice === null) {
//       alert('You did not choose any country');
//       return;
//     }

//     if (avaliableCountries.every(a => a !== userChoice)) {
//       alert('Please, type correctly! Try again!');
//       return affordableCountries();
//     }

//     if (userChoice === avaliableCountries[0]) {
//       alert(
//         `Your choice is ${userChoice}! Funds left ${
//           avaliableFunds - countriesPrice[0]
//         }`
//       );
//     }
//     if (userChoice === avaliableCountries[1]) {
//       alert(
//         `Your choice is ${userChoice}! Funds left ${
//           avaliableFunds - countriesPrice[1]
//         }`
//       );
//     }
//     if (userChoice === avaliableCountries[2]) {
//       alert(
//         `Your choice is ${userChoice}! Funds left ${
//           avaliableFunds - countriesPrice[2]
//         }`
//       );
//     }
//     return;
//   }
//   if (avaliableFunds >= 400 && avaliableFunds < 500) {
//     const avaliableCountries = countries.slice(0, 3);
//     alert(`You can visit next countries: ${avaliableCountries}`);

//     const userChoice = prompt('Choose the country you want to visit');
//     if (userChoice === null) {
//       alert('You did not choose any country');
//       return;
//     }

//     if (avaliableCountries.every(a => a !== userChoice)) {
//       alert('Please, type correctly! Try again!');
//       return affordableCountries();
//     }

//     if (userChoice === avaliableCountries[0]) {
//       alert(
//         `Your choice is ${userChoice}! Funds left ${
//           avaliableFunds - countriesPrice[0]
//         }`
//       );
//     }
//     if (userChoice === avaliableCountries[1]) {
//       alert(
//         `Your choice is ${userChoice}! Funds left ${
//           avaliableFunds - countriesPrice[1]
//         }`
//       );
//     }
//     if (userChoice === avaliableCountries[2]) {
//       alert(
//         `Your choice is ${userChoice}! Funds left ${
//           avaliableFunds - countriesPrice[2]
//         }`
//       );
//     }
//     if (userChoice === avaliableCountries[3]) {
//       alert(
//         `Your choice is ${userChoice}! Funds left ${
//           avaliableFunds - countriesPrice[3]
//         }`
//       );
//     }
//     return;
//   }
//   if (avaliableFunds >= 500 && avaliableFunds < 600) {
//     const avaliableCountries = countries.slice(0, 4);
//     alert(`You can visit next countries: ${avaliableCountries}`);

//     const userChoice = prompt('Choose the country you want to visit');
//     if (userChoice === null) {
//       alert('You did not choose any country');
//       return;
//     }

//     if (avaliableCountries.every(a => a !== userChoice)) {
//       alert('Please, type correctly! Try again!');
//       return affordableCountries();
//     }

//     if (userChoice === avaliableCountries[0]) {
//       alert(
//         `Your choice is ${userChoice}! Funds left ${
//           avaliableFunds - countriesPrice[0]
//         }`
//       );
//     }
//     if (userChoice === avaliableCountries[1]) {
//       alert(
//         `Your choice is ${userChoice}! Funds left ${
//           avaliableFunds - countriesPrice[1]
//         }`
//       );
//     }
//     if (userChoice === avaliableCountries[2]) {
//       alert(
//         `Your choice is ${userChoice}! Funds left ${
//           avaliableFunds - countriesPrice[2]
//         }`
//       );
//     }
//     if (userChoice === avaliableCountries[3]) {
//       alert(
//         `Your choice is ${userChoice}! Funds left ${
//           avaliableFunds - countriesPrice[3]
//         }`
//       );
//     }
//     if (userChoice === avaliableCountries[4]) {
//       alert(
//         `Your choice is ${userChoice}! Funds left ${
//           avaliableFunds - countriesPrice[4]
//         }`
//       );
//     }
//     return;
//   }
//   if (avaliableFunds >= 600) {
//     const avaliableCountries = countries.slice(0);
//     alert(`You can visit next countries: ${avaliableCountries}`);

//     const userChoice = prompt('Choose the country you want to visit');
//     if (userChoice === null) {
//       alert('You did not choose any country');
//       return;
//     }

//     if (avaliableCountries.every(a => a !== userChoice)) {
//       alert('Please, type correctly! Try again!');
//       return affordableCountries();
//     }

//     if (userChoice === avaliableCountries[0]) {
//       alert(
//         `Your choice is ${userChoice}! Funds left ${
//           avaliableFunds - countriesPrice[0]
//         }`
//       );
//     }
//     if (userChoice === avaliableCountries[1]) {
//       alert(
//         `Your choice is ${userChoice}! Funds left ${
//           avaliableFunds - countriesPrice[1]
//         }`
//       );
//     }
//     if (userChoice === avaliableCountries[2]) {
//       alert(
//         `Your choice is ${userChoice}! Funds left ${
//           avaliableFunds - countriesPrice[2]
//         }`
//       );
//     }
//     if (userChoice === avaliableCountries[3]) {
//       alert(
//         `Your choice is ${userChoice}! Funds left ${
//           avaliableFunds - countriesPrice[3]
//         }`
//       );
//     }
//     if (userChoice === avaliableCountries[4]) {
//       alert(
//         `Your choice is ${userChoice}! Funds left ${
//           avaliableFunds - countriesPrice[4]
//         }`
//       );
//     }
//     if (userChoice === avaliableCountries[5]) {
//       alert(
//         `Your choice is ${userChoice}! Funds left ${
//           avaliableFunds - countriesPrice[5]
//         }`
//       );
//     }

//     return;
//   }
// };

// affordableCountries();

// countriesPrice = [100, 200, 300, 400, 500, 600];

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 2.
// Запитайтесь в юзера радіус кола та виведіть його площу.
// (число пі - 3.14).
// Площа круга: PI*r**2

// const enterR = prompt('Enter radisu of the circle');
// const result = (Math.PI * Math.pow(enterR, 2)).toFixed(2);
// console.log(result); // 28.27 - string

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 3.
// Водій їде з середньою швидкістю 50 км в годину.
// Запитайтесь у нього скільки йому ще необхідно часу їхати, та виведіть відстань у км.
// Наприклад, "Плануєма відстань становить 100 км"

// const averageSpeed = 50;
// const enterTime = Number(prompt('Enter approximately hours to drive'));

// const result = averageSpeed * enterTime;
// console.log(`Planned distance is ${result} km`);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 4.
// Юзер має ввести суму коштів на його картці та ціну за 1 літр бензину.
// За кожен оплачений літр бензину користувач отримує нарахування бонусів - 2%.
// Вивести інфу, яка проінформує скільки бензину він може купити, скільки грошей у нього залишиться та який бонус буде йому нараховано.

// const userFunds = Number(prompt('How much cash do you have?'));
// const fuelPrice = Number(prompt('Enter the fuel price'));
// const distancePerLiter = 0.02;
// const totalDiscont = Math.round(Math.floor(userFunds / fuelPrice) * distancePerLiter * 100);
// const totalLiters = Math.floor(userFunds / fuelPrice);
// const totalSum = fuelPrice * Math.floor(userFunds / fuelPrice);
// const amountLeft = userFunds - totalSum;

// if (userFunds < fuelPrice) {
//   console.log('You have not enoug funds');
// } else {
//   console.log(
//     `You can buy ${totalLiters} liters. After purchase your funds amount will be - ${amountLeft}. Total discount after purchase will be - ${totalDiscont}%`
//   );
// }

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 5.
// При завантажені сторінки користувачу пропонується в prompt ввести число.
// Дані добавляются до значення змінної total.
// Операція вводу числа продовжується до того часу, поки юзер не нажме Cancel в prompt.
// Після чого потрібно показати alert  з повідомленням "Загальна сума введених чисел дорівнює [число]."

// let enterNum = Number(prompt('Enter number'));
// let total = 0;

// while (enterNum !== 0) {
//   total += enterNum;
//   enterNum = Number(prompt('Enter number'));
// }

// alert(`Total sum of your number is: ${total}`);
