const play = document.getElementById("playground");
const template = document.getElementById("wizard-template");

function createWizard(name, specialty) {
    const wizardElement = template.content.cloneNode(true);
    wizardElement.querySelector(".wizard-name").textContent = name;
    wizardElement.querySelector(".wizard-specialty").textContent = specialty;
    play.append(wizardElement);
}

createWizard("Luiz", "Raio");
