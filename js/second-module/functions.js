// const calculateTotaPrice = function (items) {
//   console.log(items);
//   let total = 0;

//   for (const item of items) {
//     console.log(item);
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

// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Spacious apartment in the city center';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//   if (apartment.hasOwnProperty(key)) {
//     console.log(key);
//   }
//   keys.push(key);
//   values.push(apartment[key]);

//   // Change code above this line
// }

// function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// }

// // Функция высшего порядка
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// registerGuest('Манго', greet);
// Change code below this line

// function addOverNum(first, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//     console.log(arg);
//   }

//   return total;
//   // Change code above this line
// }
// addOverNum(10, 12, 4, 11, 48, 10, 8);

// const clients = ['Mango', 'Ajax', 'Poly'];

// for (const client of clients) {
//   console.log(client);
// }

// const string = 'javascript';

// for (const character of string) {
//   console.log(character);
// }

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
//   getGenres(book) {
//     this.genres.push(book);
//     return this.genres;
//   },
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значение свойства с таким ключом
//   console.log(book[key]);
// }
// console.log(book.getGenres('Emma'));

// const doStuffWithBook = object => console.log(object.location);

// doStuffWithBook({
//   title: 'The Last Kingdom',
//   numberOfPages: 736,
//   downloads: 10283,
//   rating: 8.38,
//   isPublic: true,
//   location: {
//     city: 'Toronro',
//   },
// });

// // Колбэк-функция
// function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// }

// // Функция высшего порядка
// const registerGuest = (name, callback) => {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// };

// registerGuest('Манго', greet);

// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// // Передаём инлайн функцию greet как колбэк
// registerGuest('Манго', function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// });

// // Передаём инлайн функцию notify как колбэк
// registerGuest('Поли', function notify(name) {
//   console.log(`Уважаемый(ая) ${name}, ваш номер будет готов через 30 минут.`);
// });

// function processCall(recipient, onAvailable, onNotAvailable) {
//   // Имитируем доступность абонента случайным числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     onNotAvailable(recipient);
//     return;
//   }

//   onAvailable(recipient);
// }

// function takeCall(name) {
//   console.log(`Соединяем с ${name}, ожидайте...`);
//   // Логика принятия звонка
// }

// function activateAnsweringMachine(name) {
//   console.log(`Абонент ${name} недоступен, оставьте сообщение.`);
//   // Логика активации автоответчика
// }

// function leaveHoloMessage(name) {
//   console.log(`Абонент ${name} недоступен, записываем голограмму.`);
//   // Логика записи голограммы
// }

// processCall('Манго', takeCall, activateAnsweringMachine);
// processCall('Поли', takeCall, leaveHoloMessage);

// Колбэк-функция
// function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// }

// // Функция высшего порядка
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// registerGuest('Манго', greet);

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza('Royal Grand', function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza('Ultracheese', function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`);
// });

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   firstArray.forEach(function (number, value) {
//     if (secondArray.includes(firstArray[value])) {
//       commonElements.push(number);
//     }
//   });

//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }

//   return commonElements;
//   // Change code above this line
// }

// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));

// function changeEven(numbers, value) {
//   const newArray = [];

//   numbers.forEach(number => {
//     if (number % 2 === 0) {
//       newArray.push(number + value);
//     } else {
//       newArray.push(number);
//     }
//   });
//   return newArray;

// Change code above this line
// }

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//     return newArray.push(numbers[i]);
//   }
// Change code above this line
// console.log(changeEven([1, 2, 3, 4, 5], 10));

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39,
//   },
// ];

// const getFriends = users => {
//   const allFriends = users.flatMap(({ friends }) => friends);
//   const UniqueFriends = allFriends.filter(
//     (friends, index, array) => array.indexOf(friends) === index
//   );
//   return UniqueFriends;
// };

// console.log(getFriends(users));

// const User = function ({ email, password } = {}) {
//   this.email = email;
//   this.password = password;
// };

// User.prototype.changepassword = function (newPassword) {
//   this.password = newPassword;
// };

// const mango = new User({ email: 'mango@gmail.com', password: 11111 });
// console.log('mango', mango);

// mango.changepassword(458322886);

// console.log(mango);
