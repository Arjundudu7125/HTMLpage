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


// //serial execution
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

// //settimeout
// console.log("before")

// function greet(){
//     console.log('welcome')
// }

// setTimeout(greet,5000)
// console.log("after")

// //setInterval
// function hello(){
//     console.log("hello")
// }


// let time= setInterval(hello,1000)
// setTimeout(function(){
//     clearInterval(time)
// },3000)


// promise

 function placeOrder(drink){
    return new Promise((resolve,reject)=>{
        if(drink === 'cofee'){
            resolve('order for coffee is recieved')
        }
        else{
            reject('other orders are rejected')
        }
    }) 
}

function processOrder(order){
    return new Promise(function(resolve){
        console.log('order is being processed')
        resolve(`order is served`)
    } )
}

// placeOrder('soup').then(function(orderPlaced){
//     console.log(orderPlaced)
//     let orderIsProcessed  = processOrder(orderPlaced)
//     return orderIsProcessed
// }).then(function(processOrder){
//     console.log(processOrder)
// }).catch(function(err){console.log(err)})

// ASync and await

async function serveOrder(){
try{
    let orderPlaced = await placeOrder('cofee')
    console.log(orderPlaced)
    let orderProcessed = await processOrder(orderPlaced)
    console.log(orderProcessed)
}
catch(err){
    console.log(err)
}
}

serveOrder()





//https://www.jsv9000.app/ ; use this app