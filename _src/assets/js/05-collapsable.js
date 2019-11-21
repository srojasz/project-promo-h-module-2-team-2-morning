"use strict";

//Elementos HTML
const triggers = document.querySelectorAll(".js-collapsable-trigger");
const contents = document.querySelectorAll(".js-collapsable-content");
console.log(triggers);
debugger;
//Fx updateCollapsable
function updateCollapsable(ev) {
    const currentCollapsable = ev.contents.parentElement;
    /* debugger */
    if (currentCollapsable.classList.contains("hidden")) {
        currentCollapsable.classList.remove("hidden");
        console.log("hola");
    } else {
        for (const trigger of triggers) {
            trigger.parentElement.classList.remove("hidden");
        }
        currentCollapsable.classList.add("hidden");
        console.log("te odio");
    }
}

//Fx Listener
for (const trigger of triggers)
    trigger.addEventListener("click", updateCollapsable);