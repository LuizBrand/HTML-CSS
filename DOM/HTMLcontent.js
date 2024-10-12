const playground = document.getElementById("playground");

const spellbook = document.createElement("div");
spellbook.innerHTML =
    "<p>Spells include: <strong>Levitation</strong> and <em>Invisibility</em>!</p>";
playground.append(spellbook);

console.log(playground.textContent);
console.log(playground.innerHTML);
