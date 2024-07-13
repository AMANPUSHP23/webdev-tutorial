alert("hello" + " " + "world");
var message ="hello";
var name = "angela";
alert(message + "there, " +  " " + name);
 // length


//  Variable Rules

// • Variable names are case sensitive; "a" & "A" is different.
// • Only letters, digits, underscore(_) and $ is allowed. (not even space)
// • Only a letter, underscore() or $ should be 1st character.
// • Reserved words cannot be variable names.



// let, const & var

// var: Variable can be re-declared & updated. A global scope variable.
// let: Variable cannot be re-declared but can be updated. A block scope variable.
// const: Variable cannot be re-declared or updated. A block scope variable


// {
//     let a = 5 ;
//     console.log(a);
//     let a = 10 ;// cannot be redeclare
//     console.log(a);
//  }
// {
//         let a =6;
//         console.log(a);// can be declare same variable in other block 
// }



// ******Data Types in JS*****

// Number, String, Boolean, Undefined, Null, BigInt, Symbol
// Primitive (7)

// Non-primitive(array,function)
// Objects(collection of value )
//example:
// const student = {
//     fullName: "Rahul Kumar",//key:value
//     age: 20,
//     cgpa: 8.2,
//     isPass: true
//     };

// student["age"]=student["age"]+1;//we can update value of object student

// student["name"]="aman pushp";//update name 

// console.log(student.age);or console.log(student["age"]); //we can access

// const product = {
//     title: "Ball Pen",
//     rating: 4,
//     offer: 5,
//     price: 270,
    
//     };

// console.log(student);


// const profile = {
//     username: "@amanpushp",
//     I
//     isFollow: false,
//     followers: 123,
//     following: 123,
//     };

//     console.log(typeof profile["username"]);//string

//     console.log(typeof profile);//object

//in console
// > "abcd" + 123

// <<<'abcd123'

// > "123" + 123

// << '123123'
// >


// let value=4;//put string/boolean(true/false)/undefind(remove 4)/null(show object tyoe in console)/Bigint("1123")/symbol('hello')
// console.log(typeof value);

// *****Operators in JS*********

// Used to perform some operation on data

// Arithmetic Operators   +, -, *, /
// • Modulus
// • Exponentiation
// • Increment
// .Decrement



//Artimetic Operators

// let a = 5;
// let b = 2;

// console.log("a = ", a, " & b = ", b);
// console.log("a + b = ", a + b);
// console.log("a - b =",a - b);
// console.log("a * b = ", a * b);
// console.log("a / b = ", a / b);
// console.log("a % b = ", a % b);
// console.log("a ** b = ", a ** b);//a^b

//Unary Operator

// let a = 5;
// let b = 2;
// console.log("a = ", a, " & b = ", b);
// a++;//a+1 post
// b--;//a-1 post
// ++a;//pre 
// --a;//pre
// console.log(a);


// Assignment Operators

// assign values
// = += *= %= **=

// let a = 5;
// let b = 2 ;
// a **= 4;1// a = a ^ 4

// console.log("a = ", a); //1


// Comparison Operators

// Equal to            ==
// Equal to & type     ===
// Not equal to        !=
// Not equal to & type !==
// >, >=, <, < =


// let a = 5 ;
// let b = 5;
// console.log("5 ==5", a == b); //false

// let a = 5 ;//number
// let b = "5";//string
// console.log("5 ==5", a == b); //true(problem it conver into string)

// let a = 5 ;//number
// let b = "5";//string
// console.log("5===5", a === b); //false(strictly chack its value and type )

// Logical Operators

// LogicalAND &&
// Logical    OR
// Logical NOT !


// //Logical Operators
// let a = 6 ;
// let b = 5 ;
// let cond1 = a > b; //true 
// let cond2 = a === 6; //true 
// console.log("cond1 && cond2 = ", cond1 && cond2);// return false
// console.log("cond1 || cond2 = ", a<b || a===6);// return true(pipe symbole ||)




// Conditional Statements


// To implement some condition in the code

// if Statement
//let mode;
// let color;
// if(mode === "dark-mode") {
// color = "black";
// }


//Conditional Statements
// let age = 16;
// if (age >= 18) {
// console.log("you can vote");
// }
// if (age < 18) {
// console.log("you CANNOT vote");
// }


// let mode = "dark"; let color;
// if(mode === "dark") 
//     {
//          color = "black"; 
//         }
// if(mode === "light")
//      { 
//         color = "white";
//      }
// console.log(color);



// if-else Statement


// let color;
// if(mode === "dark-mode") 
//     {
// color = "black";
// } else {
// color = "white";
// }


// odd or even
// let num = 20;
// if (num % 2 === 0) {
// | console.log(num, "is even");
// } else {
// console.log(num, "is odd");
// }




// else-if Statement

// if(age < 18) {
// console.log("junior");
// } else if (age > 60) {
// console.log("senior");
// } else {
// console.log("middle");
// }


// let mode = "dark";
// let color;
// if (mode === "dark") { I
// color = "black";
// } else if (mode === "blue") {
// color = "blue";
// } else if (mode === "pink") {
// color = "pink";
// } else {
// | color = "white";
// }
// console.log(color);


// Ternary Operators

// condition ? true output : false output
// age > 18 ? "adult" : "not adult";



//Conditional Statements
// let age = 25;
// age >= 18 ? console.log("adult") : console.log("not adult");


// let fName=prompt("hello");//alert with input value 
// console.log(fName);

// let num = prompt("enter a number:");


// if (num % 3 === 0) {

// console.log(num, "is a multiple of 3");

// } else {

// console.log(num, "is NOT a multiple of 3");

// }




// let score = 75;
// let grade;
// if ( score >= 90 && score <= 100) {
// grade = "A";
// } else if (score >= 70 && score <= 89) 
//     {
// grade = "B";
// } else if (score >= 60 && score <= 69)
//      { grade = "C";
// } else if (score >= 50 && score <= 59) 
//     { grade = "D";
// } else if (score >= 0 && score <= 49)
//      {
// grade = "F";
// }
// console.log("according to your scores, your grade was: ", grade);



// for Loop


// for (let i = 1; i <= 5; i++) {
// console.log("aman pushp");
// }




// for (let num = 0; num = 100; num++) {
//     if (num % 2 !== 0) {
//     //odd number I
//     console.log("num =", num);
//     }
//     }



// let gameNum = 25;
// let userNum = prompt("Guess the game number: ");
// while(userNum !== gameNum) { //game
// userNum=prompt("you entered wrong number gues again: ");
// }

// console.log("congratulations, you entered the right number");

//while loop

// let i = 1;
// while (i <= 5) {
// console.log("Aman Pushp");
// i++;
// }


//do-while loop

// let i = 20 ;
// do {
// console.log("Aman Pushp");
// i++;
// } while (i <= 10) ;


//for-of loop

// let str = "JavaScript";
// let size = 0;
// for (let i of str) {
// console.log("i=", i);
// size++; 
// }
// console.log("string size = ", size); //10
I

//for in loop


// let student = {
//     name: "Aman Pushp",
//     age: 20,
//     cgpa: 7.5,
//     isPass: true,
//     };
//     for (let key in student) {
//     console.log("key=", key, value=", student [key]);
//     }




// Strings in JS


// String is a sequence of characters used to represent text

// Create String
// let str = "Aman Pushp";

// String Length
// str.length

// String Indices
// str[0], str[1], str[2]




// let obj = {
//     item: "pen",
//     price: 10,
//     };
//     let output = `the cost of ${obj.item} is ${obj.price} rupees`; console.log(output);
//     or //console.log("the cost of", obj.item, "is", obj.price, "rupees");


    //Template Literals

    // let specialString = `This is a template literal`; console.log(typeof specialString);

    // let specialString = 'This is a template literal  ${1+2+3+4}';
    // console.log(typeof specialString);
    // console.log(specialString);


    // Template Literals in JS
    // A way to have embedded expressions in strings

    // 'this is a template literal'

    // String Interpolation

    // To create strings by doing substitution of placeholders
    // 'string text ${expression} string text'



//     let str = "Aman\tpushp"; //10 not 11
//     console.log(str.length);




// String Methods in JS
//string is immutable

// These are built-in functions to manipulate a string
// • str.toUpperCase()

// let str = "Aman Pushp";
// let newStr = str.toUpperCase();
// console.log(str);

// let str = "Aman Pushp";
// str = str.toUpperCase();//update in original string
// console.log(str);

// • str.toLowerCase()

// str.trim() // removes whitespaces

// let  str="      aman pushp    js";
// console.log(str.trim());//trim the starting space and ending space 



// • str.slice(start, end?) // returns part of string

// let number="034234"
// console.log(number.slice(1,3));//ending is none exclusive
// //output:34


// • str1.concat(str2) // joins str2 with str1

// let str1 = "aman";
// let str2 = "pushp";
// let res = str2.concat(str1); // or str1+str2;
// console.log(res);

// • str.replace( searchVal, newVal)

// let str = "hellolololo";
// console.log(str.replace("lo", "p"));//helplololo
// console.log(str.replaceAll("lo", "p"));helppppp

// • str.charAt(idx)

// str ="aman"
// console.log(str.charAt(0));//a


// Arrays in JS

// Collections of items

// Create Array(typeof an object) //mutable


// let heroes = [ "ironman", "hulk", "thor", "batman" ];
// let marks = [ 96, 75, 48, 83, 66 ];
// let info = [ "rahul", 86, "Delhi" ];


// let heroes = ["ironman", "thor", "hulk", "shaktiman", "spiderman"]
//     for (let i = 0; i < heroes.length; i++) {
//     console.log(heroes[i]);
//     }
//  or

//for of loop

// for(let hero of heroes) {
//     console.log(hero);
//     }


// let marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for (let val of marks) {
// sum += val;
// }
// let avg = sum / marks.length;
// console.log(`avg marks of the class = ${avg}`);




// let items = [250, 645, 300, 900, 50];
// let i = 0;
// for (let val of items) {
// let offer = val / 10;
// items [i] = items [i] offer;
// console.log(`value after offer = ${items[i]}`);
// i++;
// }
// for (let i = 0; i < items.length; i++) {
// let offer = items [1] / 10;
// items [i] -= offer;
// }
// console.log(items);



// Arrays in JS

// Array Methods

// Push(): add to end


// let foodItems = ["potato", "apple", "litchi", "tomato"];
// foodItems.push("chips", "burger", "paneer");
// 
// console.log(foodItems);


// Pop(): delete from end & return


// let foodItems = ["potato", "apple", "litchi", "tomato"];
// console.log(foodItems);
// let deletedItem = foodItems.pop();
// console.log(foodItems);
// console.log("deleted", deletedItem);

// toString(): converts array to string


// let foodItems = ["potato", "apple", "litchi", "tomato"];
// let marks = [97, 86, 54, 36];
// console.log(foodItems);
// console.log(foodItems.toString());
// console.log(marks.toString());

// Concat(): joins multiple arrays & returns result

// let marvelHeroes = ["thor", "spiderman", "ironman"]; 
// let dcHeroes = ["superman", "batman"];
// let heroes = marvelHeroes.concat(dcHeroes); console.log(heroes);


// unshift(): add to start

// let marvelHeroes = ["thor', "spiderman", "ironman"];
// let val = marvelHeroes.unshift(krrish);
//  console.log(val);

// shift(): delete from start & return

// let marvelHeroes = ["thor', "spiderman", "ironman"];
// let val = marvelHeroes.shift(); 
// console.log("deleted", val);




// Slice(): returns a piece of the array
// slice(startldx, endidx)
// let marvelHeroes = ["thor", "spiderman", "ironman", "antman", "Dr.Stran];
// console.log(marvel Heroes);
// console.log(marvelHeroes.slice(1,2));//spiderman



// Splice(): change original array (add, remove, replace)
// splice(startIdx, delCount, newEl1...)

// let arr = [1, 2, 3, 4, 5, 6, 7];
// arr.splice(2, 2, 101, 102);
// arr.splice(3,1)//delete 4
// Add Element arr.splice(2, 0, 101);





// > arr
// <
// (7) [1, 2, 3, 101, 5, 6, 7]
// > arr.splice(4);
// (3) [5, 6, 7]//deleted
// > arr
// <
// (4) [1, 2, 3, 101]
// > arr.splice()
// []
// > arr
// (4) [1, 2, 3, 101]
// <
// >







// Functions in JS


// Function Definition

// function functionName() {

// //do some work
// }
// function functionName(param1, param2 ...) {
// //do some work
// }


// Function Call
// functionName();



// function myFunction (msg) { //parameter -> input 
//     console.log(msg);
// }
// myFunction("I love JS"); //argument



// function sum(x, y) {
// local variable->scope(block life)
//      s = x + y; 
//      return s;
// }
// Let val = sum(3, 4);
//  console.log(val);

//arrow function
//sum
// const arrowSum = (a, b) =>{
//      console.log(a + b); 
//     }; 
//     arrowSum(2,3);//call


//     //multiplication function
//     function mul(a, b) { return a * b; }
//     const arrowMul = (a, b) => {
//     console.log(a * b);
//     };
//      arrowMul(2,4);//call

// const printHello=()=>{console.log("hello");}
// printHello();//call




// function countVowels(str) {
//     let count = 0;
//     for (const char of str) {
//     if (
//     char === "a" ||
//     char === "e" || 
//     char === "i" ||
//     char === "o" ||
//     char === "u"
//     )
//     {
//     count++;
//     }
//     }
//     console.log(count);
//     }


// let arr = [1, 2, 3, 4, 5];
// arr.forEach(function printVal(val) {
// console.log(val);
// );
//output 1 2 3 4 5 



// let arr = [1, 2, 3, 4, 5];
// arr.forEach( (val)=> {
// console.log(val);
// });
// //output 1 2 3 4 5


// let arr = ["pune", "delhi", "mumbai"];
// arr.forEach((val, idx, arr) => {
// console.log(val.toUpperCase(), idx, arr); });



// let nums = [67, 52, 39];
//     nums.forEach((num) => {
//     console.log(num * num); 
//      });//num**2
//or

// let nums = [67, 52, 39];
// let calcSquare = (num) => { console.log(num * num); };
// nums.forEach(calcSquare);




// Some More Array Methods//return new array
// Map

// Creates a new array with the results of some operation. The value its callback returns are used to form new array

// arr.map(callbackFnx(value, index, array))
// let newArr = arr.map((val) => {
// return val * 2;
// })


// let nums = [67, 52, 39];
// Let newArr = nums.map((val) => {return val * 2; });
// console.log(newArr);





// Filter


// Creates a new array of elements that give true for a condition/filter. Eg: all even elements

// let newArr = arr.filter( (val) => {
// return val % 2 === 0;
// })




// let arr = [1, 2, 3, 4, 5, 6, 7];
// let evenArr = arr.filter((val) => {
// return val % 2 === 0;
// });
// console.log(evenArr);



// Let marks = [97, 64, 32, 49, 99, 96, 86];
// let toppers = marks.filter((val) => {
// return val > 90;
// });
// console.log(toppers);




// let n = prompt("enter a number: ");
// let arr = [];
// for (let i = 1; i <= n; i++) {
// arr[i 1] = i; }
// console.log(arr);
// I
// let sum = arr.reduce((res, curr) => {
// return res + curr;
// });
// console.log(sum);

// console.log("sum = ", sum);
// let factorial = arr.reduce((res, curr) => { return res * curr; }); I
// console.log("factorial = ", factorial);





// Reduce


// Performs some operations & reduces the array to a single value. It returns that single value.


// JavaScript Demo: Array.reduce()

// const array1 = [1, 2, 3, 4];
// //0+1+2+3+4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
// (accumulator, currentValue) => accumulator + currentValue,
// initialValue,
// );
// console.log(sumWithInitial);
// // Expected output: 10




// let arr = [1, 2, 3, 4];
// const output = arr.reduce((res, curr) => {
// return res + curr;
// });
// I
// console.log(output);



// let arr = [5, 6, 2, 1, 3];
// const output = arr.reduce((prev, curr) => { return prev > curr ? prev : curr;
// });
// console.log(output); //rargest number







// forEach Loop in Arrays    (Higher Order Function/Methods)
// arr.forEach(callBackFunction)
// CallbackFunction: Here, it is a function to execute for each element in the array
// *A callback is a function passed as an argument to another function.
// arr.forEach((val) => {
// console.log(val);
// })

//DOM
// window is global  object
// window.alert("hello");

// console.log ---- print
// console.dir-----Property method  print

// console.dir(document.body);-------show body of html
// console.dir(document.head);------show head of html
// dynamically changes done by java script in html





// DOM Manipulation



// Selecting with id
// document.getElementById(“myld”)

let heading =document.getElementById("heading");//h1
console.dir(heading)//


// Selecting with class
// document.getElementsByClassName("myClass")

let headings =document.getElementsByClassName("head");
console.dir(headings);
console.log(headings);


// Selecting with tag
// document.getElementsByTagName("p")

let parahs = document.getElementsByTagName("p");
console.dir(parahs);


// Query Selector


// document.querySelector("myld / myClass / tag") //returns first element
let firstEl =document.querySelector("p");//by tag
console.dir(firstEl);

let firstE2 =document.querySelector(".head");//by class
console.dir(firstE2);

let firstE3 =document.querySelector("#heading"); //by id
console.dir(firstE3);



// document.querySelectorAll(“myld / myClass I tag") 
// returns a NodeList
let allEL =document.querySelectorAll("p");
console.dir(allEL);




// Properties
// dom Tree
//   .textnode
//   .comment
//   .elemets//focus on this only


// • tagName: returns tag for element nodes

firstEl.tagName;// enter in console show 'p' the paragraph


// • innerText: returns the text content of the element and all its children
let div= document.querySelector("div");
console.dir(div);
div.innerText;//show the content of div 
// mango\norange\nlichi


div.innerText="aman"//all content of div changed and show aman
let headinh4 = document.querySelector("h3");
headinh4.innerText="new heading"//change the content of h3
heading4.innerHTML="<li>new heading </li>"//change the property

// • innerHTML: returns the plain text or HTML contents in the element

div.innerHTML;//show content with element tags
// <'\n
// <h3><i>Fruits</i></h3>\n
// <li>mango</li>\n
// <li>orange</li>\n
// i>litchi</li>\n
// </ul>\n
div.innerHTML="<div>inner div </div>"// create a inner div in div 


// • textContent: returns textual content even for hidden elements
//in console
// >div

// > heading4
// <h1 style="visibility: hidden">old Heading</h1>
// > heading.innerText

// >' '
// >heading.textContent
// <'old Heading'

// Qs. Create a H2 heading element with text - "Hello JavaScript". 
// Append "aman pushp is student" to this text using JS.

// soln
// 1.acces Element
// 2.property----->change
let h2 = document.querySelector("h2");//acces by tag
console.dir(h2.innerText);
h2.innerText=h2.innerText+"from aman pushp is student";//concatenate



// Qs. Create 3 divs with common class name - "box". Access them & add some unique text to each of them.

let divs = document.querySelectorAll(".box");//by class access
console.log(divs[0]);//indivisual elements by array
console.log(divs[1]);//indivisual elements by array
console.log(divs[2]);//indivisual elements by array

//or
for(div of divs){
    console.log(div);//print by loop
}

div[0].innerText="new unique value 1";//change content
div[1].innerText="new unique value 2";//change content
div[2].innerText="new unique value 3";//change content

or
let idx=1; 
for(div of divs){
    div.innerText='new unique value ${idx}';
    idx++;
}



// Attributes


// • getAttribute(attr) //to get the attribute value

// let div=document.querySelector("div");
// console.log(div);
// let id =div.getAttribute("id");
// console.log(id);// output box

// let name= div.getAttribute("name");
// console.log(name);//output aman


let para =document.querySelector("p");//by tag
console.log(para.getAttribute("class"));//ouput para

// • setAttribute(attr, value) //to set the attribute val th

let para1 =document.querySelector("p");//by tag
console.log(para1.setAttributeAttribute("class","newclass"));//output newclass


// Style
// • node.style

let div= document.querySelector("div");
div.style.backgroundColor="green";
//div.style.visibility="hidden";
div.style.fontSize="26px";
div.innerText="hello";

// Insert Element         //let el = document.createElement("div")
let newbtn =document.createAttribute("button");
newbtn.innerText="click me";
console.log(newbtn);



// • node.append(el) //adds at the end of node (inside)
let div=document.querySelector("div");
div.append(newbtn);//add button at the end of div 

// • node.prepend(el) lladds at the start of node (inside)
let div=document.querySelector("div");
div.prepend(newbtn);//add button start position of div

let newHeading= document.querySelector("h1");
newHeading1.innerHTML="<i>Hi I am new here </i>";
document.querySelector("body").prepend(newHeading);

// • node.before(el) //adds before the node (outside)
let div=document.querySelector("div");
div.before(newbtn)//add button then div star (just before div)

// • node.after(el) //adds after the node (outside)
let p = document.querySelector("p");
p.after(newbtn);//add button after the paragraph

// Delete Element
// • node.remove() //removes the node
let para4=document.querySelector("p");
para4.remove();
newHeading.remove();


// Qs. Create a new button element. Give it a text "click me", background color of red & text color of white.
// Insert the button as the first element inside the body tag.

let newBtn1 = document.createElement("button");
newBtn1.innerText = "click me!";
newBtn1.style.color = "white";
newBtn1.style.backgroundColor = "red";
document.querySelector("body").prepend(newBtn1);


// Qs. Create a <p> tag in html, give it a class & some styling.
// Now create a new class in CSS and try to append this class to the <p> element.
// Did you notice, how you overwrite the class name when you add a new one? Solve this problem using classList.
let para6 =document.querySelector("p");//access by tag
para6.classList.add("newClass");//add class
para6.classList.remove("newClass");//remove class 


// Events in JS


// The change in the state of an object is known as an Event


let btn1 = document.querySelector("#btn1");
btn1.onclick = ()=> {
console.log("btn1 was clicked");
let a = 25;
a++;
console.log(a);//26
};

let box =document.querySelector("dive");
div.onmouseover=()=>{
    console.log("you are in inside div");
};

// Events are fired to notify code of "interesting changes" that may affect code execution.

// • Mouse events (click, double click etc.)

// • Keyboard events (keypress, keyup, keydown)

// • Form events (submit etc.)

// • Print event & many more





// Event Object


// It is a special object that has details about the event.


// All event handlers have access to the Event Object's properties and methods.
// node.event = (e) => {
// //handle here
// }
// e.target, e.type, e.clientX, e.clientY


// let btn1 = document.querySelector("#btn1");
// btn1.onclick = (evt) {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
//     };



// let btn1 = document.querySelector("#btn1");
// btn1.onmouseover = (evt)=> {
//         console.log(evt);
//         console.log(evt.type);
//         console.log(evt.target);
//         console.log(evt.clientX, evt.clientY);
// };



// Event Listeners
// node.addEventListener(event, callback)

// let btn1 = document.querySelector("#btn1");
// btn1.addEventListener("click", () =>{
// console.log("button1 was clicked"); 
// });

// btn1.addEventListener("click", (evt) {
//     console.log("button1 was clicked");
//     console.log(evt);
//     console.log(evt.type);
//     });


// btn1.addEventListener("click", () => {
//      console.log("button1 was clicked - handler2"); });


// let div = document.querySelector("div");





// node.removeEventListener(event, callback)


// let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click",(evt) =>{

// console.log("button1 was clicked handler1");  });


// btn1.addEventListener("click", () =>
// {
// console.log("button1 was clicked - handler2"); });


// const handler3 = () => {
// console.log("button1 was clicked - handler3"); };


// btn1.addEventListener("click", handler3);


// btn1.addEventListener("click", ()=>{

// console.log("button1 was clicked  - handler4")});


// btn1.removeEventListener("click",handler3);

// *Note: the callback reference should be same to remove



// Qs. Create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again.
// btn

// 1 dark//{switch netween two state is called toggle}
// 2-ligert

// let modeBtn = document.querySelector("#mode");
// let currMode = "light"; //dark
// modeBtn.addEventListener("click", () => {
// if (currMode === "light") {
// currMode = "dark";
// document.querySelector("body").style.backgroundColor = "black";
// } else {
// currMode = "light";
// I
// document.querySelector("body").style.backgroundColor = "white";
// }
// console.log(currMode);
// });

//or


// let modeBtn = document.querySelector("#mode");
// let body = document.querySelector("body");
// let currMode = "light"; //dark
// modeBtn.addEventListener("click", () =>{
// if (currMode === "light") {
// currMode = "dark";

// body.classList.add("dark");
// body.classList.remove("light");
// } else {
// currMode = "light";
// body.classList.add("light");
// body.classList.remove("dark");
// }
// console.log(currMode);
// });







var tweet = prompt("compose your tweet:");
var tweetcount = tweet.length;
alert("your have written" + tweetcount + "characters,you have " + (140-  tweetcount) + "charachers are remaining.");
//slice
var name ="angela";
name.slice(0,1); //output a
name.slice(3,2); //output e

//splice
let arr =[1,23,4,5,67,4]
let arr1 = arr.slice(1,3);//index -1
arr.splice(1,0,"hello","h")//only added number 
arr.splice(1,3,"hello","h")// add element in place of deleted 
arr.splice(1,3)//delete (number,countdeletenumber) 
console.log(arr);

 console.log(arr1);



var tweet = prompt("compose your tweet:");
var tweetcount140 = tweet.slice(0,140);
alert(tweetcount140);
//or
alert(prompt("compose your tweet:").slice(0,140));

//case
var name = "angela";
name = name.toUppercase();
name = name.toLowercase();
  

var name = prompt("what is your name");
var firstchar = name.slice(0,1);
var UpperCaseFirstChar = firstchar.toUppercase();
var restOfName = name.slice(1,name.length);
restOfName = restOfName.toLowercase();
var capitaliseName = UpperCaseFirstChar +restOfName;
alert("hello," + capitaliseName);
//output : hello,Angela.

//numbers
var dogAge = prompt("how old is your dog");
var humanAge = ((dogAge - 2) * 4) + 21;
alert("ypur dog is " + humanAge + "years old in human years.");

var x = 5;
var y = 3;
x++;
x--;
x+=2;
x+=y;
//functions
function getMilk() {   
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
  }
//creation of function

getMilk();// calling the function

/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
/**function main(){
    beepersRight();
    goUpTurnLeft();
    beepersLeft();
    goUpTurnRight();
       beepersRight();
    goUpTurnLeft();
    beepersLeft();
    goUpTurnRight();
       beepersRight();
 }
  
 function goUpTurnRight() {
    turnRight();
    move();
    turnRight();
 }
  
 function goUpTurnLeft() {
    turnLeft();
    move();
    turnLeft();
 }
  
 function beepersRight() {
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();  
 }
  
 function beepersLeft() {
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    move();
 }
 **/

//FUNCTION PARAMETER and return
function getMilk (m) 
{
     var numberOfBottle = Math.floor(money * 1.5);//The Math.floor() method rounds a number DOWN to the nearest integer.
     console.log("price"); 
     return money%1.5;
}
var change= getMilk(2);


 function lifeInWeeks(age) {
    var yearsRemaining= 90 -age; 
    var days = yearsRemaining *365;
    var weeks = yearsRemaining *52;
    var months = yearsRemaining *12;
    console.log("You have" +days +" days," +weeks + "weeks,and " +months+ "months left");

 }
lifeInWeeks(34);
//go to mdn for math function
let x = Math.round(2.5);
console.log(Math.pow(7, 3));
// Expected output: 343
console.log(Math.max(1, 3, 2));
// Expected output: 3

console.log(Math.max(-1, -3, -2));
// Expected output: -1
console.log(Math.min(2, 3, 1));
// Expected output: 1

console.log(Math.min(-2, -3, -1));
// Expected output: -3

const array1 = [2, 3, 1];

console.log(Math.min(...array1));
// Expected output: 1


//random


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  console.log(getRandomInt(3));
  // Expected output: 0, 1 or 2
  
  console.log(getRandomInt(1));
  // Expected output: 0
  
  console.log(Math.random());
  // Expected output: a number from 0 to <1

  prompt("What is your name?");
  prompt("What is their name?");
  
  var loveScore = Math.random() * 100;// (random generate 0-0.9999999999)
  loveScore = Math.floor(loveScore) + 1;
  alert("Your love score is "+ loveScore + "%");

//if else
if (loveScore > 70) {
    alert("Your love score is " + loveScore + "%" + "You love each other like Kanye loves Kanye.");
    } 
if (loveScore > 30 && loveScore <= 70)
     {
    alert("Your love score is " + loveScore + "%");
     }
if (loveScore <= 30) 
    {
    alert("Your love score is " + loveScore + "%" + "You go together like oil and water.");
    }
    
/*
=== is equal to (with data type matching)
! == Is not equal to
> Is greater than
< Is lesser than
>= Is greater or equal to
<= Is lesser or equal to
*/
var a = 1;
var b= "1";
typeof(a);
"number"
typeof(b);
"string"
if (a=== b) {
console.log("yes");
} else {
console.log(no);
}




//comarator
/*
&& 
||
!
*/
//leap year
function isLeap(year) 
{
    if (year % 4 === 0) 
        {
    if (year % 100 === 0) 
        {
    if (year % 400 === 0) 
        {
    return "Leap year.";
        } 
        else 
        {
    return "Not leap year.";
        }
       } else 
    {
    return "Leap year.";
    }
        } else 
   {
    return "Not leap year.";
    I
    }
}


//ARRAY

var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
var guestName = prompt("what is your guest name");
if(guestList.includes(guestName))//true or false
{
    console.log("welcome");
}
else
{
    console.log("sorry next name");
}
console.log(guestList[0]);
console.log(guestList.length);


//push or pop (add element in last in array list)

var output = [];
var count = 1;
function fizzBuzz() {
//write code here.
if(count%3 === 0 && count%5 === 0)
    {
        output.push("fizzbuzz");
    }
if (count % 3 === 0) {
output.push("Fizz");
} 
else if(count%5==0)
{
output.push("buzz");
}
else { output.push(count); }
count++;
console.log(output); }

//random name gerearte by array
var names = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
function whosPaying (names) {
    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names [randomPersonPosition];
    return randomPerson + "is going to buy lunch today!";
    }

//loop
//while loop (state)
/*
var i = 1 ;
while (i < 2) {
console.log(i);
i++;
}
*/
var output = [];
var count = 1;
function fizzBuzz() {
//write code here.
while(count <= 100){
if(count%3 === 0 && count%5 === 0)
    {
        output.push("fizzbuzz");
    }
if (count % 3 === 0) {
output.push("Fizz");
} 
else if(count%5==0)
{
output.push("buzz");
}
else { output.push(count); }
count++;
}
console.log(output); }

//for loop (iterate)
/*
for(var i; i<n ;i++ or i--)
{
}
*/
var output = [];

function fizzBuzz() {
//write code here.
for(var count = 1; count <= 101; count++){
if(count%3 === 0 && count%5 === 0)
    {
        output.push("fizzbuzz");
    }
if (count % 3 === 0) {
output.push("Fizz");
} 
else if(count%5==0)
{
output.push("buzz");
}
else { output.push(count); }

}
console.log(output); }

// fibonaccigenerator

function fibonaccigenerator(n){
    var output= [];
if (n === 1) {
    output = [0];
    }
    else if (n === 2) {
    output = [0, 1];
    }
    else {
    output = [0, 1];
    for (var i=2; i < n; i++) {
    output.push(output [output.length -2] + output [output.length - 1]);
    }
    }
    I
    return output;
    }

    output= fibonaccigenerator(5);
    console.log(output);


    //slice



/*
let arr= [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20]]

for(let i=0;i<4;i++){
    {
        for(let j=0;j<5;j++)
            {
                console.log("["+i+"]"+"["+j+"]"+"="+arr[i][j]);

            }
    }
}
    */


























