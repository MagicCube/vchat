import express from "express";
const router = express.Router();

router.post("/login", (req, res) => {
    res.send({
        status: "ok"
    });
});

export default router;
