import Note from "../models/Note.js";

export async function getAllNotes(req, res) {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    console.error("error in getall notes controlelrs", error);
    res.status(500).json({ message: "internal server error" });
  }
}

export async function createNotes(req, res) {
  try {
    const { title, content } = req.body;

    const notes = new Note({ title, content });
    const saveNotes = await notes.save();
    console.log(title, content);
    res.status(201).json(saveNotes);
  } catch (error) {
    console.error("error in createnotes controlelrs", error);
    res.status(500).json({ message: "internal server error" });
  }
}

export async function updateNote(req, res) {
  try {
    const { title, content } = req.body;
    const updateNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      {
        new: true,
      }
    );
    if (!updateNote) return res.status(404).json({ message: "Note not found" });
    res.status(200).json(updateNote);
  } catch (error) {
    console.error("error in updateNotes controlelrs", error);
    res.status(500).json({ message: "internal server error" });
  }
}

export async function deleteNotes(req, res) {
  try {
    const deleteNote = await Note.findByIdAndDelete(req.params.id);
    if (!deleteNote) return req.status(404).json({ message: "id not found" });
    res.status(200).json({ message: "the selected id is not deleted" });
  } catch (error) {
    console.error("error in deleteNotes controlelrs", error);
    res.status(500).json({ message: "internal server error" });
  }
}

export async function getNoteByID(req, res) {
  try {
    const getIdNote = await Note.findById(req.params.id);
    if (!getIdNote) return req.status(404).json({ message: "id not found" });
    res.status(200).json(getIdNote);
  } catch (error) {
    console.error("error in deleteNotes controlelrs", error);
    res.status(500).json({ message: "internal server error" });
  }
}
