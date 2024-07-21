//---DOM Manipulation---
//---Attributes---
//getAttribute(atr) //to get the attribute value
// let para1 = document.querySelector("div");
// console.dir(para1);
// let idName = para1.getAttribute("id");
// console.log(idName);

// let para2 = document.querySelector("p");
// console.log(para2);
// let className = para2.getAttribute("class");
// console.log(className);

//setAttribute(atr, value) //to set(change/update) the attribute value
// let para3 = document.querySelector(".box2")
// console.log(para3.setAttribute("class", "collection"));

//---Style---
//node.style //Used to print and update node style
//   let para4 = document.querySelector("#box3");
//   console.log(para4.style);
//    para4.style.backgroundColor = "Red";
//    para4.style.color = "blue";
//    para4.style.fontSize = "25px";

//----Insert Elements----
//let el = document.createElement("div") //first create the element which is to be inserted
// node.append(el) //adds at the end of node(inside)
let newBtn = document.createElement("button");
newBtn.innerText = "Click me!"
console.log(newBtn);

let div = document.querySelector("#box3");
div.append(newBtn);

// node.prepend(el) //adds at the start of node(inside)
let para = document.createElement("p");
para.innerText = "container";
console.log(para);

div.prepend(para);

//node.before(el) ///adds before the node (outside)
let heading = document.createElement("h1");
heading.innerHTML = "<i>This is container</i>";
console.log(heading);

div.before(heading);

// node.after(el) //adds after the node(outside)
let btn2 = document.createElement("button");
btn2.innerText = "Submit";
console.log(btn2);

div.after(btn2);

//---Delete Element----
//node.remove() //removes the node
// div.remove();
//heading.remove();



