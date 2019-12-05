"use strict";

const resetButton = document.querySelector(".js-card-reset");

function reset() {
  setDefaultPalette();
  const formInputs = document.querySelectorAll(".js-form__input");
  for (const formInput of formInputs) {
    formInput.value = "";
  }
  picture = "./assets/images/fotodefault.png";
  updateData();
}

resetButton.addEventListener("click", reset);
