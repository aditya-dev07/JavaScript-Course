// ---Event handling in JS----

// node.event =() => {
// handle here
// }
let btn = document.querySelector("#btn");
btn.onclick = () => {
    console.log("btn was clicked");
};

let div = document.querySelector("#box");
div.onmouseover = () =>{
    let a = 4;
    let b = 5;
    let sum = a+b;
    console.log("sum=",sum);
    console.log("you are inside in 2nd div");
}

//----Event Object----
//It is a special object that has details about the event
//All evet handlers hav access to the Event Objects's properties and methods

// node.event = (e) => {
//     handle here
// }
//denoted by 'e', 'evt' or 'event'
btn.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX , evt.clientY);// on which position event occur on the screen
}

div.onmouseover = (evt) =>{
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX , evt.clientY);
}

//----Event Listeners----
//node.addEventListener(event,callback)
let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", ()=>{
console.log("button was clicked1");
});
btn1.addEventListener("click", function(){
console.log("button was clicked2");
});
btn1.addEventListener("click", ()=>{
console.log("button was clicked3");
});
btn1.addEventListener("click", function(){
console.log("button was clicked4");
});

let div1 = document.querySelector(".box1");
const handler = () =>{
    console.log("mouse over is completed")
}
div1.addEventListener("mouseover",handler );

 //we can also get event object in event Listener
 btn1.addEventListener("click",function(evt){
    console.log(evt);
 });

 //---Remove eventListener---
 //node.removeEventListener(event,callback)
//Note: the callback reference should be same to remove
//store first function in variable
// div1.removeEventListener("mouseover", handler);

//---PracticeSet9---
//make toggle buttom(switch one event to another)
let modeBtn = document.querySelector("#mode");
let currMode = "light";

modeBtn.addEventListener("click", () => {
    if(currMode === "light") {
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    } else{
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white";

    }
    console.log(currMode);
})
