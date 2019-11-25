'use strict';

const triggers = document.querySelectorAll('.js-trigger');
// const content = document.querySelectorAll('.js-content');

// const collapsables = document.querySelectorAll('.collapsable-box');

const openCollapsable = function (ev) {
  const currentCollapsable = ev.currentTarget.parentElement;

  for (const trigger of triggers) {
    trigger.parentElement.classList.add('hidden');
  }
  if (currentCollapsable.classList.contains('hidden')) {
    currentCollapsable.classList.remove('hidden');
  } else {
    currentCollapsable.classList.add('hidden');
  }

};
for (const trigger of triggers) {
  trigger.addEventListener('click', openCollapsable);
}
