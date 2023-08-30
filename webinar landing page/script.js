document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registration-form");
    const confirmationSection = document.getElementById("confirmation");

    registrationForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Simulate form submission (replace with actual submission logic)
        setTimeout(function () {
            confirmationSection.innerHTML = "<p>Thank you for registering! We can't wait to see you at the webinar.</p>";
            registrationForm.reset();
        }, 1000);
    });
});
