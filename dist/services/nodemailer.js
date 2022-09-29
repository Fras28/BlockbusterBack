"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
let transporter = nodemailer_1.default.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "blockbusterpf@gmail.com",
        pass: "lsaomypmspnamwje", // generated ethereal password
    },
});
transporter.verify().then(() => {
    console.log("Ready for send email`s");
});
