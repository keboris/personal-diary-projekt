import { Link } from "react-router";
import { useEntry } from "../contexts/EntryContext";
import NewEntryModal from "../components/NewEntryModal";
import { useState } from "react";

const Home = () => {
  const entries = JSON.parse(localStorage.getItem("entries")) ?? [];
  const totalE = entries.length;

  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <>
      <section className="bg-gradient-to-r from-primary/10 via-base-100 to-secondary/10 py-20 text-center shadow-inner">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Welcome to your <br />
            <span className="text-primary">Personal Diary</span>
          </h2>
          <p className="text-base md:text-lg text-base-content/70 mb-8">
            Write freely, preserve your memories, share your emotions. Your
            intimate and elegant space, always within reach.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link to="/entries" className="btn btn-primary btn-wide">
              See my Entries ({totalE})
            </Link>
            {/*<Link to="/new" className="btn btn-outline btn-secondary btn-wide">
              New Entry
            </Link>*/}
            <button
              className="btn btn-outline btn-secondary btn-wide"
              onClick={() => openDialog()}
            >
              New Entry
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">
            Your private and secure space
          </h3>
          <p className="text-base-content/70">
            Every entry you write remains confidential. The journal is entirely
            yours: write, edit, or delete as you wish.
          </p>
          <Link to="/entries" className="btn btn-sm btn-primary">
            Explore the Diary →
          </Link>
        </div>

        <div className="bg-base-100 rounded-2xl shadow-md p-6 flex items-center justify-center">
          <span className="text-6xl">🪶</span>
        </div>
      </section>

      <NewEntryModal isOpen={isOpen} onClose={closeDialog} />
    </>
  );
};

export default Home;
