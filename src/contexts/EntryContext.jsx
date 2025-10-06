import { act, createContext, useContext, useEffect, useReducer } from "react";

const EntryContext = createContext();

const localEntry = JSON.parse(localStorage.getItem("entries")) ?? [];

const initialEntry = {
  entries: localEntry,
};

function reducer(state, action) {
  const localStor = JSON.parse(localStorage.getItem("entries")) ?? [];
  switch (action.type) {
    case "show_entry":
      const selectedEntry = localStor.find((enr) => enr.id === action.payLoad);

      return { ...state, selectedEntry: selectedEntry };

    case "delete_entry":
      const deletedEntry = state.entries.filter((e) => e.id !== action.payLoad);
      localStorage.setItem("entries", JSON.stringify(deletedEntry));
      return { ...state, entries: deletedEntry };

    case "add_entry":
      return { ...state, entries: localStor };

    case "edit_entry":
      const editedEntry = action.payLoad.id;
      const { id, ...newValues } = action.payLoad;
      const newEntries = localStor.map((entry) =>
        entry.id === editedEntry ? { ...entry, ...newValues } : entry
      );
      return { ...state, entries: newEntries };

    case "count_entries":
      const totalE = state.entries.length;
      return { ...state, totalE };

    default:
      return state;
  }
}

export default function EntryContextProvider({ children }) {
  const [entryState, dispatch] = useReducer(reducer, initialEntry);

  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entryState.entries));
    dispatch({ type: "count_entries" });
  }, [entryState.entries]);

  function showEntry(id) {
    dispatch({ type: "show_entry", payLoad: id });
  }

  function addEntry() {
    dispatch({ type: "add_entry" });
  }

  function editEntry(entry) {
    dispatch({ type: "edit_entry", payLoad: entry });
  }

  function deleteEntry(id) {
    dispatch({ type: "delete_entry", payLoad: id });
  }
  return (
    <EntryContext.Provider
      value={{
        entryState,
        addEntry,
        showEntry,
        editEntry,
        deleteEntry,
        selectedEntry: entryState.selectedEntry || [],
      }}
    >
      {children}
    </EntryContext.Provider>
  );
}

export function useEntry() {
  return useContext(EntryContext);
}
