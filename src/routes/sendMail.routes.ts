import { Router } from 'express'
import * as controller from '../controller/smtp.controller'

const route = Router()

route.post('/sendEmail', controller.sendMail)

export default route