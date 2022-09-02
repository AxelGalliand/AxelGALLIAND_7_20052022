export class recipesMaker {
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
      <img src="assets/img.png" alt="photode la recette">
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
