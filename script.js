const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// todo* Show Error
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const inputMessage = formControl.querySelector("small");
  inputMessage.innerText = message;
}
// todo* Show Success
function showSuccess(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
// Todo* Check Valid Input functions
function checkInput(inputArr) {
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `${getInputName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Todo* Check Valid Email
function checkEmail(input) {
  // regular exp for check its Email
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

// Todo* Check Length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getInputName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getInputName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

// Todo* Check Password Match
function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Password do not match");
  }
}

// Todo* Get the input id and place in the error
function getInputName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
// Todo! event Listeners
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInput([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordMatch(password, password2);
});
