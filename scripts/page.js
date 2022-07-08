import { recipes } from "../Data/recipes.js";
import { recipesMaker } from"./class/recipesMaker.js";
import { } from"./filters/dropdownMaker.js";


const recipesLocation = document.querySelector("#recipesZone");

const inputSearchBarre = document.getElementById("searchBar_Input")

function ingInput (elem){
  const input = inputSearchBarre.value.toLowerCase();
  elem.ingredient.includes(input)
  
}

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
    const recipeFilter = recipes.filter((recipe) => recipe.name.toLowerCase().includes(input) || recipe.description.toLowerCase().includes(input) ||
    recipe.ingredients.some(ingInput) ); 
    console.log(recipeFilter);
    recipeFilter.forEach((recipe) => {
      const newrecipe = new recipesMaker(recipe);
    newrecipe.render();
    })
  }
})

