                                //Javascript
//if else if else - true part & false part of a given condition
//nested if else concept - 
var score = 25;
if(score>90){
console.log("A");   
}
else if (score>=70 && score <=89){

 console.log("B");   
}
else if (score >= 50 && score <=69){

    console.log("C");
}
else {
    console.log("F");
}//for loop - used to repeat a specific block of code a known number of times.
var aa = ["23","24","22","21"];
var arr = [];
for (let i = 0; i < aa.length; i++) {
arr.push(aa[i ] * aa[ i] ) 
  }
console.log(arr);
console.log(aa.length);

//while loop - loops a code block while a condition is true.

let text = "";
let i = 0;
while (i <= 10) {
  text += "The number is " + i;
  i++;
}
console.log(text);


//Do while loop - loops a code block once,and then while a condition is true.
let number = ""
let y = 0;
 do {
 number += "The number is " + y;
  y++;
}
while (y <= 10)

console.log(number);

//for of loop - operates on the values sourced from an iterable one by one in sequential order(values)
const cars = ["BMW", "Volvo", "Mini"];

let cabs = "";
for (let x of cars) {
  cabs += x + "<br>";
}

console.log(cabs);

//for in loop - iterate over arrays and array-like objects(object properties)
const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
  txt += numbers[x] + "<br>"; 
}
console.log(txt);

//switch case - switch statement is used to perform different action based on different condition

let x = "";

switch (1) {
  case 0:
    te = "Off";
    break;
  case 1:
    te = "On";
    break;
  default:
    te = "No value found";
}
console.log(te);

