
// function db to connect to mongoDB using mnp mongodb

const mongo = require('mongodb');
    const mongoClient = mongo.MongoClient;
    const DB_NAME = 'my_db';

const db = {
    _dbClient: null,
    connect: async function(dbUrl) {
        const client = await mongoClient.connect(dbUrl, {
            maxPoolSize: 10,
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        this._dbClient = client;
    },  
    getConnection: function() {
        if(!this._dbClient) {
            console.log('Unable to connect. Exit now');
            process.exit
        }
        return this._dbClient(DB_NAME);
    }

// end function db
}

module.exports = db;