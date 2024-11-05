document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            'username': username,
            'password': password
        })
    });

    if (response.ok) {
        const data = await response.json();
        alert("Logowanie powiodło się!");
        localStorage.setItem('access_token', data.access_token);
    } else {
        alert("Nieprawidłowa nazwa użytkownika lub hasło.");
    }
});
