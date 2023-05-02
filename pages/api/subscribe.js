import fetch from 'isomorphic-unfetch';

const subscribe = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).send({ error: 'Request method is not allowed.' })
  }

  const { email } = req.body;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' })
  }

  try {
    const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY
    const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID
    const MAILCHIMP_DC = process.env.MAILCHIMP_DC;

    const API_URL = `https://${MAILCHIMP_DC}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`

    const data = {
      email_address: email,
      status: 'subscribed',
    }

    const response = await fetch(API_URL, {
      body: JSON.stringify(data),
      headers: {
        'Authorization': `apikey ${MAILCHIMP_API_KEY}`,
        'Content-Type': 'application/json'
      },
      method: 'POST',
    })

    if (response.status >= 400) {
      const error = await response.json()
      console.error(error)
      return res.status(400).json({ error: error.detail || 'There was an error subscribing to the list.' })
    }

    return res.status(201).json({ error: '' })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Something went wrong. Please try again later.' })
  }
}

export default subscribe;
