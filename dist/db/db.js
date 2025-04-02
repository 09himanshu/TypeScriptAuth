"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
class DB {
    constructor(uri, db_name) {
        this.uri = uri;
        this.db_name = db_name;
        this.client = new mongodb_1.MongoClient(this.uri, {
            serverApi: {
                version: mongodb_1.ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });
    }
    static getInstance(uri, db_name) {
        if (!DB.instance) {
            DB.instance = new DB(uri, db_name);
        }
        return DB.instance;
    }
    connection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.client.connect();
                console.log(`MongoDB connected successfully`);
            }
            catch (err) {
                console.error("Database connection failed", err);
            }
        });
    }
    get_db_name() {
        return this.client.db(this.db_name);
    }
    find(collection, filter, projection) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                let skip = 0;
                let limit = 10;
                let project = {};
                if (filter.skip) {
                    skip = Number(filter.skip);
                }
                if (filter.limit) {
                    limit = Number(filter.limit);
                }
                if (Object.keys(projection).length) {
                    project = { projection };
                }
                return (_a = this.get_db_name()) === null || _a === void 0 ? void 0 : _a.collection(collection).find(filter).skip(skip).limit(limit).project(project).toArray();
            }
            catch (err) {
                console.log(err);
            }
        });
    }
}
//# sourceMappingURL=db.js.map