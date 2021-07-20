

// var obj = new Object();
// console.log(obj);

// const person = {
//   isHuman: false,
//   printIntroduction: function() {
//     console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//   }
// };

// const me = Object.create(person);

// me.name = 'Matthew'; 
// me.isHuman = true; 

// me.printIntroduction();
// console.log(person);
// console.log(me);

// var parents ={
//     father:'krishna',
//     mother:'priya'
// }

//  var son = Object.create(parents)

// son.name='raj'

// var daughter =Object.create(parents)

// daughter.name = 'rashmi'

//  console.log(parents);
// console.log(son);
// oco = Object.create({});
// console.log(oco);
// console.log(daughter);

var obj1 = new Object();

console.log(obj1);
var obj2 = Object.create(obj1);
console.log(obj2);