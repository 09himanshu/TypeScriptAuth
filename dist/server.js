"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const compression_1 = __importDefault(require("compression"));
const cors_1 = __importDefault(require("cors"));
function start(app, PORT) {
    app.listen(PORT, () => {
        console.log(`Server listen on port http://localhost:${PORT}`);
    });
}
function init() {
    const app = (0, express_1.default)();
    const PORT = Number(process.env.PORT) || 8080;
    app.use((0, compression_1.default)());
    app.use(body_parser_1.default.json());
    app.use((0, cookie_parser_1.default)());
    app.use((0, cors_1.default)({
        credentials: true
    }));
    start(app, PORT);
}
init();
//# sourceMappingURL=server.js.map