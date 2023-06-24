const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

// const MONGODB_URL =
//   "mongodb+srv://Andrii:rZx3nn90OEUshYC9@cluster0.hrdghsu.mongodb.net/tasks_reader";

const connectMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connection successful");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = { connectMongo };
