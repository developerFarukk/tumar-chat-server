// import { Resend } from "resend";
// import config from "../config";

// export const resendClient = new Resend(config.resend_api_key);

// export const sender = {
//   email: config.email_from,
//   name: config.email_from_name,
// };

import { Resend } from 'resend'

let client: Resend | null = null

export function getResendClient() {
  if (client) return client

  const apiKey = process.env.RESEND_API_KEY
  // console.log("api key", apiKey);
  
  if (!apiKey) {
    throw new Error('RESEND_API_KEY missing')
  }

  client = new Resend(apiKey)
  return client
}

export const sender = {
  email: process.env.EMAIL_FROM!,
  name: process.env.EMAIL_FROM_NAME!,
}
