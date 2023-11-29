// //oops concept
// function person(first ,last){
//     this.fn= first;  
//     this.ln = last;

// }

// // new will use to consider in constructor
// const con1 = new person("madhan", "kumar")
// const con2 = new person("sam","eer")

// console.log(con1)
// console.log(con2)

// // to create constructor in class method
// class car{
//     constructor(name,year){
//         this.name=name;
//         this.year=year;
//     }
// }

// const car1 = new car("bmw",2020);

// console.log(car1);
// //polymorphism
// class day{
//     arjun(){
//         console.log('i am employer')
//     }
//     sameer(){
//         console.log("he is saint")
//     }
// }
// class night{
//     arjun(){
//         console.log('i am playboy')
//     }
//     sameer(){
//         console.log(' he is good boy')
//     }
// }

// let animal1= new day();
// let animal2= new night();
// animal2.arjun()
// animal1.sameer()




// //Abstraction easy way

// function person(name,age){
//    this.name = name;
//    this.age = age ;
// }
// person.prototype.getnameandage = ()=>{
// console.log(`${this.name}and age is ${this.age}`)

// }

// let person1 = new person('Aju',23)
// let person2 = new person('vvv',21)
// console.log(person2)




// //call 
// let member= {
//     fname :"steve",
//     age:100,
   
// }

// function printDetails( city ,job){
//     console.log("hi iam "+this.fname +" and my age " +this.age + " i am living"+ ''+city + ''+job)
// }

// let member2= {
//     fname :"sam",
//     age:10, 
// }

// let myfun = printDetails.bind(member2,['cbe' , 'i am software engineer'])

// //console.log(myfun)
// myfun()

