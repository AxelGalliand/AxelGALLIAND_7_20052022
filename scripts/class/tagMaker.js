export function tagMaker__Obj(name,classElem) {
    const tagLocation = document.querySelector("#tagsZone");
    const li = document.createElement("li")
    li.className = `${classElem}`;
    li.classList.remove('dropdownElem');
    const span = document.createElement("span")
    span.className = "spanObj"
    span.textContent = `${name}`
    const img = document.createElement("img")
    img.className = "circularCross"
    img.src ="./assets/circlecross.svg"
    img.alt ="svg de fermeture"
    li.appendChild(span)
    li.appendChild(img)
    tagLocation.appendChild(li)
  }
