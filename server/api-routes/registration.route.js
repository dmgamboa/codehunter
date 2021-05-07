import express from 'express'

const router = express.Router();

router.route("/create/userDoc")
    .post((req, res, next) => {

        res.send(req.body)
    })


export default router