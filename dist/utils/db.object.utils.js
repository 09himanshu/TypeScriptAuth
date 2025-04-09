"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env_config_1 = require("../config/env.config");
const db_1 = require("../db/db");
const dbService = new db_1.DB(env_config_1.ENV.URI, env_config_1.ENV.DB_NAME);
exports.default = dbService;
//# sourceMappingURL=db.object.utils.js.map