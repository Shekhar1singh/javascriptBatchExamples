// console.log("shekhar ");

// var a = true;

// console.log(typeof a);

// {
//   console.log(a);
//   var a = 20;
//   console.log(a);
// }
// console.log(a);

// let a = "shekhar";
// a = "raushan";
// let b = "shingh";
// let b = "king";
// console.log(a + b);

// let b = " ";
// console.log(b);

// let b = 10;
// {
//   let b = 30;
//   console.log(b);
// }

// console.log(b);

// var c = 20;
// function one() {
//   console.log(c);
//   var c = 30;
//   console.log(c);
// }
// one();
// console.log(c);

// var d = 30;
// let f;
// {
//   console.log(e);
//   var e = 30;
//   let f = 30;
// }
// console.log(f);

// var a = 1;
// var b = 2;
// if (a == 1) {
//   var a = 11;
//   let b = 22;
//   var b = 2;
//   console.log(a);
//   console.log(b);
// }
// console.log(a);
// console.log(b);

// if (true) {
//   var x = 1;
//   let y = 2;
//   const z = 3;
// }

// console.log(x);
// console.log(y);
// console.log(z);

// var app = "soft";
// if (true) {
//   let app = "Admin panel";
//   const version = "1.0";

//   if (true) {
//     var owner = "Ram";
//     let role = "Admin";
//     console.log(app);
//     console.log(version);
//     console.log(role);
//   }
//   console.log(role);
// }
// console.log(app);
// console.log(owner);

//lexical Scope Examples ////

// function outer() {
//   let outerVar = "I'm in the outer function!";

//   function innerFunction() {
//     console.log(outerVar);
//   }

//   innerFunction();
// }

// outer();

// const fullName = "Oluwatobi Sofela";
// function profile() {
//   const fullName1 = "Tobi Sho";
//   function sayName() {
//     const fullName2 = "Oluwa Sofe";

//     console.log(fullName1);
//     console.log(fullName2);

//     function writeName() {
//       console.log(fullName1);
//       console.log(fullName2);
//     }
//     writeName();
//   }
//   sayName();
//   console.log(fullName1);
// }

// profile();

// function outer() {
//   let outerVar = "I'm in the outer function!";
//     console.log(secret);

//   function innerFunction() {
//     let secret = "1234";
//     console.log(outerVar);
//     function innerChield() {
//       console.log(secret);
//     }

//     innerChield();
//   }

//   function innerFunctionTwo() {
//     console.log(secret);
//   }

//   innerFunction();
//   innerFunctionTwo();
// }

// outer();

//closure examples ......
// function makeFunc() {
//   const name = "Mozilla";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }

// const myFunc = makeFunc();
// myFunc();

// function createCounter() {
//   let count = 0;

//   return {
//     increment: function () {
//       count++;
//       return count;
//     },
//     decrement: function () {
//       count--;
//       return count;
//     },
//     getValue: function () {
//       return count;
//     },
//   };
// }
// const counter = createCounter();
// console.log(counter.increment());
// console.log(counter.decrement());
// console.log(counter.getValue());
// console.log(count);

// let a = "10";
// let b = "20";
// console.log(a + b);
// console.log(typeof a);
// console.log(typeof b);

// let j = "2" + "2";
// console.log(j);
// console.log(typeof j);
// console.log(2 + "2");
// console.log("2" + 2);
// console.log(2 + 2);

// let g = "shekhar";
// let h = "singh";
// let a = g + h;

// let a = -"999";
// console.log(a);
// console.log(typeof a);

// let i = "3" + "3" - "3";
// console.log(typeof i);
// console.log(i);

// let a = 10;
// a++;
// console.log(a++);

// console.log(2 + +"2");

// let a = 10;
// console.log(a++);

// let k = 33;
// ++k;
// console.log(++k);
// console.log(k++);
// k++;
// console.log(k);

// let l = 16;
// l--;
// console.log(++l);
// ++l;
// console.log(l);
// l--;
// console.log(l);
// let result = l++ + ++l + l++;
// console.log(result);

// let s = prompt("enter the number");
// s = Number.parseInt(s);
// console.log(s);
// console.log(typeof s);

// let m = 33;
// m = m++ + m++ + ++m;
// console.log(m);
// console.log(++m);
// console.log(m);

// let marks = 30;
// console.log(
//   marks > 50  ? "you are good to go for next class" : "hard luck try again after 3 months"
// );

// let age = 18;
// age > 10 && age < 20 && age == 18 ? console.log(true) : console.log(false);

// let age = 18;
// age > 10 || age > 20 || age != 18 ? console.log(true) : console.log(false);

// console.log(10 !== "10");

// let price = 20;
// let price = prompt("Enter Product Amount");
// let convertedAmount = Number(price);
// let isMember = true;
// let discount = isMember ? 0.5 : 0;
// let total = convertedAmount - convertedAmount * discount;
// // let total = price - price * discount;
// console.log("Total discounted price is" + total);

// let price = prompt("Enter Price Amount");
// let convert = Number(price);
// let member = prompt("The member is subscribe ? Type : true or false");
// let bool = Boolean(member);
// if (member == "true") {
//   let discount = 0.5;
//   var total = convert - convert * discount;
//   console.log("Total Discounted price is " + total);
// } else if (member == "false") {
//   let discount = 0;
//   var total = convert - convert * discount;
//   console.log("Total Discounted price is " + total);
// }

// let askNumber = prompt("Enter the Number");
// let convertedNumber = Number(askNumber);
// let number = convertedNumber % 2 ? "given no is odd number" : "number is even";
// console.log(number);

// let a = prompt("Hey what is your age?");
// a = Number.parseInt(a);
// if (a < 0) {
//   alert("This is an invalid age");
// } else if (a < 10) {
//   alert(" you are child");
// } else if (a < 18 && a >= 10) {
//   alert("you can drive after 18");
// } else {
//   alert("you can now drive as ur are above 18");
// }

// let foodAvaliable = false;
// if (foodAvaliable) {
//   console.log("Food is available");
// } else {
//   console.log("Food is not available");
// }

// if (false) {
//   console.log("print Me");
// } else {
//   console.log("go to heel");
// }

// let userAge = prompt("Enter Your Age");
// let Age = Number(userAge);

// if (Age >= 18) {
//   console.log("You Can Vote");
// } else {
//   console.log("You Can't Voted");
// }

// let age = prompt("enter your age");
// userAge = Number(age);
// if (userAge >= 18) {
//   console.log("You are  eligible to vote");
// } else {
//   console.log("You are not eligible to vote");
// }

// let age = prompt("enter your age");
// let useEnterdAge = Number(age);
// if (useEnterdAge >= 18) {
//   console.log("you can vote");
// } else {
//   console.log("You are under age");
// }

// let num = prompt("Please type a number:");
// num = Number(num);
// if (num > 0) {
//   alert("The number is greater than zero.");
// } else if (num < 0) {
//   alert("The number is less than zero.");
// } else {
//   alert("The number is exactly zero.");
// }

// let a = 20;
// if (a % 2 == 0) {
//   console.log("Given number is even");
// } else {
//   console.log("given number is odd");
// }

// let year = 2024;
// if ((year % 4 == 0 && year % 100) || year % 400 == 0) {
//   console.log("year is leap");
// } else {
//   console.log("year is not leap");
// }

// let a = 15;
// if (a == 5) {
//   console.log("match not found");
// } else if (a == 10) {
//   console.log("match not found - try  guess");
// } else {
//   console.log("match over");
// }

// let number = -50;
// if (number > 0) {
//   console.log("number is +ve");
// } else if (number < 0) {
//   console.log("number is -ve");
// } else {
//   console.log("number is zero");
// }

// let day = new Date().getDay();

// let marks = 70;
// if (marks <= 100 && marks >= 90) {
//   console.log("Grade A+");
// } else if (marks < 90 && marks >= 75) {
//   console.log("Grade A");
// } else if (marks < 75 && marks > 60) {
//   console.log("Grade B+");
// } else {
//   console.log("you are fail");
// }

// let signal = "yellow";
// if (signal === "red") {
//   console.log("Stop");
// } else if (signal === "yellow") {
//   console.log("Get ready");
// } else if (signal === "green") {
//   console.log("Go");
// } else {
//   console.log("Invalid signal");
// }

// let age = 20;

// if (age < 13) {
//   console.log("Child");
// } else if (age < 20) {
//   console.log("Teenager");
// } else if (age < 60) {
//   console.log("Adult");
// } else {
//   console.log("Senior Citizen");
// }

// let n = prompt("enter a number");
// n = Number.parseInt(n);
// if (n >= 0) {
//   if (n == 0) {
//     console.log(" number is zero");
//   } else {
//     console.log(" number is positive");
//   }
// } else {
//   console.log("number is negative");
// }

// console.log("Entered number is", n < 0 ? "negative number" : "positive number");

// let marks = 70;
// console.log(marks > 50 ? "you are pass" : "you are fail");

// let marks = prompt("Enter your Marks");
// marks = Number.parseInt(marks);
// console.log(marks > 50 ? "you are pass" : "you are fail");

// let age = 21;
// if (age >= 10 && age <= 20) {
//   console.log("age lies between 10 and 20");
// } else {
//   console.log("Invalid age");
// }

// let age = prompt("Enter your age");
// age = Number.parseInt(age);
// switch (age) {
//   case 15:
//     console.log("Your age is 15");
//     break;
//   case 16:
//     console.log("Your age is 16");
//     break;
//   case 17:
//     console.log("Your age is 17");
//     break;
//   case 18:
//     console.log("Your age is 18");
//     break;
//   default:
//     console.log("Your age is not special");
// }
// let FirstNum = prompt("Enter First Number");
// FirstNum = Number(FirstNum);
// let SecondNum = prompt("Enter Second Number");
// SecondNum = Number(SecondNum);
// let Operation = prompt("Enter Operation");

// let a = FirstNum;
// let b = SecondNum;
// // let operation = "+";
// switch (Operation) {
//   case "+":
//     console.log(a + b);
//     break;
//   case "-":
//     console.log(a - b);
//     break;
//   case "*":
//     console.log(a * b);
//     break;
//   case "/":
//     console.log(a / b);
//     break;
//   case "%":
//     console.log(a % b);
//     break;
//   default:
//     console.log("Invalid Operation");
// }

// let day = 5;

// let day = new Date().getDay();

// switch (day) {
//   case 0:
//     day = "Sunday";
//     console.log(day);

//     break;
//   case 1:
//     day = "Monday";
//     console.log(day);
//     break;
//   case 2:
//     day = "Tuesday";
//     console.log(day);
//     break;
//   case 3:
//     day = "Wednesday";
//     console.log(day);
//     break;
//   case 4:
//     day = "Thursday";
//     console.log(day);
//     break;
//   case 5:
//     day = "Friday";
//     console.log(day);
//     break;
//   case 6:
//     day = "Saturday";
//     console.log(day);
//   default:
//     day = "Looking for wrong Data";
//     console.log(day);
// }

// let age = 19;

// switch (true) {
//   case age < 18:
//     console.log("Minor");
//     break;

//   case age >= 18 && age < 60:
//     console.log("Adult");
//     break;

//   case age >= 60:
//     console.log("Senior Citizen");
//     break;

//   default:
//     console.log("Invalid age");
// }

//print 0 to 4
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

//reverse 5 to 1
// for (let i = 5; i >= 1; i--) {
//   console.log(i);
// }

// for (let i = 2; i <= 20; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// let text = "";
// for (let i = 0; i < cars.length; i++) {
//   text += cars[i] + "-";
// }
// console.log(text);

// let sum = 0;
// let n = prompt("enter the number");
// n = Number.parseInt(n);
// for (i = 0; i < n; i++) {
//   // sum += i;
//   sum = sum + i;
// }
// console.log("sum of number is" + sum);

// let mul = 1;
// let n = prompt("enter the number");
// n = Number.parseInt(n);
// for (let i = 1; i <= n; i++) {
//    mul *= i;
// //   mul = mul * i;
// }
// console.log("Factorial is " + mul);

// let n = prompt("Enter the value of n");
// n = Number.parseInt(n);
// let i = 10;
// while (i > n) {
//   console.log(i);
//   i--;
// }

// let n = 1;
// while (true) {
//   if (n % 7 === 0) {
//     console.log("First Numbers divisible by 7 is", n);
//     break;
//   }
//   n++;
// }

// let start = 1;
// let end = 50;

// for (let i = start; i <= end; i++) {
//   if (i % 7 === 0) {
//     console.log(i);
//   }
// }

// let start = 1;
// let end = 50;

// let i = start;
// while (i <= end) {
//   if (i % 7 === 0) {
//     console.log(i);
//   }
//   i++;
// }

// let n = 12352;
// let digit = 0;
// while (n > 0) {
//   digit++;
//   n = parseInt(n / 10);
// }
// console.log(digit);

// add given no of digit

// let n = 123;
// let sum = 0;
// while (n > 0) {
//   let r = parseInt(n % 100);
//   sum = sum + r;
//   n = parseInt(n / 10);
// }
// console.log(sum);

// let n = 325;
// let a = n;
// let b;
// let temp = 0;
// while (n > 0) {
//   b = parseInt(n % 10);
//   temp = temp * 10 + b;
//   n = parseInt(n / 10);
// }
// console.log(temp, a);

// if (temp == a) {
//   console.log("number is a palandrom");
// } else {
//   console.log("number is not a palandrom");
// }

// let n = prompt("Enter the value of n");
// n = Number.parseInt(n);
// let i = 0;
// do {
//   console.log(i);
//   i++;
// } while (i < n);

// for of examples........

// const names = ["ramesh", "suresh", "mohan", "sohan"];
// for (const items of names) {
//   console.log(items);
// }

// const str = "code";

// for (const char of str) {
//   console.log(char);
// }

//for of examples........

// const person = {
//   name: "Shekhar",
//   age: 25,
//   city: "Delhi",
// };

// for (const items in person) {
//   console.log(items);
// }

//to accessing values

// for (const items in person) {
//   console.log(person[items]);
// }

// function shekhar(a, b) {
//   let Sum = a + b;
//   console.log(Sum);
// }
// shekhar(10, 20);
// shekhar(40, 50);

// let a = 5;
// let b = 6;
// let c = 10;

// function myFunction(name1, name2) {
//   return name1 * name2;
// }
// myFunction(a, b);

// console.log(myFunction(a, b));

// console.log("multiplication of a and b :", myFunction(a, b));
// console.log("multiplication of b and c :", myFunction(b, c));
// console.log("multiplication of a and c :", myFunction(a, c));

// console.log(myFunction(4, 3));

// let a = 10;
// let b = 20;
// let c = 30;

// function average(x, y) {
//   return (x + y) / 2;
// }

// const average = (x, y) => {
//   return (x + y) / 2;
// };

// console.log("average of a and b is :", average(a, b));
// console.log("average of a and b is :", average(b, c));

// function greet(text1, text2, text3, text4) {
//   console.log(text1 + text2 + text3 + text4 + "!");
// }

// greet("Good", "Morning", "Every", "One");

// function parentFun(pval) {
//   console.log("Outer function started with:", pval);

//   function childFun(chVal) {
//     console.log("Inner function started with:", chVal);
//     console.log("Inner function accessing outer variable:", pval);
//     return pval + chVal;
//   }

//   const result = childFun(5);
//   console.log("Result from inner function:", result);
//   return result;
// }

//  parentFun(10);

// const parentFun = (pval) => {
//   console.log("Outer function started with:", pval);

//   function childFun(chVal) {
//     console.log("Inner function started with:", chVal);
//     console.log("Inner function accessing outer variable:", pval);
//     return pval + chVal;
//   }

//   const result = childFun(5);
//   console.log("Result from inner function:", result);
//   return result;
// };

// parentFun(10);

// const sum_one = (a, b) => {
//   console.log(a + b);
// };
// sum_one(20, 30);

// function sum(a, b) {
//   return a + b;
// }

// function multiply(x, y) {
//   let result = 0;
//   for (let i = 0; i < y; i++) {
//     result = sum(result, x);
//   }
//   return result;
// }

// let num1 = 5;
// let num2 = 3;

// console.log("Sum:", sum(num1, num2));
// console.log("Multiplication:", multiply(num1, num2));

// let a = "Apple";
// let b = "Rs 100";
// console.log(`per kag ${a} price ${b}`);

// We can insert variable directly in template literal. This is called string interpolation.

// console.log(Firstname.length);
// console.log(Firstname[5]);

// let lastname = "singh";
// console.log(lastname[2]);

// let fullName = Firstname + lastname;

// console.log(typeof fullName);

// console.log(`shekhar`);

// const multiLineString = `This is a string
// that spans
// multiple lines.`;
// console.log(multiLineString);

// let Firstname = "softflew";

// let greeting = `good moring ${Firstname} ! " to all of you"  'i hope everypne is good'`;
// console.log(greeting);

// let Name = "shek\nthar";
// console.log(Name);
// console.log(Name.length);

// let Name = new String("shekhar");
// console.log(Name);

// let a = "shekhar";
// console.log(a.toUpperCase());
// console.log(a.toLowerCase());

// let a = "shekhar";
// a.slice(2, 4);
// console.log(a.slice(2));
// console.log(a.slice(2, 4));
// console.log(a);

// let firstname = "MostlySunuunyMonth";
// console.log(firstname.slice(5));
// console.log(firstname.slice(2, 6));
// console.log(firstname.slice(6, 8));
// console.log(firstname.slice(1));

// console.log(a.length);
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[3]);

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(7, 13);
// console.log(part);

// let sting = "shekharsingh";
// let newString = sting.replace("singh", "kumar");
// console.log(newString);

// let url = "http://127.0.0.1:5503/index.html%20blog";
// console.log(url.replace("%20", "-"));

// let string = "     shekhar      ";
// string.trim();
// console.log(string.trim());

// let b = "ram";
// console.log(b);

// let Name = "ShekharSingh";
// let Name1 = 'ShekharSingh';

// let newString = new String("Outline_20#Timeline");
// let nextString = newString.slice(-12, 10);
// console.log(nextString);

// console.log(typeof newString);

// let newString = new String("Outline_20#Timeline");
// console.log(newString);

// console.log(newString[0]);
// console.log(newString.__proto__);

// let str = "SoftFlew";
// str[0] = "F";
// console.log(str[0]);
// console.log(str);

// let str1 = "F" + str.slice(1);
// console.log(str1);
// console.log(str);

// console.log(newString.charAt(3));
// console.log(newString.indexOf("2"));

// let anotherString = newString.substring(0, 5);
// console.log(anotherString);
// console.log(typeof anotherString);

// console.log(newString.includes("shekhar"));
// console.log(Name.includes("Shekhar"));

// console.log(Name.split(""));

// const str = "The quick brown fox jumps over the lazy dog.";

// const words = str.split(" ");
// console.log(words);
// const chars = str.split("");
// console.log(chars[8]);
// console.log(chars);

// let fruits = ["apple", "banana", "orange"];

// let name1 = "shekhar";
// let name2 = "Singh";
// let name3 = name1.concat(name2);
// console.log(name3);

// let n = [1, 2, 3, 4];
// console.log(n.toString());
// console.log(typeof n.toString());
// console.log(n);

// console.log(typeof n);
// let yes = 10;

// let n = [1, 2, 3, 4];
// n.pop();
// console.log(n.pop());
// console.log(n);

// console.log(n.push(20));
// console.log(n);

// n.push(20);
// console.log(n.push()); // it return the new array length
// console.log(n);

// let n = [1, 2, 3, 4];
// n.shift();
// console.log(n.shift());
// console.log(n);

// let n = [1, 2, 3, 4];
// console.log(n.unshift());
// n.unshift(78);

// console.log(n);

// let n = [10, 20, 30, 40, 50, 60];
// delete n[0];
// console.log(n);
// console.log(n.length);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.sort();
// console.log(fruits); // Output: ["Apple", "Banana", "Mango", "Orange"]

// let Name = ["Shekhar", "Raushan", "Ramesh", "Ashish"];

// const StudentNames = Name.map((item, index) => {
//   return console.log(item);
// });

// console.log(StudentNames);

// const NameItemsValue = Name.map((item, index) => {
//   return console.log(item);
// });

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map((num) => num * 2);
// console.log(doubledNumbers);

// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.filter((num) => num % 2 === 0);
// console.log(evenNumbers);

// let n = [10, 20, 30, 40, 50, 60];

// let newItem = n.filter((num) => {
//   return num > 10;
// });

// let nextIem = n.filter((item) => {
//   return item == 10;
// });

// console.log(newItem);
// console.log(nextIem);

// const countries = [
//   { id: 1, name: "India" },
//   { id: 2, name: "Pakistan" },
//   { id: 3, name: "Afghanistan" },
//   { id: 4, name: "America" },
//   { id: 5, name: "US" },
//   { id: 6, name: "London" },
// ];

// let newid = countries.map((item) => {
//   return console.log(item.id + 10);
// });

// let countryName = countries.map((item) => {
//   console.log(item.name);
//   return item.name;
// });

// console.log(newid);

// const books = [
//   {
//     id: 1,
//     title: "The Alchemist",
//     author: "Paulo Coelho",
//     year: 1988,
//     genre: "Fiction",
//   },

//   {
//     id: 1,
//     title: "The Alchemist",
//     author: "Paulo Coelho",
//     year: 1988,
//     genre: "Fiction",
//   },

//   {
//     id: 1,
//     title: "The Alchemist",
//     author: "Paulo Coelho",
//     year: 1988,
//     genre: "Fiction",
//   },
//   {
//     id: 2,
//     title: "Atomic Habits",
//     author: "James Clear",
//     year: 2018,
//     genre: "Self-help",
//   },
//   {
//     id: 3,
//     title: "To Kill a Mockingbird",
//     author: "Harper Lee",
//     year: 1960,
//     genre: "Classic",
//   },
//   {
//     id: 4,
//     title: "The Pragmatic Programmer",
//     author: "Andrew Hunt & David Thomas",
//     year: 1999,
//     genre: "Programming",
//   },
// ];

// let newBooks = books.filter((items) => {
//   return items.genre === "Fiction";
// });

// console.log(newBooks);

// const mobileBrands = [
//   { brand: "Apple", price: 80000 },
//   { brand: "Samsung", price: 60000 },
//   { brand: "OnePlus", price: 45000 },
//   { brand: "Xiaomi", price: 25000 },
//   { brand: "Realme", price: 20000 },
// ];

// const totalAmount = mobileBrands.reduce((acc, item) => {
//   return acc + item.price;
// }, 0);

// console.log(totalAmount);

// let array1 = [1, 2, 3, 4, 5, 6];
// let array2 = [52, 45, 85, 645, 2, 5];
// let newArray = array1.concat(array2);
// console.log(newArray);
// console.log(array1);
// console.log(array2);

// let num = [52, 45, 85, 645, 2, 5];
// num.sort();
// console.log(num);

// let compair = (a, b) => {
//   return a - b;
// };

// let num = [52, 45, 85, 645, 2, 5];
// num.sort(compair);
// console.log(num);

// let compair = (a, b) => {
//   return b - a;
// };
// let num = [52, 45, 85, 645, 2, 5];
// num.sort(compair);
// console.log(num);

// let num = [52, 45, 85, 645, 2, 5];
// let newnum = num.slice(3);
// console.log(newnum);
// let newNum = num.slice(1, 3);
// console.log(newNum);
// console.log(num);

// let array = [
//   551, 22, 3, 14, 15, 26, 30, 42, 7, 551, 22, 3, 14, 15, 26, 30, 42, 7,
// ];
// console.log(array.length);
// console.log((array[10] = "shekhar"));
// console.log(array);
// array.splice(2);
// console.log(array);
// console.log(array);

// console.log(array.splice(2, 4));
// console.log(array);

// array.splice(2, 4, 99, 120, 150, 191, 221);
// console.log(array);

// let num = [52, 45, 85, 645, 2, 5];
// for (i = 0; i < num.length; i++) {
//   console.log(num[i]);
// }

// let num = [52, 45, 85, 645, 2, 5];
// let num2 = [54, 84, 75, 21];
// for (let i = 0; i < num2.length; i++) {
//   num.push(num2[i]);
// }
// console.log(num);

// let num = [52, 45, 85, 645, 2, 5];
// for (let i = 0; i < num.length; i++) {
//   for (j = 0; j < num.length; j++) {
//     if (num[i] <= num[j]) {
//       let arrange = num[i];
//       num[i] = num[j];
//       num[j] = arrange;
//     }
//   }
// }
// console.log(num);

// const user = {
//   name: "shekhar",
//   age: "30",
//   email: "shekharsing@gmail.com",
//   lastlogin: ["monday", "friday"],
//   fullName: {
//     userFullname: {
//       firstName: "shekhar",
//       lastName: "singh",
//     },
//   },
// };

// console.log((user.location = "lucknow"));
// console.log(user);

// console.dir(user);

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   isStudent: false,
// };

// console.log(person.firstName);
// console.log((person.firstName = "Softflew"));
// console.log((person.location = "lucknow"));
// console.log(
//   (person.one = () => {
//     let a = 20;
//     console.log(a);
//   })
// );
// console.log(person);

// console.dir(user);

// console.log(Object.keys(user));

// console.log(user.fullName.userFullname.lastName);

// console.log(user.age);
// console.log(user["email"]);
// console.log(user["fullName"]);

// user.email = "shekharSingh@google.com";
// user.location = "Lucknow";
// console.log(user);

// user.one = function () {
//   console.log("Hello user");
// };

// console.log(user.one());
// console.log(user);

// user.anotherOne = function () {
//   console.log(`Hello user ${this.name}`);
// };
// console.log(user.anotherOne());

// user.anotherOne = function () {
//   console.log(`Hello user ${this.fullName.userFullname.lastName}`);
// };
// console.log(user.anotherOne());

// const obj1 = { 1: "a", 2: "b" };
// const obj2 = { 3: "c", 4: "d" };
// const obj3 = { 5: "e", 6: "f" };
// const obj4 = { ...obj1, ...obj2, ...obj3 };

// console.log(obj4);

// console.log(Object.keys(obj1));

// console.log(Object.keys(obj1).length);
// console.log(Object.values(obj1));
// console.log(Object.values(obj1).length);

// const users = [
//   { id: 1, name: "Alice", age: 30 },
//   { id: 2, name: "Bob", age: 24 },
//   { id: 3, name: "Charlie", age: 35 },
// ];

// console.dir(FontAwesomeKitConfig);

// console.log(users[1].name);

//object destructuring .....ES6 new featurs
// const color = ["red", "pink", "blue", "black"];

// console.log(color[0]);
// console.log(color[1]);
// console.log(color[2]);
// console.log(color[3]);

// const [a, b, c, d] = color;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// const [, , , d] = color;
// console.log(d);

//destracture array as an object ...
// const { 3: c } = color;
// console.log(c);

// const user = {
//   name: "shekhar",
//   age: "30",
//   email: "shekharsing@gmail.com",
//   lastlogin: ["monday", "friday"],
//   fullName: {
//     userFullname: {
//       firstName: "shekhar",
//       lastName: "singh",
//     },
//   },
// };

// let userAge = user.age;
// console.log(userAge);

// const { name, age } = user;
// console.log(name);
// console.log(age);

// here we can not use other variable, we have to use key nae only ...
// if we want to store key value with different variable name then we have
// to do this

// const { name: username, age: userage } = user;
// console.log(username);
// console.log(userage);

//multi level destructuring .....

// const {
//   fullName: { userFullname },
// } = user;

// console.log(userFullname);

// const {
//   fullName: {
//     userFullname: { lastName },
//   },
// } = user;

// console.log(lastName);

// destructuring in function .....
// function printobj(user) {
//   console.log(user);
// }
// printobj(user);

// function printobj({ name, age }) {
//   console.log(name, age);
// }
// printobj(user);

// function printobj(firstname) {
//   console.log(firstname);
// }
// printobj(user.fullName.userFullname.firstName);

// ............................

// console.log("hello");
// window.console.log("hello 2");
// console.dir(window);
// console.dir(window.document);
// console.dir(window.document.body);

// document.body.style.background = "red";

// console.log(document.body);
// document.body.style.background = "green";

// console.log(praid.innerHTML);
// // praid.innerHTML = `<i>hey i am italic</i>`;
// // console.log(praid.outerHTML);
// praid.outerHTML = `<i>hey i am italic</i>`;

// let a = setTimeout(function () {
//   alert("i am inside of setTimeOut");
// }, 5000);
// clearTimeout(a);
// console.log(a);

// let a = setTimeout(function () {
//   alert("i am inside of setTimeOut");
// }, 5000);

// let b = prompt("Do you want to run the settimeout?");
// if ("no" == b) {
//   clearTimeout(a);
// }
// let promise = new promise(function (resolve, reject) {

// });

// console.log("hello one");
// setTimeout(function () {
//   console.log("hello in 2 seconds");
// }, 2000);

// console.log("my name is " + "hello3");

// let p = new Promise((resolve, reject) => {});

// let person = {
//   Name: "shekhar",
//   city: "lucknow",
// };

// person.age = 30;
// console.log(person);

// person["country"] = "India";
// console.log(person);

// const Name = +"shekhar";
// console.log(typeof Name);

// let age = 18;
// age > 10 && age < 20 && age == 18 ? console.log(true) : console.log(false);

// let age = 40;
// age < 21 || age != 18 || age == 40 ? console.log(true) : console.log(false);

// console.log(10 == "10");
// console.log(10 === "10");

// console.log(10 != "10");
// console.log(10 !== "10");

// if (undefined) {
//   console.log("yes");
// }
// let shoes = true;
// if (shoes) {
//   console.log("shoes is available");
// }

// const multiLineString = `This is a string
//     that spans
//     multiple lines.`;
// console.log(multiLineString);

// console.dir(document);

// document.getElementsByTagName("header");

// document.getElementById("DomId");
// let A = document.getElementById("DomId");
// console.log(A);
// console.dir(A);

// document.getElementsByClassName("DomClass");
// let A = document.getElementsByClassName("DomClass");
// console.log(A);

// document.getElementsByClassName("photoIco");
// let B = document.getElementsByClassName("photoIco");
// console.log(B);
// console.dir(B);

// let A = document.getElementsByClassName("fun");
// console.log(A[0].tagName);

// A[0].innerText = "apple";

// let A = document.querySelectorAll(".photoIco");
// A[3].innerHTML = "<h1>text 1234566 </h1>";
// console.log(A[3].innerHTML);

// document.getElementById("fru").innerHTML = `<pre class="fun">
//         A JavaScript function is a block of code designed to perform a particular task.
//         A JavaScript function is executed when "something" invokes it (calls it).

//         A function is also return a value. The value is returned back to the caller

//         Feature Functions?
//         With functions you can reuse code
//         You can write code that can be used many times.
//         You can use the same code with different arguments, to produce different results.
//     </pre>
// `;

// console.dir(window);

// let Element = document.getElementById("figid");

// console.log(Element);

// console.log(document.querySelector(".figure1"));

// console.log(document.querySelectorAll("h1"));
// console.log(document.querySelector("#figid"));

// console.log(document.getElementsByClassName("fi"));
// console.log(document.getElementsByTagName("fi"));

// document.getElementsByClassName("Same");
// let A = document.getElementsByClassName("Same");
// console.log(A);
// A[0].getAttribute("class");
// console.log(A[0].getAttribute("class"));
// A[0].setAttribute("class", "Sty");

// let A = document.querySelector(".Sty");
// A.getAttribute("class");
// A.classList.add("ame");
// A.classList.("ame");

// console.log(A.getAttribute("class"));

// let ele = document.createElement("button");
// ele.innerText = "hello hi tum sab";
// let uiEle = document.querySelector(".gallerytext");
// uiEle.remove();
// let A = document.getElementById("fru").innerHTML;

// document.getElementById("fru").prepend(A);

// document.getElementsByTagName("span");
// let C = document.getElementsByTagName("span");
// console.log(C);

// document.querySelector("p");
// let D = document.querySelector("p");
// console.log(D);

// document.querySelector(".light");
// let D = document.querySelector(".light");
// console.log(D);

// document.querySelectorAll(".light");
// let E = document.querySelectorAll(".light");
// console.log(E);

// document.querySelector("#DomId");
// let F = document.querySelector("#DomId");
// console.log(F);

// document.querySelectorAll("#DomId");
// let G = document.querySelectorAll("#DomId");
// console.log(G);

// document.querySelector("#Dom");
// let F = document.querySelector("#Dom");
// console.log(F);
// console.log(F.tagName);
// console.log(F.children);
// console.log(F.firstChild);
// console.log(F.lastChild);
// //

// let hElement = document.querySelector(".dom1");
// console.log(hElement);

// let div = document.querySelector("#fru");
// console.dir(div);
// console.dir(div.innerText);

// let div = document.querySelector("#fru");
// console.log(div);
// console.log(div.innerHTML);
// div.innerHTML = "<div> <h1> Hello!   </h1> </div>";
// let c = div.innerHTML;
// console.log(c);

// let H = document.querySelector("#Hide");
// console.log(H.textContent);
// H.textContent = "singh";
// console.log(H.textContent);

// problem create a h1 tag with some text and some more text using js

// document.getElementById("problem1");
// let A = document.getElementById("problem1");
// let B = "and I am a child of div with id problem1";
// A.innerText;
// console.log(A.innerText);
// let C = A.innerText.concat(B);
// console.log(C);

// create 3 divs with same class name and add some uniqe text to all of them
// document.getElementsByClassName("Same");
// let A = document.getElementsByClassName("Same");
// console.log(A);
// console.log(A[0]);
// console.log(A[1]);
// console.log(A[2]);
// A[0].innerText = "Nwe 1";
// A[1].innerText = "Nwe 2";
// A[2].innerText = "Nwe 3";

// document.getElementById(id).attribute = new value();

// document.getElementById("Att").id;
// let A = document.getElementById("Att").getAttribute("id");

// console.log(A);
// document.getElementById("Att").setAttribute("class", "My_New_Name");
// document.getElementById("Att");
// let A = document.getElementById("Att");

// document.getElementById("Att").children;
// let B = document.getElementById("Att").children;

// console.log(B);

// let C = B[0].getAttribute("src");
// console.log(C);

// B[0].setAttribute("src", "./Image/person_7.jpg.webp");

// .children
// B[0].getAttribute("src");
// let C = B[0].getAttribute("src");
// console.log(C);

// B[0].src = "./Image/person_7.jpg.webp";
// console.log(B[0]);

// let A = document.querySelector(".logo").children;
// console.log(A);
// A[0].getAttribute("href");

// A.children.style.color = "red";
// A[0];
// console.log(A[0]);

// console.log(A[0].getAttribute(href));

// document.getElementById("Att").src = "./Image/person_7.jpg.webp";

// document.getElementById("Att").setAttribute("class", "myClass");

// let B = document.querySelector(".Sty");
// console.log(B);
// console.log(B.style);
// B.style.backgroundColor = "red";

// document.getElementsByClassName("Sty");
// let C = document.getElementsByClassName("Sty");
// C[0].style.backgroundColor = "green";
// console.log(C);

// document.querySelector(".Sty").style.backgroundColor = "yellow";
// document.querySelector(".Sty").style.fontSize = "30px";
// document.querySelector(".Sty").innerText = "Hello hi!";
// document.querySelector(".Sty").style.color = "white";

// let newEle = document.createElement("button");
// newEle.innerText = `Read Now`;

// let Ele = document.querySelector(".Sty");
// Ele.append(newEle);
// Ele.before(newEle);
// Ele.prepend(newEle);
// Ele.after(newEle);
// console.log(Ele);

// let newEle = document.createElement("div");
// newEle.innerText = `Read Now`;

// let Ele = document.querySelector(".Sty");
// Ele.append(newEle);

// let A = document.querySelector(".ame");
// A.setAttribute("id", "jssemid");
// console.log(A);

// let A = document.getElementById("Att");
// console.log(A);

// A.children;
// let B = A.children;
// console.log(B);

// B[0];
// B[0].getAttribute("src");
// console.log(B[0].getAttribute("src"));

// B[0].setAttribute("src", "Image/img_3.jpg.webp");

// document.querySelector(".fun");
// const RemEl = document.querySelector(".fun");
// document.querySelector(".fun").remove();

// RemEl.remove();

// let prevSty = document.querySelector(".Pitch");
// prevSty.setAttribute("class", "newStyle");

// prevSty.classList.add("newStyle");
// prevSty.classList.remove("newStyle");

// const handelbutton = () => {
//   console.log("click me");
// };

// prevSty.classList.add("newStyle");
// prevSty.classList.remove("newStyle");

// document.querySelector(".Sty").onmouseover = () => {
//   console.log("you are inside me");
// };

// document.querySelector("#BtnI").onclick = () => {
//   console.log("i am javascript page");
// };

// document.querySelector("#BtnI").onclick = (event) => {
//   document.querySelector("#BtnI").style.color = "red";
//   console.log(event);
// };

// document.querySelector("#BtnI").onmouseover = (event) => {
//   document.querySelector("#BtnI").style.background = "blue";
//   //   console.log(kuchv.pointerType);
//   console.log(event);
// };

// let color = () => {
//   document.querySelector("#BtnI").style.color = "red";
//   let text = document.createElement("p");
//   text.innerText = `I am clicked`;
//   let Ele = document.querySelector("#BtnI");
//   Ele.append(text);
//   console.log("i am making text color red");
// };

// document.querySelector("#firstNameInp").onchange = (event) => {
//   console.log(event);
//   console.log(event.target.value);
//   let result = event.target.value;
//   let text = document.createElement("p");
//   text.innerText = `${result}`;
//   document.querySelector("#firstNameInp").before(result);
// };

// document.querySelector("#BtnI").addEventListener("click", () => {
//   console.log("i am javascript page");
// });

// document.querySelector("#BtnI").addEventListener("click", color);

// document.querySelector("#BtnI").removeEventListener("click", color);

// let div = document.querySelector(".Sty");
// div.onmouseover = () => {
//   console.log("you are inside div");
// };

// document.querySelector(".nbt").onclick = (e) => {
//   console.log(e.target);
// };

// document.querySelector(".nbt").onclick = () => {
//   console.log("i am boss");
// };

// console.log(document.querySelector(".nbt"));

// document.querySelector(".Sty");
// let div = document.querySelector(".Sty");
// div.onmouseover = (event) => {
//   console.log(event);
//   console.log(event.type);
//   console.log(event.target);
// };

// document.querySelector(".Evtbt");
// let Evl = document.querySelector(".Evtbt");
// Evl.addEventListener("click", () => {
//   console.log("button was clicked");
// });

// Evl.removeEventListener("click", () => {
//   console.log("button was clicked");
// });

// let sum = () => {
//   console.log(30 + 40);
// };

// document.querySelector(".Evtbt").addEventListener("click", sum);

// document.querySelector(".Evtbt").removeEventListener("click", sum);

// document.querySelector(".Evtbt").addEventListener("click", () => {
//   console.log(40 - 30);
// });

// const string = () => {
//   console.log("shekhar" + "singh");
// };

// document.querySelector(".Evtbt").addEventListener("click", string);

// document.querySelector(".Evtbt").removeEventListener("click", string);

// console.dir(document.body);

// console.log("Hello 1");
// console.log("Hello 2");
// console.log("Hello 3");
// setTimeout(() => {
//   console.log("hello");
// }, 5000);
// console.log("Hello 4");
// console.log("Hello 5");

// function add(a, b) {
//   console.log(a + b);
// }

// function operations(a, b, callBackFun) {
//   callBackFun(a, b);
// }

// operations(10, 30, add);

// let promise = new Promise((resolve, reject) => {
//   reject(console.log("item returnd "));
// });

// async function one() {
//   console.log("hello!");
// }

// function longestWord(string) {
//   let str = string.split(" ");
//   let longest = 0;
//   let word = null;
//   for (let i = 0; i < str.length; i++) {
//     if (longest < str[i].length) {
//       longest = str[i].length;
//       word = str[i];
//     }
//   }
//   return word;
// }

// console.log(longestWord("Hi I am a Software Developer"));

// const A = document.getElementsByClassName("logo");
// console.log(A);
// A[0].style.backgroundColor = "red";
// const B = A[0].children;
// console.log(B);
// B[0].style.color = "white";

// const A = document.querySelector("#problem1");
// A.getAttribute("id");
// const B = A.getAttribute("id");
// console.log(B);
// // A.setAttribute("id", "problem2");
// A.classList.add("proclass2");

// const inputfun = (event) => {
//   event.preventDefault();
//   console.log(event.target.value);
//   const Name = event.target.value;
//   console.log(Name);
// };

// calling function

// function add(a, b) {
//   console.log(a + b);
// }

// function operations(a, b, add) {
//   add(a, b);
// }

// operations(10, 30, add);

// call back hell example

// async function processUserOrder(userId) {
//   try {
//     const user = await getUser(userId);
//     const orders = await getOrders(user.id);
//     const processed = await processOrders(orders);
//     const confirmation = await sendEmail(processed);
//     console.log("Order Processed:", confirmation);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }
// processUserOrder(userId);

// let promise = new Promise((resolve, reject) => {
//   // resolve(console.log("i am resolved"));
//   reject(console.log("i am rejected"));
// });

// console.log(promise);

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("i am a promise");
//     resolve("resolve");
//   });
// };
// let promise = getPromise();
// promise.then((res) => {
//   console.log("promise fullfilled", res);
// });

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("i am a promise");
//     reject("resolve");
//   });
// };
// let promise = getPromise();
// promise.catch((err) => {
//   console.log("promise rejected" , err);
// });

// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("success");
//     }, 3000);
//   });
// }
// //promise chain
// getData(1).then((res) => {
//   console.log(res);
//   getData(2).then(() => {
//     console.log(res);
//   });
// });

// function getData(dataId) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("success");
//     }, 3000);
//   });
// }
// async function getAllData() {
//   console.log("getting data1.......");
//   await getData(1);
//   console.log("getting data2.......");
//   await getData(2);
//   console.log("getting data3.......");
//   await getData(3);
//   console.log("getting data4.......");
//   await getData(4);
//   console.log("getting data5.......");
//   await getData(5);
// }

// getAllData();

// local Storage

// first we have to create key and value in localstorage
localStorage.setItem("age", "30");
localStorage.setItem("address", "lucknow");
const nameElement = document.querySelector(".user-name");
// nameElement.innerHTML = localStorage.myname;
nameElement.innerHTML = localStorage.getItem("myname");
const nameEmail = document.querySelector("#inp-email");
nameEmail.addEventListener("input", (event) => {
  localStorage.email = event.target.value;
  const emailElement = document.querySelector(".user-email");
  // emailElement.innerHTML = localStorage.email;
  emailElement.innerHTML = localStorage.getItem("email");
});
