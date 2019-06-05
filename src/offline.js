import { GET_NOTES } from "./queries";

export const saveNotes = cache => {
  const { notes } = cache.readQuery({ query: GET_NOTES });
  const jsonNotes = JSON.stringify(notes);
  try {
    localStorage.setItem("notes", jsonNotes);
  } catch (error) {
    console.log(error);
  }
};

export const restoreNotes = () => {
  const notes = localStorage.getItem("notes");
  if (notes) {
    try {
      const parsedNotes = JSON.parse(notes);
      return parsedNotes;
    } catch (err) {
      console.log(err);
    }
  }
  return [];
};

export const cleanNote = () => {
  //eslint-disable-next-line
  const check = confirm("are you sure??");

  if (check) {
    localStorage.removeItem("notes");
  }

  window.location.reload();
};

export const deleteNote = noteId => {
  const notes = localStorage.getItem("notes");

  if (notes) {
    const parsedNotes = JSON.parse(notes);
    const result = parsedNotes.filter(parsednote => parsednote.id !== noteId);

    if (result) {
      localStorage.setItem("notes", JSON.stringify(result));
      window.location.reload();
    }
  }
};
