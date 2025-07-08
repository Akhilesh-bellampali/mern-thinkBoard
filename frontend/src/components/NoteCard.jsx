import { PenSquareIcon, TrashIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import { formatDate } from "../lib/utils.js";
import api from "../lib/axios.js";
import toast from "react-hot-toast";

const NoteCard = ({ note, setNotes }) => {
  const handleDelete = async (e, id) => {
    e.preventDefault(); //get rid of this navigate beghaviour

    if (!window.confirm("are you sure you want to delete this notes")) return;

    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((note) => note._id !== id));
      toast.success("note delete succefully");
    } catch (error) {
      console.log(error);
      toast.error("failed to deleted notes");
    }
  };
  return (
    <Link
      to={`/note/${note._id}`}
      className="card bg-base-100 hover:shadow-lg transition-all duration-200 bored-t-4 border-solid borde-[#00FF9D]"
    >
      <div>
        <div className=" card-body">
          <h3 className="card-title text-base-content">{note.title}</h3>
          <p className="text-base-content/70 line-clamp-3">{note.content}</p>
          <div className="card-actions justify-between items-center mt-4">
            <span className="text-sm text-base-content/60">
              {formatDate(new Date(note.createdAt))}
            </span>
            <div className="flex  items-center gap-1">
              <PenSquareIcon className="size-4" />
              <button
                className="btn btn-ghost btn-xs text-error"
                onClick={(e) => handleDelete(e, note._id)}
              >
                <TrashIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
