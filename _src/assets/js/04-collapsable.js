"use strict";

//Elementos HTML
const triggers = document.querySelectorAll(".js-collapsable-trigger");
const contents = document.querySelectorAll(".js-collapsable-content");

//Fx updateCollapsable
function updateCollapsable(ev) {
    const currentCollapsible = event.currentTarget.parentElement;
}

//Fx Listener
for (const trigger of triggers) {
    trigger.addEventListener("click", updateCollapsable);
}
