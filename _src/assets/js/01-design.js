"use strict";

console.log("palettes");
// Paletas

const palette1 = document.querySelector("#palette1");
const palette2 = document.querySelector("#palette2");
const palette3 = document.querySelector("#palette3");

const cardContainer = document.querySelector(".js-card-container");

function handlePalette(ev) {
  changeColorToPalette(ev.target.value);
}

function changeColorToPalette(newPalette) {
  cardContainer.classList.remove("palette1");
  cardContainer.classList.remove("palette2");
  cardContainer.classList.remove("palette3");
  cardContainer.classList.add(newPalette);
}

palette1.addEventListener("click", handlePalette);
palette2.addEventListener("click", handlePalette);
palette3.addEventListener("click", handlePalette);

function startPalette() {
  const lsPalette = "palette1";
  const currentPalette = document.querySelector("#" + lsPalette);
  currentPalette.checked = true;
  currentPalette.click();
}
