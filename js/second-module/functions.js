// const calculateTotaPrice = function (items) {
//   console.log(items);
//   let total = 0;

//   for (const item of items) {
//     // console.log(item);
//     total += item;
//   }
//   return total;
// };

// console.log(calculateTotaPrice([1, 4, 7, 8, 0, 5]));

// console.log(calculateTotaPrice([1000, 200, 39, 46, 4]));

// console.log(calculateTotaPrice([5, 8, 3, 0, 5]));

// console.log(calculateTotaPrice([12, 3, 11]));

///

// const logins = ['Mango', 'Poly', 'Ajax', 'Simon'];

// const findLogin = function (allLogins, loginToFind) {
//   for (const login of allLogins) {
//     if (login === loginToFind) {
//       return `User ${loginToFind} is found`;
//     }
//   }

//   return `User ${loginToFind} is not found`;
// };

// console.log(findLogin(logins, 'Ajax'));
// console.log(findLogin(logins, 'mhbtv'));
// console.log(findLogin(logins, 'Mango'));
// console.log(findLogin(logins, 'jhuhvf'));

//
// const logins = ['Mango', 'Poly', 'Ajax', 'Simon'];

// const findLogin = function (allLogins, loginToFind) {
//   return allLogins.includes(loginToFind)
//     ? `User ${loginToFind} is found`
//     : `User ${loginToFind} is not found`;
// };

// console.log(findLogin(logins, 'Ajax'));
// console.log(findLogin(logins, 'mhbtv'));
// console.log(findLogin(logins, 'Mango'));
// console.log(findLogin(logins, 'jhuhvf'));

// const add = function (...args) {
//   console.log(args);
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// };
// console.log(add(1, 3, 5, 7, 9, 2, 4, 10));
// console.log(add(10, 30, 4));
// console.log(add(1, 1));
// console.log(add(1, 3, 5, 7, 9, 2, 4, 10, 60, 7, 5, 4));
// console.log(add(1, 3, 5, 7, 9));
//
//
//
// Напиши функцию filterNumbers(array [, number1,
// ..]) которая:
// первым аргументом принимает массив чисел
// *
// - после первого аргумента может быть произвольное количество других аргументов которые будут числами.
// *
// - Функция должна вернуть новый массив, в котором будут только те аргументы, начиная со второго,
// *
// для которых есть аналог в оригинальном массиве.

// const filterNumbers = function (array, ...args) {
//   //   console.log(array);
//   //   console.log(args);
//   const uniqeElements = [];
//   for (const element of array) {
//     // console.log(element);

//     if (args.includes(element)) {
//       uniqeElements.push(element);
//     }
//   }
//   return uniqeElements;
// };

// console.log(filterNumbers([2, 3, 6, 7, 1, 3, 21, 6, 4], 1, 3, 5, 7, 9, 2, 4, 10));
// console.log(filterNumbers([2, 30, 6, 7, 10, 3, 21, 6, 4], 10, 30, 4));
// console.log(filterNumbers([658, 47, 39, 26], 17, 71, 658, 274));
