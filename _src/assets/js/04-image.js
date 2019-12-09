"use strict";

const fr = new FileReader();
const uploadBtn = document.querySelector(".js__profile-trigger");
const fileField = document.querySelector(".js__profile-upload-btn");
const profileImage = document.querySelector(".js__profile-image");
const profilePreview = document.querySelector(".js__profile-preview");

function getImage(e) {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener("load", setImage);
  fr.readAsDataURL(myFile);
  setData();
}

let picture = "";

function setImage() {
  picture = fr.result;
  previewImage();
  setData();
}

function previewImage() {
  if (picture !== "") {
    profileImage.style.backgroundImage = `url(${picture})`;
    profilePreview.style.backgroundImage = `url(${picture})`;
  }
}

function fakeFileClick(ev) {
  ev.preventDefault();
  fileField.click();
}

uploadBtn.addEventListener("click", fakeFileClick);
fileField.addEventListener("change", getImage);
