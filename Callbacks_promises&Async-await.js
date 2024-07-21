//-----Sync in JS-----
//---Synchronous---
//Synchonous means the code runs in a particular sequence of instructions given in the program.
//Each instruction waits for the previous instruction to complete its execution

// console.log("one");
// console.log("two");
// console.log("three");
//all the programming works till are synchronous programming

//----Asynchronous----
//Due to synchronous programming, sometimes imp. instructions causes a delay in the UI.
//Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.

// console.log("One");
// console.log("two");
// console.log("three");
// function hello() {
//     console.log("hello");
// }
// setTimeout(hello,4000);//timeout (2s = 2000ms)

// console.log("four");
// console.log("five");
// console.log("six");
// in Asynchronous programming, not wait for a particular code but its run in parellel and execute next code.

//-------Callback Hell--------
//Callback Hell: Nested callbacks stacked below one another forming a pyramid structure(Pyramid of Doom)
//This style of programming becomes difficult to understand & manange.

//--nesting--(write programs or functions inside another)
//Example-1
// let age = 18;
// if (age >= 18) {
//     if (age >= 60) {
//         console.log("senior");
//     } else {
//         console.log("middle");
//     }
// } else {
//     console.log("child");
// }


//Example-2
// function getData(dataId, getNextData) {
//     setTimeout(() => {
//         console.log("data", dataId);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 2000);
// }
// //callBack Hell (nested callback)
// getData(1, () => {
//     console.log("getting data2...");
//     getData(2, () => {
//         console.log("getting data3...");
//         getData(3, () => {
//             console.log("getting data4...");
//             getData(4);
//         });
//     });
// });


//-----Promises-----
//promises is for "eventual" completon of task. It is an object in JS.
//It is a solutin to callback hell
//there are three states of Promises- (1)pending, (2)fulfilled, (3)rejected
//*resolve & reject are callbacks provided by JS

//let promise = new Promise((resolve, reject) =>{...})

// example-1
// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     //resolve("success"); //resolve & reject are function which is created by javaScript
//     reject("some error");

// })

//example-2
// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 3000);
//     });
// }

//---Promises functions---
//For use Promises there are two function are there :-
// (1).then() & (2).catch()

//promises.then((res) =>{...})
//promises.catch((err) => {...})

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         resolve("success");
//         // reject("netwark error");
//     });
// }
// let promise = getPromise();
// promise.then((res) => {  //res = result
//     console.log("promise fulfilled", res);
// });
// promise.catch((err) => { //err = error
//     console.log("rejected", err);
// });


//------promise Chain------
// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data1");
//             resolve("success");
//         }, 3000);
//     })
// }
// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("some data2");
//             resolve("success");
//         }, 3000);
//     })
// }

// console.log("fetching data1...");
// asyncFunc1().then(() => {
//     console.log("fetching data2...")
//     asyncFunc2().then((res) => {
//         console.log(res);
//     });
// })

///example 2
// function getData(dataId) {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 console.log("data", dataId);
//                 resolve("success");
//             }, 2000);
//         });
//     }

//     getData(1)
//     .then(() => {
//         return getData(2);
//     })
//     .then(() => {
//         return getData(3);
//     })
//     .then(() => {
//         return getData(4)
//     })
//     .then((res) => {
//         console.log(res);
//     });


//-------Async-Await-------
//async function alaways return a promise.

//async function myFunc() {....}
//await pauses the execution of its surrounding async function until the promise is settled.
//we use await function inside the async function only. we can't use await function function normally.
// example 1
// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Weather data");
//             resolve(200);
//         }, 2000)
//     })
// }
// async function getWeatherData() {
//     await api(); //1st
//     await api(); //2nd
// }

// //Example 2
function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data",dataId);
            resolve("success")
        },2000)
    });
}
//Async-await
async function getAllData() {
    console.log("getting data1...");
    await getData(1);
    console.log("getting data2...");
    await getData(2);
    console.log("getting data3...");
    await getData(3);
    console.log("getting data4...");
    await getData(4);
    console.log("getting data5...");

    await getData(5);
}

//Note:- where async-await use then there 'then() & catch()' not use vice-versa.
//for better to understand 'async-await' use always in programming.

