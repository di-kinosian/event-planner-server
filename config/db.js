const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const dbUri = process.env.DB_URI
    await mongoose.connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "app",
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
