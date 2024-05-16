// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const twilio = require('twilio');

const app = express();
const port = process.env.PORT || 5050;

const accountSid = "Enter api auth here";
const authToken = "Enter apikey here";
const client = twilio(accountSid, authToken);

app.use(cors());
app.use(bodyParser.json());

app.post('/send-code', (req, res) => {
  const { phoneNumber, code } = req.body;

  client.messages
    .create({
      body: `Your verification code is ${code}`,
      from: '+16614305323', // Replace with your Twilio phone number
      to: phoneNumber,
    })
    .then((message) => res.json({ success: true, messageSid: message.sid }))
    .catch((error) => res.status(500).json({ success: false, error: error.message }));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
