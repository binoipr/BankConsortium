const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });
const app = express();

const PORT = process.env.PORT;

console.log(PORT);

app.listen(PORT, () => console.log(`Server is listening to port: ${PORT}`));
