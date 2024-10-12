const playground = document.getElementById("playground");
const secretScroll = document.createElement("div");

secretScroll.id = "secretScroll";
secretScroll.dataset.spell = "invisibility";
secretScroll.dataset.components = "moonlight, shadowm essence";
secretScroll.textContent = "📜 Ancient Spell Scroll";
playground.append(secretScroll); // create a data attribute

console.log("spell type: ", secretScroll.dataset.spell);
console.log("components: ", secretScroll.dataset.components); //acess the datas attribute
