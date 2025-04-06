import express from "express";
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import {DB} from './db/db'

const uri = 'mongodb+srv://himanshu_sah:0901200112042001h^s@cluster0.ndgknjj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const db_name = 'Cluster0'

function start(app:any,PORT:number) {
  app.listen(PORT, () => {
    console.log(`Server listen on port http://localhost:${PORT}`);
  })
}

function init() {
  const app = express();
  const PORT: number = Number(process.env.PORT) || 8080 
  
  global.dbService = new DB(uri,db_name)
  app.use(compression());
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(cors({
    credentials: true
  }))

  start(app,PORT)
}

init()