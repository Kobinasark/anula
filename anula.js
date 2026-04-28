const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.navigation');
const form = document.getElementById('applicationForm');
const addSocialBtn = document.getElementById('addSocialBtn');
const socialsContainer = document.getElementById('socialsContainer');

// Initialize EmailJS (replace with your actual service ID)
(function() {
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
})();

menuToggle.addEventListener('click', () => {
    navigation.classList.toggle('nav-open');
});

// Add more social media input fields
addSocialBtn.addEventListener('click', function(e) {
    e.preventDefault();

    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.placeholder = 'Instagram/TikTok/YouTube/Twitter handle';
    newInput.className = 'social-input';
    newInput.setAttribute('aria-label', `Social Media Handle ${socialsContainer.children.length + 1}`);

    socialsContainer.appendChild(newInput);
});

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    const fullName = this.querySelector('input[placeholder="Full Name"]').value.trim();
    const email = this.querySelector('input[placeholder="Email Address (where we can reach you)"]').value.trim();
    const niche = this.querySelector('input[placeholder="Primary Niche (e.g., Lifestyle, Fashion, Food)"]').value.trim();
    const followers = this.querySelector('input[type="number"]').value.trim();

    // Collect all social media accounts
    const socialInputs = this.querySelectorAll('.social-input');
    let socialAccounts = '';
    socialInputs.forEach((input, index) => {
        if (input.value.trim()) {
            socialAccounts += `${index + 1}. ${input.value.trim()}\n`;
        }
    });

    const message = this.querySelector('textarea').value.trim();

    // Prepare template parameters for EmailJS
    const templateParams = {
        from_name: fullName,
        from_email: email,
        to_email: 'anula0237@gmail.com',
        subject: `ANULA Application from ${fullName}`,
        full_name: fullName,
        applicant_email: email,
        niche: niche,
        follower_count: followers,
        social_accounts: socialAccounts,
        authenticity_message: message
    };

    // Send email using EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams) // Replace with your EmailJS service and template IDs
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Thank you for your application! We\'ll be in touch soon.');
            form.reset();
            // Clear dynamically added social inputs
            const socialInputs = socialsContainer.querySelectorAll('.social-input');
            for (let i = 1; i < socialInputs.length; i++) {
                socialInputs[i].remove();
            }
        }, function(error) {
            console.log('FAILED...', error);
            alert('Sorry, there was an error sending your application. Please try again or contact us directly at anula0237@gmail.com');
        })
        .finally(function() {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
});
