
// Get the form and input elements
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');

// Add event listener for form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    // Get values from inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const passwordValue = password.value.trim();
    const cpasswordValue = cpassword.value.trim();
    
    // Username validation
    if (usernameValue.length < 5) {
        setErrorFor(username, 'Name must be at least 5 characters long');
    } else {
        setSuccessFor(username);
    }

    // Email validation
    if (!isValidEmail(emailValue)) {
        setErrorFor(email, 'Enter a valid email');
    } else {
        setSuccessFor(email);
    }

    // Phone number validation
    if (phoneValue === '123456789' || phoneValue.length !== 10 || isNaN(phoneValue)) {
        setErrorFor(phone, 'Enter a valid 10-digit phone number');
    } else {
        setSuccessFor(phone);
    }

    // Password validation
    if (passwordValue.length < 8 || passwordValue.toLowerCase() === 'password' || passwordValue.toLowerCase() === usernameValue.toLowerCase()) {
        setErrorFor(password, 'Password must be at least 8 characters long and not be "password" or your name');
    } else {
        setSuccessFor(password);
    }

    // Confirm password validation
    if (cpasswordValue !== passwordValue || cpasswordValue =="") {
        setErrorFor(cpassword, 'Passwords do not match');
    } else {
        setSuccessFor(cpassword);
    }

    // If all fields are valid, show success message
    if (document.querySelectorAll('.form_control.error').length === 0) {
        alert('Form submitted successfully!');
    }
}

// Set error state and display the error message
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    const checkIcon = formControl.querySelector('.fa-circle-check');
    const exclamationIcon = formControl.querySelector('.fa-circle-exclamation');
    
    // Add error class
    formControl.classList.add('error');
    formControl.classList.remove('success');

    // Show the error message
    small.textContent = message;
    small.style.visibility = 'visible';

    // Show icons and set colors
    checkIcon.style.visibility = 'hidden';
    exclamationIcon.style.visibility = 'visible';
    exclamationIcon.style.color = 'red';
}

// Set success state and hide the error message
function setSuccessFor(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    const checkIcon = formControl.querySelector('.fa-circle-check');
    const exclamationIcon = formControl.querySelector('.fa-circle-exclamation');
    
    // Add success class
    formControl.classList.add('success');
    formControl.classList.remove('error');

    // Hide the error message
    small.style.visibility = 'hidden';

    // Show icons and set colors
    checkIcon.style.visibility = 'visible';
    checkIcon.style.color = 'green';
    exclamationIcon.style.visibility = 'hidden';
}

// Email validation function
function isValidEmail(email) {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
}
