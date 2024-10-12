const playground = document.getElementById("playground");
const shapeshifter = document.createElement("div");

shapeshifter.textContent = "🦎 Shapeshifter";
playground.append(shapeshifter);

shapeshifter.classList.add("magical", "creature");
console.log("Initial classes: ", shapeshifter.className);

shapeshifter.classList.remove("creature");
shapeshifter.classList.add("new-class");
console.log("Upadated classes: ", shapeshifter.className);

shapeshifter.classList.toggle("invisible");
// shapeshifter.classList.toggle("invisible");
console.log(shapeshifter.classList.contains("invisible"));

shapeshifter.classList.toggle("invisible", Math.random() > 0.5);
shapeshifter.classList.replace("humanoid", "beast");
console.log("Third class: ", shapeshifter.classList.item(2));
