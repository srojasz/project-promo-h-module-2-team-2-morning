"use strict";

const formInputs = document.querySelectorAll(".js-form__input");

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
  const data = localStorage.getItem("data");
  if (!data) {
    return {};
  }
  return JSON.parse(data);
};

const populateData = function() {
  const data = getLsData();
  for (const formInput of formInputs) {
    const key = formInput.name;
    formInput.value = data[key] || "";
  }
};

populateData();
