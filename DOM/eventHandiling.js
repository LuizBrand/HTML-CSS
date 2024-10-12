const playground = document.getElementById("playground");
const magicButton = document.createElement("button");

magicButton.textContent = "Cast Spell";
playground.append(magicButton);

magicButton.addEventListener("click", () => {
    alert("Magic sparkles fill the air!");
});

magicButton.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "red";
});

magicButton.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "";
});
