const fetch = require('node-fetch');

const subscribe = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required.' });
    }

    if (req.method !== 'POST') {
      return res.status(405).send({ error: 'Request method is not allowed.' });
    }

    const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
    const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID;
    const MAILCHIMP_DC = process.env.MAILCHIMP_DC;
    const API_URL = `https://${MAILCHIMP_DC}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`;

    const data = {
      email_address: email,
      status: 'subscribed',
    };

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `apikey ${MAILCHIMP_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.detail || 'There was an error subscribing to the list.');
    }

    return res.status(201).json({ message: 'Subscribed successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: error.message || error.toString() });
  }
};

export default subscribe;
