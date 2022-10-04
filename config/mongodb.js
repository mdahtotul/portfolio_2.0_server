const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const mongo = await mongoose.connect(process.env.MONGOS_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `Mongoose Connected Successfully😍. Host: ${mongo.connection.host}`.cyan
        .underline.bold
    );
  } catch (err) {
    console.log(`Mongoose Connection Failed: ${err.message}`.bgRed.bold);
  }
};

module.exports = connectDB;
