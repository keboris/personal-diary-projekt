import { Link } from "react-router";
import { useEntry } from "../contexts/EntryContext";
import { useState } from "react";
import EntryModal from "./EntryModal";

const EntriesList = ({ entries, moods, farbe }) => {
  const { entryState, showEntry, editEntry, deleteEntry } = useEntry();
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = (idEntry) => {
    showEntry(idEntry);
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <>
      {entries.length === 0 ? (
        <div className="text-center text-base-content/70 mt-20">
          <p>No entries yet.</p>
          <Link to="/new" className="btn btn-sm btn-secondary mt-4">
            Create a new Entry
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {entries.map((entry) => (
            <div
              key={entry.id}
              className="card bg-base-100 cursor-pointer rounded-xl shadow-sm hover:shadow-lg transition-shadow flex flex-col justify-between"
            >
              <div
                className="cursor-pointer"
                onClick={() => openDialog(entry.id)}
              >
                <figure className="w-full overflow-hidden rounded-lg">
                  <img
                    src={entry.urlImg}
                    alt={entry.title}
                    className="w-full h-42 object-cover"
                  />
                </figure>

                <div className="card-body">
                  <h3 className="text-xl font-semibold card-title">
                    {entry.title}
                  </h3>
                  <p className="text-sm text-base-content/70 mb-2">
                    📅{" "}
                    {new Date(entry.date).toLocaleDateString("de-DE", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                  <p className="text-base-content/80 line-clamp-3 mb-2">
                    {entry.content}
                  </p>
                  {/*<div
                    className={`badge badge-sm badge-${
                      farbe[entry.mood] || "neutral"
                    }`}
                  >
                    Mood : {moods[entry.mood] || "None 😶"}
                  </div>*/}
                </div>
              </div>
              <div className="card-actions px-6 pb-6 justify-between">
                <button
                  className="btn btn-sm btn-primary"
                  onClick={() => openDialog(entry.id)}
                >
                  Show More
                </button>

                <button
                  onClick={() => {
                    if (
                      window.confirm(
                        "Es-tu sûr de vouloir supprimer cette entrée ?"
                      )
                    ) {
                      deleteEntry(entry.id);
                    }
                  }}
                  className="btn btn-sm btn-outline btn-error"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <EntryModal
        moods={moods}
        isOpen={isOpen}
        entryState={entryState}
        onClose={closeDialog}
        editEntry={editEntry}
        deleteEntry={deleteEntry}
      />
    </>
  );
};

export default EntriesList;
