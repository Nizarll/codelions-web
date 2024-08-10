import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors'; // Import cors

const app = express();
app.use(cors()); // Enable CORS
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { name, email, subject, message } = req.body;
  console.log(name, email, subject, message);

  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'nizaryatim2005@gmail.com',
      pass: 'yatimgames123'
    }
  });

  let mailOptions = {
    from: email,
    to: 'nizaryatim2005@gmail.com',
    subject: subject || 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error sending email.');
    }
    res.status(200).send('Email sent successfully.');
  });
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
