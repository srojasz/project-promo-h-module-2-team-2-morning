// Validación formulario

const form = document.querySelector(".form");
const shareButton = document.querySelector(".button");

const checkForm = function() {
  if (form.checkValidity() === true) {
    shareButton.classList.add("js-button-active");
  } else {
    shareButton.classList.remove("js-button-active");
  }
};

form.addEventListener("keyup", checkForm);

// Crear tarjeta

const shareContainer = document.querySelector(".share__twitter");

const twitter = function(ev) {
  ev.preventDefault();
  if (form.checkValidity() === true) {
    shareContainer.classList.remove("hiddenButton");
  }
};

shareButton.addEventListener("click", twitter);
