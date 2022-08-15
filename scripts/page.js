import { recipes } from "../Data/recipes.js";
import { recipesMaker } from"./class/recipesMaker.js";
import { generateIng, displayIng, generateAppli, displayAppli, generateUst, displayUst, ingredientsInput, ingredientsDown, ingredientsUp,displayIngDown, displayIngUp, appliancesInput, appliancesDown, appliancesUp,  displayAppDown, displayAppUp, ustensilsInput, ustensilsDown, ustensilsUp, displayUstDown, displayUstUp } from"./filters/dropdownMaker.js";
import { tagMaker__Obj } from "./class/tagMaker.js";

const recipesLocation = document.querySelector("#recipesZone");
const errorTextZone = document.querySelector("#errorTextZone") ;
const inputSearchBar = document.getElementById("searchBar_Input")


function recipesfirst (){
  recipes.forEach((recipe) => {
    const newrecipe = new recipesMaker(recipe);
    newrecipe.render();
}) }

inputSearchBar.addEventListener('keyup', function (e) {
  const input = e.target.value.toLowerCase();
  const recipeFilter = recipes.filter((recipe) => recipe.name.toLowerCase().includes(input) || recipe.description.toLowerCase().includes(input) ||
  recipe.ingredients.some((ingObj) => {
    return ingObj.ingredient.toLowerCase().includes(input)
  }) );
///////////////////////////////// if input < 3 /////////////////////////////////
  if (input.length < 3 ) {
    recipesLocation.innerHTML = ``;
    errorTextZone.innerHTML = ``;
    recipes.forEach((recipe) => {
      const newrecipe = new recipesMaker(recipe);
      newrecipe.render();
    })
        ////////////////////// adaptation of dropdown elem////////////////
    const ingList = generateIng(recipes);
    displayIng(ingList);
    const appliList = generateAppli(recipes);
    displayAppli(appliList);
    const ustList = generateUst(recipes);
    displayUst(ustList);

    const elemDOMList = [...document.querySelectorAll(".dropdownElem")];
    elemDOMList.forEach((elem) => {
      elem.addEventListener("click", function createTag (e){
        const elemName = e.target.textContent.slice(0);
        const elemId = e.target.id; 
        tagMaker__Obj(elemName,elemId);
        console.log(elemId);
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


        const ingList = generateIng(filteredByTag);
        displayIng(ingList);
        const appliList = generateAppli(filteredByTag);
        displayAppli(appliList);
        const ustList = generateUst(filteredByTag);
        displayUst(ustList);

        ///////////////////
        const elemDOMList = [...document.querySelectorAll(".dropdownElem")];
        elemDOMList.forEach((elem) => {
          console.log(elem)
          elem.addEventListener("click", createTag)
        })
        //////////////////

        const tagCrossDOM = [... document.querySelectorAll(".circularCross")];
        tagCrossDOM.forEach((e) => {
          e.addEventListener("click", function(){
            e.parentElement.remove();
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

              const ingList = generateIng(filteredByTag);
              displayIng(ingList);
              const appliList = generateAppli(filteredByTag);
              displayAppli(appliList);
              const ustList = generateUst(filteredByTag);
              displayUst(ustList);
        
                ///////////////////
              const elemDOMList = [...document.querySelectorAll(".dropdownElem")];
              elemDOMList.forEach((elem) => {
                // console.log(elem)
                elem.addEventListener("click", createTag)
              })
                //////////////////
            })
          })
        })
      })})

  } ///////////////////////////////////// if nothing match in input ///////////////////
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
    /////////////////////////// if input > 3 /////////////////////////////////
    recipesLocation.innerHTML = ``;
    errorTextZone.innerHTML = ``;
    // console.log(recipeFilter);
    recipeFilter.forEach((recipe) => {
      const newrecipe = new recipesMaker(recipe);
      newrecipe.render();
    })
        ////////////////////// adaptation of dropdown elem////////////////
    const ingList = generateIng(recipeFilter);
    displayIng(ingList);
    const appliList = generateAppli(recipeFilter);
    displayAppli(appliList);
    const ustList = generateUst(recipeFilter);
    displayUst(ustList);

    const elemDOMList = [...document.querySelectorAll(".dropdownElem")];
    elemDOMList.forEach((elem) => {
      elem.addEventListener("click", function createTag(e){
        recipesLocation.innerHTML = ``;
        errorTextZone.innerHTML = ``;
        const elemName = e.target.textContent.slice(0);
        const elemId = e.target.id; 
        tagMaker__Obj(elemName,elemId);
        console.log(elemId);
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
       
        const ingList = generateIng(filteredByTag);
        displayIng(ingList);
        const appliList = generateAppli(filteredByTag);
        displayAppli(appliList);
        const ustList = generateUst(filteredByTag);
        displayUst(ustList);

        ///////////////////
        const elemDOMList = [...document.querySelectorAll(".dropdownElem")];
        elemDOMList.forEach((elem) => {
          console.log(elem)
          elem.addEventListener("click", createTag)})
        //////////////////

        const tagCrossDOM = [... document.querySelectorAll(".circularCross")];
        tagCrossDOM.forEach((e) => {
          e.addEventListener("click", function(){
            e.parentElement.remove()
            recipesLocation.innerHTML = ``;
            const tagsZoneDOM = document.querySelectorAll(".spanObj");
            function filterRecipesByTag(recipeArr, tagObj) {
              return recipeArr.filter((recipe) => recipe.appliance.toLowerCase() === tagObj.textContent.toLowerCase() || recipe.ustensils.some((elem) => { return elem.toLowerCase() === tagObj.textContent.toLowerCase()}) || recipe.ingredients.some((ingObj) => {
                return ingObj.ingredient.toLowerCase() === tagObj.textContent.toLowerCase()
              }));
            }

            let filteredByTag = [...recipeFilter];
            tagsZoneDOM.forEach((tagDom) => {
              filteredByTag =  filterRecipesByTag(filteredByTag, tagDom)
            });
            console.log(filteredByTag)
            filteredByTag.forEach((recipe)=> {
              const newrecipe = new recipesMaker(recipe);
              newrecipe.render();

              const ingList = generateIng(filteredByTag);
              displayIng(ingList);
              const appliList = generateAppli(filteredByTag);
              displayAppli(appliList);
              const ustList = generateUst(filteredByTag);
              displayUst(ustList);
  
              ///////////////////
              const elemDOMList = [...document.querySelectorAll(".dropdownElem")];
              elemDOMList.forEach((elem) => {
                console.log(elem)
                elem.addEventListener("click", createTag)
              })
              //////////////////
            })
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

        ////////////////////// adaptation of dropdown elem////////////////
const ingList = generateIng(recipes);
displayIng(ingList);
const appliList = generateAppli(recipes);
displayAppli(appliList);
const ustList = generateUst(recipes);
displayUst(ustList);

recipesfirst ();



const elemDOMList = [...document.querySelectorAll(".dropdownElem")];
   elemDOMList.forEach((elem) => {
      elem.addEventListener("click", function createTag (e){
      recipesLocation.innerHTML = ``;
      errorTextZone.innerHTML = ``;
      const elemName = e.target.textContent.slice(0);
      const elemId = e.target.id; 
      tagMaker__Obj(elemName,elemId);
      console.log(elemId);
      console.log(elemName);

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

        const ingList = generateIng(filteredByTag);
        displayIng(ingList);
        const appliList = generateAppli(filteredByTag);
        displayAppli(appliList);
        const ustList = generateUst(filteredByTag);
        displayUst(ustList);

        ///////////////////
        const elemDOMList = [...document.querySelectorAll(".dropdownElem")];
        elemDOMList.forEach((elem) => {
          console.log(elem)
          elem.addEventListener("click", createTag)})
        //////////////////
        

       const tagCrossDOM = [... document.querySelectorAll(".circularCross")];

       function removTag(e){
        e.parentElement.remove();
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

        const ingList = generateIng(filteredByTag);
      displayIng(ingList);
      const appliList = generateAppli(filteredByTag);
      displayAppli(appliList);
      const ustList = generateUst(filteredByTag);
      displayUst(ustList);
      

              ///////////////////
              const elemDOMList = [...document.querySelectorAll(".dropdownElem")];
              elemDOMList.forEach((elem) => {
                // console.log(elem)
                elem.addEventListener("click", createTag)})
              //////////////////
      })
      }

       tagCrossDOM.forEach((e) => {
        e.removeEventListener("click",() => removTag(e) )
        e.addEventListener("click",() => removTag(e) )
       })
      })})

// const tagsZoneDOM = document.querySelectorAll(".spanObj");
// console.log(tagsZoneDOM.textContent);

// function filterRecipesByTag(recipeArr, tagObj) {
//   return recipeArr.filter((recipe) => recipe.ingredients.some((ingObj) => {
//     return ingObj.ingredient.toLowerCase() === tagObj.textContent.toLowerCase()
//   }) );
// }

// let filteredByTag = [...recipes];
// tagsZoneDOM.forEach((tagDom) => {
//  filteredByTag =  filterRecipesByTag(filteredByTag, tagDom)
// });
// console.log(filteredByTag)