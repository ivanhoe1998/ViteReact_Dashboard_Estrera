// Registration Function
document.getElementById('registrationForm').addEventListener('submit', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Save the credentials (temporarily using localStorage for simplicity)
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Registration successful!');
    window.location.href = 'login.html';  // Redirect to login page
});

// Login Function
document.getElementById('loginForm').addEventListener('submit', function() {
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    // Get stored credentials
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Validate login credentials
    if (loginUsername === storedUsername && loginPassword === storedPassword) {
        alert('Login successful!');
        window.location.href = 'dashboard.html';  // Redirect to dashboard
    } else {
        alert('Invalid username or password');
    }
});
