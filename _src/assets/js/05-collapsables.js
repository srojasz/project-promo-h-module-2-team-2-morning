'use strict';
const triggers = document.querySelectorAll('.js-trigger');

const openCollapsable = function (ev) {
  const currentCollapsable = ev.currentTarget.parentElement;
  const collapsableStatus = currentCollapsable.classList.contains('hidden');

  for (const trigger of triggers) {
    trigger.parentElement.classList.add('hidden');
  }
  if (collapsableStatus) {
    currentCollapsable.classList.remove('hidden');
  } else {
    currentCollapsable.classList.add('hidden');
  }
};

for (const trigger of triggers) {
  trigger.addEventListener('click', openCollapsable);
}

// 'use strict';

// /* const triggers = document.querySelectorAll('.js-trigger');
// const content = document.querySelectorAll('.js-content');
//  */
// const collapsables = document.querySelectorAll(".collapsable-box");

// const openCollapsable = function (ev) {

//     const currentCollapsable = ev.currentTarget.parentElement;
//     if (currentCollapsable.classList.contains("hidden")) {
//         currentCollapsable.classList.add("hidden");
//         // } else {
//         //     for (const collapsable of collapsables) {

//         //     currentCollapsable.classList.add("hidden");
//         // }
//     } else {
//         for (const collapsable of collapsables) {
//             collapsable.parentElement.classList.add('hidden');
//         }
//         currentCollapsable.classList.remove('hidden');
//     }
//     for (const collapsable of collapsables) {
//         collapsable.addEventListener('click', openCollapsable);
//     }
// }

// const collapsable1 = document.querySelector(".fill");

// const open = function (ev) {
//     if (collapsable1.classList.contains("hidden")) {
//         collapsable1.classList.remove("hidden");
//     } else {
//         collapsable1.classList.add("hidden");
//     }
// }
// collapsable1.addEventListener('click', open);


// function changeCollapsable(ev) {
//     const currentCollapsable = ev.current.target;
//     for (const trigger of triggers) {
//         if (currentCollapsable.classList.contains('hidden')) {
//             console.log('Hola, estoy oculta');
//         }
//         trigger.addEventListener('click', changeCollapsable);
//     }
// }

// changeCollapsable();
