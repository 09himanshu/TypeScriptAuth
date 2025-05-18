import {Request, Response} from 'express'
import {transporter} from '../utils/smtp.utils'

const sendMail = async(req: Request, res: Response) => {
  try {
    let mail = await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: 'himanshusah610@gmail.com',
      subject: "Hello ✔",
      html: "<b>Hello world?</b>",
    })
    console.log(mail)
    res.status(200).send({status: true, data: mail})
  } catch (err) {
    console.log(err);
    res.status(500).send({status: false, data: 'Internal server error'})
  }
}

export {sendMail}