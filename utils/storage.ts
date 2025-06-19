import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Note {
  id: string;
  title: string;
  content: string;
  date: string;
  priority: 'important' | 'normal' | 'penseBete';
}

const STORAGE_KEY = '@myNotes';

export const getNotes = async (): Promise<Note[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    console.log('getNotes: Retrieved JSON', jsonValue);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('Error reading notes from AsyncStorage:', e);
    return [];
  }
};

export const saveNotes = async (notes: Note[]): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(notes);
    console.log('saveNotes: Saving JSON', jsonValue);
    await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
  } catch (e) {
    console.error('Error saving notes to AsyncStorage:', e);
  }
};

export const addNote = async (note: Note): Promise<void> => {
  try {
    const notes = await getNotes();
    const updatedNotes = [...notes, note];
    console.log('addNote: Adding note', note);
    await saveNotes(updatedNotes);
  } catch (e) {
    console.error('Error adding note:', e);
  }
};

export const updateNote = async (updatedNote: Note): Promise<void> => {
  try {
    const notes = await getNotes();
    const updatedNotes = notes.map((note) =>
      note.id === updatedNote.id ? updatedNote : note
    );
    console.log('updateNote: Updating note', updatedNote);
    await saveNotes(updatedNotes);
  } catch (e) {
    console.error('Error updating note:', e);
  }
};

export const deleteNote = async (id: string): Promise<void> => {
  try {
    const notes = await getNotes();
    const updatedNotes = notes.filter((note) => note.id !== id);
    console.log('deleteNote: Deleting note with id', id);
    await saveNotes(updatedNotes);
  } catch (e) {
    console.error('Error deleting note:', e);
  }
};