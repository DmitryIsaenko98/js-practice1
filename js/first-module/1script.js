// const stars = 5;
// let price;

// if (stars === 1) {
//   price = 20;
//   console.log(price);
// } else if (stars === 2) {
//   price = 40;
//   console.log(price);
// } else if (stars === 3) {
//   price = 50;

//   console.log(price);
// } else {
//   console.log('There is no hotel like this');
// }

// if (stars === 1 || stars === 2) {
//   price = 20;
//   console.log(price);
// } else if (stars === 3 || stars === 4) {
//   price = 50;
//   console.log(price);
// } else {
//   console.log('There is no hotel like this');
// }

// switch (stars) {
//   case 1:
//   case 2:
//     price = 30;
//     console.log(price);
//     break;

//   case 3:
//   case 4:
//     price = 50;
//     console.log(price);
//     break;

//   default:
//     console.log('There is no hotel like this');
//     break;
// }

// const minSalary = 500;
// const maxSalary = 2000;
// const employes = 5;
// let totalSalary = 0;

// for (let i = 1; i <= employes; i += 1) {
//   const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//   totalSalary += salary;
//   console.log(`Salary = ${salary} `);
// }
// console.log(totalSalary);

// const min = 5;
// const max = 16;
// let total = 0;

// for (let i = min; i < max; i += 1) {
//   // console.log(i);

//   if (i % 2 !== 0) {
//     // console.log('Непарне число:', i);
//     continue;
//   }
//   console.log('Парне число:', i);
//   total += i;
// }
// console.log('total:', total);

// let balance = 50000;
// const payment = 2000;

// console.log(`Total price of your order is ${payment}`);

// if (balance >= payment) {
//   balance -= payment;

//   console.log(`You have enough money to get that stuff`);
//   console.log(`Your balance is ${balance}`);
// } else {
//   console.log(`We are sorry, you dont have enough money on your balance, balance is ${balance}`);
// }
// console.log(`Thank you`);

// Напиши скрипт подсчёта суммы покупки со скидкой в зависимости от потраченной
// суммы за всё время (партнёрская программа).
// Общая сумма потраченного хранится в переменной totalSpent
// Сумма текущего платежа хранится в переменной рауте
// Скидка хранится в переменной discount
//
// -   Если потрачено от [100 до 1000) - бронзовый партнёр, скидка 2%
// -   Если потрачено от [1000 до 5000) - серебрянный партрёр, скидка 5%
// -   Если потрачено больше [5000 - золотой партрёр, скидка 10%
// -   Если потрачено меньше 100) - не партнёр, скидка 0%
// -   В результате вывести сообщение
//
// «Оформляем заказ на сумму [сумма] со скидкой [скидка]%»
//
//
//
// let totalSpent = 10000;
// let payment = 500;
// let discount = 0;

// if (totalSpent >= 100 && totalSpent < 1000) {
//   discount = 0.02;
//   console.log(`бронзовый партнёр, скидка 2%`);
// } else if (totalSpent > 1000 && totalSpent < 5000) {
//   discount = 0.05;
//   console.log(`серебрянный партрёр, скидка 5%`);
// } else if (totalSpent > 5000) {
//   discount = 0.1;
//   console.log(`золотой партрёр, скидка 10%`);
// } else {
//   console.log(`не партнёр, скидка 0%`);
// }
// payment -= payment * discount;
// console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`);

// totalSpent += payment;
// console.log(`Общая сумма покупки ${totalSpent}`);

// "Бронзовый партнер, скидка 28°
// "Серебрянный партнер, скидка 5%*
// / 'Золотой партнер, скидка 10%* И 'у вас еще нет партнерской скидки"
