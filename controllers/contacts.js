const mongodb = require('../db/connect');

const ObjectId = require('mongodb').ObjectId;

const getOne = async (req, res) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb
  .getDb()
  .db()
  .collection('contacts')
  .find({ _id: userId });
  result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
});
};

const getAll = async (req, res) => {
    const result  = await mongodb
    .getDb()
    .db()
    .collection('contacts')
    .find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
      });
};


module.exports = { getAll, getOne };