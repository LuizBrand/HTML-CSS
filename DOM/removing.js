const playground = document.getElementById("playground");

// const temporaryElement = document.createElement("p");
// temporaryElement.textContent = "Now you see me...";
// playground.append(temporaryElement);

// // temporaryElement.remove();
// playground.removeChild(temporaryElement);

const fruitBasket = document.createElement("div");
fruitBasket.innerHTML = `
    <p>Apple</p>
    <p>Banana</p>
    <p>Cherry</p>
`;
playground.append(fruitBasket);
console.log(fruitBasket.textContent);

while (fruitBasket.firstChild) {
    fruitBasket.removeChild(fruitBasket.firstChild);
}
console.log(fruitBasket.textContent);
