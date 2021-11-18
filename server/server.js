import express from "express";
import cors from "cors";
import { readdirSync } from "fs";
import mongoose from "mongoose";
const morgan = require("morgan");
require("dotenv").config();

//(1) express
const app = express();

//(2) db
mongoose.connect(process.env.DATABASE)
    .then(() => console.log("DB CONNECTED"))
    .catch((err) => console.log("DB CONNECTION ERROR => ", err));

//(3) middleware: fns executed before returing to client
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());


//(4) route - auto import all from folder
readdirSync("./routes").map(r => {
    app.use("/api", require(`./routes/${r}`));
});

//(5) PORT
const port = process.env.PORT || 8000;

//(6) Listening to port
app.listen(port, () => console.log(`Server is currently running on port ${port}`));