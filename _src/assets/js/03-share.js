// Validación formulario

const form = document.querySelector(".form");
const shareButton = document.querySelector(".button");

const checkForm = function(ev) {
  if (form.checkValidity() === true) {
    shareButton.classList.add("js-button-active");
  } else {
    shareButton.classList.remove("js-button-active");
  }
};

formInputName.addEventListener("keyup", checkForm);
formInputRole.addEventListener("keyup", checkForm);
emailInput.addEventListener("keyup", checkForm);
phoneInput.addEventListener("keyup", checkForm);
linkedinInput.addEventListener("keyup", checkForm);
githubInput.addEventListener("keyup", checkForm);

// Crear tarjeta

const shareContainer = document.querySelector(".share__twitter");

const twitter = function(ev) {
  ev.preventDefault();
  if (form.checkValidity() === true) {
    shareContainer.classList.remove("hidden");
  }
};

shareButton.addEventListener("click", twitter);
