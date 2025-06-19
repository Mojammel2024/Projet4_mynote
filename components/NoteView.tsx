import { View, Text, StyleSheet } from 'react-native';
import { Note } from '../utils/storage';
import { colors } from '../constants/Colors';

interface NoteViewProps {
  note: Note;
}

export const NoteView = ({ note }: NoteViewProps) => {
  return (
    <View style={[styles.container, { borderColor: colors[note.priority] }]}>
      <Text style={styles.title}>{note.title}</Text>
      <Text style={styles.date}>{new Date(note.date).toLocaleDateString()}</Text>
      <Text style={styles.content}>{note.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 8,
    borderWidth: 2,
    margin: 16,
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    color: colors.text,
  },
  date: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: colors.text,
    marginVertical: 8,
  },
  content: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 16,
    color: colors.text,
  },
});