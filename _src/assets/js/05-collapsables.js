"use strict";
const triggers = document.querySelectorAll(".js-trigger");

const openCollapsable = function(ev) {
  const currentCollapsable = ev.currentTarget.parentElement;
  const collapsableStatus = currentCollapsable.classList.contains("hidden");

  for (const trigger of triggers) {
    trigger.parentElement.classList.add("hidden");
  }
  if (collapsableStatus) {
    currentCollapsable.classList.remove("hidden");
  } else {
    currentCollapsable.classList.add("hidden");
  }
};

for (const trigger of triggers) {
  trigger.addEventListener("click", openCollapsable);
}
