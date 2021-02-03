const express = require("express");
const mongoose = require('mongoose');
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require('cors');
const { readdirSync } = require('fs');
require('dotenv').config();

// app
const app = express();
const DB = process.env.MONGO_URI;
const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true
}

// middleware
app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json({ limit: "2mb" }));

// db
mongoose.connect(DB, options)
    .then(() => console.log('DB CONNECTED'))
    .catch((err) => console.log(`DB CONNECTION ERROR: ${err}`));

// routes
readdirSync('./routes').map(r => app.use(require("./routes/" + r)));

// port
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});