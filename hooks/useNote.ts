import { useState, useEffect, useCallback } from 'react';
import { Note, getNotes, addNote, updateNote, deleteNote } from '../utils/storage';
import { v4 as uuidv4 } from 'uuid';

export const useNotes = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  const refreshNotes = useCallback(async () => {
    const storedNotes = await getNotes();
    console.log('refreshNotes: Loaded notes', storedNotes);
    setNotes(storedNotes);
  }, []);

  useEffect(() => {
    refreshNotes();
  }, [refreshNotes]);

  const createNote = async (title: string, content: string, priority: Note['priority']) => {
    const newNote: Note = {
      id: uuidv4(),
      title: title.trim(),
      content: content.trim(),
      date: new Date().toISOString(),
      priority,
    };
    console.log('createNote: Adding new note', newNote);
    await addNote(newNote);
    await refreshNotes(); // Refresh notes after adding
  };

  const editNote = async (id: string, title: string, content: string, priority: Note['priority']) => {
    const updatedNote: Note = {
      id,
      title: title.trim(),
      content: content.trim(),
      date: new Date().toISOString(),
      priority,
    };
    console.log('editNote: Updating note', updatedNote);
    await updateNote(updatedNote);
    await refreshNotes(); // Refresh notes after updating
  };

  const removeNote = async (id: string) => {
    console.log('removeNote: Deleting note with id', id);
    await deleteNote(id);
    await refreshNotes(); // Refresh notes after deleting
  };

  return { notes, createNote, editNote, removeNote, refreshNotes };
};