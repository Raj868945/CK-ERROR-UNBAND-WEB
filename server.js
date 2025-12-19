const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/api/unban", (req, res) => {
  res.json({
    to: "support@whatsapp.com",
    subject: "WhatsApp Account Unban Request",
    body:
`Hello WhatsApp Support Team,

My WhatsApp number was banned by mistake.
I have not violated any terms and conditions.

Please review my account and unban it.

Thank you`
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("CK-ERROR UNBAN running"));
