const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config({ path: "./config/config.env" });
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/register", require("./routes/registerRoute"));
app.use("/api/booking", require("./routes/registerRoute"));

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server is listening to port: ${PORT}`));
