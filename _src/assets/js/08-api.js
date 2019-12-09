const responseURL = document.querySelector(".js-response");

shareButton.addEventListener("click", sendData);

function sendData() {
  var inputs = Array.from(form.elements);
  var json = getJSONFromInputs(inputs);
  json.skills = ["JavaScript", "React"];

  if (fr && fr.result) {
    json.photo = fr.result;
  } else if (data && data.photo) {
    json.photo = data.photo;
  }

  sendRequest(json);
}

function getJSONFromInputs(inputs) {
  return inputs.reduce(function(acc, val) {
    if (val.nodeName !== "BUTTON") {
      if (val.name === "palette") {
        if (val.checked) {
          acc[val.name] = val.value;
        }
      } else {
        acc[val.name] = val.value;
      }
    }
    return acc;
  }, {});
}

function sendRequest(json) {
  fetch("https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/", {
    method: "POST",
    body: JSON.stringify(json),
    headers: {
      "content-type": "application/json"
    }
  })
    .then(function(resp) {
      return resp.json();
    })
    .then(function(result) {
      showURL(result);
    })
    .catch(function(error) {
      console.log(error);
    });
}

function showURL(result) {
  const twitterBtn = document.querySelector(".js-share__twitter");
  const twitterText =
    "Esta es mi tarjeta de visita virtual, ¿me ayudas a compartirla?";
  if (result.success) {
    responseURL.innerHTML =
      "<a href=" + result.cardURL + ">" + result.cardURL + "</a>";
    twitterBtn.href = "https://twitter.com/share?text=" + result.cardURL;
  } else {
    responseURL.innerHTML = "ERROR:" + result.error;
  }
}
