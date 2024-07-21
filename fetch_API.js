//-----fetch API-----
//API- Application Programming Interface
//The Fetch API provides an interface for fetching (sending/receiving) resources.
//It uses request and Response objects

//The fetch() method is used to fetch a resources(data).

//let promise = fetch(url, [options])

//ex-1
// const URL = "https://cat-fact.herokuapp.com/facts";
// let promise = fetch(URL); //fetch always return promise
// console.log(promise);

//Ex-2 async-await...
const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const getFacts = async () => {
    console.log("getting data...");
    let response = await fetch(URL);
    console.log(response); //JSON format
    let data = await response.json();
    console.log(data[1].text);
    factPara.innerText = data[1].text;
}
const btn = document.querySelector("#btn");
btn.addEventListener("click",getFacts);



//when we use fetch() method or not send any options then fetch method create a particular type of request called 'Get Request'.
//Those request which work for only brings data is called 'Get Request'.

//------Understanding Terms-----
//AJAX is Asynchronous JS & XML
//JSON is JavaScript Object Notation (look above ex-2)
// json() method: retrun a second promise that resolves with the result of pursing the response body text as JSON.(Input is JSON, output is JS object)
 //we withdraw our actual useable data through JSON method. 
