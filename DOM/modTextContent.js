//innerText = quando quiser ober e definir o texto e como ele seria mostrado vizualmente
const playground = document.getElementById("playground");

// const scrollOfWisdow = document.createElement("p");
// playground.append(scrollOfWisdow);

// scrollOfWisdow.innerText = "Ancient wisdow lies within";
// console.log(scrollOfWisdow.innerText);

//textContent, returns the text content of all elements, include hidden nodes (script, styles too); usar quando precisar te todo o conteudo, independente do style.
// scrollOfWisdow.textContent = "Ancient wisow lies within 2";
// console.log(scrollOfWisdow.textContent);
console.log(playground.innerText);
console.log(playground.textContent); //concat the texts of the others nodes
