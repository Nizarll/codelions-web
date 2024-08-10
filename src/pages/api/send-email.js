import nodemailer from 'nodemailer';

export async function post({ request }) {
  const formData = await request.formData();
  const name = formData.get('name');
  const email = formData.get('email');
  const subject = formData.get('subject');
  const message = formData.get('message');

  let transporter = nodemailer.createTransport({
    service: 'Gmail', // Or another email service
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  let mailOptions = {
    from: email,
    to: 'your-email@gmail.com',
    subject: subject || 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response('Email sent successfully!', { status: 200 });
  } catch (error) {
    return new Response('Error sending email.', { status: 500 });
  }
}
