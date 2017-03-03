'use strict';

const mongoClient = require('mongodb').MongoClient;
// MongoDB connection URL
const connectionUrl = 'mongodb://dbUser:dbPassword@ds155428.mlab.com:55428/getir-bitaksi-hackathon';

/**
 * Opens a database connection
 *
 * @returns {Promise} Resolves with database object, rejects with connection error.
 */
function open(){
  return new Promise((resolve, reject)=>{
    // Use connect method to connect to the Server
    mongoClient.connect(connectionUrl, (err, db) => {
      if (err) {
        reject(err);
      } else {
        resolve(db);
      }
    });
  });
}

/**
 * Closes the MongoDB database connection.
 *
 * @param db MongoDB database object
 */
function close(db){
  if(db){
    db.close();
  }
}

module.exports = {
  open : open,
  close: close
};