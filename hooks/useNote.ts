import { useState, useEffect } from 'react';
import { Note, getNotes, addNote, updateNote, deleteNote } from '../utils/storage';
import { v4 as uuidv4 } from 'uuid';

export const useNotes = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const loadNotes = async () => {
      const storedNotes = await getNotes();
      setNotes(storedNotes);
    };
    loadNotes();
  }, []);

  const createNote = async (title: string, content: string, priority: Note['priority']) => {
    const newNote: Note = {
      id: uuidv4(),
      title: title.trim(),
      content: content.trim(),
      date: new Date().toISOString(),
      priority,
    };
    await addNote(newNote);
    setNotes([...notes, newNote]);
  };

  const editNote = async (id: string, title: string, content: string, priority: Note['priority']) => {
    const updatedNote: Note = {
      id,
      title: title.trim(),
      content: content.trim(),
      date: new Date().toISOString(),
      priority,
    };
    await updateNote(updatedNote);
    setNotes(notes.map((note) => (note.id === id ? updatedNote : note)));
  };

  const removeNote = async (id: string) => {
    await deleteNote(id);
    setNotes(notes.filter((note) => note.id !== id));
  };

  return { notes, createNote, editNote, removeNote };
};