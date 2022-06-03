const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const methodOverride = require("method-override");

const seasonsController = require("./controllers/seasons");
const morgan = require('morgan');

const res = require('express/lib/response');
// Database Connection
mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});
    console.log(process.env.DATABASE_URL)
// Database Connection Error/Success
// Define callback functions for various events
const db = mongoose.connection;
db.on("error", (err) =>
	console.log(`${err.message}  is mongodb not connected?`)
);
db.on("connected", () => console.log("MONGO is connected :) !"));
db.on("disconnected", () => console.log("mongo has disconnected"));

// Middleware
// Body parser middleware: give us access to req.body
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(morgan("dev"));
// Controllers - technically just middleware
app.use("/seasons", seasonsController);



//Listener
const PORT = process.env.PORT;

app.listen(PORT, () => {
	console.log(`listening on port ${PORT}`);
});