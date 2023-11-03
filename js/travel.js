let walkElem = document.querySelector(".walk");
let bikeElem = document.querySelector(".bike");
let carElem = document.querySelector(".car");
let trainElem = document.querySelector(".train");
let planeElem = document.querySelector(".plane");
let vaqtElem = document.querySelector(".natija");
// let masofa = +prompt("Masofa qancha");
let masofa = 1100;

walkElem.addEventListener("click", () => {
  let vaqt = masofa / 3;
  vaqtElem.textContent =
    "Siz piyoda " + vaqt.toFixed(1) + " soatda manzilga yetib olasiz!";
});
bikeElem.addEventListener("click", () => {
  let vaqt = masofa / 21;
  vaqtElem.textContent =
    "Siz velikda " + vaqt.toFixed(1) + " soatda manzilga yetib olasiz!";
});
carElem.addEventListener("click", () => {
  let vaqt = masofa / 80;
  vaqtElem.textContent =
    "Siz moshinada " + vaqt.toFixed(1) + " soatda manzilga yetib olasiz!";
});
trainElem.addEventListener("click", () => {
  let vaqt = masofa / 150;
  vaqtElem.textContent =
    "Siz poyezdda " + vaqt.toFixed(1) + " soatda manzilga yetib olasiz!";
});
planeElem.addEventListener("click", () => {
  let vaqt = masofa / 800;
  vaqtElem.textContent =
    "Siz samalyotda " + vaqt.toFixed(1) + " soatda manzilga yetib olasiz!";
});
