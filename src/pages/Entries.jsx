import { Link } from "react-router";
import EntriesList from "../components/EntriesList";
import EntryCard from "../components/EntryCard";
import { useEntry } from "../contexts/EntryContext";

const Entries = () => {
  const { entryState } = useEntry();
  const entries = entryState.entries;

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
        <Link to="/new" className="btn btn-primary">
          + New Entry
        </Link>
      </div>

      <EntriesList entries={entries} moods={moods} farbe={farbe} />
      <EntryCard />
    </main>
  );
};

export default Entries;
