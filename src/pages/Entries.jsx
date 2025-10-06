import { Link } from "react-router";
import EntriesList from "../components/EntriesList";
import EntryCard from "../components/EntryCard";
import { useEntry } from "../contexts/EntryContext";
import { useState } from "react";
import NewEntryModal from "../components/NewEntryModal";

const Entries = () => {
  const { entryState } = useEntry();
  const entries = entryState.entries;

  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  const moods = [
    "None 😶",
    "Happy 😊",
    "Calm 😐",
    "Sad 😢",
    "Irritated 😡",
    "Thoughtful 🤔",
  ];
  const farbe = ["neutral", "success", "accent", "info", "error", "warning"];

  return (
    <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">My Entries</h2>
        <button className="btn btn-primary" onClick={() => openDialog()}>
          + New Entry
        </button>
      </div>

      <EntriesList entries={entries} moods={moods} farbe={farbe} />
      <NewEntryModal isOpen={isOpen} onClose={closeDialog} />
    </main>
  );
};

export default Entries;
