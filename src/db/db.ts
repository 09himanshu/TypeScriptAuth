import {MongoClient, Db, ServerApiVersion} from 'mongodb'

class DB {
  private static instance: DB
  private uri: string
  private db_name: string
  private client: MongoClient

  private constructor (uri: string, db_name: string) {
    this.uri = uri
    this.db_name = db_name
    this.client = new MongoClient(this.uri,{
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }
    })
  }

  static getInstance(uri: string, db_name: string): DB {
    if(!DB.instance) {
      DB.instance = new DB(uri, db_name)
    }
    return DB.instance
  }

  async connection(): Promise<void> {
    try {
      await this.client.connect();
      console.log(`MongoDB connected successfully`);
    } catch (err) {
      console.error("Database connection failed", err)
    }
  }

  get_db_name(): Db | undefined {
    return this.client.db(this.db_name);
  }


  async find(collection: string, filter: object, projection: object, skip: number, limit: number) {
    try {
      let project = {}

      if(Object.keys(projection).length) {
        project = {projection}
      }
  
      return this.get_db_name()?.collection(collection).find(filter).skip(skip).limit(limit).project(project).toArray()
    } catch (err) {
      console.log(err);
    }
  }
}