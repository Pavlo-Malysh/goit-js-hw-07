function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const BtnElem = document.querySelector(".change-color")
const SpanElem = document.querySelector(".color")

BtnElem.addEventListener("click", handlerChangeColorBody)

function handlerChangeColorBody(e) {
  const changeColor = getRandomHexColor();

  document.body.style.backgroundColor = changeColor;

  SpanElem.textContent = changeColor
}