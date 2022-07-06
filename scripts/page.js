import { recipes } from "../Data/recipes.js";
import { recipesMaker } from"./class/recipesMaker.js";
import { } from"./filters/dropdownMaker.js";


const recipesLocation = document.querySelector("#recipesZone");

const inputSearchBarre = document.getElementById("searchBar_Input")

inputSearchBarre.addEventListener('keyup', function () {
  const input = inputSearchBarre.value.toLowerCase();

  if (input.length < 3) {
    // alert("+++3")
    recipesLocation.innerHTML = ``;
    recipes.forEach((recipe) => {
      const newrecipe = new recipesMaker(recipe);
      newrecipe.render();
    })
   

  } else {
    // alert("---3")
    recipesLocation.innerHTML = ``;
    const recipeFilter = recipes.filter((elem) => elem.name.toLowerCase().includes(input) || elem.description.toLowerCase().includes(input) ); 
    console.log(recipeFilter);
  }
})

