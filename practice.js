//                                 //Javascript
// //if else if else
// //nested if else concept
// // var score = 25;
// // if(score>90){
// // console.log("A");   
// // }
// // else if (score>=70 && score <=89){

// //  console.log("B");   
// // }
// // else if (score >= 50 && score <=69){

// //     console.log("C");
// // }
// // else {
// //     console.log("F");
// // }
// //for loop
// // var aa = ["23","24","22","21"];
// // var arr = [];
// // for (let i = 0; i < aa.length; i++) {
// // arr.push(aa[i ] * aa[ i] ) 
// //   }
// // console.log(arr);
// // console.log(aa.length);

// //while loop

// // let text = "";
// // let i = 0;
// // while (i <= 10) {
// //   text += "The number is " + i;
// //   i++;
// // }
// // console.log(text);


// //Do while loop
// // let number = ""
// // let y = 0;
// //  do {
// //  number += "The number is " + y;
// //   y++;
// // }
// // while (y <= 10)

// // console.log(number);

// //for of loop
// // const cars = ["BMW", "Volvo", "Mini"];

// // let cabs = "";
// // for (let x of cars) {
// //   cabs += x + "<br>";
// // }

// // console.log(cabs);

// // //for in loop
// // const numbers = [45, 4, 9, 16, 25];

// // let txt = "";
// // for (let x in numbers) {
// //   txt += numbers[x] + "<br>"; 
// // }
// // console.log(txt);

// //switch case

// // let x = "0";

// // switch (0) {
// //   case 0:
// //     te = "Off";
// //     break;
// //   case 1:
// //     te = "On";
// //     break;
// //   default:
// //     te = "No value found";
// // }
// // console.log(te);

//                      //function

//                     //  function greet(a,b,c){
//                     //     console.log(a+b+c);
//                     //     }
//                     //     greet(6,7,9);
                        
//                     //                          //hoisting
                        
//                     //     greet(6,7,9);
                        
//                     //     function greet(a,b,c){
//                     //     console.log(a+b+c);
//                     //     }
                        
//                         //                      //let - block scope
//                         // var a=35;
                        
//                         // if(a===35){
//                         //   let b= 40; 
//                         //      console.log(b);
//                         // }
//                         //console.log(b);
//                         //                  //  var - function scope
                                      
//                         // function test(){
//                         //   var c=40; 
//                         //  //console.log(c);
//                         // }                  
//                         // test();
//                         // console.log(v);
//                                             //ES6 -normal function
                        
                        
//                           // let nr = function()  {
//                           //   console.log("hiiiiii")
//                           // }                
                        
//                           // nr();
                        
//                         //   //ES6 -Arrow function

//                         //   let pr = (a,b)=> { console.log(a+b)}                        
//                         // pr(5,10);
                
//                         // //tactics(``)
//                         // var k ="sami";
//                         // var h= "arjun";
//                         // console.log(`he is good boy ${k} ${h}` )
//                         // //destructing Array
                        
//                         // let arr = ['hi','i','am','sameer']
                        
//                         // let [a,b,c,d] = arr
                        
//                         // console.log(d);
                        
//                         // // destructing object
//                         // let myobj = {name: 'sam', age:'27'}
                        
//                         // let{name,age}=myobj
                        
//                         // console.log(name);
//                         // //module & modularity
//                         // const calculator = require('./calci');                        
//                         // calculator.addition(4,5)
//                         // calculator.subraction(10,5)
//                         // calculator.multiplication(1,5)
//                         // calculator.division(5,9)
                        
                        
//                        // imperative 
// // const a = 5;
// // const square= a*a;
// // let isEven;

// // if(square % 2 == 0){
// //     isEven = true;

// // }

// // else{
// //     isEven=false;
// // }

// // console.log(isEven);

// // //declartive

// // const checksquare = (a) =>  (a*a % 2 == 0 ? true : false)

// // console.log(checksquare(4))

// //impure function 

// // var a= 5;
// // function add(x){
// //     console.log(a+x);
// //     a++
// // }

// // add(2)
// // add(2)
// // add(2)
// // // pure function 

// // function ad(x,y){
// //     return x+y
// // }

// // console.log(ad(2,3))


// // //declaretive
// // const checksqure = (a) => (a*a %2 == 0 ? true : false)
// // console.log(checksqure(4))
// // //imperetive
// // const a = 4;
// // const squre = a*a;
// // let isEven;
// // if (squre % 2 == 0){
// // isEven = true;
// // }
// // else{
// //     isEven = false;
// // }
// // console.log(isEven);


// // call back function

// // function fname(fn ,cb){
// //     console.log(fn)
// //     cb('Arjun')
// // }

// // function lname(ln){
// //     console.log(ln)
// // }

// // fname('malika',lname)


// // const isEven=(n) =>{
// //     return n%2==0
// // }

// // let printresult=(evenNum, num)=>{
// //  const  isevennum =evenNum(num)
// //  console.log(`the number ${num} is or not even ${isevennum}`)
// // }

// // printresult(isEven,5)

// // const isEven=(n) =>{
// //     return n%2 == 0
// // }
// // let printresult=(evenNum, num)=>{
// //     const isevennum =  evenNum(num)
// //     console.log(`the number ${num}is or not even ${isevennum}`)
// // }

// // printresult(isEven,5)

// // //======higher order functions example map(),Filter(),Reducer()=====
 
// // <---Normal Method -->

// // let arr =[1,2,3,4,5];
// // let square=[];

// // for(let i=0;i<arr.length;i++){
// //     square.push(arr[i]*arr[i])
// // }


// // <!---- Map Method --->

// // const square = arr.map(function(ar){
// //     return ar*ar
// // })
// // 9
// // console.log(square)


// // const transact=[100,200,300,-400,600,-800];
// // const dollar = 80;
// // const amount= transact.map((tr)=>{
// //     return tr/dollar
// // })

// // console.log(amount)

// // let tran=transact.forEach((amt)=>{
// //     console.log( amt/dollar)
// // })

// // <!---===Find,FindIndex,Some,Every---====>
// // const ar1=[1000,10,-1,5,6];
// // let fa= ar1.find(function(n){
// //     return n<0
// // })

// // console.log(fa)

// // let fa2= ar1.findIndex(function(n){
// //     return n<0
// // })

// // console.log(fa2)


// // let fa3= ar1.some(function(n){
// //     return n<0
// // })

// // console.log(fa3)

// // let fa4= ar1.every(function(n){
// //     return n<0
// // })

// // console.log(fa4)

// // //<!--filter Method -->
// // //even number finding
// // let num2 = [1,2,3,4,5,6];
// // let arr2 =[];
// // for(let i=0;i<num2.length;i++){
// //     if(num2[i]%2==0){
// //         arr2.push(num2[i])
// //     }
// // }

// // console.log(arr2)
// // //filter

// // let arr3 = num2.filter(function(n){
// //     return n%2==0
// // })

// // console.log(arr3)

// // //h.w-> trans[1000,3000,4000,2000,-898,3000,-4500]  check for greater than 0 and filter value
// // const trans = [1000,3000,4000,2000,-898,3000,-4500];
// // let arr6 = trans.filter(function(b){
// //     return b>0
// // })
// // console.log(arr6)
// // //reducer 

// // let arr4 = [1,2,4,6,10,20];

// // // to find summ

// // let sum=2;//accumulator

// // for(let i=0;i<arr4.length;i++){
// //     sum = sum+arr4[i]
// // }

// // console.log(sum) //

// // let red = arr4.reduce(function(ac,val){
// //     return ac+val

// // },0)
// // console.log(red)

// // //chaining methods
// // let arr5 = [{name:"sameer", age:25 ,gender:"m"},{name:"madhan",age:26,gender:"m"},{name:"divya", age:30, gender:"f"},{name:"sandhya",age:28,gender:"f"},{name:"arjun",age:32,gender:"m"}]

// // let males = arr5.filter(function(ar){
// //     return ar.gender == "m"
// // })

// // let ageofMale = males.map(function(m){
// //     return m.age
// // })

// // let chain = arr5.filter((ar)=>{
// //     return ar.gender == "f"
// // }).map((t)=>{
// //     return t.age
// // })
// // console.log(ageofMale)
// // console.log(chain)

// // //oops concept
// // function person(first ,last){
// //     this.fn= first;  
// //     this.ln = last;

// // }

// // // new use panna tha constructor
// // const con1 = new person("madhan", "kumar")
// // const con2 = new person("sam","eer")

// // console.log(con1)
// // console.log(con2)

// // // to create constructor in class method
// // class car{
// //     constructor(name,year){
// //         this.name=name;
// //         this.year=year;
// //     }
// // }

// // const car1 = new car("bmw",2020);

// // console.log(car1);
// // //polymorphism
// // class day{
// //     arjun(){
// //         console.log('i am employer')
// //     }
// //     sameer(){
// //         console.log("he is saint")
// //     }
// // }
// // class night{
// //     arjun(){
// //         console.log('i am playboy')
// //     }
// //     sameer(){
// //         console.log(' he is good boy')
// //     }
// // }

// // let animal1= new day();
// // let animal2= new night();
// // animal2.arjun()
// // animal1.sameer()




// // //Abstraction easy way

// // function person(name,age){
// //    this.name = name;
// //    this.age = age ;
// // }
// // person.prototype.getnameandage = ()=>{
// // console.log(`${this.name}and age is ${this.age}`)

// // }

// // let person1 = new person('Aju',23)
// // let person2 = new person('vvv',21)
// // console.log(person2)




// // //call 
// // let member= {
// //     fname :"steve",
// //     age:100,
   
// // }

// // function printDetails( city ,job){
// //     console.log("hi iam "+this.fname +" and my age " +this.age + " i am living"+ ''+city + ''+job)
// // }

// // let member2= {
// //     fname :"sam",
// //     age:10, 
// // }

// // let myfun = printDetails.bind(member2,['cbe' , 'i am software engineer'])

// // // console.log(myfun)
// // myfun()



// const fs = require('fs')

// // console.log("first line")
// // // synchronous readfilesync to read file

// // fs.readFile('f1.text' ,cb1);

// // function cb1 (err,data){
// //     if(err){
// //         console.log(err)
// //     }
// //     console.log("file read 1->" + data)
// // }

// // fs.readFile('f2.text',cb2);

// // function cb2 (err ,data){
// //     if(err){
// //         console.log(err)
// //     }
// //     console.log("file read  2->" + data)
// // }



// // console.log("last line")


// // //serial execution
// // fs.readFile('f1.text' ,cb1)


// // function cb1 (err,data){
// //     if(err){
// //         console.log(err)
// //     }
// //     console.log("file read 1->" + data)
// //     fs.readFile('f2.text',cb2)
// // }

// // function cb2 (err ,data){
// //     if(err){
// //         console.log(err)
// //     }
// //     console.log("file read  2->" + data)
// // }

// // //settimeout
// // console.log("before")

// // function greet(){
// //     console.log('welcome')
// // }

// // setTimeout(greet,5000)
// // console.log("after")

// // //setInterval
// // function hello(){
// //     console.log("hello")
// // }


// // let time= setInterval(hello,1000)
// // setTimeout(function(){
// //     clearInterval(time)
// // },3000)


// // promise

// function placeOrder(drink){
//     return new Promise((resolve,reject)=>{
//         if(drink === 'cofee'){
//             resolve('order for coffee is recieved')
//         }
//         else{
//             reject('other orders are rejected')
//         }
//     }) 
// }

// // function processOrder(order){
// //     return new Promise(function(resolve){
// //         console.log('order is being processed')
// //         resolve(`order is served`)
// //     } )
// // }

// // placeOrder('soup').then(function(orderPlaced){
// //     console.log(orderPlaced)
// //     let orderIsProcessed  = processOrder(orderPlaced)
// //     return orderIsProcessed
// // }).then(function(processOrder){
// //     console.log(processOrder)
// // }).catch(function(err){console.log(err)})

// // // ASync and await

// // async function serveOrder(){
// // try{
// //     let orderPlaced = await placeOrder('cofee')
// //     console.log(orderPlaced)
// //     let orderProcessed = await processOrder(orderPlaced)
// //     console.log(orderProcessed)
// // }
// // catch(err){
// //     console.log(err)
// // }
// // }

// // serveOrder()



// // // https://www.jsv9000.app/ ; use this app



//MODULE - 9 

// //comparsion operator
// let a=2 ;
// let b=2;
// let c='2';

// console.log(a===c);


// //truthy $ falsy values

// let a =0 ;

// if(a){
//     console.log('i am truthy')
// }else{
//     console.log('i am f[alsy')
// }

// function  aju(){
//     if((-100 && 100 && "0")|| []=== true || 0){
//         console.log(1)
//     }
//     if(Infinity && NaN && "false"){
//         console.log(2)
//     }
//     if([]|| (0 && false)) {
//         console.log(3)
//     }
//     if("") {
//         console.log(4)
//     }else{
//         console.log(5)
//     }
//     if(({}|| false==="")&& !(null & undefined)){
//         console.log(6)
//     }
// }
// aju()

// //primitive data types
// let firstperson ='adam'
// let secondperson = firstperson

// firstperson ='steve'

// console.log('firstperson -> ' + firstperson)
// console.log('secondperson -> ' + secondperson)

// //refernce data types
// let person1 = {
//   name : 'sam',
//   age :20
// }


// let person2 = person1

// person1.name ='steve'

// console.log(person1 )
// console.log(person2 )

// shallow copy :{...}

// let person1 = {
//       name : 'sam',
//       age :20
//     }

//     let person2 ={...person1}
//     person2.city= "coimbatore"
//     person2.name="madhan"
//     console.log(person1)
//     console.log(person2)


// deepCopy
// let person1 = {
//     name : 'sam',
//     age :20
//   }
//   let person2 =JSON.parse(JSON.stringify(person1))
//   person2.name="arjun"
//   person2.city= "coimbatore"
//   console.log(person1)
//   console.log(person2)

// //closure 
// function test(){
//     let a=2

//     function test1(){
//         console.log(a)
//     }

//     return  test1()
// }

// test()

// closure with nested function
// function greet() {
//     let name = 'steve'
//     function displayName() {
//         console.log('hi' + name);
//         let age = 25;
//         function displayAge() {

//             console.log('my age is' + age + "" + name);}
//         return displayAge();

//     }
//     return displayName();
// }

// // let g1 = greet()

// //type of operator

// let a =2;
// let b = "ddd"
// let c = true
// let myobj ={
//         name : 'sam',
//         age :20
//       }
// let arr = [1,2,3]
// console.log(typeof myobj)



// // function currying
// let  sumCurried = function(x){    //function(x,y){ return x+y}
//     return function(y) {
//         console.log(x+y)
//     }
// }

// let sumTwo = sumCurried(2)//-X
// console.log(sumTwo(6)) //-y

/*array is array concept

let arr1= "hi" //[1,2,3] 

let arr = Array.isArray(arr1)

console.log(arr)
*/



//=================================End=====================================//

