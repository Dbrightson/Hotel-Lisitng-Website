import emailjs from 'emailjs-com';

// Initialize EmailJS with your user ID
emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);

export async function sendEmail(name, email, message) {
  const templateParams = {
    from_name: 'Brightson Hotels International',
    to_name: name,
    from_email: email,
    message: message,
  };

  try {
    const response = await emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      templateParams
    );

    console.log('SUCCESS!', response);
    return true; // Indicate successful email sending
  } catch (error) {
    console.error('FAILED...', error);
    return false; // Indicate error during email sending
  }
}
