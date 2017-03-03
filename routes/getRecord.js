'use strict';

const express = require('express');
const router = express.Router();
const db = require('../db');

/**
 * Finds a record from the Getir Hackathon database with the given key.
 * @param key Key of the record.
 * @returns {Promise} Resolves with the collection of record
 */
const findRecord = (key) => {
  return new Promise((resolve, reject) => {
    db.open().then((db) => {
      const records = db.collection('records');

      // Find the document with the key and resolve the promise.
      records.findOne({key: key}, {_id: 0})
        .then(resolve)
        .catch(reject);
    }).catch(reject);
  });
};

/**
 * POST /getRecord
 *
 * Accepts a JSON object in the format:
 * {
 *   "key": "chp8vgSkJDbyDKAS"
 * }
 *
 * Returns a JSON object in the format:
 * {
 *   "key" : "chp8vgSkJDbyDKAS",
 *   "value" : "9sScg6DaMLbMTgLdPADPYJTyOd6AgHDs9SZNkgGTlHeQF",
 *   "createdAt" : "2016-01-26"
 * }
 */
router.post('/', (req, res, next) => {
  const key = req.body.key;
  if(!key) {
    // Return an error, request body doesn't contain a "key" field.
    const err = new Error('Request body should contain a "key" field.');
    err.status = 422;
    next(err);
  }

  findRecord(key).then((record) => {
    res.json(record);
  }).catch(next);
});

module.exports = router;
