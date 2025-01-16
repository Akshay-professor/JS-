const form = document.querySelector('form');

// Handle form submission
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission

    // Get height and weight input values
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    // Get result elements
    const results = document.querySelector('#results'); // For BMI value
    const message = document.querySelector('#message'); // For surplus/deficit message

    // Validate height
    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = ` ⚠️ Please give a valid height `;
        message.innerHTML = ''; // Clear the message
        return;
    }

    // Validate weight
    if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = ` ⚠️ Please give a valid weight `;
        message.innerHTML = ''; // Clear the message
        return;
    }

    // Calculate BMI
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);

    // Show BMI result
    results.innerHTML = `<span>Your BMI is: ${BMI}</span>`;

    // Check surplus/deficit
    if (BMI <= 18.6) {
        const deficit = ((18.6 - BMI) * (weight / BMI)).toFixed(2);
        message.innerHTML = `<span>⚠️ Your BMI reflects that you are underweight. You need to add approximately ${deficit} kgs of weight.</span>`;
    } else if (BMI > 24.9) {
        const surplus = ((BMI - 24.9) * (weight / BMI)).toFixed(2);
        message.innerHTML = `<span>⚠️ Your BMI reflects that you are overweight. You need to lose approximately ${surplus} kgs of weight.</span>`;
    } else {
        message.innerHTML = `<span>😊 Your BMI is normal. Keep up the good work!</span>`;
    }
});
