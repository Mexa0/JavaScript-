// function createReversedArray() {
//   const args = Array.from(arguments);
//   return args.reverse();
// }

// const result = orders.reduce(
//   (acc, order) => {
//     order.items.forEach(({ category, price, quantity }) => {
//       const totalPrice = price * quantity;

//       acc.totalSum += totalPrice;
//       acc.totalQuantity += quantity;

//       if (!acc.categoryTotals[category]) {
//         acc.categoryTotals[category] = 0;
//       }
//       acc.categoryTotals[category] += totalPrice;
//     });
//     return acc;
//   },
//   { totalSum: 0, totalQuantity: 0, categoryTotals: {} }
// );

// console.log(result);

// console.log(createReversedArray("Mehrac", "Ruka", "T", "d"));

// const array = ["Mehrac", "Ruka", "T", "d"];
// ------------------------------------------------------------------
// for (let i = array.length - 1; i >= 0; i--) {
//   console.log(array[i]);
// }
// console.log(array);
// ------------------------------------------------------------------
// function greet(name = "Name") {
//   console.log(`Hello, ${name}`);

//   greet("Mehrac");
//   greet("Ruka");
//   greet("T");
//   greet();
// }
// ------------------------------------------------------------------
// Функция calculateTax(amount, taxRate) объявляет два параметра:

// amount – число, сумма от которой требуется вычислить налог. Обязателен параметр.

// taxRate – число, налоговая ставка. Необязательный параметр. По умолчанию его значение должно быть 0.2.

// Дополни код функции так, чтобы она возвращала сумму налога – результат умножения суммы на налоговую ставку.
// --------------------------------------------------------------
// function calculateTax(amount, taxRate = 0.2) {
//   return amount * taxRate;
// }
// console.log(calculateTax(100));

// const averagePlayTime = totalPlayTime / playtimes.length;
// ------------------------------------------------------------------
// #1
// console.log("result", multiply());
// function multiply() {
//   return 10;
// }
// ------------------------------------------------------------------
// #2
// const sumFn = function () {
//   return 20;
// };
// console.log("result of sum", sumFn());
// ------------------------------------------------------------------

// const values = [1, 2, 3, 4, 5];

// values.forEach(function (value, index, array) {
//   // value - элемент массива, index - индекс элемента, array - сам массив
//   console.log(`value: ${value}, index: ${index}, array: ${array}`);
// });

// const numbers = [22, 10, 33];

// const result = numbers.reduce((prevValue, num) => {
//   return prevValue + num;
// }, 0);

// console.log("result", result);

// const players = {
//   Mexa: 120,
//   Garry: 200,
//   Bob: 150,
//   David: 180,
// };

// const playtimes = Object.values(players);

// const totalPlayTime = playtimes.reduce((acc, time) => acc + time, 0);

// console.log(averagePlayTime);

// В переменной players хранится массив объектов, каждый из которых имеет свойства name, playtime и gamesPlayed.
// Нашему сервису необходимо рассчитать среднее время, проведенное в одной игре для каждого игрока, и получить общую сумму этих значений времени в переменной totalAveragePlaytimePerGame.
// Рассчитать время для каждого из игроков можно, разделив его время (свойство playtime) на количество игр (свойство gamesPlayed).

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// const totalAveragePlaytimePerGame = players.reduce(
//   (acc, player) => acc + player.playtime / player.gamesPlayed,
//   0
// );

// console.log("totalAveragePlaytimePerGame", totalAveragePlaytimePerGame);

// const nestedArray = [
//   [2, 3],
//   [22, 1],
//   [32, 12],
//   [54, 8],
// ];

// const result = nestedArray.reduce((acc, arr) => {
//   acc = [...acc, arr];
//   return acc;
//   // return acc.concat(arr);
// }, []);

// console.log("result", result);

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 25 },
//   { name: "Dave", age: 30 },
// ];

// const groupedByAge = users.reduce((acc, user) => {
//   if (!acc[user.age]) {
//     acc[user.age] = [];
//   }
//   acc[user.age].push(user);
//   return acc;
// }, {});

// console.log(groupedByAge);

// const orders = [
//   {
//     id: 1,
//     items: [
//       { name: "Laptop", category: "Electronics", price: 1000, quantity: 1 },
//     ],
//   },
//   {
//     id: 2,
//     items: [
//       { name: "Phone", category: "Electronics", price: 600, quantity: 2 },
//     ],
//   },
//   {
//     id: 3,
//     items: [{ name: "Shirt", category: "Clothing", price: 50, quantity: 3 }],
//   },
//   {
//     id: 4,
//     items: [{ name: "Shoes", category: "Clothing", price: 120, quantity: 1 }],
//   },
//   {
//     id: 5,
//     items: [
//       { name: "TV", category: "Electronics", price: 700, quantity: 1 },
//       { name: "Jeans", category: "Clothing", price: 80, quantity: 2 },
//     ],
//   },
// ];

// const result = orders.reduce(
//   (acc, order) => {
//     order.items.forEach((item) => {
//       const totalPrice = item.price * item.quantity;

//       acc.summary += totalPrice;
//       acc.quantity += item.quantity;
//       acc.categories[item.category] =
//         (acc.categories[item.category] || 0) + totalPrice;
//     });
//     return acc;
//   },
//   { summary: 0, quantity: 0, categories: {} }
// );

// console.log(`Summary: ${result.summary}`);
// console.log(`Quantity: ${result.quantity}`);
// console.log(result.categories);

// let name = prompt("Введите ваше имя:");
// alert("Привет, " + name + "!");

// ______________________________________________________________ //
// function confirmOrder(user, order) {
//   const index = user.orders.indexOf(order);
//   if (index !== -1) {
//       user.orders[index].confirmed = true;
//       console.log(Заказ на ${order.product} подтвержден.);
//   } else {
//       console.log("Заказ не найден.");
//   }
// }
// -------------------------------------- //
// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   const username = callback();
//   console.log(`Processing an app from ${username}`);
// }

// makeMessage(customer.getFullName.bind(customer)); // =>

// ------------------------------------------------------- //

// const customer = {
//   firstName: "Jacob",
//   lastName: "Mercer",
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   const username = callback();
//   console.log(`Processing an app from ${username}`);
// }

// const boundGetFullName = customer.getFullName.bind(customer);

// makeMessage(boundGetFullName);
// -------------------------------------------- //
// Управление банковским счетом с call и apply
// Ты разрабатываешь систему управления банковскими счетами. У тебя есть объект account, который содержит баланс и методы для операций с деньгами. Однако, у банка есть несколько типов счетов (savingsAccount, businessAccount), и тебе нужно переиспользовать методы account для работы с ними с помощью call и apply.
// Требования:
// Метод withdraw(amount) – снимает указанную сумму с баланса, но не позволяет уйти в минус.
// Метод deposit(amount) – добавляет деньги на баланс.
// Метод transfer(amount, targetAccount) – переводит деньги с одного счета на другой, используя call или apply.
// ---------------------------------------- //
// const account = {
//   balance: 1000,
//   withdraw(amount) {
//     if (this.balance >= amount) {
//       this.balance -= amount;
//       console.log(`Снято: ${amount}, Остаток: ${this.balance}`);
//     } else {
//       console.log("Недостаточно средств!");
//     }
//   },
//   deposit(amount) {
//     this.balance += amount;
//     console.log(`Пополнено: ${amount}, Новый баланс: ${this.balance}`);
//   },
//   transfer(amount, targetAccount) {
//     this.withdraw.call(this, amount);
//     targetAccount.deposit.call(targetAccount, amount);
//   },
// };
// ---------------------------------------- //
// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// console.log(child.surname);
// console.log(child.heritage);

// -------------------------------------------//
// // Создаем другие счета
// const savingsAccount = {
//   balance: 500,
//   deposit: account.deposit,
//   withdraw: account.withdraw,
// };
// const businessAccount = {
//   balance: 2000,
//   deposit: account.deposit,
//   withdraw: account.withdraw,
// };

// Протестируй:
// 1. Сними 200 у savingsAccount, используя call.
// 2. Пополни businessAccount на 500 с apply.
// 3. Переведи 300 со savingsAccount на businessAccount, используя call или apply.

// 1
// account.withdraw.call(savingsAccount, 200);
// 2
// account.deposit.apply(businessAccount, [500]);
// 3
// account.transfer.call(businessAccount, 300, savingsAccount);
// ------------------------------------------------- //
// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// console.log(child.surname);
// console.log(child.heritage);
// ----------------------------------------------- //
// Управление заказами с bind
// Ты работаешь над системой обработки заказов в интернет-магазине. У тебя есть объект orderManager, который управляет заказами: создаёт их, подтверждает и отменяет. Однако методы должны быть привязаны к конкретным пользователям, чтобы корректно работать с их заказами.

// Требования:
// Метод createOrder(product, price) – создаёт заказ и добавляет его в список заказов пользователя.
// Метод confirmOrder(orderId) – подтверждает заказ.
// Метод cancelOrder(orderId) – отменяет заказ.
// Используй bind, чтобы привязать методы к конкретным пользователям.

// const orderManager = {
//   orders: [],
//   createOrder(product, price) {
//     const order = {
//       id: this.orders.length + 1,
//       product,
//       price,
//       status: "pending",
//     };
//     this.orders.push(order);
//     console.log(`Заказ создан: ${product} за ${price}$`);
//   },
//   confirmOrder(orderId) {
//     const order = this.orders.find((o) => o.id === orderId);
//     if (order) {
//       order.status = "confirmed";
//       console.log(`Заказ #${orderId} подтвержден`);
//     } else {
//       console.log("Заказ не найден");
//     }
//   },
//   cancelOrder(orderId) {
//     const order = this.orders.find((o) => o.id === orderId);
//     if (order) {
//       order.status = "canceled";
//       console.log(`Заказ #${orderId} отменен`);
//     } else {
//       console.log("Заказ не найден");
//     }
//   },
// };

// Пользователи магазина
// const user1 = { name: "Alice", orders: [] };
// const user2 = { name: "Bob", orders: [] };

// Проверь:
// 1. Создай заказ для Alice на "iPhone 15" за 1200$.
// 2. Подтверди этот заказ.
// 3. Создай заказ для Bob на "MacBook Pro" за 2500$ и отмени его.

// 1
// const aliceOrder = orderManager.createOrder.bind(user1);
// aliceOrder("iPhone 15", 1200);

// const bobCreateOrder = orderManager.createOrder.bind(user2);
// bobCreateOrder("MacBook Pro", 2500);
// console.log("user2", user2);
// const bobconfirmOrder = orderManager.confirmOrder.bind(user2);
// bobconfirmOrder(1);
// const bobCancel = orderManager.cancelOrder.bind(user2);
// console.log("user2", user2);

// ------------------------------------- //
// class Car {
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }

// const myCar = new Car("Toyota", "Camry", 30000);
// console.log(myCar); // Car { brand: 'Toyota', model: 'Camry', price: 30000 }
// --------------------------------------- //
// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };

// const child = {};
// child.name = "Jason";
// child.age = 27;

// Измени код так, чтобы объект parent стал прототипом для объекта в переменной child.
// -------------------------------------//
// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// console.log(child.surname);
// console.log(child.heritage);

// ------------------------------------------ //
// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };

// const parent = {};
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = {};
// child.name = "Jason";
// child.age = 27;

// Измени код, построив цепочку прототипов таким образом, чтобы:

// ancestor был прототипом для parent
// parent был прототипом для child
// --------------------------------------- //
// class Car {
//   #brand;

//   constructor(params) {
//     this.#brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }

//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }

//   getBrand() {
//     return this.#brand;
//   }

//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
// }

// -------------------------------- //
// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// console.log(child.surname);
// console.log(child.heritage);

// ------------------------------ //
// class Car {}

// Добавь классу Car метод constructor, который принимает три параметра:

// brand — марка автомобиля
// model — модель автомобиля
// price — цена автомобиля
// Класс Car должен создавать объект с одноимёнными свойствами brand, model и price, которые получают свои значения из аргументов, переданных при создании нового экземпляра с помощью оператора new.
// -------------------------------- //

// getBrand() {
//   return this.#brand;
// }

// changeBrand(newBrand) {
//   this.#brand = newBrand;
// }
// ---------------------------------- //
// class Car {
//   constructor(brand, model, price) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }

// const myCar = new Car("BMW", "X5 M", 130000);
// console.log(myCar);
// ----------------------------------- //
// class User {
//   name;
//   email;
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }

//   getEmail() {
//     return this.email;
//   }
//   changeEmail(email) {
//     this.email = email;
//   }
// }

// const user1 = new User("Amir", "amir@gmail.com");
// console.log(user1.getEmail());

// const user2 = new User("Lyaman", "lyaman@gmail.com");
// const user3 = new User("Mexa", "mexa@gmail.com");
// console.log(user2);
// ----------------------------  //
// class Car {
//   constructor(params) {
//     this.brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }

//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
// }

// Выполни рефакторинг класса Car таким образом, чтобы свойство brand стало приватным, и добавь два метода в публичный интерфейс для его чтения и изменения:

// getBrand() — возвращает значение приватного свойства brand.
// changeBrand(newBrand) — изменяет значение приватного свойства brand на newBrand.
// ------------------------------//

// class Car {
//   #brand;

//   constructor(params) {
//     this.#brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }

//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
//   getBrand() {
//     return this.#brand;
//   }

//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
// }
// const myCar = new Car({ brand: "BMW", model: "X5 M", price: 130000 });
// console.log(myCar);
// myCar.changeBrand("Toyota");
// console.log(myCar.getBrand());
