document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation
    if (name && email && message) {
        document.getElementById('formResponse').innerText = 'Thank you for your message, ' + name + '!';
        this.reset();
    } else {
        document.getElementById('formResponse').innerText = 'Please fill out all fields.';
    }
});
