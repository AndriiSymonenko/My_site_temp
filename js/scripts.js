let form = document.querySelector(".main-form"),
  input = document.querySelectorAll("input"),
  validName = document.querySelector("#name"),
  validEmail = document.querySelector("#email"),
  validPhone = document.querySelector("#phone");

console.log(input);

let hiddenPopUp = document.querySelector(".content-hidden"),
  buttonCall = document.querySelector(".button-call"),
  buttonClose = document.querySelector(".modal-close");

buttonCall.addEventListener("click", function () {
  hiddenPopUp.classList.add("open");
});

buttonClose.addEventListener("click", function () {
  hiddenPopUp.classList.remove("open");
  for (let i = 0; i <= input.length; i++) {
    input[i].value = "";
    input[i].classList.remove("invalid-field");
  }
});

// Validation Form
function validationEmail() {
  let validReg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return validReg.test(validEmail.value);
}

function validationPhone() {
  let validRegPhone = /^\d[\d\(\)\ -]{4,14}\d$/;
  return validRegPhone.test(validPhone.value);
}

form.addEventListener("submit", function (event) {
  if (validName.value === "" || validName.value === null) {
    validName.classList.add("invalid-field");
    event.preventDefault();
    validName.value = "Введите своё имя, пожалуйста";
  } else {
    validName.classList.remove("invalid-field");
  }
  if (
    validEmail.value === "" ||
    validEmail.value === null ||
    validationEmail() != true
  ) {
    validEmail.classList.add("invalid-field");
    event.preventDefault();
    validEmail.value = "Введите почту, пожалуйста";
  } else {
    validEmail.classList.remove("invalid-field");
  }
  if (
    validPhone.value === "" ||
    validPhone.value === null ||
    validationPhone() != true
  ) {
    validPhone.classList.add("invalid-field");
    event.preventDefault();
    validPhone.value = "Введите номер, пожалуйста";
  } else {
    validPhone.classList.remove("invalid-field");
  }
});
