'use strict';

const formInputs = document.querySelectorAll('.js-form__input');

const data = {};

for (const formInput of formInputs) {
    const key = formInput.name;
    data[key] = formInput.value;
}

console.log(data)

localStorage.setItem('data', JSON.stringify(data));

// const data = {
//     name: 'Lolo',
//     role: 'Front'
// }
