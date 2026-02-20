const nodemailer = require('nodemailer');

const sendOrderEmail = async (to, orderId) => {
  if (!process.env.SMTP_HOST) return;
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
  });

  await transporter.sendMail({
    from: `Ala <${process.env.SMTP_USER}>`,
    to,
    subject: 'Your Ala order confirmation',
    html: `<h2>Thank you for your order</h2><p>Your order <strong>${orderId}</strong> is confirmed.</p>`
  });
};

module.exports = { sendOrderEmail };
