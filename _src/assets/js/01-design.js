"use strict";

console.log("palettes");
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
  cardContainer.classList.add(newPalette);
}

palette1.addEventListener("click", changeColorToPalette);
palette2.addEventListener("click", changeColorToPalette);
palette3.addEventListener("click", changeColorToPalette);

function startPalette() {
  const lsPalette = "palette1";
  const currentPalette = document.querySelector("#" + lsPalette);
  currentPalette.checked = true;
  currentPalette.click();
}

// Opción regulera hasta que creemos una función que sea startPage

function reset() {
  startPalette();
  const formInputs = document.querySelectorAll(".js-form__input");
  for (const formInput of formInputs) {
    formInput.value = "";
  }
  picture = "./assets/images/fotodefault.png";
  updateData();
}

const resetButton = document.querySelector(".js-card-reset");

resetButton.addEventListener("click", reset);
