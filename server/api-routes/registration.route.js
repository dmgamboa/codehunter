import express from 'express'

const router = express.Router();

// /registratrion/create/userDoc
// /registration (in app.js)
router.route("/")
    .post((req, res, next) => {
        console.log("api route: ", req.body)
        res.send(req.body)
    });

export default router;