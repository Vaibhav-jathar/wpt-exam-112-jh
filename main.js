const express = require("express");
const app = express();

app.use(express.json());

const cors = require("cors");
app.use(cors());

const { addMessage, selectMessage } = require("./user");

app.get("/Messages", async (req, res) => {
  const list = await selectMessage();
  res.json(list);
});

app.post("/add-message", async (req, res) => {
  const message = req.body;
  await addMessage(message);
  res.json({ Message: "Message added succsessfully in database" });
});

app.listen(4000, () => console.log("Server Started"));
