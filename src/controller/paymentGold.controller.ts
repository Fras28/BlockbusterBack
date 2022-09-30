import axios from "axios";
import { Request, Response, Router } from "express";

const CLIENT = 'AZ3uE4WtcfAbqy5f_Ak2Uxnqd4sCZH5EyG1LeOAzz072y_I-IPyzY3esn1BRJ0KWpqulbcq-5NnGQxVB';
const SECRET = 'EAzzDuNzWs9-wZSuNwqO-VV4BteE8OUvQctWqC7VBLeYdhClktLEmHHAjxMZYI24f5zmhwCI57yLr1Qk';
const PAYPAL_API = 'https://api-m.sandbox.paypal.com'; // Live https://api-m.paypal.com

const auth = { user: CLIENT, pass: SECRET }

export const createPaymentGold = async (_req: Request, res: Response) => {
    const body = {
        intent: 'CAPTURE',
        purchase_units: [{
            amount: {
                currency_code: 'USD', //https://developer.paypal.com/docs/api/reference/currency-codes/
                value: '24.99'
            }
        }],
        application_context: {
            brand_name: `BlockbusterHenry.com`,
            landing_page: 'NO_PREFERENCE', // Default, para mas informacion https://developer.paypal.com/docs/api/orders/v2/#definition-order_application_context
            user_action: 'PAY_NOW', // Accion para que en paypal muestre el monto del pago
            return_url: `http://localhost:3000/execute-paymentGold`, // Url despues de realizar el pago
            cancel_url: `http://localhost:3000/cancel-payment` // Url despues de realizar el pago
        }
    }

    //https://api-m.sandbox.paypal.com/v2/checkout/orders [POST]
    const result = await axios.post(`${PAYPAL_API}/v2/checkout/orders`, body,{
        auth:{
            username: CLIENT,
            password: SECRET,
        },
    });

    console.log(result.data)
    //res.redirect(result.data.links[1].href)
    res.json({ data: result.data.links[1].href })
    //res.send("Creating order");
}

export const executePaymentGold = async (req: Request, res: Response) => {
    const {token} = req.query;
    const response = await axios.post(`${PAYPAL_API}/v2/checkout/orders/${token}/capture`, {},{
        auth:{
            username: CLIENT,
            password: SECRET,
        },
    })

    console.log(response.data)
    //res.json({ data: response })
    res.json({ data: response.data })
    //res.send('Thanks your pay GOLD')
}
