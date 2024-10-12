/* getElementById: 
const playground = document.getElementById("playground"); */

// querySelector and querySelectorAll
const playground = document.querySelector("#playground");
// const playground2 = document.querySelectorAll("div"); //it's list, so append won't work
// playground2.append("See?");
// playground.append("🧙‍♂️ Wizard");
// playground.append("🏀 Basketball", " ", "list, so append dont't will work🔮 Crystal Ball");
// console.log(playground);
// console.log(playground2);

//.appendChild, you can only append nodes, you cannot append strings, so append wizard won't work

//createElement, this function will create a new element
const magicOrb = document.createElement("div");
magicOrb.textContent = "🔮";
playground.append(magicOrb);
// playground.appendChild(magicOrb); will work because now, it's not a sting, it's a new node of
// the tree;
