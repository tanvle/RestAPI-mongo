// handler functions for routes

const  mongo  = require("mongoose");
const db = require("../../dbase");
const colName = 'investors';

// insert the handler into each router in designate route

// GET all
db.getConnection()
    .collection(colName)
    .find()
    .toArray( (err, docs) => {
        if(err) console.log(err);
        return res.status(200).send(docs);
    });

// POST
db.getConnection()
    .collection(colName)
    .insertOne(req.body, (err, result) => {
        if(err) console.log(err);
        return res.status(200).send(result);
    });

// GET single item
db.getConnection()
    .collection(colName)
    .findOne( { _id: mongo.ObjectId(req.params.id) }, (err, docs) => {
        if(err) console.log(err);
        return res.status(200).send(docs);
    });

// PUT single item
// update is deprecated. Use: updateOne, UpdateMany, or bulkWrite
db.getConnection()
    .collection(colName)
    .update( {_id: mongo.ObjectId(req.params.id)}, { $set: req.body} , (err, result) => {
        if(err) console.log(err);
        return res.status(200).send(result);
    });

// DELETE
// remove is deprecated. Use: deleteOne, deleteMany, or bulkWrite 
db.getConnection()
    .collection(colName)
    .remove( {_id: mongo.ObjectId(req.params.id)}, (err, result) => {
        if(err) console.log(err);
        return res.status(200).send(result);
    });