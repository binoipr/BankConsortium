const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const ConnectDB = require("./config/db");

dotenv.config({ path: "./config/config.env" });
const app = express();

ConnectDB();

app.use(express.json());
app.use(cors());

app.use("/api/register", require("./routes/registerRoute"));
app.use("/api/booking", require("./routes/bookingRoute"));

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server is listening to port: ${PORT}`));
