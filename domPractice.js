//Question1
let h2 = document.querySelector("h2");
console.dir(h2);
console.dir(h2.innerText);
h2.innerText = h2.innerText + " from Apna College";
console.dir(h2.innerText);

//Question2
let idx = 1;
let divs = document.querySelectorAll(".box");
for(let div of divs) {
    console.dir(div.innerText = `This is unique txt ${idx}`);
    idx++;
    
}