"use strict";

// Paletas

const palette1 = document.querySelector("#palette1");
const palette2 = document.querySelector("#palette2");
const palette3 = document.querySelector("#palette3");

const cardContainer = document.querySelector(".js-card-container");

function changeColorToPalette1() {
  cardContainer.classList.remove("palette2");
  cardContainer.classList.remove("palette3");
  cardContainer.classList.add("palette1");
}

function changeColorToPalette2() {
  cardContainer.classList.remove("palette1");
  cardContainer.classList.remove("palette3");
  cardContainer.classList.add("palette2");
}

function changeColorToPalette3() {
  cardContainer.classList.remove("palette1");
  cardContainer.classList.remove("palette2");
  cardContainer.classList.add("palette3");
}

palette1.addEventListener("click", changeColorToPalette1);
palette2.addEventListener("click", changeColorToPalette2);
palette3.addEventListener("click", changeColorToPalette3);

// Fill Inputs

const formInputName = document.querySelector(".js-name");

const formInputRole = document.querySelector(".js-role");

const cardName = document.querySelector(".card__name");
const cardRole = document.querySelector(".card__role");

const defaultName = "Nombre Apellido";

const defaultRole = "Front-end developer";

const isFilled = ""; // No está relleno

function changeName() {
  if (formInputName.value !== isFilled) {
    cardName.innerHTML = formInputName.value;
  } else {
    cardName.innerHTML = defaultName;
  }
}

function changeRole() {
  if (formInputRole.value !== isFilled) {
    cardRole.innerHTML = formInputRole.value;
  } else {
    cardRole.innerHTML = defaultRole;
  }
}

formInputName.addEventListener("keyup", changeName);
formInputRole.addEventListener("keyup", changeRole);

// Iconos

const phoneIcon = document.querySelector(".card__icon--phone");

const mailIcon = document.querySelector(".card__icon--mail");

const linkedinIcon = document.querySelector(".card__icon--linkedin");

const githubIcon = document.querySelector(".card__icon--github");

const phoneInput = document.querySelector(".js-phone");

function changePhone() {
  if (phoneInput.value !== isFilled) {
    phoneIcon.classList.remove("js-icon-hidden");
  } else {
    phoneIcon.classList.add("js-icon-hidden");
  }
}

phoneInput.addEventListener("keyup", changePhone);
