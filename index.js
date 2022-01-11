const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const Router = require('./routes/router.config');
dotenv.config()
connectDB()

const app = express()
 
Router.routerConfig(app);
