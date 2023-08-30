document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const successMessage = document.getElementById("success-message");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (validateForm()) {
            // In a real application, you'd send the form data to a server here
            // For example, using fetch() to make an HTTP POST request
            // You'd also handle the response accordingly
            // For now, let's simulate a successful submission
            simulateSubmission();
        }
    });

    function validateForm() {
        let valid = true;

        // Reset any previous error messages
        resetErrors();

        // Validate name
        if (nameInput.value.trim() === "") {
            valid = false;
            displayError(nameInput, "Name is required.");
        }

        // Validate email
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            valid = false;
            displayError(emailInput, "Invalid email address.");
        }

        // Validate message
        if (messageInput.value.trim() === "") {
            valid = false;
            displayError(messageInput, "Message is required.");
        }

        return valid;
    }

    function displayError(inputElement, errorMessage) {
        const errorElement = document.createElement("div");
        errorElement.className = "error-message";
        errorElement.innerText = errorMessage;
        inputElement.parentNode.appendChild(errorElement);
    }

    function resetErrors() {
        const errorMessages = document.querySelectorAll(".error-message");
        errorMessages.forEach(function (errorMessage) {
            errorMessage.remove();
        });
    }

    function simulateSubmission() {
        // In a real application, you'd send the data to a server and handle the response
        // For now, we'll just show a success message
        successMessage.style.display = "block";

        // Clear the form
        contactForm.reset();
    }
});
