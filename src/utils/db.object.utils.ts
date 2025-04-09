import {ENV} from '../config/env.config'
import {DB} from '../db/db'


const dbService = new DB(ENV.URI, ENV.DB_NAME)

export default dbService