import express from "express";
import {
  getallNotes,
  createNotes,
  updateNotes,
  deleteNotes,
   getNoteById,
} from "../controllers/notesControllers.js";

const router = express.Router();

router.get("/", getallNotes);
router.get("/:id", getNoteById);
router.post("/", createNotes);
router.put("/:id", updateNotes);
router.delete("/:id", deleteNotes);
export default router;
