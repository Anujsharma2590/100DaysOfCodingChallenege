// function createStudent(n, a) {
//     var student = {
//         this.name = n;
//         this.age = a;
//     };
// }

// var student = new createStudent("anuj", 34);

// console.log("student" , student);
// function sum() {
//   return this.a + this.b + this.c;
// }

// var o = {
//   a: 1,
//   b: 2,
//   c: 3,
//   get average() {
//     return (this.a + this.b + this.c) / 3;
//   }
// };

// Object.defineProperty(o, 'sum', {
//     get: sum, enumerable: true, configurable: true});

// console.log(o.average, o.sum); // 2, 6

const newObj = new Object();

console.log(newObj);

const newObj1 = {};

console.log(newObj1);

function Objectsa() {
    
}

const newObj2 = new Objectsa();

console.log(newObj2);

const newArr = new Array();

console.log(typeof (newArr));

// function person(firstName, lastName, age) {
//   const person = {};
//   person.firstName = firstName;
//   person.lastName = lastName;
//   person.age = age;
//   return person;
// }
// const mike = new person('mike', 'grand', 23);
// console.log(mike);

function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}
const mike = new Person('mike', 'grand', 23);
console.log(mike);