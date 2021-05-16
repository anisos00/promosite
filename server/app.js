const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// Import Router
const authRouter = require("./routes/auth");
const usersRouter = require("./routes/users");

// Import Auth middleware for check user login or not~
const { loginCheck } = require("./middleware/auth");

// Database Connection
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() =>
        console.log(
            "==============Mongodb Database Connected Successfully=============="
        )
    )
    .catch((err) => console.log("Database Not Connected !!!"));

// Middleware
app.use(morgan("dev"));
app.use(cookieParser());
app.use(cors());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api", authRouter);
app.use("/api/user", usersRouter);


// Run Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log("Server is running on ", PORT);
});