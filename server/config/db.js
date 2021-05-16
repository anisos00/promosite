const mongoose = require("mongoose");
try {
  mongoose.connect("mongodb://localhost:27017/ecomm", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log("Database Connected Successfully");
} catch (err) {
  console.log("Database Not Connected");
}
