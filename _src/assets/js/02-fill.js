"use strict";
console.log("main");

///////////// la otra forma

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

// Email

const emailIcon = document.querySelector(".card__icon--email");

const emailInput = document.querySelector(".js-email");

function changeEmail() {
  if (emailInput.value !== isFilled) {
    emailIcon.classList.remove("js-icon-deactivated");
  } else {
    emailIcon.classList.add("js-icon-deactivated");
  }
}
emailInput.addEventListener("keyup", changeEmail);

//Phone

const phoneIcon = document.querySelector(".card__icon--phone");
const phoneInput = document.querySelector(".js-phone");

function changePhone() {
  if (phoneInput.value !== isFilled) {
    phoneIcon.classList.remove("js-icon-deactivated");
  } else {
    phoneIcon.classList.add("js-icon-deactivated");
  }
}
phoneInput.addEventListener("keyup", changePhone);

// Linkedin
const linkedinIcon = document.querySelector(".card__icon--linkedin");
const linkedinInput = document.querySelector(".js-linkedin");

function changeLinkedin() {
  if (linkedinInput.value !== isFilled) {
    linkedinIcon.classList.remove("js-icon-deactivated");
  } else {
    linkedinIcon.classList.add("js-icon-deactivated");
  }
}
linkedinInput.addEventListener("keyup", changeLinkedin);

//GitHub
const githubIcon = document.querySelector(".card__icon--github");
const githubInput = document.querySelector(".js-github");

function changeGithub() {
  if (githubInput.value !== isFilled) {
    githubIcon.classList.remove("js-icon-deactivated");
  } else {
    githubIcon.classList.add("js-icon-deactivated");
  }
}
githubInput.addEventListener("keyup", changeGithub);
