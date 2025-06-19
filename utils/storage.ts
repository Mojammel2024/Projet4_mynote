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
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.error('Error reading notes', e);
    return [];
  }
};

export const saveNotes = async (notes: Note[]): Promise<void> => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  } catch (e) {
    console.error('Error saving notes', e);
  }
};

export const addNote = async (note: Note): Promise<void> => {
  const notes = await getNotes();
  await saveNotes([...notes, note]);
};

export const updateNote = async (updatedNote: Note): Promise<void> => {
  const notes = await getNotes();
  const updatedNotes = notes.map((note) =>
    note.id === updatedNote.id ? updatedNote : note
  );
  await saveNotes(updatedNotes);
};

export const deleteNote = async (id: string): Promise<void> => {
  const notes = await getNotes();
  const updatedNotes = notes.filter((note) => note.id !== id);
  await saveNotes(updatedNotes);
};