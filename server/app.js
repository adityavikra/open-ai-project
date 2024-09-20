require("dotenv").config();
const express = require("express");
const cors = require("cors");
const analyzeRoute = require("./routes/analyze");
const grammarCheckRoute = require("./routes/grammarcheck");
const spellCheckRoute = require("./routes/spellcheck");
const PORT = process.env.PORT || 8000;
const app = express();

//Middlewares
app.use(cors());
app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

//https://api.openai.com/v1/chat/completions

//Routes
app.use("/api/analyze", analyzeRoute);
app.use("/api/grammarcheck", grammarCheckRoute);
app.use("/api/spellcheck", spellCheckRoute);
//server start
app.listen(PORT, () => {
  console.log(`Server Running on ${PORT}`);
});
