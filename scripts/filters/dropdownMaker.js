import { recipes } from "../../Data/recipes.js";

const ingredientsList = document.getElementById("ingredientsList");
const appliancesList = document.getElementById("appliancesList");
const ustensilsList = document.getElementById("ustensilsList");

function generateIng(recipeArray) {
  let ingList = [];

  recipeArray.forEach((recipe) => {
    recipe.ingredients.forEach((elem) => {
     let ingredientOfingredients = elem.ingredient;
     ingList.push(ingredientOfingredients);
    })
  })
  return [... new Set(ingList)].sort()
}

function displayIng(ingArr) {
  let ingString = "";
  ingArr.forEach((elem) => {
     ingString += "<li class='ingredientElem'>" + elem + "</li>"
  })
    ingredientsList.innerHTML = `${ingString}`
}

function generateAppli(recipeArray) {
  let appliList = [];
  recipeArray.forEach((recipe) => {
    let appliances = recipe.appliance;
    appliList.push(appliances);
  })
  return [... new Set(appliList)].sort()
}

function displayAppli(appliArr) {
  let appliString ="";
  appliArr.forEach ((elem) => {
    appliString += "<li class='ingredientElem'>" + elem + "</li>"
 })
 appliancesList.innerHTML = `${appliString}`
}

function generateUst(recipeArray) {
  let ustList = [];
  recipeArray.forEach((recipe) => {
    recipe.ustensils.forEach((ustensils) => {
     ustList.push(ustensils);
    })
  })
  return [... new Set(ustList)].sort();
}

function displayUst(ustArr) {
  let ustString ="";
  ustArr.forEach ((elem) => {
  ustString += "<li class='ingredientElem'>" + elem + "</li>"
})
  ustensilsList.innerHTML = `${ustString}`
}

const ingList = generateIng(recipes);
displayIng(ingList);
const appliList = generateAppli(recipes);
displayAppli(appliList);
const ustList = generateUst(recipes);
displayUst(ustList);


const ingredientsButton = document.getElementById("ingredients_button");
const ingredientsInput = document.getElementById("filter_ingredients");
const ingredientsDown = document.getElementById("ingredientsDown");
const ingredientsUp = document.getElementById("ingredientsUp");

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