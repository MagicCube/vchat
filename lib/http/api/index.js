import express from "express";
import security from "./security";

const router = express.Router();
router.use("/security", security);

export default router;
