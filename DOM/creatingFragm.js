const playground = document.getElementById("playground");
const fragment = document.createDocumentFragment();

for (let i = 0; i < 5; i++) {
    const magicItem = document.createElement("li");
    magicItem.textContent = `Magical Item ${i + 1}`;
    fragment.append(magicItem);
}

const spellList = document.createElement("ul");
spellList.appendChild(fragment);

playground.append(spellList);
