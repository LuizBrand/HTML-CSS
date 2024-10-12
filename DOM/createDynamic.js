const playground = document.getElementById("playground");
const spellList = document.createElement("ul");
playground.append(spellList);

function addSpell(spellName) {
    const spell = document.createElement("li");
    spell.textContent = spellName;
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "remove";

    removeBtn.addEventListener("click", () => spell.remove());

    spell.append(removeBtn);
    spellList.append(spell);
}

addSpell("Fire Ball");
addSpell("Ice ball");
