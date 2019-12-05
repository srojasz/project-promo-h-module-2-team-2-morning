"use strict";
console.log("palettes");
const palette1 = document.querySelector("#palette1"),
  palette2 = document.querySelector("#palette2"),
  palette3 = document.querySelector("#palette3"),
  cardContainer = document.querySelector(".js-card-container");
function handlePalette(e) {
  changeColorToPalette(e.target.value);
}
function changeColorToPalette(e) {
  cardContainer.classList.remove("palette1"),
    cardContainer.classList.remove("palette2"),
    cardContainer.classList.remove("palette3"),
    cardContainer.classList.add(e);
}
function startPalette() {
  const e = document.querySelector("#palette1");
  (e.checked = !0), e.click();
}
function reset() {
  startPalette(),
    (cardName.innerHTML = "Nombre apellido"),
    (cardRole.innerHTML = "Front-end developer");
}
palette1.addEventListener("click", handlePalette),
  palette2.addEventListener("click", handlePalette),
  palette3.addEventListener("click", handlePalette);
const resetButton = document.querySelector(".js-card-reset");
resetButton.addEventListener("click", reset), console.log("fill");
const formInputName = document.querySelector(".js-name"),
  formInputRole = document.querySelector(".js-role"),
  cardName = document.querySelector(".card__name"),
  cardRole = document.querySelector(".card__role"),
  defaultName = "Nombre Apellido",
  defaultRole = "Front-end developer",
  isEmpty = "";
function changeName() {
  formInputName.value !== isEmpty
    ? (cardName.innerHTML = formInputName.value)
    : (cardName.innerHTML = defaultName);
}
function changeRole() {
  formInputRole.value !== isEmpty
    ? (cardRole.innerHTML = formInputRole.value)
    : (cardRole.innerHTML = defaultRole);
}
formInputName.addEventListener("keyup", changeName),
  formInputRole.addEventListener("keyup", changeRole);
const emailIcon = document.querySelector(".js-card__icon--email"),
  emailInput = document.querySelector(".js-email");
function changeEmail() {
  const e = emailInput.value;
  e !== isEmpty
    ? (emailIcon.classList.remove("js-icon-deactivated"),
      (emailIcon.href = `mailto:${e}`))
    : emailIcon.classList.add("js-icon-deactivated");
}
emailInput.addEventListener("keyup", changeEmail);
const phoneIcon = document.querySelector(".js-card__icon--phone"),
  phoneInput = document.querySelector(".js-phone");
function changePhone() {
  const e = phoneInput.value;
  e !== isEmpty
    ? (phoneIcon.classList.remove("js-icon-deactivated"),
      (phoneIcon.href = `tel:${e}`))
    : phoneIcon.classList.add("js-icon-deactivated");
}
phoneInput.addEventListener("keyup", changePhone);
const linkedinIcon = document.querySelector(".js-card__icon--linkedin"),
  linkedinInput = document.querySelector(".js-linkedin");
function changeLinkedin() {
  linkedinInput.value !== isEmpty
    ? (linkedinIcon.classList.remove("js-icon-deactivated"),
      (linkedinIcon.href = `https://${linkedinInput.value}`))
    : linkedinIcon.classList.add("js-icon-deactivated");
}
linkedinInput.addEventListener("keyup", changeLinkedin);
const githubIcon = document.querySelector(".js-card__icon--github"),
  githubInput = document.querySelector(".js-github");
function changeGithub() {
  const e = githubInput.value;
  e !== isEmpty
    ? (githubIcon.classList.remove("js-icon-deactivated"),
      (githubIcon.href = `https://www.github.com/${e}`))
    : githubIcon.classList.add("js-icon-deactivated");
}
githubInput.addEventListener("keyup", changeGithub);
const form = document.querySelector(".form"),
  shareButton = document.querySelector(".button"),
  checkForm = function(e) {
    !0 === form.checkValidity()
      ? shareButton.classList.add("js-button-active")
      : shareButton.classList.remove("js-button-active");
  };
formInputName.addEventListener("keyup", checkForm),
  formInputRole.addEventListener("keyup", checkForm),
  emailInput.addEventListener("keyup", checkForm),
  phoneInput.addEventListener("keyup", checkForm),
  linkedinInput.addEventListener("keyup", checkForm),
  githubInput.addEventListener("keyup", checkForm);
const shareContainer = document.querySelector(".share__twitter"),
  twitter = function(e) {
    e.preventDefault(),
      !0 === form.checkValidity() && shareContainer.classList.remove("hidden");
  };
shareButton.addEventListener("click", twitter),
  console.log("Start"),
  startPalette();
