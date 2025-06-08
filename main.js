document.getElementById('orderForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const meal = document.getElementById('meal').value;
  const address = document.getElementById('address').value;

  const confirmation = document.getElementById('confirmation');
  confirmation.textContent = `Thank you, ${name}! Your ${meal} will be delivered soon to "${address}".`;

  this.reset();
});