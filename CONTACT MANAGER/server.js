const express = require("express");
const erroHandler = require("./Middleware/errorHandler");
const connectDB = require("./config/DBconnection");
const dotenv = require("dotenv").config();


connectDB();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactroutes"));
app.use(erroHandler);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});