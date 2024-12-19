const mongoose = require('mongoose');

const connect = async(databaseName) => {
    var connectionOptions = { 
        dbName:databaseName,
        serverApi: { 
            version: '1', 
            strict: true, 
            deprecationErrors: true 
        } 
    }

    await mongoose.connect(process.env.DB_CONN, connectionOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
}

module.exports = { connect }