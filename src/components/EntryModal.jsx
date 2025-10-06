import { useEffect, useState } from "react";
import { createPath } from "react-router";

const EntryModal = ({
  moods,
  isOpen,
  entryState,
  onClose,
  editEntry,
  deleteEntry,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    urlImg: "",
    content: "",
    mood: "",
  });

  const farbe = ["neutral", "success", "accent", "info", "error", "warning"];

  useEffect(() => {
    if (isOpen && entryState.selectedEntry) {
      setFormData({
        id: entryState.selectedEntry.id,
        title: entryState.selectedEntry.title,
        urlImg: entryState.selectedEntry.urlImg,
        content: entryState.selectedEntry.content,
        mood: entryState.selectedEntry.mood,
      });
    }
  }, [isOpen, entryState.selectedEntry]);

  console.log("Form : ", formData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();

    const todayStr = new Date().toISOString().slice(0, 10);
    const titleNormalized = formData.title.trim().toLowerCase();
    const imgNormalized = formData.urlImg.trim();

    const list = entryState.entries.filter((e) => e.id !== formData.id);
    const hasDuplicate = list.some((entry) => {
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

    editEntry(formData);
    alert("✅ The changes were saved successfully.");
    setIsEditing(false);
    onClose();
  };

  return (
    <>
      {isOpen && entryState.selectedEntry && (
        <dialog open className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <button
              type="button"
              onClick={() => onClose()}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-10"
            >
              ✕
            </button>

            {!isEditing ? (
              <>
                <div className="card bg-base-100 w-full shadow-sm">
                  <figure className="w-full overflow-hidden rounded-lg">
                    <img
                      src={entryState.selectedEntry.urlImg}
                      alt={entryState.selectedEntry.title}
                      className="w-full h-42 object-cover"
                    />
                  </figure>

                  <div className="card-body">
                    <h3 className="card-title text-2xl font-bold text-primary">
                      {entryState.selectedEntry.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">
                      Date :{" "}
                      <span className="font-bold">
                        {new Date(
                          entryState.selectedEntry.date
                        ).toLocaleDateString("de-DE", {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                    </p>
                    <div
                      className={`badge badge-sm badge-${
                        farbe[entryState.selectedEntry.mood] || "neutral"
                      }`}
                    >
                      Your Mood :{" "}
                      {moods[entryState.selectedEntry.mood] || "None 😶"}
                    </div>
                    <h2 className="pt-4 card-title">Description :</h2>
                    <p className="whitespace-pre-wrap">
                      {entryState.selectedEntry.content}
                    </p>

                    <div className="flex justify-start gap-4 items-center mt-6">
                      <button
                        className="btn btn-outline btn-primary"
                        onClick={() => setIsEditing(true)}
                      >
                        ✏️ Edit Entry
                      </button>

                      <button
                        onClick={() => {
                          if (
                            window.confirm(
                              "Es-tu sûr de vouloir supprimer cette entrée ?"
                            )
                          ) {
                            deleteEntry(entryState.selectedEntry.id);
                            onClose();
                          }
                        }}
                        className="btn btn-outline btn-error"
                      >
                        🗑️ Delete Entry
                      </button>
                      <button
                        className="btn btn-outline"
                        onClick={() => onClose()}
                      >
                        ✖️ Close
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold mb-4 text-center">
                  ✏️ Edit Entry
                </h2>

                <form
                  onSubmit={handleSave}
                  className="bg-base-100 shadow-md rounded-xl p-4 space-y-6"
                >
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Entry Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      className="input input-bordered w-full"
                      placeholder="Ex: Peaceful day at the park"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Image URL
                    </label>
                    <input
                      type="text"
                      name="urlImg"
                      placeholder="Paste hier the Image URL"
                      value={formData.urlImg}
                      onChange={handleChange}
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
                      defaultValue={formData.mood}
                      onChange={handleChange}
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
                      name="content"
                      value={formData.content}
                      onChange={handleChange}
                      rows="5"
                      className="textarea textarea-bordered w-full"
                      placeholder="Write here your thoughts, your emotions or whatever you want to keep in mind..."
                      required
                    />
                  </div>

                  <div className="flex justify-between items-center pt-4">
                    <button type="submit" className="btn btn-primary">
                      💾 Save
                    </button>
                    <button
                      className="btn btn-ghost"
                      onClick={() => setIsEditing(false)}
                    >
                      ← Back
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

          <form method="dialog" className="modal-backdrop">
            <button onClick={() => onClose()}>Close</button>
          </form>
        </dialog>
      )}
    </>
  );
};

export default EntryModal;
