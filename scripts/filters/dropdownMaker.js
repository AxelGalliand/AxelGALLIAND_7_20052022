export const ingredientsList = document.getElementById("ingredientsList");
export const appliancesList = document.getElementById("appliancesList");
export const ustensilsList = document.getElementById("ustensilsList");


export function generateIng(recipeArray) {
  let ingList = [];

  recipeArray.forEach((recipe) => {
    recipe.ingredients.forEach((elem) => {
     let ingredientOfingredients = elem.ingredient;
     ingList.push(ingredientOfingredients);
    })
  })
  return [... new Set(ingList)].sort()}

export function displayIng(ingArr) {
  let ingString = "";
  ingArr.forEach((elem) => {
     ingString += "<li class='dropdownElem' id='ingredientElem'>" + elem + "</li>"
  })
    ingredientsList.innerHTML = `${ingString}`
}

    export function generateAppli(recipeArray) {
  let appliList = [];
  recipeArray.forEach((recipe) => {
    let appliances = recipe.appliance;
    appliList.push(appliances);
  })
  return [... new Set(appliList)].sort()
}

export function displayAppli(appliArr) {
  let appliString ="";
  appliArr.forEach ((elem) => {
    appliString += "<li class='dropdownElem' id='applianceElem'>" + elem + "</li>"
 })
 appliancesList.innerHTML = `${appliString}`
}

export function generateUst(recipeArray) {
  let ustList = [];
  recipeArray.forEach((recipe) => {
    recipe.ustensils.forEach((ustensils) => {
     ustList.push(ustensils);
    })
  })
  return [... new Set(ustList)].sort();
}

export function displayUst(ustArr) {
  let ustString ="";
  ustArr.forEach ((elem) => {
  ustString += "<li class='dropdownElem' id='ustensilElem'>" + elem + "</li>"
})
  ustensilsList.innerHTML = `${ustString}`
}




export const ingredientsButton = document.getElementById("ingredients_button");
export const ingredientsInput = document.getElementById("filter_ingredients");
export const ingredientsDown = document.getElementById("ingredientsDown");
export const ingredientsUp = document.getElementById("ingredientsUp");

export function displayIngDown() {
    ingredientsButton.style.width = "700px";
    ingredientsList.style.display = "grid";
    ingredientsDown.style.display = "none";
    ingredientsUp.style.display = "block";
    displayAppUp();
    displayUstUp();
}


export function displayIngUp() {
    ingredientsButton.style.width = "170px";
    ingredientsList.style.display = "none";
    ingredientsDown.style.display = "block";
    ingredientsUp.style.display = "none";
}



export const appliancesButton = document.getElementById("appliances_button");
export const appliancesInput = document.getElementById("filter_appliances");
export const appliancesDown = document.getElementById("appliancesDown");
export const appliancesUp = document.getElementById("appliancesUp");

export function displayAppDown() {
    appliancesButton.style.width = "400px";
    appliancesList.style.display = "grid";
    appliancesDown.style.display = "none";
    appliancesUp.style.display = "block";
    displayIngUp();
    displayUstUp();
}


export function displayAppUp() {
    appliancesButton.style.width = "170px";
    appliancesList.style.display = "none";
    appliancesDown.style.display = "block";
    appliancesUp.style.display = "none";
}



export const ustensilsButton = document.getElementById("ustensils_button");
export const ustensilsInput = document.getElementById("filter_ustensils");
export const ustensilsDown = document.getElementById("ustensilsDown");
export const ustensilsUp = document.getElementById("ustensilsUp");


export function displayUstDown() {
    ustensilsButton.style.width = "500px";
    ustensilsList.style.display = "grid";
    ustensilsDown.style.display = "none";
    ustensilsUp.style.display = "block";
    displayIngUp();
    displayAppUp();
}

export function displayUstUp() {
    ustensilsButton.style.width = "170px";
    ustensilsList.style.display = "none";
    ustensilsDown.style.display = "block";
    ustensilsUp.style.display = "none";
}
