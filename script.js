document.getElementById('registrationForm').addEventListener('submit', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Registration successful!');
    window.location.href = 'login.html';  // Redirects to login page
});

// Login Function
document.getElementById('loginForm').addEventListener('submit', function() {
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    // Stored Credentials
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Validation
    if (loginUsername === storedUsername && loginPassword === storedPassword) {
        alert('Login successful!');
        window.location.href = 'dashboard.html';  // Redirects to dashboard
    } else {
        alert('Invalid username or password');
    }
});
