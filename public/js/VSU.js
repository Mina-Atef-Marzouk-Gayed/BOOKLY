

const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const ConfirmPassword = document.getElementById('ConfirmPassword');
const FN = document.getElementById('FN');
const LN = document.getElementById('LN');



form.addEventListener('submit', function(e) {
  
});
// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'input-box error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'input-box success';
}

// Check email is valid
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

// Check required fields
function checkRequired(inputArr) {
  let isRequired = false;
  inputArr.forEach(function(input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
      isRequired = true;
    } else {
      showSuccess(input);
    }
  });

  return isRequired;
}

// Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');
  }
}

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


/*
function closeTab() {
  window.close(); // Close the current tab or window
}

function uncheckCheckbox() {
  const checkbox = document.getElementById('R-Check');
  checkbox.checked = false; // Uncheck the checkbox
}*/

// Event listeners
form.addEventListener('submit', function(e) {
  e.preventDefault();

  if(checkRequired([FN,LN,email, password,ConfirmPassword])){
    checkPasswordsMatch(password,ConfirmPassword)
    checkLength(password, 6, 25);
    checkEmail(email);
    checkLength(FN, 3, 15);
    checkLength(LN, 3, 15);

  }
  /*if(checkRequired([email, password])){
    checkLength(password, 6, 25);
    checkEmail(email);
  }*/

});





acceptBtn.addEventListener('click', function() {
  window.close();
});

declineBtn.addEventListener('click', function() {
  termsCheckbox.checked = false;
});
