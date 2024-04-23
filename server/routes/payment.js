const express = require("express");
const router = express.Router();
const Razorpay = require("razorpay");

// Initialize Razorpay instance with your API key and secret
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// POST route to create a payment order
router.post("/create-order", async (req, res) => {
  const { amount, currency, receipt, notes } = req.body;
  try {
    const options = {
      amount,
      currency,
      receipt,
      payment_capture: 1,
      notes,
    };

    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ message: "Failed to create payment order" });
  }
});

module.exports = router;
