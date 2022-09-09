import { recipes } from "../Data/recipes.js";
import { recipesMaker } from"./class/recipesMaker.js";
import { generateIng, displayIng, generateAppli, displayAppli, generateUst, displayUst, ingredientsInput, ingredientsDown, ingredientsUp,displayIngDown, displayIngUp, appliancesInput, appliancesDown, appliancesUp,  displayAppDown, displayAppUp, ustensilsInput, ustensilsDown, ustensilsUp, displayUstDown, displayUstUp } from"./filters/dropdownMaker.js";
import { tagMaker__Obj } from "./class/tagMaker.js";

const recipesLocation = document.querySelector("#recipesZone");
const errorTextZone = document.querySelector("#errorTextZone") ;
const inputSearchBar = document.getElementById("searchBar_Input");
const inputSearchIngDropdown = document.getElementById("filter_ingredients");
const inputSearchAppDropdown = document.getElementById("filter_appliances");
const inputSearchUstDropdown = document.getElementById("filter_ustensils");

let ingList = [];
let appliList = [];
let ustList = [];

function recipesfirst (){
  recipes.forEach((recipe) => {
    const newrecipe = new recipesMaker(recipe);
    newrecipe.render();
}) }

inputSearchBar.addEventListener('keyup', function (e) {
  const input = e.target.value.toLowerCase();
  const recipeFilter = recipes.filter((recipe) => recipe.name.toLowerCase().includes(input) || recipe.description.toLowerCase().includes(input) ||
  recipe.ingredients.some((ingObj) => {
    return ingObj.ingredient.toLowerCase().includes(input);
  }) );

  

  if (input.length < 3 ) {
    recipesLocation.innerHTML = ``;
    errorTextZone.innerHTML = ``;
    recipes.forEach((recipe) => {
      const newrecipe = new recipesMaker(recipe);
      newrecipe.render();
    })

    ingList = generateIng(recipes);
    displayIng(ingList);
    appliList = generateAppli(recipes);
    displayAppli(appliList);
    ustList = generateUst(recipes);
    displayUst(ustList);

    const elemDOMList = [...document.querySelectorAll(".dropdownElem")];
    elemDOMList.forEach((elem) => {
      elem.addEventListener("click", function createTag (e){
        const elemName = e.target.textContent.slice(0);
        const elemClass = e.target.className; 
        tagMaker__Obj(elemName,elemClass);
        console.log(elemClass);
        console.log(elemName);

        recipesLocation.innerHTML = ``;
        errorTextZone.innerHTML = ``;

        const tagsZoneDOM = document.querySelectorAll(".spanObj");
        function filterRecipesByTag(recipeArr, tagObj) {
          return recipeArr.filter((recipe) => recipe.appliance.toLowerCase() === tagObj.textContent.toLowerCase() || recipe.ustensils.some((elem) => { return elem.toLowerCase() === tagObj.textContent.toLowerCase()}) || recipe.ingredients.some((ingObj) => {
            return ingObj.ingredient.toLowerCase() === tagObj.textContent.toLowerCase()
          }) );
        }

        let filteredByTag = [...recipes];
        tagsZoneDOM.forEach((tagDom) => {
          filteredByTag =  filterRecipesByTag(filteredByTag, tagDom)
        });
        console.log(filteredByTag)
        filteredByTag.forEach((recipe)=> {
          const newrecipe = new recipesMaker(recipe);
          newrecipe.render();
        })

        ingList = generateIng(filteredByTag);
        displayIng(ingList);
        appliList = generateAppli(filteredByTag);
        displayAppli(appliList);
        ustList = generateUst(filteredByTag);
        displayUst(ustList);

        const elemDOMList = [...document.querySelectorAll(".dropdownElem")];
        elemDOMList.forEach((elem) => {
          elem.addEventListener("click", createTag)
        })

        const tagCrossDOM = [... document.querySelectorAll(".circularCross")];

          function removTag(tag){
            tag.parentElement.remove();
            recipesLocation.innerHTML = ``;
            const tagsZoneDOM = document.querySelectorAll(".spanObj");
            function filterRecipesByTag(recipeArr, tagObj) {
              return recipeArr.filter((recipe) => recipe.appliance.toLowerCase() === tagObj.textContent.toLowerCase() || recipe.ustensils.some((elem) => { return elem.toLowerCase() === tagObj.textContent.toLowerCase()}) || recipe.ingredients.some((ingObj) => {
                return ingObj.ingredient.toLowerCase() === tagObj.textContent.toLowerCase()
              }) );
            }

            let filteredByTag = [...recipes];
            tagsZoneDOM.forEach((tagDom) => {
              filteredByTag =  filterRecipesByTag(filteredByTag, tagDom)
            });
            console.log(filteredByTag)
            filteredByTag.forEach((recipe)=> {
              const newrecipe = new recipesMaker(recipe);
              newrecipe.render();

              ingList = generateIng(filteredByTag);
              displayIng(ingList);
              appliList = generateAppli(filteredByTag);
              displayAppli(appliList);
              ustList = generateUst(filteredByTag);
              displayUst(ustList);
        
              const elemDOMList = [...document.querySelectorAll(".dropdownElem")];
              elemDOMList.forEach((elem) => {
                elem.addEventListener("click", createTag)
              })
            })
          }
          tagCrossDOM.forEach((tag) => {
            const text =  tag.parentElement.children[0].textContent;
            if (text === elemName) {
              tag.addEventListener("click", () => removTag(tag));
            }
          })
      })
    })
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
    recipeFilter.forEach((recipe) => {
      const newrecipe = new recipesMaker(recipe);
      newrecipe.render();
    })

    ingList = generateIng(recipeFilter);
    displayIng(ingList);
    appliList = generateAppli(recipeFilter);
    displayAppli(appliList);
    ustList = generateUst(recipeFilter);
    displayUst(ustList);

    const elemDOMList = document.querySelectorAll(".dropdownElem");
    elemDOMList.forEach(function tagCreat(elem) {
      elem.addEventListener("click", function createTag(e){
        recipesLocation.innerHTML = ``;
        errorTextZone.innerHTML = ``;
        const elemName = e.target.textContent.slice(0);
        const elemClass = e.target.className; 
        tagMaker__Obj(elemName,elemClass);
        console.log(elemClass);
        console.log(elemName);
        const tagsZoneDOM = document.querySelectorAll(".spanObj");
        function filterRecipesByTag(recipeArr, tagObj) {
          return recipeArr.filter((recipe) => recipe.appliance.toLowerCase() === tagObj.textContent.toLowerCase() || recipe.ustensils.some((elem) => { return elem.toLowerCase() === tagObj.textContent.toLowerCase()}) || recipe.ingredients.some((ingObj) => {
            return ingObj.ingredient.toLowerCase() === tagObj.textContent.toLowerCase()
          }) );
        }
       
        let filteredByTag = [...recipeFilter];
        tagsZoneDOM.forEach((tagDom) => {
          filteredByTag =  filterRecipesByTag(filteredByTag, tagDom)
        });
        console.log(filteredByTag)
        filteredByTag.forEach((recipe)=> {
          const newrecipe = new recipesMaker(recipe);
          newrecipe.render();
        })
       
        ingList = generateIng(filteredByTag);
        displayIng(ingList);
        appliList = generateAppli(filteredByTag);
        displayAppli(appliList);
        ustList = generateUst(filteredByTag);
        displayUst(ustList);

        inputSearchIngDropdown.addEventListener('keyup' ,function filterIng (){
          const inputIngDropdown = inputSearchIngDropdown.value.toLowerCase();
          const inputIngFilter = ingList.filter((elem) => elem.toLowerCase().includes(inputIngDropdown))
          displayIng(inputIngFilter);
          const elemDOMList = [...document.querySelectorAll(".dropdownElem")];
          elemDOMList.forEach((elem) => {
             elem.addEventListener("click", createTag)
          })
        })
        inputSearchAppDropdown.addEventListener('keyup' ,function filterApp (){
          const inputAppDropdown = inputSearchAppDropdown.value.toLowerCase();
          const inputAppFilter = appliList.filter((elem) => elem.toLowerCase().includes(inputAppDropdown))
          displayAppli(inputAppFilter);
          const elemDOMList = [...document.querySelectorAll(".dropdownElem")];
          elemDOMList.forEach((elem) => {
             elem.addEventListener("click", createTag)
          })
        })
        inputSearchUstDropdown.addEventListener('keyup' ,function filterApp (){
          const inputUstDropdown = inputSearchUstDropdown.value.toLowerCase();
          const inputUstFilter = ustList.filter((elem) => elem.toLowerCase().includes(inputUstDropdown))
          displayUst(inputUstFilter);
          const elemDOMList = [...document.querySelectorAll(".dropdownElem")];
          elemDOMList.forEach((elem) => {
             elem.addEventListener("click", createTag)
          })
        })

        const elemDOMList = [...document.querySelectorAll(".dropdownElem")];
        elemDOMList.forEach((elem) => {
          elem.addEventListener("click", createTag)})

        const tagCrossDOM = [... document.querySelectorAll(".circularCross")];
          function removTag(tag){
            tag.parentElement.remove();
            recipesLocation.innerHTML = ``;
            const tagsZoneDOM = document.querySelectorAll(".spanObj");
            function filterRecipesByTag(recipeArr, tagObj) {
              return recipeArr.filter((recipe) => recipe.appliance.toLowerCase() === tagObj.textContent.toLowerCase() || recipe.ustensils.some((elem) => { return elem.toLowerCase() === tagObj.textContent.toLowerCase()}) || recipe.ingredients.some((ingObj) => {
                return ingObj.ingredient.toLowerCase() === tagObj.textContent.toLowerCase()
              }) );
            }

            let filteredByTag = [...recipeFilter];
            tagsZoneDOM.forEach((tagDom) => {
              filteredByTag =  filterRecipesByTag(filteredByTag, tagDom)
            });
            console.log(filteredByTag)
            filteredByTag.forEach((recipe)=> {
              const newrecipe = new recipesMaker(recipe);
              newrecipe.render();

              ingList = generateIng(filteredByTag);
              displayIng(ingList);
              appliList = generateAppli(filteredByTag);
              displayAppli(appliList);
              ustList = generateUst(filteredByTag);
              displayUst(ustList);
        
              const elemDOMList = [...document.querySelectorAll(".dropdownElem")];
              elemDOMList.forEach((elem) => {
                elem.addEventListener("click", createTag)
              })
            })
          }
          tagCrossDOM.forEach((tag) => {
            const text =  tag.parentElement.children[0].textContent;
            if (text === elemName) {
              tag.addEventListener("click", () => removTag(tag));
            }
          })
      })
    })

    inputSearchIngDropdown.addEventListener('keyup' ,function filterIng (){
      const inputIngDropdown = inputSearchIngDropdown.value.toLowerCase();
      const inputIngFilter = ingList.filter((elem) => elem.toLowerCase().includes(inputIngDropdown))
      displayIng(inputIngFilter);
      const elemDOMList = [...document.querySelectorAll(".dropdownElem")];
      elemDOMList.forEach((elem) => {
         elem.addEventListener("click", createTag)
      })
    })
    inputSearchAppDropdown.addEventListener('keyup' ,function filterApp (){
      const inputAppDropdown = inputSearchAppDropdown.value.toLowerCase();
      const inputAppFilter = appliList.filter((elem) => elem.toLowerCase().includes(inputAppDropdown))
      displayAppli(inputAppFilter);
      const elemDOMList = [...document.querySelectorAll(".dropdownElem")];
      elemDOMList.forEach((elem) => {
         elem.addEventListener("click", createTag)
      })
    })
    inputSearchUstDropdown.addEventListener('keyup' ,function filterApp (){
      const inputUstDropdown = inputSearchUstDropdown.value.toLowerCase();
      const inputUstFilter = ustList.filter((elem) => elem.toLowerCase().includes(inputUstDropdown))
      displayUst(inputUstFilter);
      const elemDOMList = [...document.querySelectorAll(".dropdownElem")];
      elemDOMList.forEach((elem) => {
         elem.addEventListener("click", createTag)
      })
    })
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


ingList = generateIng(recipes);
displayIng(ingList);
appliList = generateAppli(recipes);
displayAppli(appliList);
ustList = generateUst(recipes);
displayUst(ustList);
        
recipesfirst ();
      
function createTag (e){
  recipesLocation.innerHTML = ``;
  errorTextZone.innerHTML = ``;
  const elemName = e.target.textContent.slice(0);
  const elemClass = e.target.className; 
  tagMaker__Obj(elemName,elemClass);
  console.log(elemClass);
  console.log(elemName);
  
  const tagsZoneDOM = document.querySelectorAll(".spanObj");
  function filterRecipesByTag(recipeArr, tagObj) {
    return recipeArr.filter((recipe) => recipe.appliance.toLowerCase() === tagObj.textContent.toLowerCase() || recipe.ustensils.some((elem) => { return elem.toLowerCase() === tagObj.textContent.toLowerCase()}) || recipe.ingredients.some((ingObj) => {
      return ingObj.ingredient.toLowerCase() === tagObj.textContent.toLowerCase()
    }));
  }
  
  let filteredByTag = [...recipes];
  tagsZoneDOM.forEach((tagDom) => {
    filteredByTag =  filterRecipesByTag(filteredByTag, tagDom)
  });
  filteredByTag.forEach((recipe)=> {
    const newrecipe = new recipesMaker(recipe);
      newrecipe.render();
    })
  
  ingList = generateIng(filteredByTag);
  displayIng(ingList);
  appliList = generateAppli(filteredByTag);
  displayAppli(appliList);
  ustList = generateUst(filteredByTag);
  displayUst(ustList);

  const elemDOMList = [...document.querySelectorAll(".dropdownElem")];
  elemDOMList.forEach((elem) => {
    elem.addEventListener("click", createTag)})
          
  const tagCrossDOM = [... document.querySelectorAll(".circularCross")];
  
  function removTag(tag){
    tag.parentElement.remove();
    recipesLocation.innerHTML = ``;
    const tagsZoneDOM = document.querySelectorAll(".spanObj");
    function filterRecipesByTag(recipeArr, tagObj) {
      return recipeArr.filter((recipe) => recipe.appliance.toLowerCase() === tagObj.textContent.toLowerCase() || recipe.ustensils.some((elem) => { return elem.toLowerCase() === tagObj.textContent.toLowerCase()}) || recipe.ingredients.some((ingObj) => {
        return ingObj.ingredient.toLowerCase() === tagObj.textContent.toLowerCase()
      }));
    }
  
    let filteredByTag = [...recipes];
    tagsZoneDOM.forEach((tagDom) => {
      filteredByTag =  filterRecipesByTag(filteredByTag, tagDom)
    });
    filteredByTag.forEach((recipe)=> {
      const newrecipe = new recipesMaker(recipe);
      newrecipe.render();
  
      ingList = generateIng(filteredByTag);
      displayIng(ingList);
      appliList = generateAppli(filteredByTag);
      displayAppli(appliList);
      ustList = generateUst(filteredByTag);
      displayUst(ustList);
        
      const elemDOMList = [...document.querySelectorAll(".dropdownElem")];
      elemDOMList.forEach((elem) => {
        elem.addEventListener("click", createTag)
      })
    })
  }
          
  tagCrossDOM.forEach((tag) => {
    const text =  tag.parentElement.children[0].textContent;
    if (text === elemName) {
      tag.addEventListener("click", () => removTag(tag));
    }
  })
}

const elemDOMList = [...document.querySelectorAll(".dropdownElem")];
elemDOMList.forEach((elem) => {
  elem.addEventListener("click", createTag)
})

inputSearchIngDropdown.addEventListener('keyup' ,function filterIng (){
  const inputIngDropdown = inputSearchIngDropdown.value.toLowerCase();
  const inputIngFilter = ingList.filter((elem) => elem.toLowerCase().includes(inputIngDropdown))
  displayIng(inputIngFilter);
  const elemDOMList = [...document.querySelectorAll(".dropdownElem")];
  elemDOMList.forEach((elem) => {
    elem.addEventListener("click", createTag)
  })
})
inputSearchAppDropdown.addEventListener('keyup' ,function filterApp (){
  const inputAppDropdown = inputSearchAppDropdown.value.toLowerCase();
  const inputAppFilter = appliList.filter((elem) => elem.toLowerCase().includes(inputAppDropdown))
  displayAppli(inputAppFilter);
  const elemDOMList = [...document.querySelectorAll(".dropdownElem")];
  elemDOMList.forEach((elem) => {
    elem.addEventListener("click", createTag)
  })
})
inputSearchUstDropdown.addEventListener('keyup' ,function filterApp (){
  const inputUstDropdown = inputSearchUstDropdown.value.toLowerCase();
  const inputUstFilter = ustList.filter((elem) => elem.toLowerCase().includes(inputUstDropdown))
  displayUst(inputUstFilter);
  const elemDOMList = [...document.querySelectorAll(".dropdownElem")];
  elemDOMList.forEach((elem) => {
    elem.addEventListener("click", createTag)
  })
})