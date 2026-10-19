const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { GoogleGenAI } = require("@google/genai");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: message,
    });

    res.json({
      reply: response.text,
    });
  } catch (error) {
  console.log(error);

  res.json({
    reply:
      "🤖 Gemini is currently busy. Please try again in a few moments.",
  });
}
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});