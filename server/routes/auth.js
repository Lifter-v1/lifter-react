import express from "express";
import { register } from "../controllers/auth";


const router = express.Router();

//client will post data to server
router.post("/register", register);

module.exports = router;