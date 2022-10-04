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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.abi = exports.gold = exports.executePaymentGold = exports.createPaymentGold = void 0;
const axios_1 = __importDefault(require("axios"));
const users_controller_1 = require("./users.controller");
const CLIENT = "AZ3uE4WtcfAbqy5f_Ak2Uxnqd4sCZH5EyG1LeOAzz072y_I-IPyzY3esn1BRJ0KWpqulbcq-5NnGQxVB";
const SECRET = "EAzzDuNzWs9-wZSuNwqO-VV4BteE8OUvQctWqC7VBLeYdhClktLEmHHAjxMZYI24f5zmhwCI57yLr1Qk";
const PAYPAL_API = "https://api-m.sandbox.paypal.com"; // Live https://api-m.paypal.com
const auth = { user: process.env.CLIENT, pass: process.env.SECRET };
const createPaymentGold = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = {
        intent: "CAPTURE",
        purchase_units: [
            {
                amount: {
                    currency_code: "USD",
                    value: "24.99",
                },
            },
        ],
        application_context: {
            brand_name: `BlockbusterHenry.com`,
            landing_page: "NO_PREFERENCE",
            user_action: "PAY_NOW",
            return_url: `https://blockbuster-pf.vercel.app/gold`,
            cancel_url: `https://blockbuster-pf.vercel.app`, // Url despues de realizar el pago
        },
    };
    //https://api-m.sandbox.paypal.com/v2/checkout/orders [POST]
    const result = yield axios_1.default.post(`${PAYPAL_API}/v2/checkout/orders`, body, {
        auth: {
            username: CLIENT,
            password: SECRET,
        },
    });
    console.log(result.data, "create");
    res.send({ data: result.data.links[1].href });
});
exports.createPaymentGold = createPaymentGold;
var data2 = [];
const executePaymentGold = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { token } = req.query;
    const response = yield axios_1.default.post(`${PAYPAL_API}/v2/checkout/orders/${token}/capture`, {}, {
        auth: {
            username: CLIENT,
            password: SECRET,
        },
    });
    // usersService.defineCategoryGold(id)
    data2.push(response.data);
    res.redirect("https://blockbuster-pf.vercel.app/gold");
});
exports.executePaymentGold = executePaymentGold;
const gold = () => {
    console.log(data2, "Gold...");
    return data2;
};
exports.gold = gold;
const abi = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    let api = (0, exports.gold)();
    if (api) {
        users_controller_1.usersService.defineCategoryGold(id);
    }
    res.send(api);
});
exports.abi = abi;
