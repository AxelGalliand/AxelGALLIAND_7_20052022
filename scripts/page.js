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

const searchIcon = document.getElementsByClassName("search_Icon")[0];

const ingredientsList = document.getElementById("ingredientsList");
const appliancesList = document.getElementById("appliancesList");
const ustensilsList = document.getElementById("ustensilsList");


function conditionAffichage(recipes) {
  let inputSearchBarre = document.getElementById("searchBar_Input").value;
  if (inputSearchBarre.length < 3) {
    alert("+++3")
    recipes.forEach((recipe) => {
      const newrecipe = new recipesMaker(recipe);
      newrecipe.render();
    })

  } else {
    alert("---3")
    // const recipeFilter = recipes.filter((elem) => elem.appliance  === inputSearchBarre); 
  }
}

function generateIng(recipeArray) {
  let ingArr = "";
  recipeArray.forEach((recipe) => {
    recipe.ingredients.forEach((elem) => {
     let ingredientOfingredients = elem.ingredient;
     ingArr += "<li class='ingredientElem'>" + ingredientOfingredients + "</li>"
    })
  })
  ingredientsList.innerHTML = `${ingArr}`
  return ingArr
}

function generateAppli(recipeArray) {
  let appliArr = "";
  recipeArray.forEach((recipe) => {
     let appliances = recipe.appliance;
     appliArr += "<li class='appliancesElem'>" + appliances + "</li>"
  })
  appliancesList.innerHTML = `${appliArr}`
  return appliArr
}

function generateUst(recipeArray) {
  let ustArr = "";
  recipeArray.forEach((recipe) => {
    recipe.ustensils.forEach((ustensils) => {
    //  let ustensils = ustensils;
     ustArr += "<li class='ingredientElem'>" + ustensils + "</li>"
    })
  })
  console.log(ustArr);
  ustensilsList.innerHTML = `${ustArr}`
  return ustArr
}


generateIng(recipes);
generateAppli(recipes);
generateUst(recipes);


conditionAffichage(recipes);
searchIcon.addEventListener("click",() => conditionAffichage(recipes));


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

