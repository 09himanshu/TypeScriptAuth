"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transporter = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transporter = nodemailer_1.default.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    auth: {
        user: '8d2b40001@smtp-brevo.com',
        pass: ' xsmtpsib-4116c1e9c6ec960cc5bb9a9360e75fd2ce9725bba337ae90773ba280802a6805-bv5ydp2OzKGht0n9'
    }
});
exports.transporter = transporter;
//# sourceMappingURL=smtp.utils.js.map