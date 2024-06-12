" use strict"

const apiBaseUrl = "https://jsonplaceholder.typicode.com/todos/1";

window.onload = function(){
  const toDoButton = document.getElementById("toDoButton");
  toDoButton.onclick = onToDoButtonClick;
  
};


function onToDoButtonClick(){
  console.log("Hello");
  
  const toDoInput = document.getElementById("toDoInput");
  const massage = document.getElementById("massage");

  let actualUrl = apiBaseUrl + toDoInput.value;

  fetch(actualUrl).then(response => response.json()).then(data => {
   
    console.log(data);
    //let user = data.title;
      let p = document.createElement("p");
      p.innerHTML = data.title;

      massage.appendChild(p);
    
  })
}