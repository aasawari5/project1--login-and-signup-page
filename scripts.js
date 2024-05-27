document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    validateSignupForm();
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    validateLoginForm();
});

function validateSignupForm() {
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const errorElement = document.getElementById('signupError');

    if (username.length < 3) {
        errorElement.textContent = 'Username must be at least 3 characters long';
    } else if (!validateEmail(email)) {
        errorElement.textContent = 'Invalid email address';
    } else if (password.length < 6) {
        errorElement.textContent = 'Password must be at least 6 characters long';
    } else {
        errorElement.textContent = '';
        alert('Signup successful');
    }
}

function validateLoginForm() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const errorElement = document.getElementById('loginError');

    if (!validateEmail(email)) {
        errorElement.textContent = 'Invalid email address';
    } else if (password.length < 6) {
        errorElement.textContent = 'Password must be at least 6 characters long';
    } else {
        errorElement.textContent = '';
        alert('Login successful');
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
