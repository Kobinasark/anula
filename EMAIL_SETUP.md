# EmailJS Setup Instructions for ANULA Website

## Step 1: Sign up for EmailJS
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service
1. In your EmailJS dashboard, click "Email Services" → "Add New Service"
2. Choose "Gmail" as the provider
3. Connect your Gmail account (anula0237@gmail.com)
4. Name your service (e.g., "ANULA Gmail")

## Step 3: Create Email Template
1. Click "Email Templates" → "Create New Template"
2. Use this template structure:

**Subject:**
```
ANULA Application from {{from_name}}
```

**HTML Body:**
```html
<h2>New Influencer Application</h2>
<p><strong>Name:</strong> {{full_name}}</p>
<p><strong>Email:</strong> {{applicant_email}}</p>
<p><strong>Niche:</strong> {{niche}}</p>
<p><strong>Follower Count:</strong> {{follower_count}}</p>

<h3>Social Media Accounts:</h3>
<pre>{{social_accounts}}</pre>

<h3>What makes their voice authentic?</h3>
<p>{{authenticity_message}}</p>
```

## Step 4: Get Your Credentials
1. Go to "Account" → "General"
2. Copy your **Public Key**
3. Go to "Email Services" and copy your **Service ID**
4. Go to "Email Templates" and copy your **Template ID**

## Step 5: Update the JavaScript
Replace the placeholders in `anula.js`:
- `YOUR_PUBLIC_KEY` → Your actual public key
- `YOUR_SERVICE_ID` → Your service ID
- `YOUR_TEMPLATE_ID` → Your template ID

## Step 6: Test
1. Fill out the application form on your website
2. Submit it
3. Check your Gmail inbox for the application

## Troubleshooting
- Make sure your Gmail account has "Less secure app access" enabled (or use an App Password)
- Check the browser console for any errors
- Verify all IDs are correct and properly quoted

## Alternative: Formspree (Simpler Setup)
If EmailJS is too complex, consider Formspree:
1. Go to [https://formspree.io/](https://formspree.io/)
2. Create account and get your form endpoint
3. Replace the EmailJS code with a simple fetch request to your Formspree endpoint</content>
<parameter name="filePath">c:\Users\PC\OneDrive\Desktop\anula\EMAIL_SETUP.md