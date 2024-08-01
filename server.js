const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");
const app = express();
const connectDB = require("./config/db");

// env config
dotenv.config();

// routes import
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");
// mongodb connection
connectDB();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/vi/user", userRoutes);
app.use("/api/vi/blog", blogRoutes);
// port
const PORT = process.env.PORT;
const DEV_MODE = process.env.DEV_MODE;
app.listen(PORT || 8080, () => {
  console.log(`server is running on ${DEV_MODE} port on ${PORT} `);
});
