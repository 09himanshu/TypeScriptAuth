import express from "express";
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';

import env from './config/env.config'
import mailRoute from './routes/sendMail.routes'

function start(app:any,PORT:number) {
  app.listen(PORT, () => {
    console.log(`Server listen on port http://localhost:${PORT}`);
  })
}

function init() {
  const app = express();
  const PORT: number = Number(env.PORT)
  
  app.use(compression());
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(cors({
    credentials: true
  }))

  app.use(mailRoute)

  start(app,PORT)
}

init()