const router = require("express").Router();
// const stripe = require("stripe")(process.env.STRIPE_KEY);
const KEY = "sk_test_51MOgENGjIAVyKS8Vfv8JwZYDsRLtrgv0wXR8tEt3UJbrAwPrZUfpgnNbFIqhgrWSJIgl9r0eYUrAmPgeemzv0fUV008CPrltT4"
const stripe = require("stripe")(KEY);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
