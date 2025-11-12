const form = document.getElementById('ticketform');
const preview = document.getElementById('ticket-preview');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Get values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const date = document.getElementById('date').value;
  const type = document.getElementById('Type').value;

  // Fill ticket preview
  document.getElementById('tName').textContent = name;
  document.getElementById('tEmail').textContent = email;
  document.getElementById('tDate').textContent = date;
  document.getElementById('tType').textContent = type;

  // Show ticket
  preview.style.display = 'block';
  preview.scrollIntoView({ behavior: 'smooth' });
});
