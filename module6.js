//imperative 
// const a = 5;
// const square= a*a;
// let isEven;


// if(square % 2 == 0){
//     isEven = true;

// }

// else{
//     isEven=false;
// }

// console.log(isEven);

//declartive

// const checksquare = (a) =>  (a*a % 2 == 0 ? true : false)

// console.log(checksquare(4))

//impure function 

// var a= 5;
// function add(x){
//     console.log(a+x);
//     a++
// }

// add(2)
// add(2)
// add(2)
// // pure function 

// function ad(x,y){
//     return x+y
// }

// console.log(ad(2,3))


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

// //call back function


// function fname(fn ,cb){
//     console.log(fn)
//     cb('Arjun')

// }

// function lname(ln){
//     console.log(ln)
// }

// fname('malika',lname)

// (
// const isEven=(n) =>{
//     return n%2==0
// }

// let printresult=(evenNum, num)=>{
//  const  isevennum =evenNum(num)
//  console.log(`the number ${num} is or not even ${isevennum}`)
// }

// printresult(isEven,5)

// const isEven=(n) =>{
//     return n%2 == 0
// }
// let printresult=(evenNum, num)=>{
//     const isevennum =  evenNum(num)
//     console.log(`the number ${num}is or not even ${isevennum}`)
// }

// printresult(isEven,5)

//======higher order functions example map(),Filter(),Reducer()=====
 
<---Normal Method -->

let arr =[1,2,3,4,5];
let square=[];

for(let i=0;i<arr.length;i++){
    square.push(arr[i]*arr[i])
}


<!---- Map Method --->

const square = arr.map(function(ar){
    return ar*ar
})
9
console.log(square)


const transact=[100,200,300,-400,600,-800];
const dollar = 80;
const amount= transact.map((tr)=>{
    return tr/dollar
})

console.log(amount)

let tran=transact.forEach((amt)=>{
    console.log( amt/dollar)
})

<!---===Find,FindIndex,Some,Every---====>
const ar1=[1000,10,-1,5,6];
let fa= ar1.find(function(n){
    return n<0
})

console.log(fa)

let fa2= ar1.findIndex(function(n){
    return n<0
})

console.log(fa2)


let fa3= ar1.some(function(n){
    return n<0
})

console.log(fa3)

let fa4= ar1.every(function(n){
    return n<0
})

console.log(fa4)

//<!--filter Method -->
//even number finding
let num2 = [1,2,3,4,5,6];
let arr2 =[];
for(let i=0;i<num2.length;i++){
    if(num2[i]%2==0){
        arr2.push(num2[i])
    }
}

console.log(arr2)
//filter

let arr3 = num2.filter(function(n){
    return n%2==0
})

console.log(arr3)

//h.w-> trans[1000,3000,4000,2000,-898,3000,-4500]  check for greater than 0 and filter value
const trans = [1000,3000,4000,2000,-898,3000,-4500];
let arr6 = trans.filter(function(b){
    return b>0
})
console.log(arr6)
//reducer 

let arr4 = [1,2,4,6,10,20];

// to find summ

let sum=2;//accumulator

for(let i=0;i<arr4.length;i++){
    sum = sum+arr4[i]
}

console.log(sum) //

let red = arr4.reduce(function(ac,val){
    return ac+val

},0)
console.log(red)

//chaining methods
let arr5 = [{name:"sameer", age:25 ,gender:"m"},{name:"madhan",age:26,gender:"m"},{name:"divya", age:30, gender:"f"},{name:"sandhya",age:28,gender:"f"},{name:"arjun",age:32,gender:"m"}]

let males = arr5.filter(function(ar){
    return ar.gender == "m"
})

let ageofMale = males.map(function(m){
    return m.age
})

let chain = arr5.filter((ar)=>{
    return ar.gender == "f"
}).map((t)=>{
    return t.age
})
console.log(ageofMale)
console.log(chain)