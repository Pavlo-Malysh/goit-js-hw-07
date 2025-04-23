
const inputElem = document.querySelector("#name-input")

const outputElem = document.querySelector("#name-output")

inputElem.addEventListener("input", (event) => {
    outputElem.textContent = event.currentTarget.value.trim() || "Anonymous"
})