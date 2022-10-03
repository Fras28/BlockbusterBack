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
exports.apiSilver = exports.silver = exports.executePaymentSilver = exports.createPaymentSilver = exports.usersService = void 0;
const axios_1 = __importDefault(require("axios"));
const users_model_1 = __importDefault(require("../db/models/users.model"));
const user_service_1 = require("../services/user.service");
exports.usersService = new user_service_1.UserService(new users_model_1.default());
const CLIENT = 'AZ3uE4WtcfAbqy5f_Ak2Uxnqd4sCZH5EyG1LeOAzz072y_I-IPyzY3esn1BRJ0KWpqulbcq-5NnGQxVB';
const SECRET = 'EAzzDuNzWs9-wZSuNwqO-VV4BteE8OUvQctWqC7VBLeYdhClktLEmHHAjxMZYI24f5zmhwCI57yLr1Qk';
const PAYPAL_API = 'https://api-m.sandbox.paypal.com'; // Live https://api-m.paypal.com
const auth = { user: CLIENT, pass: SECRET };
const createPaymentSilver = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    const body = {
        intent: 'CAPTURE',
        purchase_units: [{
                amount: {
                    currency_code: 'USD',
                    value: '19.99'
                }
            }],
        application_context: {
            brand_name: `BlockbusterHenry.com`,
            landing_page: 'NO_PREFERENCE',
            user_action: 'PAY_NOW',
            return_url: `https://blockbuster-pf.vercel.app/silver`,
            cancel_url: `https://blockbuster-pf.vercel.app` // Url despues de realizar el pago
        }
    };
    //https://api-m.sandbox.paypal.com/v2/checkout/orders [POST]
    const result = yield axios_1.default.post(`${PAYPAL_API}/v2/checkout/orders`, body, {
        auth: {
            username: CLIENT,
            password: SECRET,
        },
    });
    console.log(result.data, "ACA");
    //res.redirect(result.data.links[1].href)
    res.json({ data: result.data.links[1].href });
    //res.send("Creating order");
});
exports.createPaymentSilver = createPaymentSilver;
var data2 = [];
const executePaymentSilver = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { token } = req.query;
    const response = yield axios_1.default.post(`${PAYPAL_API}/v2/checkout/orders/${token}/capture`, {}, {
        auth: {
            username: CLIENT,
            password: SECRET,
        },
    });
    data2.push(response.data);
    res.redirect(`https://blockbuster-pf.vercel.app/silver`);
    //console.log(response.data, "acaaa")
    //res.json({ data: response })
    //res.json({ data: response.data })
    //res.send('Thanks your pay SILVER')
});
exports.executePaymentSilver = executePaymentSilver;
const silver = () => {
    console.log(data2, "Silver...");
    return data2;
};
exports.silver = silver;
const apiSilver = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    let api = (0, exports.silver)();
    api.map(e => {
        return e.status;
    });
    if (api) {
        exports.usersService.defineCategorySilver(id);
    }
    res.send(api);
});
exports.apiSilver = apiSilver;
