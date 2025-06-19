import { View, StyleSheet } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { NoteForm } from '../components/NoteForm';
import { useNotes } from '../hooks/useNote';
import { colors } from '../constants/Colors';
import { Note } from '../utils/storage'; // Import Note interface

export default function FormScreen() {
  const { id } = useLocalSearchParams();
  const { notes, createNote, editNote } = useNotes();
  const router = useRouter();

  const note = id ? notes.find((n) => n.id === id) : undefined;

  const handleSave = (title: string, content: string, priority: Note['priority']) => {
    if (note) {
      editNote(note.id, title, content, priority);
    } else {
      createNote(title, content, priority);
    }
    router.back();
  };

  return (
    <View style={styles.container}>
      <NoteForm note={note} onSave={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});