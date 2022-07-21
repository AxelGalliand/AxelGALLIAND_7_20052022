
  export function tagMaker__ing() {


    const tagLocation = document.querySelector("#tagsZone");

    const li = document.createElement("li")
    li.className = "ingredient"

    const span = document.createElement("span")
    span.textContent = "this.name"

    const img = document.createElement("img")
    img.className = "circularCross"
    img.id = "close_ingredient"
    img.src ="./assets/circlecross.svg"
    img.addEventListener('click',() => {
      img.parentElement.remove()
      // e.target.parentElement.remove()
    })

    li.appendChild(span)
    li.appendChild(img)

    tagLocation.appendChild(li)
    // tagLocation.innerHTML = `
    // <li class="ingredient">
    //   <span>${this.name}</span>
    //   <i class="fa-regular fa-circle-xmark" id"close_${this.name}"></i>
    // </li>`
  }
