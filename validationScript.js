// JavaScript code for form validation

// Prevent form from submitting
document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();

// Retrieve the input field value
  let inputField = document.getElementById('inputField');
  let inputValue = inputField.value;

// Regular expression pattern for alphanumeric input
  let alphanumericRegex = /^[a-zA-Z0-9]+$/;

// Check if the input value matches the pattern
  if (alphanumericRegex.test(inputValue))
  {
// Valid input: display confirmation and submit the form
    alert('Form submitted!');
    this.submit();
  } else
  {
// Invalid input: display error message
	let errorElement = document.getElementById('error-message');
    errorElement.textContent = 'Input should only contain letters and numbers.';
  }
});
