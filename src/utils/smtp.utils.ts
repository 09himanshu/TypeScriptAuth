import nodemailer from 'nodemailer'
import env from '../config/env.config'



const transporter = nodemailer.createTransport({
  host: env.SMTP_HOST,
  port: env.SMTP_PORT,
  auth: {
    user: env.SMTP_USER,
    pass: env.SMTP_PASS
  }
})

export {transporter}