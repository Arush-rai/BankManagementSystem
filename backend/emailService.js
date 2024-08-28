// backend/emailService.js
const nodemailer = require('nodemailer');

const sendReceiptEmail = async (userEmail, formData) => {

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "raiarush004@gmail.com", // Your Gmail address
      pass: "xrfpqloavbvuywbw"  // Your Gmail password or App Password
    }
  });

  // Example function to send email
  async function sendEmail(to, subject, text, attachment) {
    try {
      await transporter.sendMail({
        from: "raiarush004@gmail.com",
        to,
        subject,
        text,
        attachments: [
          {
            filename: 'Fixed_Deposit_Receipt.pdf',
            content: attachment,
            encoding: 'base64'
          }
        ]
      });
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Failed to send email:', error);
    }
  }

  const mailOptions = {
    from: 'raiarush004@gmail.com',
    to: userEmail,
    subject: 'Fixed Deposit Receipt',
    text: `Thank you for submitting your Fixed Deposit form. Here are the details:\n\n${JSON.stringify(formData, null, 2)}`
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = sendReceiptEmail;