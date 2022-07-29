import { recipes } from "../Data/recipes.js";
import { recipesMaker } from"./class/recipesMaker.js";
import { generateIng, displayIng, generateAppli, displayAppli, generateUst, displayUst, ingredientsInput, ingredientsDown, ingredientsUp,displayIngDown, displayIngUp, appliancesInput, appliancesDown, appliancesUp,  displayAppDown, displayAppUp, ustensilsInput, ustensilsDown, ustensilsUp, displayUstDown, displayUstUp } from"./filters/dropdownMaker.js";
import { tagMaker__ing } from "./class/tagMaker.js";

const recipesLocation = document.querySelector("#recipesZone");
const errorTextZone = document.querySelector("#errorTextZone") ;
const inputSearchBarre = document.getElementById("searchBar_Input")

// function ingInput (elem){
//   const input = inputSearchBarre.value.toLowerCase();
//   elem.ingredient.includes(input)
  
// }

function recipesfirst (){
  recipes.forEach((recipe) => {
const newrecipe = new recipesMaker(recipe);
      newrecipe.render();
}) }


inputSearchBarre.addEventListener('keyup', function (e) {
  const input = e.target.value.toLowerCase();
  const recipeFilter = recipes.filter((recipe) => recipe.name.toLowerCase().includes(input) || recipe.description.toLowerCase().includes(input) ||
  recipe.ingredients.some((ingObj) => {
    return ingObj.ingredient.toLowerCase().includes(input)
  }) );

  if (input.length < 3) {
    recipesLocation.innerHTML = ``;
    errorTextZone.innerHTML = ``;
    recipes.forEach((recipe) => {
      const newrecipe = new recipesMaker(recipe);
      newrecipe.render();
      
    })
    const ingList = generateIng(recipes);
    displayIng(ingList);
    const appliList = generateAppli(recipes);
    displayAppli(appliList);
    const ustList = generateUst(recipes);
    displayUst(ustList);
    const ingDOMList = [...document.querySelectorAll(".ingredientElem")];
    ingDOMList.forEach((elem) => {
      elem.addEventListener("click", function(){
        const elemName = elem.textContent.slice(0);
        tagMaker__ing(elemName);
        console.log(elemName)
        const tagCrossDOM = [... document.querySelectorAll(".circularCross")];
        tagCrossDOM.forEach((e) => {
          e.addEventListener("click", function(){
            e.parentElement.remove()
          })
        })
      })})

  } 
  else if (recipeFilter.length == 0) {
    recipesLocation.innerHTML = ``;
    errorTextZone.innerHTML = ``;
    errorTextZone.style.display = "flex"
    errorTextZone.style.justifyContent = "center"
    const span = document.createElement('span')
    span.className = "errorText"
    span.textContent =  `Aucune recette ne correspond à votre critère… vous pouvez
    chercher « tarte aux pommes », « poisson », etc`
    span.style.padding = "8em";
    span.style.fontSize = "150%"

    errorTextZone.appendChild(span);
  }
  else {
    recipesLocation.innerHTML = ``;
    errorTextZone.innerHTML = ``;
    // console.log(recipeFilter);
    recipeFilter.forEach((recipe) => {
      const newrecipe = new recipesMaker(recipe);
    newrecipe.render();
    })

    const ingList = generateIng(recipeFilter);
    displayIng(ingList);
    const appliList = generateAppli(recipeFilter);
    displayAppli(appliList);
    const ustList = generateUst(recipeFilter);
    displayUst(ustList);

    const ingDOMList = [...document.querySelectorAll(".ingredientElem")];
    ingDOMList.forEach((elem) => {
      elem.addEventListener("click", function(){
        const elemName = elem.textContent.slice(0);
        tagMaker__ing(elemName);
        console.log(elemName)
        const tagCrossDOM = [... document.querySelectorAll(".circularCross")];
        tagCrossDOM.forEach((e) => {
          e.addEventListener("click", function(){
            e.parentElement.remove()
          })
        })
      })})
  }

 
})

ingredientsInput.addEventListener("click", displayIngDown);
ingredientsDown.addEventListener("click", displayIngDown);

ingredientsUp.addEventListener("click", displayIngUp);

appliancesInput.addEventListener("click", displayAppDown);
appliancesDown.addEventListener("click", displayAppDown);

appliancesUp.addEventListener("click", displayAppUp);

ustensilsInput.addEventListener("click", displayUstDown);
ustensilsDown.addEventListener("click", displayUstDown);

ustensilsUp.addEventListener("click", displayUstUp);


const ingList = generateIng(recipes);

displayIng(ingList);
const appliList = generateAppli(recipes);
displayAppli(appliList);
const ustList = generateUst(recipes);
displayUst(ustList);

recipesfirst ();


// const ingElemEvent = document.querySelector(".h1teste");

// let ingElemEventArr = [];
// ingList.forEach((elem) => {
//   console.log(elem);
//   const ingElemEvent = document.querySelector(".ingredientElem");
//   ingElemEvent.addEventListener("click", function(){
//   ingElemEventArr.push(elem)
//   console.log(ingElemEventArr)
//   })})

const ingDOMList = [...document.querySelectorAll(".ingredientElem")];
ingDOMList.forEach((elem) => {
  elem.addEventListener("click", function(){
    const elemName = elem.textContent.slice(0);
    tagMaker__ing(elemName);
    console.log(elemName)
    const tagCrossDOM = [... document.querySelectorAll(".circularCross")];
    tagCrossDOM.forEach((e) => {
      e.addEventListener("click", function(){
        e.parentElement.remove()
      })
    })
  })})