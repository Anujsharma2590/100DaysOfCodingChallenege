let objData = `<ul>
 <li>In JavaScript, objects are king. If you understand objects, you understand JavaScript.</li>
 <li>JavaScript variables can also contain many values.</li>
 <li>Objects are variables too. But objects can contain many values.</li>
 <li>Object values are written as name : value pairs (name and value separated by a colon).</li>
 <li>A JavaScript object is a collection of named values</li>
 </ul>`;

let arrData = `<ul>
 <li>JavaScript arrays are used to store multiple values in a single variable.</li>
 <li>An array is a special variable, which can hold more than one value at a time.

If you have a list of items (a list of car names, for example), storing the cars in single variables could look like this:</li>
 <li>syntax :  const array_name = [item1, item2, ...];    </li>
 <li>You can also create an array, and then provide the elements:</li>
 <li>You access an array element by referring to the index number:</li>
 </ul>`;

 let funData = `<ul>
 <li>A JavaScript function is a block of code designed to perform a particular task.</li>
 <li>A JavaScript function is executed when "something" invokes it (calls it).</li>
 <li>A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).</li>
 <li>The parentheses may include parameter names separated by commas:
(parameter1, parameter2, ...)</li>
 <li>A Function is much the same as a Procedure or a Subroutine, in other programming languages.</li>
 </ul>`;

 let strData = `<ul>
 <li>The JavaScript string is an object that represents a sequence of characters.</li>
 <li>There are 2 ways to create string in JavaScript

By string literal
By string object (using new keyword)
</li>
 <li>The string literal is created using double quotes. The syntax of creating string using string literal is given below:

var stringname="string value";  </li>
 <li>The syntax of creating string object using new keyword is given below:

var stringname=new String("string literal");  </li>
 <li>The JavaScript String charAt() method returns the character at the given index.</li>
 </ul>`;

 let numData = `<ul>
 <li>Number is a primitive wrapper object used to represent and manipulate numbers like 37 or -9.25.</li>
 <li>The Number constructor contains constants and methods for working with numbers. Values of other types can be converted to numbers using the Number() function.</li>
 <li>When used as a function, Number(value) converts a string or other value to the Number type. If the value can't be converted, it returns NaN.</li>
 <li>Number('123')     // 123
Number('123') === 123 /// true
Number('12.3')    // 12.3
Number('12.00')   // 12</li>
 <li>Number('123e-1')  // 12.3
Number('')        // 0
Number(null)      // 0
Number('0x11')    // 17
Number('0b11')    // 3</li>
 </ul>`;

 let nullData = `<ul>
 <li>The value null represents the intentional absence of any object value. It is one of JavaScript's primitive values and is treated as falsy for boolean operations.</li>
 <li>// foo is known to exist now but it has no type or value:
var foo = null;
foo; //null</li>
 <li>typeof null          // "object" (not "null" for legacy reasons)
typeof undefined     // "undefined"
null === undefined   // false</li>
 </ul>`;

 let undefData = `<ul>
 <li>The global undefined property represents the primitive value undefined. It is one of JavaScript's primitive types.</li>
 <li>undefined is a property of the global object. That is, it is a variable in global scope. The initial value of undefined is the primitive value undefined.</li>
 <li>Note: The strict equality operator (as opposed to the standard equality operator) must be used here, because x == undefined also checks whether x is null, while strict equality doesn't. This is because null is not equivalent to undefined.</li>

 </ul>`;




let objBtn = document.querySelector("#obj");
let arrBtn = document.querySelector("#arr");
let funBtn = document.querySelector("#fun");
let strBtn = document.querySelector("#str");
let numBtn = document.querySelector("#num");
let nullBtn = document.querySelector("#null");
let undefBtn = document.querySelector("#undef");


  objBtn.addEventListener("click", function () {
    document.getElementById("text-area").innerHTML = objData;
});  
  arrBtn.addEventListener("click", function () {
    document.getElementById("text-area").innerHTML = arrData;
  });
  funBtn.addEventListener("click", function () {
    document.getElementById("text-area").innerHTML = funData;
  });
  strBtn.addEventListener("click", function () {
    document.getElementById("text-area").innerHTML = strData;
  });
  numBtn.addEventListener("click", function () {
    document.getElementById("text-area").innerHTML = numData;
  });
  nullBtn.addEventListener("click", function () {
    document.getElementById("text-area").innerHTML = nullData;
  });
  undefBtn.addEventListener("click", function () {
    document.getElementById("text-area").innerHTML = undefData;
});  


