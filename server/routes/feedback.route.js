const express = require('express');
const pool = require('../modules/pool')
const router = express.Router();

router.get('/', (req,res) => {
    pool.query(`SELECT * FROM "feedback" ORDER BY "id" DESC;`)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
});

router.post('/', (req, res) => {
    let feedback = req.body;
    let query = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;
    pool.query(query, [feedback.feeling, feedback.understanding, feedback.support, feedback.comments])
    .then((result) => {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
})

module.exports = router;