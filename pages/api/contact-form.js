import { google } from 'googleapis'
import { config } from '../../theme.config'
import fs from 'fs'
import path from 'path'

const googleSheetsKeyPath = path.resolve(process.cwd(), 'google-sheets-key.json')
const googleSheetsKey = JSON.parse(fs.readFileSync(googleSheetsKeyPath, 'utf-8'))

const googleSheets = google.sheets('v4')
const googleAuth = new google.auth.JWT(googleSheetsKey.client_email, null, googleSheetsKey.private_key, [
  'https://www.googleapis.com/auth/spreadsheets',
])

const SPREADSHEET_ID = '1ozGtdZVYpw3qhkaTykYRIKGds-Ocz0aTMH9rOeJeisI'
const SHEET_NAME = 'Sheet1'

const appendToSheet = async (data) => {
  await googleAuth.authorize()

  const formattedData = Object.entries(data).map(([key, value]) => {
    if (typeof value === 'object') {
      return Object.entries(value)
        .filter(([, v]) => v)
        .map(([k]) => k)
        .join(', ')
    }
    return value
  })

  const request = {
    spreadsheetId: '1ozGtdZVYpw3qhkaTykYRIKGds-Ocz0aTMH9rOeJeisI',
    range: `${SHEET_NAME}!A1`,
    valueInputOption: 'RAW',
    insertDataOption: 'INSERT_ROWS',
    resource: {
      values: [formattedData],
    },
    auth: googleAuth,
  }

  const response = await googleSheets.spreadsheets.values.append(request)
  return response.data
}


const contact = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).send({ error: 'Request method is not allowed.' })
  }

  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).send({ error: 'Invalid or empty data received.' })
  }

  try {
    await appendToSheet(req.body)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }

  return res.status(200).json({ error: '' })
}


export default contact
