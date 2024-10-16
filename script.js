// Handle the form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Basic form validation
    if (name && email && message) {
      document.getElementById('form-response').textContent = `Thank you, ${name}! We will contact you at ${email}.`;
    } else {
      document.getElementById('form-response').textContent = 'Please fill in all fields.';
    }
  
    // Clear the form
    document.getElementById('contact-form').reset();
  });