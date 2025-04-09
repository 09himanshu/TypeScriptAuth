import express from "express";
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';

function start(app:any,PORT:number) {
  app.listen(PORT, () => {
    console.log(`Server listen on port http://localhost:${PORT}`);
  })
}

function init() {
  const app = express();
  const PORT: number = Number(process.env.PORT) || 8080 
  
  
  app.use(compression());
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(cors({
    credentials: true
  }))

  start(app,PORT)
}

init()