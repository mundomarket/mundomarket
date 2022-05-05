const { Router } = require("express");
const mercadopago = require("mercadopago");
const { ACCESS_TOKEN } = process.env;

const router = Router();

mercadopago.configure({
  access_token: ACCESS_TOKEN,
});

router.post("/preference", (req: any, res: any, next: any) => {
  const { idCliente, title, unit_price, quantity, token } = req.body;

  mercadopago.configure({
    access_token: token,
  });
  let preference = {
    items: [
      {
        title: title,
        unit_price: unit_price,
        quantity: quantity,
      },
    ],
    back_urls: {
      success: "",
      failure: "",
      pending: "",
    },
    auto_return: "approved",
  };

  mercadopago.preferences.create(preference).then((response: any) => {
    console.log(response);
    global.id = response.body.id;
    res.status(200).send(id);
  });
});
router.get("feedback", (req: any, res: any, next: any) => {
  res.json({
    Payment: req.query.payment_id,
    Status: req.requery.status,
    MerchantOrder: req.query.merchant_order_id,
  });
});
module.exports = router;
