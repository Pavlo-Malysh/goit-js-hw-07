
const liElems = document.querySelectorAll("#categories .js-item")
console.log(`Number of categories: ${liElems.length}`);

liElems.forEach(liElem => {
    const categories = `Category: ${liElem.querySelector("h2").textContent}`
    console.log(categories);
    const elements = `Elements: ${liElem.querySelectorAll("ul li").length}`
    console.log(elements);
})