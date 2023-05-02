function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const btnClose = document.getElementById("btn-close");
const closeBtn = document.querySelector(".close");
const formBtn = document.getElementById("btn-submit");
const checkboxError = document.getElementById("email");
var form = document.getElementById("myForm");
formBtn.addEventListener("click", function (event) {
  event.preventDefault();
  getValue();
});

const regex =
  /(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi;
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.addEventListener("click", closeModal);
btnClose.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// form management
//firstName manager

function getValue() {
  //var reportVal = form.reportValidity();
  const checkTest = handleData();
  console.log("checkTest : " + checkTest);
  if (checkTest === true) {
    var formData = new FormData(document.querySelector("form"));
    for (var key of formData.keys()) {
      console.log(key);
    }
    for (var value of formData.values()) {
      console.log(value);
    }
    document.getElementById("form").innerHTML = "";
    document.getElementById("form-title").style.display = "flex";
    document.getElementById("btn-submit").style.display = "none";
    document.getElementById("btn-close").style.display = "block";
  }
}
function ValidationInputText(alert, input) {
  const border = input.style.border;
  alert.style.display = "block";
  input.style.border = "2px solid #FF4E60 ";
  setTimeout(() => {
    input.style.border = "0.8px solid #ccc";
    alert.style.display = "none";
  }, 3000);
}
function ValidationInputButton(alert, input) {
  const border = input.style.border;
  alert.style.display = "block";
  input.style.border = "2px solid #FF4E60 ";
  setTimeout(() => {
    input.style.border = "none";
    alert.style.display = "none";
  }, 3000);
}

function getVal() {
  const val = document.getElementById("first").value;
  console.log(val);
}
function handleData() {
  var form_data = new FormData(document.querySelector("form"));
  const firstValue = document.getElementById("first");
  const lastValue = document.getElementById("last");
  const emailValue = document.getElementById("email");
  const birthValue = document.getElementById("birthdate");
  const quantityValue = document.getElementById("quantity");
  const locateValue = document.getElementById("locate-box");
  const checkyValue = document.getElementById("CGU-Accept");

  var firstErrors = document.querySelector("#first-validity");
  var lastErrors = document.querySelector("#last-validity");
  var emailErrors = document.querySelector("#email-validity");
  var birthdateErrors = document.querySelector("#birthdate-validity");
  var quantityErrors = document.querySelector("#quantity-validity");
  var checkboxErrors = document.querySelector("#locate-validity");
  var cguErrors = document.querySelector("#cgu-validity");
  var validation = true;

  if (firstValue.value.length < 2) {
    ValidationInputText(firstErrors, firstValue);
    validation = false;
  }
  if (lastValue.value.length < 2) {
    ValidationInputText(lastErrors, lastValue);
    validation = false;
  }
  if (quantityValue.value.length < 1) {
    ValidationInputText(quantityErrors, quantityValue);
    validation = false;
  }
  if (
    !emailValue.value.match(
      /(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi
    )
  ) {
    ValidationInputText(emailErrors, emailValue);
    validation = false;
  }

  if (!birthValue.checkValidity()) {
    ValidationInputText(birthdateErrors, birthValue);
    validation = false;
  }
  if (!form_data.has("location")) {
    ValidationInputButton(checkboxErrors, locateValue);
    validation = false;
  }
  if (!form_data.has("CGU")) {
    ValidationInputButton(cguErrors, checkyValue);
    validation = false;
  }
  return validation;
}

function Validate() {
  console.log("trigger");
}
