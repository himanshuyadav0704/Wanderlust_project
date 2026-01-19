#!/usr/bin/env node



const args = process.argv.slice(2);

function getArg(key) {
  const arg = args.find(a => a.startsWith(`--${key}=`));
  return arg ? arg.split("=")[1] : null;
}

const listingId = getArg("listingId");
const senderEmail = getArg("from");
const ownerEmail = getArg("to");
const messageText = getArg("message");

if (!listingId || !senderEmail || !ownerEmail || !messageText) {
  console.log("Invalid usage");
  console.log("Usage:");
  console.log(
    "node contactOwner.js --listingId=LISTING --from=YOUR_EMAIL --to=OWNER_EMAIL --message='TEXT'"
  );
  process.exit(1);
}

fetch("http://localhost:8080/api/messages/send", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ listingId, senderEmail, ownerEmail, messageText })
})
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      console.log("Sent Successfully");
    } else {
      console.log("Failed:", data.error);
    }
  })
  .catch(e => {
    console.log("Server error:", e.message);
  });
