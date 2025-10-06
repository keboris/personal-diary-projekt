import { Link, useNavigate } from "react-router";
import { useState } from "react";
import { useEntry } from "../contexts/EntryContext";

const NewEntryModal = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState("");
  const [mood, setMood] = useState("");
  const [content, setContent] = useState("");
  const [urlImg, setUrlImg] = useState("");

  const { addEntry } = useEntry();

  const navigate = useNavigate();
  const moods = [
    "None 😶",
    "Happy 😊",
    "Calm 😐",
    "Sad 😢",
    "Irritated 😡",
    "Thoughtful 🤔",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const localS = JSON.parse(localStorage.getItem("entries")) ?? [];

    const todayStr = new Date().toISOString().slice(0, 10);
    const titleNormalized = title.trim().toLowerCase();
    const imgNormalized = urlImg.trim();

    const hasDuplicate = localS.some((entry) => {
      const entryDateStr = new Date(entry.date).toISOString().slice(0, 10);
      if (entryDateStr !== todayStr) return false;

      const entryTitle = (entry.title || "").trim().toLowerCase();
      const entryImg = (entry.urlImg || "").trim();

      const sameTitle =
        titleNormalized && entryTitle && entryTitle === titleNormalized;
      const sameImage = imgNormalized && entryImg && entryImg === imgNormalized;

      return sameTitle || sameImage;
    });

    if (hasDuplicate) {
      alert(
        "📅 You already have this entry for today. Please come back tomorrow to write a new one."
      );
      return;
    }

    const newEntry = {
      id: Date.now(),
      title,
      urlImg,
      mood,
      content,
      date: new Date().toISOString(),
    };

    localStorage.setItem("entries", JSON.stringify([newEntry, ...localS]));

    setTitle("");
    setMood("");
    setContent("");
    setUrlImg("");
    addEntry();
    alert("✅ Your entry has been successfully saved.");
    navigate("/entries");
  };

  return (
    <>
      {isOpen && (
        <dialog open className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <button
              type="button"
              onClick={() => onClose()}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-10"
            >
              ✕
            </button>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold mb-4 text-center">
                ✍️ New Entry
              </h2>

              <form
                onSubmit={handleSubmit}
                className="bg-base-100 shadow-md rounded-xl p-8 space-y-6"
              >
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Entry Title
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: Peaceful day at the park"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Image URL
                  </label>
                  <input
                    type="text"
                    placeholder="Paste hier the Image URL"
                    value={urlImg}
                    onChange={(e) => setUrlImg(e.target.value)}
                    className="input input-bordered w-full"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-base-content/70 mb-2">
                    Mood of the day
                  </label>
                  <select
                    name="mood"
                    value={mood}
                    onChange={(e) => setMood(e.target.value)}
                    className="select select-bordered w-full"
                  >
                    <option value="0">Choose your mood</option>
                    {moods.map((m, index) => (
                      <option key={index} value={index}>
                        {m}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Content
                  </label>
                  <textarea
                    placeholder="Write here your thoughts, your emotions or whatever you want to keep in mind..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows="5"
                    className="textarea textarea-bordered w-full"
                    required
                  ></textarea>
                </div>

                <div className="flex justify-between items-center pt-4">
                  <Link to="/entries" className="btn btn-ghost">
                    ← Back
                  </Link>
                  <button type="submit" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
};

export default NewEntryModal;
