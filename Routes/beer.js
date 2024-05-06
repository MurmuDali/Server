import express from "express";
import { deleteData, getData, postData, putData } from "../Controller/beerController.js";


const router = express.Router();

router.get("/", getData);
router.post("/", postData);
router.put("/:id", putData);
router.delete("/:id", deleteData);

export default router;