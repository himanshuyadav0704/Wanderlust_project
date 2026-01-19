const express = require("express");
const router = express.Router();
const Message = require("../models/message");

router.post("/send", async (req, res) => {
  try {
    console.log("Incoming body:", req.body);

    const { listingId, senderEmail, ownerEmail, messageText } = req.body;

    if (!listingId || !senderEmail || !ownerEmail || !messageText) {
      return res.status(400).json({ error: "All fields required" });
    }

    const msg = new Message({
      listingId,
      senderEmail,
      ownerEmail,
      messageText
    });

    await msg.save();

    res.json({ success: true });
  } catch (err) {
    console.error("MESSAGE ROUTE ERROR:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
