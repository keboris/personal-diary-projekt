const EntryCard = () => {
  return (
    <>
      <dialog id="myModal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

      {/*<dialog open className="modal modal-open">
      <div className="modal-box bg-base-100 max-w-2xl">
        <button
          onClick={closeModal}
          className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3"
        >
          <X size={18} />
        </button>

        <h2 className="text-2xl font-bold text-primary mb-2">
          {selectedEntry.title}
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          {new Date(selectedEntry.date).toLocaleDateString("fr-FR")} —{" "}
          {selectedEntry.mood}
        </p>
        <p className="whitespace-pre-wrap text-gray-700 leading-relaxed">
          {selectedEntry.content}
        </p>

        <div className="modal-action">
          <Button onClick={closeModal} variant="outline">
            Fermer
          </Button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button onClick={closeModal}>close</button>
      </form>
    </dialog>*/}
    </>
  );
};

export default EntryCard;
