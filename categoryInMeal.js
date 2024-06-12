"use strict";

const apiBaseUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c="
//                          www.themealdb.com/api/json/v1/1/filter.php?c=Seafood


window.onload = function () {
  const getResultsButton = document.getElementById("getResultsButton");
  
  getResultsButton.onclick = onGetResultsButtonClick;

};


function onGetResultsButtonClick() {
  const categoryInput = document.getElementById("categoryInput");
  const resultsOutput = document.getElementById("resultsOutput");

  let actualUrl = apiBaseUrl + categoryInput.value;

  fetch(actualUrl).then(response => response.json()).then(data => {
   
    console.log(data);
    for(let meal of data.meals){
        let p = document.createElement("p");
          p.innerHTML = meal.strMeal;
      
      
      resultsOutput.appendChild(p);
    }

  })
}
