// utils/getAccessToken.js
import { GoogleAuth } from 'google-auth-library'

export async function getAccessToken() {
  const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON)
  const auth = new GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  const client = await auth.getClient()
  const accessToken = await client.getAccessToken()
  return accessToken.token
}
