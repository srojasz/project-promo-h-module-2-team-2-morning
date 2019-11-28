"use strict";

const formInputs = document.querySelectorAll(".js-form__input");
const palettesData = document.querySelectorAll(".palette-container");

// function setPaletteData() {
//   const checkedPalette = document.querySelector(
//     ".palette-container__input:checked"
//   );
//   const data = {
//     checked: checkedPalette
//   };
//   localStorage.setItem("data", JSON.stringify(data));
// }

// form.addEventListener("change", setPaletteData);

function setData() {
  const data = {};
  for (const formInput of formInputs) {
    const key = formInput.name;
    data[key] = formInput.value;
  }
  localStorage.setItem("data", JSON.stringify(data));
}

form.addEventListener("change", setData);

const getLsData = function() {
  const data = JSON.parse(localStorage.getItem("data"));
  for (const formInput of formInputs) {
    const key = formInput.name;
    if (data === null) {
      formInput.value === "";
    } else {
      formInput.value = data[key];
    }
  }
};

getLsData();
updateIcons();
