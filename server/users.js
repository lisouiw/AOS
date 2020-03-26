const router = require("express").Router();
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/";
const option = { useUnifiedTopology: true, useNewUrlParser: true };
require("dotenv").config();

const getUser = async ({ email, password }) => {
  return await new Promise((resolve, reject) => {
    MongoClient.connect(url, option, async (err, db) => {
      if (err) reject({ status: 500, err: "Internal Server Error" });

      let dbo = db.db(process.env.DB_NAME);

      dbo
        .collection("users")
        .find({ email, password })
        .toArray()
        .then(res =>
          resolve(!res[0] ? { err: "Email or password incorrect" } : res[0])
        )
        .catch(() => reject({ status: 500, err: "Internal Server Error" }));
    });
  });
};

router.get("/", (req, res) => {
  let { email, password } = req.query;

  if (!(email && password))
    res.status(200).send({ err: "the form is not complete" });

  getUser(req.query)
    .then(result => res.status(200).send(result))
    .catch(({ status, ...err }) => res.status(status).send(err));
});

module.exports = router;
