import { google } from 'googleapis'
import { config } from '../../theme.config'
import fs from 'fs'
import path from 'path'

const googleSheetsKey = {
  client_email: process.env.client_email,
  private_key: process.env.private_key.replace(/\\n/g, '\n'),
}

const googleSheets = google.sheets('v4')
const googleAuth = new google.auth.JWT(
  googleSheetsKey.client_email,
  null,
  googleSheetsKey.private_key,
  ['https://www.googleapis.com/auth/spreadsheets']
)

const SPREADSHEET_ID = process.env.spreadsheet_id
const SHEET_NAME = 'Sheet1'

const appendToSheet = async (data) => {
  await googleAuth.authorize()

  // Add the current date and time to the data
  const now = new Date();
  const formattedDate = now.toLocaleDateString();
  const formattedTime = now.toLocaleTimeString();
  data['Date'] = formattedDate;
  data['Time'] = formattedTime;

  const formattedData = Object.entries(data).map(([key, value]) => {
    if (typeof value === 'object') {
      return Object.entries(value)
        .filter(([, v]) => v)
        .map(([k]) => k)
        .join(', ')
    }
    return value
  })

  // Add the date and time to the beginning of the array
  formattedData.unshift(formattedTime, formattedDate);

  const request = {
    spreadsheetId: SPREADSHEET_ID,
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









