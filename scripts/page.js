import { recipes } from "../Data/recipes.js";

class recipesMaker {
  constructor(recipesData) {
    this.name = recipesData.name;
    this.time = recipesData.time;
    this.ingredients = recipesData.ingredients;
    this.description = recipesData.description;
  }

  getIngredientsCard() {
    let temp = ""
    this.ingredients.forEach((ingredient) => {

      if(ingredient.quantity === undefined) {
        temp += "<li class='displayedIngredients'>"+ "<span class='ingredientName'>" + ingredient.ingredient +"</span>"+"</li>"
      } else if(ingredient.unit === undefined) {
        temp += "<li class='displayedIngredients'>"+ "<span class='ingredientName'>" + ingredient.ingredient +"</span>"+": "+ ingredient.quantity +"</li>"
      } else if(ingredient.unit === "grammes") {
        temp += "<li class='displayedIngredients'>"+ "<span class='ingredientName'>" + ingredient.ingredient +"</span>"+": "+ ingredient.quantity +"g"+"</li>" 
      } else {
        temp += "<li class='displayedIngredients'>"+ "<span class='ingredientName'>" + ingredient.ingredient +"</span>"+": "+ ingredient.quantity + ingredient.unit +"</li>";
      }
          
    })
    return temp;
  }

  render() {
    const recipesLocation = document.querySelector("#recipesZone");
    const recipes__content = document.createElement("article");
    recipes__content.className = "recipes__content--article";
    recipes__content.innerHTML = `
      <img src="assets/img.png">
      <div class="recipeHeader">
        <h2>${this.name}</h2>
        <div class="recipeTimer">
        <i class="far fa-regular fa-clock"></i>
          <p>${this.time}</p>
        </div>
      </div>
      <div class="recipeContent">
        <ul class="recipeIngredients">
          ${this.getIngredientsCard()}
        </ul>
        <p class="recipeDescription">${this.description}</p>
      </div>`
    recipesLocation.appendChild(recipes__content);
  }

}

let inputSearchBarre = document.getElementById("searchBar_Input").innerHTML;
let ingredientArray = [];
const ingredientsList = document.getElementById("ingredientsList");


// faire le premier if ici pour englober l'utilisation de la classe recipeMaker sans filter 
function conditionAffichage(recipes) {
  if (inputSearchBarre.length < 3) {
    recipes.forEach((recipe) => {
      const newrecipe = new recipesMaker(recipe);
      newrecipe.render();
    
      recipe.ingredients.forEach((elem) => {
       let ingredientOfingredients = [elem.ingredient];
       console.log(ingredientArray);
      ingredientArray.push(ingredientOfingredients);
      //  const ingredientPush = ingredientArray.push(ingredientOfingredients);
       ingredientsList.innerHTML = `${ingredientArray}`
      })
    })
  } else {
    const recipeFilter = recipes.filter((elem) => elem.appliance === inputSearchBarre);
  }
  
}
conditionAffichage(recipes)
inputSearchBarre.addEventListener("y", console.log('teste'));
// recipes.forEach((recipe) => {
//   const newrecipe = new recipesMaker(recipe);
//   newrecipe.render();

//   recipe.ingredients.forEach((elem) => {
//    let ingredientOfingredients = [elem.ingredient];
//    console.log(ingredientOfingredients);
//   ingredientArray.push(ingredientOfingredients);
//   //  const ingredientPush = ingredientArray.push(ingredientOfingredients);
//    ingredientsList.innerHTML = `${ingredientArray}`
//   })
// })

function ingredientsFilter (dataIngredients){
  dataIngredients.forEach((ingredient) => {
    console.log(ingredient);
  })
}

const ingredientsButton = document.getElementById("ingredients_button");
const ingredientsInput = document.getElementById("filter_ingredients");
const ingredientsDown = document.getElementById("ingredientsDown");
const ingredientsUp = document.getElementById("ingredientsUp");
// const ingredientsList = document.getElementById("ingredientsList");

function displayIngDown() {
    ingredientsButton.style.width = "700px";
    ingredientsList.style.display = "grid";
    ingredientsDown.style.display = "none";
    ingredientsUp.style.display = "block";
    displayAppUp();
    displayUstUp();
    // ingredientsFilter(recipes);
// function ingredientsFilter (dataIngredients){
// //  this.ingredients = dataIngredients.ingredients;

//   let ingredientArray = [];
//   dataIngredients.ingredients.forEach((ingredient) => {
//     const ingredientPush = ingredientArray.push(ingredient.ingredient);
//   })
//   ingredientsList.appendChild(ingredientArray);
// } 

  // recipes.ingredients.forEach((ingredient) => {
  //     const ingredientPush = ingredientArray.push(ingredient.ingredient);
  //     // ingredientsList.appendChild(ingredientArray);
  //   })

}
ingredientsInput.addEventListener("click", displayIngDown);
ingredientsDown.addEventListener("click", displayIngDown);

function displayIngUp() {
    ingredientsButton.style.width = "170px";
    ingredientsList.style.display = "none";
    ingredientsDown.style.display = "block";
    ingredientsUp.style.display = "none";
}

ingredientsUp.addEventListener("click", displayIngUp);

const appliancesButton = document.getElementById("appliances_button");
const appliancesInput = document.getElementById("filter_appliances");
const appliancesDown = document.getElementById("appliancesDown");
const appliancesUp = document.getElementById("appliancesUp");
const appliancesList = document.getElementById("appliancesList")

function displayAppDown() {
    appliancesButton.style.width = "400px";
    appliancesList.style.display = "grid";
    appliancesDown.style.display = "none";
    appliancesUp.style.display = "block";
    displayIngUp();
    displayUstUp();
}
appliancesInput.addEventListener("click", displayAppDown);
appliancesDown.addEventListener("click", displayAppDown);

function displayAppUp() {
    appliancesButton.style.width = "170px";
    appliancesList.style.display = "none";
    appliancesDown.style.display = "block";
    appliancesUp.style.display = "none";
}

appliancesUp.addEventListener("click", displayAppUp);

const ustensilsButton = document.getElementById("ustensils_button");
const ustensilsInput = document.getElementById("filter_ustensils");
const ustensilsDown = document.getElementById("ustensilsDown");
const ustensilsUp = document.getElementById("ustensilsUp");
const ustensilsList = document.getElementById("ustensilsList");

function displayUstDown() {
    ustensilsButton.style.width = "500px";
    ustensilsList.style.display = "grid";
    ustensilsDown.style.display = "none";
    ustensilsUp.style.display = "block";
    displayIngUp();
    displayAppUp();
}
ustensilsInput.addEventListener("click", displayUstDown);
ustensilsDown.addEventListener("click", displayUstDown);

function displayUstUp() {
    ustensilsButton.style.width = "170px";
    ustensilsList.style.display = "none";
    ustensilsDown.style.display = "block";
    ustensilsUp.style.display = "none";
}
ustensilsUp.addEventListener("click", displayUstUp);




