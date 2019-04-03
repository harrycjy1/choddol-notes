import { GET_NOTES, GET_NOTE } from "./queries";

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
