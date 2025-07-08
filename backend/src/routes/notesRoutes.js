import express from "express";
import {
  createNotes,
  deleteNotes,
  getAllNotes,
  getNoteByID,
  updateNote,
} from "../controllers/notesController.js";

const router = express.Router();
router.get("/", getAllNotes);
router.get("/:id", getNoteByID);
router.post("/", createNotes);

router.put("/:id", updateNote);

router.delete("/:id", deleteNotes);

export default router;
// app.get("/api/notes", (req, res) => {
//   res.status(200).send("you got 10 notes");
// });

// app.post("/api/notes", (req, res) => {
//   res.status(201).json({ message: "post created succefully" });
// });

// app.put("/api/notes/:id", (req, res) => {
//   res.status(200).json({ message: "post update succefully" });
// });

// app.delete("/api/notes/:id", (req, res) => {
//   res.status(200).json({ message: "post deleted succefully" });
// });
