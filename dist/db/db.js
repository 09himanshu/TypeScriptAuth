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
exports.DB = void 0;
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
    find(_a) {
        return __awaiter(this, arguments, void 0, function* ({ collection, filter, project = {}, optionals = {} }) {
            try {
                if (!collection || typeof collection !== 'string')
                    return [];
                if (filter && typeof filter._id == 'string')
                    filter._id = new mongodb_1.ObjectId(filter._id);
                const { limit = 100, skip = 0, sort = {} } = optionals;
                return yield this.get_db_name()
                    .collection(collection)
                    .find(filter)
                    .project(project)
                    .skip(skip)
                    .limit(limit)
                    .sort(sort)
                    .toArray();
            }
            catch (err) {
                console.log(err);
                return [];
            }
        });
    }
    findOne(_a) {
        return __awaiter(this, arguments, void 0, function* ({ collection, filter, project = {} }) {
            try {
                if (!collection || typeof collection !== 'string')
                    return null;
                if (filter && typeof filter._id == 'string')
                    filter._id = new mongodb_1.ObjectId(filter._id);
                return yield this.get_db_name()
                    .collection(collection)
                    .findOne(filter, project);
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
    insertOne(_a) {
        return __awaiter(this, arguments, void 0, function* ({ collection, document }) {
            try {
                if (!collection || typeof collection !== 'string')
                    return null;
                return yield this.get_db_name()
                    .collection(collection)
                    .insertOne(document);
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
    insertMany(_a) {
        return __awaiter(this, arguments, void 0, function* ({ collection, document }) {
            try {
                if (!collection || typeof collection !== 'string')
                    return null;
                return yield this.get_db_name()
                    .collection(collection)
                    .insertMany(document);
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
    updateOne(_a) {
        return __awaiter(this, arguments, void 0, function* ({ collection, filter, update }) {
            try {
                if (!collection || typeof collection !== 'string')
                    return null;
                if (filter && typeof filter._id == 'string')
                    filter._id = new mongodb_1.ObjectId(filter._id);
                return yield this.get_db_name()
                    .collection(collection)
                    .updateOne(filter, update);
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
    updateMany(_a) {
        return __awaiter(this, arguments, void 0, function* ({ collection, filter, update }) {
            try {
                if (!collection || typeof collection !== 'string')
                    return null;
                if (filter && typeof filter._id == 'string')
                    filter._id = new mongodb_1.ObjectId(filter._id);
                return yield this.get_db_name()
                    .collection(collection)
                    .updateMany(filter, update);
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
    deleteOne(_a) {
        return __awaiter(this, arguments, void 0, function* ({ collection, filter }) {
            try {
                if (!collection || typeof collection !== 'string')
                    return null;
                if (filter && typeof filter._id == 'string')
                    filter._id = new mongodb_1.ObjectId(filter._id);
                return yield this.get_db_name()
                    .collection(collection)
                    .deleteOne(filter);
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
    deleteMany(_a) {
        return __awaiter(this, arguments, void 0, function* ({ collection, filter }) {
            try {
                if (!collection || typeof collection !== 'string')
                    return null;
                if (filter && typeof filter._id == 'string')
                    filter._id = new mongodb_1.ObjectId(filter._id);
                return yield this.get_db_name()
                    .collection(collection)
                    .deleteMany(filter);
            }
            catch (err) {
                console.log(err);
                return null;
            }
        });
    }
    aggegrate(_a) {
        return __awaiter(this, arguments, void 0, function* ({ collection, document }) {
            try {
                if (!collection || typeof collection !== 'string')
                    return [];
                return yield this.get_db_name()
                    .aggregate(document).toArray();
            }
            catch (err) {
                console.log(err);
                return [];
            }
        });
    }
}
exports.DB = DB;
//# sourceMappingURL=db.js.map