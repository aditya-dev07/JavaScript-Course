//Question1
let btn = document.createElement("button");
btn.innerText = "click me";
console.log(btn);

let body = document.querySelector("body");
body.prepend(btn);
btn.style.backgroundColor = "red";
btn.style.color = "white";

//Question2
let para = document.querySelector("p");
para.classList.add("newClass");
// para.classList.remove("newClass");