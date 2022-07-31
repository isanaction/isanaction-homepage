export default function handler(req, res) {
  if (req.method === 'POST') {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: req.body.email,
      bcc: 'isn.kumano@gmail.com',
      from: 'isana.kotou@gmail.com',
      subject: 'お問合せありがとうございます。',
      text:
        req.body.name +
        '様　お問合せを受け付けました。回答をお待ちください。' +
        req.body.message,
      html:
        req.body.name +
        '様　お問合せを受け付けました。回答をお待ちください。' +
        req.body.message,
    };

    (async () => {
      try {
        await sgMail.send(msg);
      } catch (error) {
        console.error(error);
        if (error.response) {
          console.error(error.response.body);
        }
      }
    })();
  }

  res.status(200);
}
