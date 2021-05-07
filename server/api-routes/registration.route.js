import express from 'express'

const router = express.Router();

// /registratrion/create/userDoc
// /registration (in app.js)
router.route("/create/userDoc")
    .post((req, res, next) => {
        res.send(req.body)
    })


export default router;