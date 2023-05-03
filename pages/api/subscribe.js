const subscribe = async (req, res) => {
  const { email } = req.body

  if (req.method !== 'POST') {
    return res.status(405).send({ error: 'Request method is not allowed.' })
  }

  if (!email) {
    return res.status(400).json({ error: 'Email is required.' })
  }

  try {
    const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY
    const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID
    const MAILCHIMP_DC = process.env.MAILCHIMP_DC

    if (!MAILCHIMP_API_KEY || !MAILCHIMP_LIST_ID || !MAILCHIMP_DC) {
      return res.status(500).json({ error: 'Server configuration error.' })
    }

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

    const responseBody = await response.json()

    if (responseBody.status === 'subscribed') {
      return res.status(201).json({ success: true })
    } else {
      return res.status(502).json({ error: responseBody.detail || 'There was an error subscribing to the list.' })
    }
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() })
  }
}

export default subscribe
