const mongoose = require('mongoose');

const connect = async() => {
    await mongoose.connect(process.env.DB_CONN, { serverApi: { version: '1', strict: true, deprecationErrors: true } });
    await mongoose.connection.db.admin().command({ ping: 1 });
}

module.exports = { connect }