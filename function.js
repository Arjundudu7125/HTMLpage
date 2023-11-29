                     //function

function greet(a,b,c){
console.log(a+b+c);
}
greet(6,7,9);

                     //hoisting

greet(6,7,9);

function greet(a,b,c){
console.log(a+b+c);
}

                     //let - block scope
var a=35;

if(a===35){
  let b= 40; 
    // console.log(b);
}
console.log(b);
                  // var - function scope
function test(){
  var c=40; 
// console.log(c);
}                  
test();
console.log(c);
                    //ES6 -normal function

     //function
  let nr = function()  {
    console.log("hiiiiii")
  }                

  nr();

  //ES6 -Arrow function
  let pr = (a,b)=> { console.log(a+b)}

pr(5,10);
//tactics(``)
var k ="sami";
var h= "arjun";
console.log(`he is good boy ${k} ${h}` )
//destructing Array

let arr = ['hi','i','am','sameer']

let [a,b,c,d] = arr

console.log(d);

//destructing object
let myobj = {name: 'sam', age:'27'}

let{name,age}=myobj

console.log(name);
//module & modularity

const calculator = require('./calci');

calculator.addition(4,5)
calculator.subraction(10,5)
calculator.multiplication(1,5)
calculator.division(5,9)
