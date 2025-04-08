document.addEventListener('DOMContentLoaded', function () {
    // Bio character count
    const bioInput = document.getElementById('bio');
    if (bioInput) {
        const bioLengthDisplay = document.getElementById('bio-length');
        const maxLength = 160;

        bioInput.addEventListener('input', function () {
            const currentLength = bioInput.value.length;
            const remaining = maxLength - currentLength;
            bioLengthDisplay.textContent = `${remaining} characters remaining`;
        });
    }

    // Sign-up form submission
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const formData = new FormData(signupForm);
            for (let pair of formData.entries()) {
                console.log(pair[0] + ': ' + pair[1]);
            }
            alert('Form submitted! Check console for data.');
            // Redirect to home page after successful signup
            window.location.href = 'home.html';
        });
    }
});
