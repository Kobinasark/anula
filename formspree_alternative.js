// Alternative: Formspree Implementation (Simpler Setup)
// Replace the EmailJS code in anula.js with this if you prefer Formspree

/*
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    // Collect form data
    const formData = new FormData();
    formData.append('name', this.querySelector('input[placeholder="Full Name"]').value.trim());
    formData.append('email', this.querySelector('input[placeholder="Email Address (where we can reach you)"]').value.trim());
    formData.append('niche', this.querySelector('input[placeholder="Primary Niche (e.g., Lifestyle, Fashion, Food)"]').value.trim());
    formData.append('followers', this.querySelector('input[type="number"]').value.trim());

    // Collect social accounts
    const socialInputs = this.querySelectorAll('.social-input');
    let socialAccounts = '';
    socialInputs.forEach((input, index) => {
        if (input.value.trim()) {
            socialAccounts += `${index + 1}. ${input.value.trim()}\n`;
        }
    });
    formData.append('social_accounts', socialAccounts);
    formData.append('message', this.querySelector('textarea').value.trim());

    // Send to Formspree (replace YOUR_FORM_ID with your actual Formspree form ID)
    fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert('Thank you for your application! We\'ll be in touch soon.');
            form.reset();
            // Clear dynamically added social inputs
            const socialInputs = socialsContainer.querySelectorAll('.social-input');
            for (let i = 1; i < socialInputs.length; i++) {
                socialInputs[i].remove();
            }
        } else {
            throw new Error('Network response was not ok');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Sorry, there was an error sending your application. Please try again or contact us directly at sarkodiehenry84@gmail.com');
    })
    .finally(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    });
});
*/</content>
<parameter name="filePath">c:\Users\PC\OneDrive\Desktop\anula\formspree_alternative.js