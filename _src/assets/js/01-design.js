"use strict";

// Paletas

const palette1 = document.querySelector("#palette1");
const palette2 = document.querySelector("#palette2");
const palette3 = document.querySelector("#palette3");

const cardContainer = document.querySelector(".js-card-container");

function changeColorToPalette() {
  cardContainer.classList.remove("palette1");
  cardContainer.classList.remove("palette2");
  cardContainer.classList.remove("palette3");
  const newPalette = document.querySelector(".palette-container__input:checked")
    .value;
  cardContainer.classList.add("palette" + newPalette);
}

palette1.addEventListener("click", changeColorToPalette);
palette2.addEventListener("click", changeColorToPalette);
palette3.addEventListener("click", changeColorToPalette);

function setDefaultPalette() {
  const currentPalette = document.querySelector("#palette1");
  currentPalette.checked = true;
  currentPalette.click();
}
