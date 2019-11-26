"use strict";
console.log("fill");

// Fill Inputs

const formInputName = document.querySelector(".js-name");
const formInputRole = document.querySelector(".js-role");
const cardName = document.querySelector(".card__name");
const cardRole = document.querySelector(".card__role");

const defaultName = "Nombre Apellido";
const defaultRole = "Front-end developer";

const isFilled = ""; // No está relleno
const icons = document.querySelector(".js-card__icon");



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

// Email

const emailIcon = document.querySelector(".js-card__icon--email");

const emailInput = document.querySelector(".js-email");

function changeEmail() {
  const emailValue = emailInput.value;
  if (emailValue !== isFilled) {
    emailIcon.classList.remove("js-icon-deactivated");
    emailIcon.href = `mailto:${emailValue}`;
  } else {
    emailIcon.classList.add("js-icon-deactivated");
  }
}
emailInput.addEventListener("keyup", changeEmail);
emailIcon.addEventListener("click", tryIcons);


//Phone

const phoneIcon = document.querySelector(".js-card__icon--phone");
const phoneInput = document.querySelector(".js-phone");

function changePhone() {
  const phoneValue = phoneInput.value;
  if (phoneValue !== isFilled) {
    phoneIcon.classList.remove("js-icon-deactivated");
    phoneIcon.href = `tel:${phoneValue}`;
  } else {
    phoneIcon.classList.add("js-icon-deactivated");
  }
}

phoneIcon.addEventListener("click", tryIcons);
phoneInput.addEventListener("keyup", changePhone);

// Linkedin
const linkedinIcon = document.querySelector(".js-card__icon--linkedin");
const linkedinInput = document.querySelector(".js-linkedin");

function changeLinkedin() {
  const linkedinValue = linkedinInput.value;
  if (linkedinValue !== isFilled) {
    linkedinIcon.classList.remove("js-icon-deactivated");
    linkedinIcon.href = `https://${linkedinInput.value}`;
  } else {
    linkedinIcon.classList.add("js-icon-deactivated");
  }
}

linkedinInput.addEventListener("keyup", changeLinkedin);
linkedinIcon.addEventListener("click", tryIcons);

//GitHub
const githubIcon = document.querySelector(".js-card__icon--github");
const githubInput = document.querySelector(".js-github");

function changeGithub() {
  const gitHubValue = githubInput.value;
  if (gitHubValue !== isFilled) {
    githubIcon.classList.remove("js-icon-deactivated");
    githubIcon.href = `https://www.github.com/${gitHubValue}`;


  } else {
    githubIcon.classList.add("js-icon-deactivated");
  }
}


function tryIcons(ev) {
  ev.preventDefault();
}

githubIcon.addEventListener("click", tryIcons);
githubInput.addEventListener("keyup", changeGithub);

