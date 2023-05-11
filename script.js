// Form Validation

const form = document.querySelector("form")
const phoneInput = document.getElementById('phone');

form.addEventListener('submit', e=> {
    let messages = []
    if (!form.checkValidity()) {
        e.preventDefault()
    }

  form.classList.add('was-validated')
})

phoneInput.addEventListener('input', function(e) {
    // Remove any non-numeric characters from the input value
    const numericValue = phoneInput.value.replace(/[^0-9]/g, '');

    // Check if the input value is the same as the numeric value
    if (phoneInput.value !== numericValue) {
    phoneInput.setCustomValidity('Please use numbers only.');
    } else {
    phoneInput.setCustomValidity('');
    }
});