//---DOM Manipulation----

// Selecting with id
let heading = document.getElementById("heading");
console.dir(heading);

//Selecting with class
let headings = document.getElementsByClassName("heading2");
console.dir(headings);
console.log(headings);

//Select with tag
let para = document.getElementsByTagName("p");
console.dir(para);

//...Query Selector(Universal Selectors)...

// let firstheading = document.querySelector("#heading") //id name always write with #
// console.dir(firstheading);

let classEle = document.querySelector(".headings") //class name always write with dot(.)
console.dir(classEle);

let classEles= document.querySelectorAll(".headings")//class name always write with dot(.)
console.dir(classEles);

let firstElement = document.querySelector("p"); //return firstElement
console.dir(firstElement);

let allElements = document.querySelectorAll("p"); //return all Elements
console.dir(allElements); //return nodeList



//----properties----
//tagName :returns tag for element nodes
let firstheading = document.querySelector("#heading") //id name always write with #
console.dir(firstheading);
console.dir(firstheading.tagName); //can access in browser console also

//innerText : returns the text content of the elements and all its children
let div = document.querySelector("div");
console.dir(div);
console.log(div.innerText);

//innerHTML : returns the plain text or HTML contents along with tags of the element 
let div2 = document.querySelector("div");
console.dir(div2);
console.log(div2.innerHTML);

//...use to change in runtime dynamically...
//div.innerText = "abcd";
//div.innerHTML = "<div><i>inner div</i></div>"// try it on browser console

//textContent : returns textual content even for hidden elements
let paragraph = document.querySelector("h5");
// try it also on browser console
console.dir(paragraph);
console.dir(paragraph.innerText);
console.log(paragraph.textContent);





