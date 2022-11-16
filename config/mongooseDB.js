const mongoose = require('mongoose');

const connectMongooseDB = async () => {
  const uri =
    process.env.NODE_ENV === 'development'
      ? process.env.MONGOS_CONNECTION_STRING
      : process.env.MONGODB_CONNECTION_STRING;
  try {
    const mongo = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `${
        process.env.NODE_ENV === 'development' ? 'Mongoose' : 'MongoDB'
      } Connected Successfully😍. Host: ${mongo.connection.host}`.cyan.underline
        .bold
    );
  } catch (err) {
    console.log(
      `${
        process.env.NODE_ENV === 'development' ? 'Mongoose' : 'MongoDB'
      } Connection Failed: ${err.message}`.bgRed.bold
    );
  }
};

module.exports = connectMongooseDB;
