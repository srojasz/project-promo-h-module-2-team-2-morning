'use strict';



const formInputs = document.querySelectorAll('.js-form__input');

const data = {};



function setData() {
    for (const formInput of formInputs) {
        const key = formInput.name;
        data[key] = formInput.value;
    }
    localStorage.setItem('data', JSON.stringify(data));

}

form.addEventListener('change', setData);




function getData() {
    const data = JSON.parse(localStorage.getItem('data'));

    // if (data.name === "") {
    //     data.name === 'sara';
    //     console.log('Estoy vacío');

    // }
}

getData();


