"use strict";
console.log("fill");

// Fill Inputs

const formInputName = document.querySelector(".js-name");
const formInputRole = document.querySelector(".js-role");
const cardName = document.querySelector(".card__name");
const cardRole = document.querySelector(".card__role");

const defaultName = "Nombre Apellido";
const defaultRole = "Front-end developer";

const isEmpty = ""; // No está relleno
const icons = document.querySelector(".js-card__icon");

function changeTextItem(inputElement, cardElement, defaultValue) {
  if (inputElement.value === isEmpty) {
    cardElement.innerHTML = defaultValue;
  } else {
    cardElement.innerHTML = inputElement.value;
  }
}

function updateData() {
  getData();
  changeTextItem(formInputName, cardName, defaultName);
  changeTextItem(formInputRole, cardRole, defaultRole);
  updateIcons();
  changeColorToPalette();
  previewImage();
}

formInputName.addEventListener("keyup", updateData);
formInputRole.addEventListener("keyup", updateData);

// // Email

// const emailIcon = document.querySelector(".js-card__icon--email");

// const emailInput = document.querySelector(".js-email");

// function changeEmail() {
//   const emailValue = emailInput.value;
//   if (emailValue !== isEmpty) {
//     emailIcon.classList.remove("js-icon-deactivated");
//     emailIcon.href = `mailto:${emailValue}`;
//   } else {
//     emailIcon.classList.add("js-icon-deactivated");
//   }
// }
// emailInput.addEventListener("keyup", changeEmail);
// emailIcon.addEventListener("click", tryIcons);

// //Phone

// const phoneIcon = document.querySelector(".js-card__icon--phone");
// const phoneInput = document.querySelector(".js-phone");

// function changePhone() {
//   const phoneValue = phoneInput.value;
//   if (phoneValue !== isEmpty) {
//     phoneIcon.classList.remove("js-icon-deactivated");
//     phoneIcon.href = `tel:${phoneValue}`;
//   } else {
//     phoneIcon.classList.add("js-icon-deactivated");
//   }
// }

// phoneIcon.addEventListener("click", tryIcons);
// phoneInput.addEventListener("keyup", changePhone);

// // Linkedin
// const linkedinIcon = document.querySelector(".js-card__icon--linkedin");
// const linkedinInput = document.querySelector(".js-linkedin");

// function changeLinkedin() {
//   const linkedinValue = linkedinInput.value;
//   if (linkedinValue !== isEmpty) {
//     linkedinIcon.classList.remove("js-icon-deactivated");
//     linkedinIcon.href = `https://${linkedinInput.value}`;
//   } else {
//     linkedinIcon.classList.add("js-icon-deactivated");
//   }
// }

// linkedinInput.addEventListener("keyup", changeLinkedin);
// linkedinIcon.addEventListener("click", tryIcons);

// //GitHub
// const githubIcon = document.querySelector(".js-card__icon--github");
// const githubInput = document.querySelector(".js-github");

// function changeGithub() {
//   const gitHubValue = githubInput.value;
//   if (gitHubValue !== isEmpty) {
//     githubIcon.classList.remove("js-icon-deactivated");
//     githubIcon.href = `https://www.github.com/${gitHubValue}`;
//   } else {
//     githubIcon.classList.add("js-icon-deactivated");
//   }
// }

// function tryIcons(ev) {
//   ev.preventDefault();
// }

// githubIcon.addEventListener("click", tryIcons);
// githubInput.addEventListener("keyup", changeGithub);
