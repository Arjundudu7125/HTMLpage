//comparsion operator
// let a=2 ;
// let b=2;
// let c='2';

// console.log(a===c);


// truthy $ falsy values

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

//primitive data types
// let firstperson ='adam'
// let secondperson = firstperson

// firstperson ='steve'

// console.log('firstperson -> ' + firstperson)
// console.log('secondperson -> ' + secondperson)

//refernce data types
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


// // deepCopy
// let person1 = {
//     name : 'sam',
//     age :20
//   }
//   let person2 =JSON.parse(JSON.stringify(person1))
//   person2.name="arjun"
//   person2.city= "coimbatore"
//   console.log(person1)
//   console.log(person2)

//closure 
// function test(){
//     let a=2

//     function test1(){
//         console.log(a)
//     }

//     return  test1()
// }

// test()

//closure with nested function
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

// let g1 = greet()

//type of operator

// let a =2;
// let b = "ddd"
// let c = true
// let myobj ={
//         name : 'sam',
//         age :20
//       }
// let arr = [1,2,3]
// console.log(typeof myobj)
//


// // function currying
// let  sumCurried = function(x){    //function(x,y){ return x+y}
//     return function(y) {
//         console.log(x+y)
//     }
// }

// let sumTwo = sumCurried(2)//-X
// console.log(sumTwo(6)) //-y

//array is array concept

let arr1= "hi" //[1,2,3] 

let arr = Array.isArray(arr1)

console.log(arr)