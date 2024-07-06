alert("hello" + " " + "world");
var message ="hello";
var name = "angela";
alert(message + "there, " +  " " + name);
 // length

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


























