import env from '../config/env.config'
import {DB} from '../db/db'

console.log('=====ENV',env)
const dbService = new DB(env.URI, env.DB_NAME)

export default dbService