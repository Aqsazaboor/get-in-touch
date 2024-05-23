document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  fetch('http://localhost:3000/send', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          name: event.target.name.value,
          email: event.target.email.value,
          number: event.target.number.value,
          message: event.target.message.value
      })
  })
  .then(response => response.text())
  .then(data => {
      alert(data);
  })
  .catch(error => {
      console.error('Error:', error);
      alert('There was an error sending your message.');
  });
});
