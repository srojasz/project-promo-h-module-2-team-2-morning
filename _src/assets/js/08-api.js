'use strict';
let submitButton = document.querySelector('.button');
let responseURL = document.querySelector('.js-response');
let formApi = document.querySelector('.form');
let frApi = new FileReader();

submitButton.addEventListener('click', loadPhoto);

function sendData() {

    let inputs = Array.from(formApi.elements);
    let json = getJSONFromInputs(inputs);
    json.skills = ['JavaScript', 'React'];
    json.photo = fr.result;
    sendRequest(json);
}

function loadPhoto() {
    var myFile = document.querySelector('#file').files[0];
    frApi.addEventListener('load', sendData);
    frApi.readAsDataURL(myFile);
}

function getJSONFromInputs(inputs) {
    return inputs.reduce(function (acc, val) {
        if (val.nodeName !== 'BUTTON')
            acc[val.name] = val.value;
        return acc;
    }, {})
}

function sendRequest(json) {
    fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
        method: 'POST',
        body: JSON.stringify(json),
        headers: {
            'content-type': 'application/json'
        },
    })
        .then(function (resp) { return resp.json(); })
        .then(function (result) { showURL(result); })
        .catch(function (error) { console.log(error); });
}

function showURL(result) {
    if (result.success) {
        responseURL.innerHTML = '<a href=' + result.cardURL + '>' + result.cardURL + '</a>';
    } else {
        responseURL.innerHTML = 'ERROR:' + result.error;
    }
}